import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Calendar, Code, Search, ExternalLink, RefreshCw, Users, AlertCircle, Activity, Archive, Play, Eye, Hash, Layers } from 'lucide-react';
import './GitHub.css';

const GitHub = () => {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);
    
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('all');
    const [languageFilter, setLanguageFilter] = useState('all');
    const [sortBy, setSortBy] = useState('pushed');
    
    const username = '1realperry';
    const pinnedRepos = ['portfolio1', 'humble-grace', 'usa-crime-analysis'];

    const fetchGitHubData = async () => {
        setLoading(true);
        try {
            const [userRes, reposRes, eventsRes, contributionsRes] = await Promise.all([
                fetch(`https://api.github.com/users/${username}`),
                fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
                fetch(`https://api.github.com/users/${username}/events?per_page=50`),
                fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
            ]);

            if (!userRes.ok || !reposRes.ok || !eventsRes.ok) {
                if (userRes.status === 403) {
                    throw new Error('GitHub API rate limit exceeded. Please try again later.');
                }
                throw new Error('Failed to fetch GitHub data');
            }

            const userData = await userRes.json();
            const reposData = await reposRes.json();
            const eventsData = await eventsRes.json();
            let contributionsData = null;
            try {
                contributionsData = await contributionsRes.json();
            } catch (e) {
                console.log('Contributions API not available');
            }

            setUser(userData);
            setRepos(reposData);
            setEvents(eventsData);
            setLastUpdated(new Date());
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGitHubData();
        const interval = setInterval(fetchGitHubData, 60000);
        return () => clearInterval(interval);
    }, []);

    const allLanguages = useMemo(() => {
        const langs = {};
        repos.forEach(repo => {
            if (repo.language) {
                langs[repo.language] = (langs[repo.language] || 0) + 1;
            }
        });
        return Object.entries(langs).sort((a, b) => b[1] - a[1]);
    }, [repos]);

    const filteredRepos = useMemo(() => {
        let filtered = [...repos];
        
        if (searchQuery) {
            filtered = filtered.filter(repo => 
                repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                repo.description?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        
        if (languageFilter !== 'all') {
            filtered = filtered.filter(repo => repo.language === languageFilter);
        }
        
        if (activeTab === 'pinned') {
            filtered = filtered.filter(repo => pinnedRepos.includes(repo.name));
        } else if (activeTab === 'starred') {
            filtered = filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);
        } else if (activeTab === 'updated') {
            filtered = filtered.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        }
        
        if (sortBy === 'stars') {
            filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);
        } else if (sortBy === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'pushed') {
            filtered.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        }
        
        return filtered;
    }, [repos, searchQuery, languageFilter, activeTab, sortBy]);

    const featuredRepos = useMemo(() => {
        return repos.filter(repo => pinnedRepos.includes(repo.name));
    }, [repos]);

    const getLanguageStats = useMemo(() => {
        const total = repos.filter(r => r.language).length;
        return allLanguages.map(([lang, count]) => ({
            lang,
            count,
            percentage: total > 0 ? Math.round((count / total) * 100) : 0
        }));
    }, [repos, allLanguages]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now - date;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        if (hours < 1) return 'Just now';
        if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? 's' : ''} ago`;
        return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`;
    };

    const formatFileSize = (kb) => {
        if (kb < 1024) return `${kb} KB`;
        return `${(kb / 1024).toFixed(1)} MB`;
    };

    const getLanguageColor = (lang) => {
        const colors = {
            JavaScript: '#f1e05a', TypeScript: '#2b7489', Python: '#3572A5',
            HTML: '#e34c26', CSS: '#563d7c', Vue: '#41b883', React: '#61dafb',
            Java: '#b07219', C: '#555555', 'C++': '#f34b7d', 'C#': '#178600',
            Go: '#00ADD8', Rust: '#dea584', PHP: '#4F5D95', Ruby: '#701516',
            Swift: '#F05138', Kotlin: '#A97BFF', Dart: '#00B4AB', Shell: '#89e051',
            Jupyter: '#DA5B0B', SQL: '#e38c00'
        };
        return colors[lang] || '#858585';
    };

    const getEventDetails = (event) => {
        switch (event.type) {
            case 'PushEvent':
                const commits = event.payload.commits?.slice(0, 3) || [];
                return {
                    icon: <Code size={14} />,
                    text: commits.length > 0 ? (
                        <>Pushed {commits.length} commit{commits.length > 1 ? 's' : ''}: <br/><span className="commit-msg">"{commits[0].message.substring(0, 50)}..."</span></>
                    ) : (
                        <>Pushed to <strong>{event.repo.name}</strong></>
                    ),
                    color: '#10b981'
                };
            case 'PullRequestEvent':
                return {
                    icon: <GitFork size={14} />,
                    text: <>PR {event.payload.action} in <strong>{event.repo.name}</strong></>,
                    color: '#8b5cf6'
                };
            case 'CreateEvent':
                return {
                    icon: <Plus size={14} />,
                    text: <>Created {event.payload.ref_type} in <strong>{event.repo.name}</strong></>,
                    color: '#f59e0b'
                };
            case 'IssuesEvent':
                return {
                    icon: <AlertCircle size={14} />,
                    text: <>{event.payload.action} issue in <strong>{event.repo.name}</strong></>,
                    color: '#ef4444'
                };
            case 'WatchEvent':
                return {
                    icon: <Star size={14} />,
                    text: <>Starred <strong>{event.repo.name}</strong></>,
                    color: '#fbbf24'
                };
            case 'ForkEvent':
                return {
                    icon: <GitFork size={14} />,
                    text: <>Forked <strong>{event.repo.name}</strong></>,
                    color: '#06b6d4'
                };
            case 'ReleaseEvent':
                return {
                    icon: <Archive size={14} />,
                    text: <>Released {event.payload.release?.tag_name} in <strong>{event.repo.name}</strong></>,
                    color: '#22c55e'
                };
            default:
                return {
                    icon: <Activity size={14} />,
                    text: <>{event.type} in <strong>{event.repo.name}</strong></>,
                    color: '#6b7280'
                };
        }
    };

    const LoadingSkeleton = () => (
        <div className="github-skeleton">
            <div className="skeleton-stats">
                {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="skeleton-stat"></div>
                ))}
            </div>
            <div className="skeleton-featured">
                {[1,2,3].map(i => (
                    <div key={i} className="skeleton-card"></div>
                ))}
            </div>
            <div className="skeleton-grid">
                {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="skeleton-card"></div>
                ))}
            </div>
        </div>
    );

    const Plus = ({ size }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    );

    const ContributionHeatmap = ({ data }) => {
        if (!data || !data.contributions) return null;
        
        const weeks = data.contributions.slice(-20);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        return (
            <div className="contribution-heatmap">
                <h3 className="subsection-title">Contribution Activity</h3>
                <div className="heatmap-container">
                    <div className="heatmap-days">
                        {days.map((day, i) => i % 2 === 0 && <span key={day}>{day}</span>)}
                    </div>
                    <div className="heatmap-weeks">
                        {weeks.map((week, wi) => (
                            <div key={wi} className="heatmap-week">
                                {week.contributions.map((day, di) => {
                                    const level = day.contributionCount === 0 ? 0 : 
                                        day.contributionCount < 3 ? 1 : 
                                        day.contributionCount < 6 ? 2 : 
                                        day.contributionCount < 10 ? 3 : 4;
                                    return (
                                        <div 
                                            key={di} 
                                            className={`heatmap-day level-${level}`}
                                            title={`${day.contributionCount} contributions on ${day.date}`}
                                        ></div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="heatmap-legend">
                    <span>Less</span>
                    <div className="legend-box level-0"></div>
                    <div className="legend-box level-1"></div>
                    <div className="legend-box level-2"></div>
                    <div className="legend-box level-3"></div>
                    <div className="legend-box level-4"></div>
                    <span>More</span>
                </div>
            </div>
        );
    };

    if (loading && !user) {
        return (
            <section id="github" className="github-section">
                <div className="container">
                    <LoadingSkeleton />
                </div>
            </section>
        );
    }

    if (error && !user) {
        return (
            <section id="github" className="github-section">
                <div className="container">
                    <div className="github-error">
                        <AlertCircle size={48} />
                        <h3>Unable to load GitHub data</h3>
                        <p>{error}</p>
                        <button onClick={fetchGitHubData} className="retry-button">
                            <RefreshCw size={16} /> Try Again
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="github" className="github-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <div>
                        <h2 className="section-title"><span>04.</span> GitHub Activity</h2>
                        {lastUpdated && (
                            <p className="last-updated">
                                Last synced {formatDate(lastUpdated)}
                                <button onClick={fetchGitHubData} className="refresh-btn" title="Refresh">
                                    <RefreshCw size={12} />
                                </button>
                            </p>
                        )}
                    </div>
                    <a 
                        href={`https://github.com/${username}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-profile-link"
                    >
                        <Github size={20} />
                        <span>@{username}</span>
                    </a>
                </motion.div>

                <div className="github-main-layout">
                    <div className="github-content-area">
                        <motion.div
                            className="github-stats-grid"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="stat-card">
                                <BookOpen size={24} className="stat-icon" />
                                <div className="stat-info">
                                    <span className="stat-value">{user?.public_repos || 0}</span>
                                    <span className="stat-label">Repositories</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <Star size={24} className="stat-icon" />
                                <div className="stat-info">
                                    <span className="stat-value">{repos.reduce((a, r) => a + r.stargazers_count, 0)}</span>
                                    <span className="stat-label">Total Stars</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <GitFork size={24} className="stat-icon" />
                                <div className="stat-info">
                                    <span className="stat-value">{repos.reduce((a, r) => a + r.forks_count, 0)}</span>
                                    <span className="stat-label">Total Forks</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <Users size={24} className="stat-icon" />
                                <div className="stat-info">
                                    <span className="stat-value">{user?.followers || 0}</span>
                                    <span className="stat-label">Followers</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <Activity size={24} className="stat-icon" />
                                <div className="stat-info">
                                    <span className="stat-value">{events.filter(e => new Date(e.created_at) > new Date(Date.now() - 30*24*60*60*1000)).length}</span>
                                    <span className="stat-label">This Month</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <Archive size={24} className="stat-icon" />
                                <div className="stat-info">
                                    <span className="stat-value">{user?.following || 0}</span>
                                    <span className="stat-label">Following</span>
                                </div>
                            </div>
                        </motion.div>

                        <ContributionHeatmap data={null} />

                        <motion.div
                            className="repo-controls"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="search-box">
                                <Search size={16} />
                                <input 
                                    type="text" 
                                    placeholder="Search repositories..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            
                            <div className="filter-tabs">
                                {['all', 'pinned', 'starred', 'updated'].map(tab => (
                                    <button 
                                        key={tab}
                                        className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>

                            <div className="filter-selects">
                                <select value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}>
                                    <option value="all">All Languages</option>
                                    {allLanguages.map(([lang]) => (
                                        <option key={lang} value={lang}>{lang}</option>
                                    ))}
                                </select>
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                    <option value="pushed">Recently Pushed</option>
                                    <option value="stars">Most Stars</option>
                                    <option value="name">Name</option>
                                </select>
                            </div>
                        </motion.div>

                        {featuredRepos.length > 0 && activeTab === 'all' && (
                            <motion.div
                                className="featured-repos"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h3 className="subsection-title">Featured Projects</h3>
                                <div className="featured-grid">
                                    {featuredRepos.map((repo, index) => (
                                        <motion.a
                                            key={repo.id}
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="featured-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="featured-header">
                                                <Star size={16} className="featured-icon" />
                                                <h4>{repo.name}</h4>
                                                <span className={`status-badge ${repo.archived ? 'archived' : 'active'}`}>
                                                    {repo.archived ? 'Archived' : 'Active'}
                                                </span>
                                            </div>
                                            <p className="featured-description">{repo.description || 'No description'}</p>
                                            <div className="featured-meta">
                                                {repo.language && (
                                                    <span className="meta-item">
                                                        <span className="lang-dot" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                                                        {repo.language}
                                                    </span>
                                                )}
                                                <span className="meta-item"><Star size={12} /> {repo.stargazers_count}</span>
                                                <span className="meta-item"><GitFork size={12} /> {repo.forks_count}</span>
                                            </div>
                                            {repo.topics?.length > 0 && (
                                                <div className="featured-topics">
                                                    {repo.topics.slice(0, 4).map(topic => (
                                                        <span key={topic} className="topic-tag">{topic}</span>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="featured-actions">
                                                <button className="action-btn primary">
                                                    <Eye size={14} /> View Code
                                                </button>
                                                {repo.homepage && (
                                                    <button className="action-btn secondary">
                                                        <Play size={14} /> Live Demo
                                                    </button>
                                                )}
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        <motion.div
                            className="repositories-grid"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="repo-grid-header">
                                <h3 className="subsection-title">Repositories ({filteredRepos.length})</h3>
                            </div>
                            {filteredRepos.length === 0 ? (
                                <div className="empty-state">
                                    <p>No repositories found matching your filters.</p>
                                </div>
                            ) : (
                                <div className="repos-grid">
                                    {filteredRepos.slice(0, 24).map((repo, index) => (
                                        <motion.a
                                            key={repo.id}
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="repo-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.03 }}
                                            whileHover={{ y: -3 }}
                                        >
                                            <div className="repo-header">
                                                <h4 className="repo-name">
                                                    {pinnedRepos.includes(repo.name) && <Star size={12} className="pinned-star" />}
                                                    {repo.name}
                                                </h4>
                                                <span className={`status-badge-sm ${repo.archived ? 'archived' : 'active'}`}>
                                                    {repo.archived ? 'Archived' : 'Active'}
                                                </span>
                                            </div>
                                            <p className="repo-description">
                                                {repo.description || 'No description available'}
                                            </p>
                                            <div className="repo-stats">
                                                {repo.language && (
                                                    <span className="repo-language">
                                                        <span className="language-dot" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                                                        {repo.language}
                                                    </span>
                                                )}
                                                <span className="repo-stars"><Star size={12} /> {repo.stargazers_count}</span>
                                                <span className="repo-forks"><GitFork size={12} /> {repo.forks_count}</span>
                                                {repo.open_issues_count > 0 && (
                                                    <span className="repo-issues"><AlertCircle size={12} /> {repo.open_issues_count}</span>
                                                )}
                                            </div>
                                            <div className="repo-footer">
                                                {repo.topics?.length > 0 && (
                                                    <div className="repo-topics">
                                                        {repo.topics.slice(0, 2).map(topic => (
                                                            <span key={topic} className="topic-sm">{topic}</span>
                                                        ))}
                                                    </div>
                                                )}
                                                <span className="repo-updated">Updated {formatDate(repo.pushed_at)}</span>
                                            </div>
                                            {repo.homepage && (
                                                <a 
                                                    href={repo.homepage} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="repo-demo-link"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <ExternalLink size={12} /> Live Demo
                                                </a>
                                            )}
                                        </motion.a>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>

                    <aside className="github-sidebar">
                        <motion.div
                            className="profile-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <img src={user?.avatar_url} alt={username} className="profile-avatar" />
                            <h3 className="profile-name">{user?.name || username}</h3>
                            <p className="profile-bio">{user?.bio || 'Developer'}</p>
                            <div className="profile-stats">
                                <span><Users size={14} /> {user?.followers} followers</span>
                                <span>{user?.following} following</span>
                            </div>
                            {user?.location && <p className="profile-location">📍 {user.location}</p>}
                            {user?.company && <p className="profile-company">🏢 {user.company}</p>}
                            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="profile-cta">
                                <Github size={16} /> View GitHub Profile
                            </a>
                        </motion.div>

                        <motion.div
                            className="languages-section"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="subsection-title">Top Languages</h3>
                            <div className="languages-list">
                                {getLanguageStats.slice(0, 8).map(({ lang, count, percentage }) => (
                                    <motion.div
                                        key={lang}
                                        className="language-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => setLanguageFilter(languageFilter === lang ? 'all' : lang)}
                                        style={{ cursor: 'pointer', background: languageFilter === lang ? 'var(--accent-primary)' : '' }}
                                    >
                                        <div className="language-info">
                                            <span className="language-dot" style={{ backgroundColor: getLanguageColor(lang) }}></span>
                                            <span className="language-name">{lang}</span>
                                        </div>
                                        <div className="language-bar-container">
                                            <div className="language-bar" style={{ width: `${percentage}%` }}></div>
                                        </div>
                                        <span className="language-percentage">{percentage}%</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="activity-feed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h3 className="subsection-title">Recent Activity</h3>
                            <div className="events-list">
                                {events.slice(0, 8).map((event, index) => {
                                    const { icon, text, color } = getEventDetails(event);
                                    return (
                                        <motion.div
                                            key={event.id}
                                            className="event-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.03 }}
                                        >
                                            <div className="event-icon" style={{ background: color }}>
                                                {icon}
                                            </div>
                                            <div className="event-details">
                                                <p className="event-text">{text}</p>
                                                <span className="event-date">{formatDate(event.created_at)}</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

const BookOpen = ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

export default GitHub;

import { MessageSquare, Eye, UserPlus, TrendingUp, Zap, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';
import { analytics, comments, campaigns } from '../data/mockData';
import './Dashboard.css';

export default function Dashboard() {
  const recentComments = comments.filter(c => c.status === 'posted').slice(0, 4);
  const activeCampaigns = campaigns.filter(c => c.status === 'active');
  const pendingCount = comments.filter(c => c.status === 'pending').length;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p className="page-sub">Your engagement autopilot at a glance</p>
        </div>
        <div className="header-actions">
          <span className="live-indicator">
            <span className="live-dot" />
            Autopilot Active
          </span>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          icon={<MessageSquare size={20} />}
          label="Comments Today"
          value="72"
          change="+18% vs yesterday"
          changeType="up"
        />
        <StatCard
          icon={<Eye size={20} />}
          label="Profile Views"
          value={analytics.profileViewsIncrease.toLocaleString()}
          change="+24% this week"
          changeType="up"
        />
        <StatCard
          icon={<UserPlus size={20} />}
          label="New Connections"
          value={analytics.connectionsGained}
          change="+12% this week"
          changeType="up"
        />
        <StatCard
          icon={<TrendingUp size={20} />}
          label="Response Rate"
          value={`${analytics.responseRate}%`}
          change="+3.2% vs last week"
          changeType="up"
        />
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section">
          <div className="section-header">
            <h2>
              <Clock size={18} />
              Pending Approval
            </h2>
            <span className="badge warn">{pendingCount} comments</span>
          </div>
          <div className="pending-list">
            {comments.filter(c => c.status === 'pending').map(comment => (
              <div key={comment.id} className="pending-item">
                <div className="pending-top">
                  <img src={comment.postAuthorAvatar} alt="" className="pending-avatar" />
                  <div className="pending-meta">
                    <span className="pending-author">{comment.postAuthor}</span>
                    <span className={`platform-tag ${comment.platform}`}>
                      {comment.platform === 'linkedin' ? 'LinkedIn' : 'Twitter/X'}
                    </span>
                  </div>
                </div>
                <div className="pending-post">"{comment.postSnippet.slice(0, 80)}..."</div>
                <div className="pending-comment">{comment.generatedComment}</div>
                <div className="pending-actions">
                  <button className="btn-sm btn-approve">Approve</button>
                  <button className="btn-sm btn-reject">Reject</button>
                  <button className="btn-sm btn-edit">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-right">
          <div className="dashboard-section">
            <div className="section-header">
              <h2>
                <Zap size={18} />
                Active Campaigns
              </h2>
              <span className="badge">{activeCampaigns.length} running</span>
            </div>
            <div className="campaign-list-mini">
              {activeCampaigns.map(campaign => (
                <div key={campaign.id} className="campaign-mini">
                  <div className="campaign-mini-top">
                    <span className="campaign-mini-name">{campaign.name}</span>
                    <span className={`campaign-type-tag ${campaign.type}`}>
                      {campaign.type === 'keyword' ? '🔑 Keyword' : '👤 Creator'}
                    </span>
                  </div>
                  <div className="campaign-mini-stats">
                    <span>{campaign.commentsToday} today</span>
                    <span className="dot">·</span>
                    <span>{campaign.leadsGenerated} leads</span>
                  </div>
                  <div className="campaign-mini-bar">
                    <div
                      className="campaign-mini-fill"
                      style={{ width: `${Math.min((campaign.commentsToday / 50) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-section">
            <div className="section-header">
              <h2>
                <MessageSquare size={18} />
                Recent Activity
              </h2>
            </div>
            <div className="activity-list">
              {recentComments.map(comment => (
                <div key={comment.id} className="activity-item">
                  <div className="activity-dot posted" />
                  <div className="activity-content">
                    <span>
                      Commented on <strong>{comment.postAuthor}</strong>'s post
                    </span>
                    <span className="activity-time">
                      {new Date(comment.postedAt!).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

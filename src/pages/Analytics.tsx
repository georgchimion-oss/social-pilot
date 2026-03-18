import { MessageSquare, Eye, UserPlus, Percent, TrendingUp } from 'lucide-react';
import StatCard from '../components/StatCard';
import { analytics } from '../data/mockData';
import './Analytics.css';

export default function Analytics() {
  const maxComments = Math.max(...analytics.dailyStats.map(d => d.comments));

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Analytics</h1>
          <p className="page-sub">Track your engagement performance and growth</p>
        </div>
        <div className="header-actions">
          <div className="date-range">
            <button className="date-btn">7d</button>
            <button className="date-btn active">14d</button>
            <button className="date-btn">30d</button>
            <button className="date-btn">90d</button>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          icon={<MessageSquare size={20} />}
          label="Total Comments"
          value={analytics.totalComments.toLocaleString()}
          change="+342 this period"
          changeType="up"
        />
        <StatCard
          icon={<Eye size={20} />}
          label="Impressions"
          value={`${(analytics.totalImpressions / 1000).toFixed(0)}K`}
          change="+18% vs prior"
          changeType="up"
        />
        <StatCard
          icon={<UserPlus size={20} />}
          label="Connections Gained"
          value={analytics.connectionsGained}
          change="+34 this period"
          changeType="up"
        />
        <StatCard
          icon={<Percent size={20} />}
          label="Response Rate"
          value={`${analytics.responseRate}%`}
          change="+3.2% vs prior"
          changeType="up"
        />
      </div>

      <div className="analytics-grid">
        <div className="chart-section">
          <div className="section-header">
            <h2><TrendingUp size={18} /> Comments Over Time</h2>
          </div>
          <div className="chart-container">
            <div className="bar-chart">
              {analytics.dailyStats.map(day => (
                <div key={day.date} className="bar-col">
                  <div className="bar-wrapper">
                    <div
                      className="bar"
                      style={{ height: `${(day.comments / maxComments) * 100}%` }}
                    >
                      <span className="bar-tooltip">{day.comments}</span>
                    </div>
                  </div>
                  <span className="bar-label">{day.date.replace('Mar ', '')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="insights-section">
          <div className="section-header">
            <h2>Key Insights</h2>
          </div>
          <div className="insights-list">
            <div className="insight-card">
              <div className="insight-icon">🔑</div>
              <div>
                <div className="insight-title">Top Keyword</div>
                <div className="insight-value">{analytics.topPerformingKeyword}</div>
                <div className="insight-detail">Generates 42% of all engagement</div>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-icon">⚡</div>
              <div>
                <div className="insight-title">Best Posting Time</div>
                <div className="insight-value">9:00 AM - 11:00 AM</div>
                <div className="insight-detail">EST — highest response rate window</div>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-icon">🎯</div>
              <div>
                <div className="insight-title">Top Tone</div>
                <div className="insight-value">Professional & Curious</div>
                <div className="insight-detail">3.1x more replies than other tones</div>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-icon">📈</div>
              <div>
                <div className="insight-title">Profile View Growth</div>
                <div className="insight-value">+312% this month</div>
                <div className="insight-detail">Up from +89% last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="performance-table-section">
        <div className="section-header">
          <h2>Daily Performance</h2>
        </div>
        <div className="perf-table">
          <div className="perf-header">
            <span>Date</span>
            <span>Comments</span>
            <span>Impressions</span>
            <span>Profile Views</span>
            <span>Connections</span>
          </div>
          {analytics.dailyStats.slice().reverse().map(day => (
            <div key={day.date} className="perf-row">
              <span className="perf-date">{day.date}</span>
              <span className="perf-num">{day.comments}</span>
              <span className="perf-num">{day.impressions.toLocaleString()}</span>
              <span className="perf-num">{day.profileViews}</span>
              <span className="perf-num accent">{day.connections}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

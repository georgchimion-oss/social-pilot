import { Shield, Globe, MessageCircle, Bell, User } from 'lucide-react';
import './Settings.css';

export default function Settings() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p className="page-sub">Configure your autopilot behavior and preferences</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-section">
          <div className="settings-section-header">
            <MessageCircle size={18} />
            <h2>Comment Preferences</h2>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Daily comment limit</span>
              <span className="setting-desc">Maximum comments posted per day across all campaigns</span>
            </div>
            <div className="setting-control">
              <input type="number" className="setting-input" defaultValue={150} />
            </div>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Include emojis</span>
              <span className="setting-desc">Allow AI to use emojis in generated comments</span>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider" />
            </label>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Include hashtags</span>
              <span className="setting-desc">Add relevant hashtags to comments</span>
            </div>
            <label className="toggle">
              <input type="checkbox" />
              <span className="toggle-slider" />
            </label>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Manual approval required</span>
              <span className="setting-desc">Review comments before they are posted</span>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider" />
            </label>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Default tone</span>
              <span className="setting-desc">The default voice for AI-generated comments</span>
            </div>
            <select className="setting-select">
              <option>Professional & Curious</option>
              <option>Thought Leader</option>
              <option>Friendly & Community</option>
              <option>Authentic Builder</option>
              <option>Supportive & Encouraging</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-section-header">
            <Globe size={18} />
            <h2>Targeting & Timing</h2>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Comment within</span>
              <span className="setting-desc">Post comments within X minutes of a post's publication</span>
            </div>
            <select className="setting-select">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
            </select>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Active hours</span>
              <span className="setting-desc">Only post comments during these hours (local time)</span>
            </div>
            <div className="time-range">
              <input type="time" className="setting-input time" defaultValue="09:00" />
              <span className="time-sep">to</span>
              <input type="time" className="setting-input time" defaultValue="18:00" />
            </div>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Target language</span>
              <span className="setting-desc">Match the language of the original post</span>
            </div>
            <select className="setting-select">
              <option>Auto-detect (match post)</option>
              <option>English only</option>
              <option>Spanish</option>
              <option>Portuguese</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-section-header">
            <Shield size={18} />
            <h2>Safety & Filtering</h2>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Skip sensitive content</span>
              <span className="setting-desc">Avoid commenting on political, religious, or tragic content</span>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider" />
            </label>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Rate limiting</span>
              <span className="setting-desc">Enforce platform-safe commenting rates to prevent account restrictions</span>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider" />
            </label>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Block list</span>
              <span className="setting-desc">Never comment on posts from these accounts</span>
            </div>
            <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: 12 }}>Manage</button>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-section-header">
            <Bell size={18} />
            <h2>Notifications</h2>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Email digest</span>
              <span className="setting-desc">Receive daily performance summary via email</span>
            </div>
            <select className="setting-select">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Never</option>
            </select>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Alert on replies</span>
              <span className="setting-desc">Get notified when someone replies to your auto-comments</span>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider" />
            </label>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-section-header">
            <User size={18} />
            <h2>Connected Accounts</h2>
          </div>
          <div className="connected-accounts">
            <div className="connected-account">
              <div className="account-icon linkedin-icon">in</div>
              <div className="account-info">
                <span className="account-name">Georg Chimion</span>
                <span className="account-handle">linkedin.com/in/georgchimion</span>
              </div>
              <span className="account-status connected">Connected</span>
            </div>
            <div className="connected-account">
              <div className="account-icon twitter-icon">𝕏</div>
              <div className="account-info">
                <span className="account-name">@georgchimion</span>
                <span className="account-handle">twitter.com/georgchimion</span>
              </div>
              <span className="account-status connected">Connected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

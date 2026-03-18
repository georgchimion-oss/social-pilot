import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  BarChart3,
  Settings,
  Zap,
  Linkedin,
  Twitter,
} from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Zap size={20} />
          <span>SocialPilot</span>
        </div>
        <div className="sidebar-plan">Pro Plan</div>
      </div>

      <div className="sidebar-platforms">
        <div className="platform-badge platform-linkedin">
          <Linkedin size={14} />
          <span>LinkedIn</span>
          <span className="platform-status active" />
        </div>
        <div className="platform-badge platform-twitter">
          <Twitter size={14} />
          <span>Twitter/X</span>
          <span className="platform-status active" />
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Main</div>
        <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/campaigns" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Megaphone size={18} />
          <span>Campaigns</span>
          <span className="nav-badge">5</span>
        </NavLink>
        <NavLink to="/comments" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <MessageSquare size={18} />
          <span>Comment Queue</span>
          <span className="nav-badge warn">3</span>
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BarChart3 size={18} />
          <span>Analytics</span>
        </NavLink>

        <div className="nav-section-label" style={{ marginTop: 24 }}>System</div>
        <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-usage">
          <div className="usage-label">
            <span>Daily comments</span>
            <span>72 / 150</span>
          </div>
          <div className="usage-bar">
            <div className="usage-fill" style={{ width: '48%' }} />
          </div>
        </div>
        <div className="sidebar-user">
          <div className="user-avatar">GC</div>
          <div className="user-info">
            <div className="user-name">Georg Chimion</div>
            <div className="user-email">georg@georg.miami</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

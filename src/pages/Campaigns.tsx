import { Plus, Search, Pause, Play, Pencil, Trash2 } from 'lucide-react';
import { campaigns } from '../data/mockData';
import './Campaigns.css';

export default function Campaigns() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Campaigns</h1>
          <p className="page-sub">Manage your keyword and creator targeting campaigns</p>
        </div>
        <button className="btn-primary">
          <Plus size={16} /> New Campaign
        </button>
      </div>

      <div className="campaigns-toolbar">
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search campaigns..." />
        </div>
        <div className="filter-tabs">
          <button className="filter-tab active">All ({campaigns.length})</button>
          <button className="filter-tab">Active ({campaigns.filter(c => c.status === 'active').length})</button>
          <button className="filter-tab">Paused ({campaigns.filter(c => c.status === 'paused').length})</button>
          <button className="filter-tab">Draft ({campaigns.filter(c => c.status === 'draft').length})</button>
        </div>
      </div>

      <div className="campaigns-table">
        <div className="table-header">
          <span className="col-name">Campaign</span>
          <span className="col-type">Type</span>
          <span className="col-targets">Targets</span>
          <span className="col-today">Today</span>
          <span className="col-total">Total</span>
          <span className="col-leads">Leads</span>
          <span className="col-status">Status</span>
          <span className="col-actions">Actions</span>
        </div>

        {campaigns.map(campaign => (
          <div key={campaign.id} className="table-row">
            <div className="col-name">
              <span className="campaign-name">{campaign.name}</span>
              <span className="campaign-date">Created {campaign.createdAt}</span>
            </div>
            <div className="col-type">
              <span className={`campaign-type-tag ${campaign.type}`}>
                {campaign.type === 'keyword' ? '🔑 Keyword' : '👤 Creator'}
              </span>
            </div>
            <div className="col-targets">
              <div className="targets-list">
                {campaign.targets.slice(0, 2).map(t => (
                  <span key={t} className="target-pill">{t}</span>
                ))}
                {campaign.targets.length > 2 && (
                  <span className="target-more">+{campaign.targets.length - 2}</span>
                )}
              </div>
            </div>
            <div className="col-today">
              <span className="number">{campaign.commentsToday}</span>
            </div>
            <div className="col-total">
              <span className="number">{campaign.commentsTotal.toLocaleString()}</span>
            </div>
            <div className="col-leads">
              <span className="number leads">{campaign.leadsGenerated}</span>
            </div>
            <div className="col-status">
              <span className={`status-badge ${campaign.status}`}>
                {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
              </span>
            </div>
            <div className="col-actions">
              <button className="icon-btn" title={campaign.status === 'active' ? 'Pause' : 'Resume'}>
                {campaign.status === 'active' ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <button className="icon-btn" title="Edit">
                <Pencil size={14} />
              </button>
              <button className="icon-btn danger" title="Delete">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

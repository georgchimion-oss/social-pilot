import { Check, X, Pencil, Filter } from 'lucide-react';
import { comments } from '../data/mockData';
import './Comments.css';

export default function Comments() {
  const pending = comments.filter(c => c.status === 'pending');
  const approved = comments.filter(c => c.status === 'approved');
  const posted = comments.filter(c => c.status === 'posted');
  const rejected = comments.filter(c => c.status === 'rejected');

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Comment Queue</h1>
          <p className="page-sub">Review, approve, and manage AI-generated comments</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary"><Filter size={14} /> Filter</button>
          <button className="btn-primary" style={{ background: 'var(--green)' }}>
            <Check size={14} /> Approve All ({pending.length})
          </button>
        </div>
      </div>

      <div className="queue-stats">
        <div className="queue-stat">
          <span className="queue-stat-num pending">{pending.length}</span>
          <span className="queue-stat-label">Pending</span>
        </div>
        <div className="queue-stat">
          <span className="queue-stat-num approved">{approved.length}</span>
          <span className="queue-stat-label">Approved</span>
        </div>
        <div className="queue-stat">
          <span className="queue-stat-num posted">{posted.length}</span>
          <span className="queue-stat-label">Posted</span>
        </div>
        <div className="queue-stat">
          <span className="queue-stat-num rejected">{rejected.length}</span>
          <span className="queue-stat-label">Rejected</span>
        </div>
      </div>

      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className={`comment-card ${comment.status}`}>
            <div className="comment-header">
              <div className="comment-author-section">
                <img src={comment.postAuthorAvatar} alt="" className="comment-avatar" />
                <div>
                  <div className="comment-author">{comment.postAuthor}</div>
                  <div className="comment-campaign">{comment.campaignName}</div>
                </div>
              </div>
              <div className="comment-tags">
                <span className={`platform-tag ${comment.platform}`}>
                  {comment.platform === 'linkedin' ? 'LinkedIn' : 'Twitter/X'}
                </span>
                <span className={`status-pill ${comment.status}`}>
                  {comment.status.charAt(0).toUpperCase() + comment.status.slice(1)}
                </span>
                <span className="tone-tag">{comment.tone}</span>
              </div>
            </div>

            <div className="comment-body">
              <div className="original-post">
                <div className="original-label">Original post</div>
                <p>{comment.postSnippet}</p>
              </div>
              <div className="generated-comment">
                <div className="generated-label">Generated comment</div>
                <p>{comment.generatedComment}</p>
              </div>
            </div>

            <div className="comment-footer">
              <span className="comment-time">
                {new Date(comment.createdAt).toLocaleString([], {
                  month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                })}
                {comment.postedAt && (
                  <> · Posted {new Date(comment.postedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</>
                )}
              </span>
              {comment.status === 'pending' && (
                <div className="comment-actions">
                  <button className="btn-sm btn-approve"><Check size={12} /> Approve</button>
                  <button className="btn-sm btn-edit"><Pencil size={12} /> Edit</button>
                  <button className="btn-sm btn-reject"><X size={12} /> Reject</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

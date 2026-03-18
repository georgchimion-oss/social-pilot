import type { ReactNode } from 'react';
import './StatCard.css';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'up' | 'down' | 'neutral';
  icon: ReactNode;
}

export default function StatCard({ label, value, change, changeType = 'up', icon }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
        {change && (
          <div className={`stat-change ${changeType}`}>
            {changeType === 'up' ? '↑' : changeType === 'down' ? '↓' : '→'} {change}
          </div>
        )}
      </div>
    </div>
  );
}

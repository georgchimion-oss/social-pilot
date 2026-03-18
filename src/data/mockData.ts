export interface Campaign {
  id: string;
  name: string;
  type: 'keyword' | 'creator';
  status: 'active' | 'paused' | 'draft';
  targets: string[];
  commentsToday: number;
  commentsTotal: number;
  leadsGenerated: number;
  createdAt: string;
}

export interface Comment {
  id: string;
  campaignId: string;
  campaignName: string;
  platform: 'linkedin' | 'twitter';
  status: 'pending' | 'approved' | 'posted' | 'rejected';
  postAuthor: string;
  postAuthorAvatar: string;
  postSnippet: string;
  generatedComment: string;
  tone: string;
  createdAt: string;
  postedAt?: string;
}

export interface DailyStats {
  date: string;
  comments: number;
  impressions: number;
  profileViews: number;
  connections: number;
}

export interface Analytics {
  totalComments: number;
  totalImpressions: number;
  profileViewsIncrease: number;
  connectionsGained: number;
  responseRate: number;
  topPerformingKeyword: string;
  dailyStats: DailyStats[];
}

// --- Mock Campaigns ---

export const campaigns: Campaign[] = [
  {
    id: 'c1',
    name: 'AI & Automation Leaders',
    type: 'keyword',
    status: 'active',
    targets: ['AI automation', 'enterprise AI', 'Claude API'],
    commentsToday: 38,
    commentsTotal: 1247,
    leadsGenerated: 89,
    createdAt: '2026-02-15',
  },
  {
    id: 'c2',
    name: 'Miami Tech Scene',
    type: 'keyword',
    status: 'active',
    targets: ['Miami tech', 'South Florida startups', 'Miami AI'],
    commentsToday: 22,
    commentsTotal: 634,
    leadsGenerated: 45,
    createdAt: '2026-02-20',
  },
  {
    id: 'c3',
    name: 'Top AI Influencers',
    type: 'creator',
    status: 'active',
    targets: ['@AndrewNg', '@sama', '@emaborello', '@svpino', '@ai_jasons'],
    commentsToday: 12,
    commentsTotal: 456,
    leadsGenerated: 67,
    createdAt: '2026-03-01',
  },
  {
    id: 'c4',
    name: 'PwC & Consulting',
    type: 'keyword',
    status: 'paused',
    targets: ['PwC digital', 'consulting AI', 'Big Four innovation'],
    commentsToday: 0,
    commentsTotal: 312,
    leadsGenerated: 28,
    createdAt: '2026-03-05',
  },
  {
    id: 'c5',
    name: 'Product Builders',
    type: 'creator',
    status: 'draft',
    targets: ['@levelsio', '@marclouv', '@dannypostmaa'],
    commentsToday: 0,
    commentsTotal: 0,
    leadsGenerated: 0,
    createdAt: '2026-03-18',
  },
];

// --- Mock Comments ---

const avatars = [
  'https://api.dicebear.com/7.x/notionists/svg?seed=Sarah',
  'https://api.dicebear.com/7.x/notionists/svg?seed=Mike',
  'https://api.dicebear.com/7.x/notionists/svg?seed=Lisa',
  'https://api.dicebear.com/7.x/notionists/svg?seed=James',
  'https://api.dicebear.com/7.x/notionists/svg?seed=Anna',
  'https://api.dicebear.com/7.x/notionists/svg?seed=Tom',
  'https://api.dicebear.com/7.x/notionists/svg?seed=Nina',
  'https://api.dicebear.com/7.x/notionists/svg?seed=Carlos',
];

export const comments: Comment[] = [
  {
    id: 'cm1',
    campaignId: 'c1',
    campaignName: 'AI & Automation Leaders',
    platform: 'linkedin',
    status: 'pending',
    postAuthor: 'Sarah Chen',
    postAuthorAvatar: avatars[0],
    postSnippet: 'Just shipped our AI automation pipeline that reduced manual review time by 73%. The key insight was...',
    generatedComment: 'This is a great case study, Sarah. The 73% reduction is impressive — we saw similar gains when we automated document processing with Claude. Curious: did you find the biggest ROI came from the initial automation or from the feedback loop improvements over time?',
    tone: 'Professional & Curious',
    createdAt: '2026-03-18T09:15:00',
  },
  {
    id: 'cm2',
    campaignId: 'c1',
    campaignName: 'AI & Automation Leaders',
    platform: 'linkedin',
    status: 'pending',
    postAuthor: 'Mike Rodriguez',
    postAuthorAvatar: avatars[1],
    postSnippet: 'Hot take: Most enterprise AI projects fail not because of the tech, but because of change management...',
    generatedComment: 'Spot on, Mike. In my experience at PwC, the technical build is maybe 30% of the effort — the other 70% is getting stakeholders aligned and users trained. The best AI tool is useless if nobody trusts it enough to use it.',
    tone: 'Thought Leader',
    createdAt: '2026-03-18T09:22:00',
  },
  {
    id: 'cm3',
    campaignId: 'c2',
    campaignName: 'Miami Tech Scene',
    platform: 'linkedin',
    status: 'pending',
    postAuthor: 'Lisa Park',
    postAuthorAvatar: avatars[2],
    postSnippet: 'Miami is becoming a serious AI hub. Three new AI startups launched in Wynwood this month alone...',
    generatedComment: 'Love seeing the Miami AI ecosystem grow! I\'ve been organizing AI community events here and the energy is incredible. Would be great to connect — always looking to collaborate with fellow Miami builders.',
    tone: 'Friendly & Community',
    createdAt: '2026-03-18T09:30:00',
  },
  {
    id: 'cm4',
    campaignId: 'c3',
    campaignName: 'Top AI Influencers',
    platform: 'twitter',
    status: 'approved',
    postAuthor: 'Santiago Valdarrama',
    postAuthorAvatar: avatars[3],
    postSnippet: 'The best way to learn AI in 2026: Build something real. Ship it. Get feedback. Repeat.',
    generatedComment: 'Couldn\'t agree more. I built an AI finance assistant from scratch — learned more in 2 months of shipping than in a year of courses. The feedback loop from real users is irreplaceable.',
    tone: 'Authentic Builder',
    createdAt: '2026-03-18T08:45:00',
  },
  {
    id: 'cm5',
    campaignId: 'c1',
    campaignName: 'AI & Automation Leaders',
    platform: 'linkedin',
    status: 'posted',
    postAuthor: 'Anna Kowalski',
    postAuthorAvatar: avatars[4],
    postSnippet: 'We just integrated Claude into our compliance workflow and the results are staggering...',
    generatedComment: 'Incredible results, Anna. Claude\'s contextual understanding makes it perfect for compliance use cases. We\'ve been exploring similar patterns for document intelligence — the accuracy improvements over traditional NLP are night and day.',
    tone: 'Professional & Curious',
    createdAt: '2026-03-18T07:00:00',
    postedAt: '2026-03-18T07:15:00',
  },
  {
    id: 'cm6',
    campaignId: 'c2',
    campaignName: 'Miami Tech Scene',
    platform: 'linkedin',
    status: 'posted',
    postAuthor: 'Tom Nguyen',
    postAuthorAvatar: avatars[5],
    postSnippet: 'South Florida is hiring more AI engineers than ever. Here are the top companies to watch in 2026...',
    generatedComment: 'Great roundup, Tom. I\'d add the consulting firms expanding their AI practices here — PwC, Deloitte, and others are building serious AI teams in Miami. The talent pool is deeper than people realize.',
    tone: 'Thought Leader',
    createdAt: '2026-03-17T14:00:00',
    postedAt: '2026-03-17T14:12:00',
  },
  {
    id: 'cm7',
    campaignId: 'c3',
    campaignName: 'Top AI Influencers',
    platform: 'twitter',
    status: 'posted',
    postAuthor: 'Emanuele Aborello',
    postAuthorAvatar: avatars[6],
    postSnippet: 'Stop building AI wrappers. Start building AI products that solve real problems.',
    generatedComment: 'This is the difference between a demo and a product. The hard part isn\'t the AI — it\'s the UX, the edge cases, the data pipeline, and making it work reliably at scale.',
    tone: 'Authentic Builder',
    createdAt: '2026-03-17T11:00:00',
    postedAt: '2026-03-17T11:08:00',
  },
  {
    id: 'cm8',
    campaignId: 'c1',
    campaignName: 'AI & Automation Leaders',
    platform: 'linkedin',
    status: 'rejected',
    postAuthor: 'Carlos Mendez',
    postAuthorAvatar: avatars[7],
    postSnippet: 'Unpopular opinion: AI will replace 80% of software engineers within 5 years...',
    generatedComment: 'Interesting perspective, Carlos. I think the reality is more nuanced — AI will transform what engineers do, not eliminate them. The engineers who thrive will be the ones who learn to leverage AI as a multiplier.',
    tone: 'Thought Leader',
    createdAt: '2026-03-17T16:00:00',
  },
];

// --- Mock Analytics ---

export const analytics: Analytics = {
  totalComments: 2649,
  totalImpressions: 847200,
  profileViewsIncrease: 312,
  connectionsGained: 189,
  responseRate: 23.4,
  topPerformingKeyword: 'AI automation',
  dailyStats: [
    { date: 'Mar 4', comments: 42, impressions: 18400, profileViews: 23, connections: 8 },
    { date: 'Mar 5', comments: 56, impressions: 24100, profileViews: 31, connections: 12 },
    { date: 'Mar 6', comments: 38, impressions: 16800, profileViews: 19, connections: 6 },
    { date: 'Mar 7', comments: 61, impressions: 29300, profileViews: 38, connections: 15 },
    { date: 'Mar 8', comments: 49, impressions: 21700, profileViews: 27, connections: 11 },
    { date: 'Mar 9', comments: 33, impressions: 14200, profileViews: 16, connections: 5 },
    { date: 'Mar 10', comments: 55, impressions: 25600, profileViews: 34, connections: 14 },
    { date: 'Mar 11', comments: 67, impressions: 31200, profileViews: 42, connections: 18 },
    { date: 'Mar 12', comments: 44, impressions: 19800, profileViews: 25, connections: 9 },
    { date: 'Mar 13', comments: 58, impressions: 27400, profileViews: 36, connections: 16 },
    { date: 'Mar 14', comments: 72, impressions: 34100, profileViews: 45, connections: 21 },
    { date: 'Mar 15', comments: 51, impressions: 22900, profileViews: 29, connections: 10 },
    { date: 'Mar 16', comments: 63, impressions: 28700, profileViews: 39, connections: 17 },
    { date: 'Mar 17', comments: 48, impressions: 20500, profileViews: 22, connections: 7 },
  ],
};

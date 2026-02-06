/**
 * Mock Data Provider - Sample Data for Demo
 * This file provides sample data when running without a backend
 */

export const MOCK_USER = {
  id: '1',
  email: 'demo@maclarens.com',
  name: 'Demo User',
  role: 'admin' as const,
  company_id: 'comp-1',
  cluster_id: 'cluster-1',
  is_active: true,
};

export const MOCK_COMPANIES = [
  { id: 'comp-1', name: 'McLarens Retail Ltd', cluster_id: 'cluster-1', is_active: true },
  { id: 'comp-2', name: 'McLarens Manufacturing', cluster_id: 'cluster-1', is_active: true },
  { id: 'comp-3', name: 'McLarens Services', cluster_id: 'cluster-2', is_active: true },
];

export const MOCK_CLUSTERS = [
  { id: 'cluster-1', name: 'Eastern Region', companies_count: 2 },
  { id: 'cluster-2', name: 'Western Region', companies_count: 1 },
];

export const MOCK_FINANCIAL_REPORTS = [
  {
    id: 'report-1',
    company_id: 'comp-1',
    company_name: 'McLarens Retail Ltd',
    period: '2024-Q1',
    revenue: 1250000,
    expenses: 950000,
    profit: 300000,
    status: 'approved',
    submitted_at: '2024-03-31',
    approved_at: '2024-04-05',
  },
  {
    id: 'report-2',
    company_id: 'comp-1',
    period: '2024-Q2',
    revenue: 1380000,
    expenses: 1020000,
    profit: 360000,
    status: 'approved',
    submitted_at: '2024-06-30',
    approved_at: '2024-07-03',
  },
  {
    id: 'report-3',
    company_id: 'comp-2',
    period: '2024-Q1',
    revenue: 890000,
    expenses: 720000,
    profit: 170000,
    status: 'approved',
    submitted_at: '2024-03-31',
    approved_at: '2024-04-06',
  },
  {
    id: 'report-4',
    company_id: 'comp-1',
    period: '2024-Q3',
    revenue: 1420000,
    expenses: 1080000,
    profit: 340000,
    status: 'pending',
    submitted_at: '2024-09-30',
    approved_at: null,
  },
];

export const MOCK_DASHBOARD_STATS = {
  totalRevenue: 4940000,
  totalExpenses: 3770000,
  totalProfit: 1170000,
  reportsCount: 4,
  pendingReports: 1,
  approvedReports: 3,
  companiesCount: 3,
  activeUsers: 12,
};

export const MOCK_ANALYTICS_DATA = {
  monthlyRevenue: [
    { month: 'Jan', revenue: 420000, expenses: 310000, profit: 110000 },
    { month: 'Feb', revenue: 415000, expenses: 320000, profit: 95000 },
    { month: 'Mar', revenue: 415000, expenses: 320000, profit: 95000 },
    { month: 'Apr', revenue: 460000, expenses: 340000, profit: 120000 },
    { month: 'May', revenue: 455000, expenses: 350000, profit: 105000 },
    { month: 'Jun', revenue: 465000, expenses: 330000, profit: 135000 },
    { month: 'Jul', revenue: 475000, expenses: 360000, profit: 115000 },
    { month: 'Aug', revenue: 470000, expenses: 355000, profit: 115000 },
    { month: 'Sep', revenue: 475000, expenses: 365000, profit: 110000 },
  ],
  companyPerformance: [
    { name: 'McLarens Retail Ltd', revenue: 4050000, profit: 1000000 },
    { name: 'McLarens Manufacturing', revenue: 1850000, profit: 320000 },
    { name: 'McLarens Services', revenue: 1040000, profit: 180000 },
  ],
  topPerformers: [
    { id: '1', name: 'McLarens Retail Ltd', metric: 'Revenue Growth', value: '+12.5%' },
    { id: '2', name: 'McLarens Manufacturing', metric: 'Profit Margin', value: '17.3%' },
    { id: '3', name: 'McLarens Services', metric: 'Cost Efficiency', value: '+8.2%' },
  ],
};

export const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@maclarens.com',
    name: 'Admin User',
    role: 'admin',
    company_id: null,
    is_active: true,
  },
  {
    id: '2',
    email: 'director@maclarens.com',
    name: 'Finance Director',
    role: 'company_director',
    company_id: 'comp-1',
    is_active: true,
  },
  {
    id: '3',
    email: 'officer@maclarens.com',
    name: 'Finance Officer',
    role: 'data_officer',
    company_id: 'comp-1',
    is_active: true,
  },
];

export const MOCK_NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'New Report Submitted',
    message: 'McLarens Retail Ltd submitted Q3 2024 report',
    type: 'info',
    read: false,
    created_at: '2024-09-30T10:00:00Z',
  },
  {
    id: 'notif-2',
    title: 'Report Approved',
    message: 'Your Q2 2024 report has been approved',
    type: 'success',
    read: false,
    created_at: '2024-07-03T14:30:00Z',
  },
  {
    id: 'notif-3',
    title: 'System Maintenance',
    message: 'Scheduled maintenance on Saturday 2AM-4AM',
    type: 'warning',
    read: true,
    created_at: '2024-06-15T09:00:00Z',
  },
];

// Mock GraphQL responses
export function getMockGraphQLResponse(query: string, variables?: any) {
  // Dashboard queries
  if (query.includes('DASHBOARD_STATS')) {
    return { dashboardStats: MOCK_DASHBOARD_STATS };
  }
  
  if (query.includes('FINANCIAL_REPORTS')) {
    return { financialReports: MOCK_FINANCIAL_REPORTS };
  }
  
  if (query.includes('COMPANIES_QUERY')) {
    return { companies: MOCK_COMPANIES };
  }
  
  if (query.includes('CLUSTERS_QUERY')) {
    return { clusters: MOCK_CLUSTERS };
  }
  
  if (query.includes('USERS_QUERY')) {
    return { users: MOCK_USERS };
  }
  
  if (query.includes('TOP_PERFORMERS')) {
    return { topPerformers: MOCK_ANALYTICS_DATA.topPerformers };
  }
  
  if (query.includes('ANALYTICS')) {
    return { analytics: MOCK_ANALYTICS_DATA };
  }
  
  if (query.includes('NOTIFICATIONS')) {
    return { notifications: MOCK_NOTIFICATIONS };
  }
  
  // Default response
  return { data: [] };
}

// Mock API responses
export function getMockAPIResponse(endpoint: string, data?: any) {
  // Auth endpoints
  if (endpoint.includes('/auth/login')) {
    return {
      success: true,
      user: MOCK_USER,
      token: 'mock-token-' + Date.now(),
    };
  }
  
  if (endpoint.includes('/auth/me')) {
    return { user: MOCK_USER };
  }
  
  // Reports endpoints
  if (endpoint.includes('/reports')) {
    if (endpoint.includes('/submit')) {
      return {
        success: true,
        report: { ...data, id: 'report-' + Date.now(), status: 'pending' },
      };
    }
    return { reports: MOCK_FINANCIAL_REPORTS };
  }
  
  // Companies
  if (endpoint.includes('/companies')) {
    return { companies: MOCK_COMPANIES };
  }
  
  // Users
  if (endpoint.includes('/users')) {
    return { users: MOCK_USERS };
  }
  
  // Dashboard
  if (endpoint.includes('/dashboard')) {
    return MOCK_DASHBOARD_STATS;
  }
  
  // Analytics
  if (endpoint.includes('/analytics')) {
    return MOCK_ANALYTICS_DATA;
  }
  
  // Notifications
  if (endpoint.includes('/notifications')) {
    return { notifications: MOCK_NOTIFICATIONS };
  }
  
  // Default success response
  return { success: true, data: null };
}

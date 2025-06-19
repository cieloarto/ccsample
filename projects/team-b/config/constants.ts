export const TEAM_B_CONFIG = {
  TEAM_NAME: 'Team B',
  VERSION: '1.0.0',
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  THEME: {
    PRIMARY_COLOR: '#2563eb',
    SECONDARY_COLOR: '#1f2937',
    ACCENT_COLOR: '#3b82f6',
  },
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;
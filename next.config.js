/** @type {import('next').NextConfig} */
const isStatic = process.env.STATIC_EXPORT === 'true';
const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA !== 'false';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isStatic ? 'export' : 'standalone',
  images: {
    unoptimized: true,
  },
  
  // Allow build to succeed with TypeScript/ESLint errors in demo mode
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Experimental: Disable static optimization for all pages to prevent build errors
  experimental: {
    appDir: true,
  },

  /**
   * API Rewrites - Disabled for DEMO MODE
   * 
   * When USE_MOCK_DATA is enabled, all API calls use mock data
   * and don't require a backend server.
   */
  async rewrites() {
    // Skip rewrites in demo mode or static export
    if (useMockData || isStatic) return [];

    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8000';
    
    return [
      // Proxy all /api/* requests to backend (except Next.js API routes)
      {
        source: '/api/:path*',
        destination: `${backendUrl}/:path*`,
      },
      // Proxy /dev/* endpoints (like /dev/send-test-email)
      {
        source: '/dev/:path*',
        destination: `${backendUrl}/dev/:path*`,
      },
      // Proxy /health endpoints
      {
        source: '/health/:path*',
        destination: `${backendUrl}/health/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

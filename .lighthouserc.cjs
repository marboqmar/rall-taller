module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.85 }],
        'categories:best-practices': ['error', { minScore: 0.85 }],
        'categories:seo': ['error', { minScore: 0.85 }],

        // Turn off is-crawlable to avoid the "noindex" failure for Vercel Previews
        'is-crawlable': 'off',

        // Turn off PWA requirements
        'installable-manifest': 'off',
        'service-worker': 'off',

        // Downgrade non-critical "Best Practices" to warnings
        'csp-xss': 'warn',
        'unused-javascript': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};

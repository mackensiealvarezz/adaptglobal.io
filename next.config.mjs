/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'adaptglobal.io' },
      { protocol: 'https', hostname: 'adaptglobal.wpenginepowered.com' },
    ],
  },
  async redirects() {
    return [
      // Specific slug mappings: old WP /news/ → new /press/
      { source: '/news/adapt-named-to-slators-2025-language-ai-50-under-50', destination: '/press/adapt-slator-language-ai-50-under-50', permanent: true },
      { source: '/news/adapt-partners-with-we-collaborative-to-advance-human-driven-ai-enabled-localization', destination: '/press/adapt-we-collaborative-human-ai-localization', permanent: true },
      { source: '/news/adapt-expands-strategic-advisory-board-to-accelerate-ai-localization-growth', destination: '/press/adapt-strategic-advisory-board', permanent: true },
      { source: '/news/adapt-establishes-strategic-advisory-board', destination: '/press/adapt-strategic-advisory-board', permanent: true },
      { source: '/news/matteo-natale-and-kevin-munro-recognized-in-the-ega-association-top-100', destination: '/press/matteo-kevin-ega-top-100', permanent: true },
      { source: '/news/adapt-named-to-streaming-medias-2025-top-100-alongside-disney-and-apple', destination: '/press/adapt-streaming-media-top-100-2025', permanent: true },
      { source: '/news/adapt-makes-strategic-investments-in-the-creator-economy-and-launches-its-creator-portal', destination: '/press/adapt-creator-economy-creator-portal', permanent: true },
      { source: '/news/adapt-produces-ai-enabled-dubs-for-flashback-pictures-pizza-guys-vs-vampires', destination: '/press/adapt-ai-dubs-pizza-guys-vs-vampires', permanent: true },
      { source: '/news/zawadie-solutions-and-adapt-partner-to-bring-job-opportunities-to-african-refugees', destination: '/press/zawadie-solutions-adapt-african-refugees', permanent: true },
      { source: '/news/matchpoint-and-adapt-enable-seamless-integration-for-ai-powered-localization', destination: '/press/matchpoint-adapt-ai-powered-localization', permanent: true },
      { source: '/news/adapt-and-dubformer-help-goalcast-turn-localization-into-immediate-revenue-across-new-markets', destination: '/press/adapt-dubformer-goalcast-localization-revenue', permanent: true },
      // All remaining legacy /news/ URLs → press index
      { source: '/news/:slug*', destination: '/press', permanent: true },
      // Trailing-slash normalisation
      { source: '/press/', destination: '/press', permanent: false },
    ];
  },
};

export default nextConfig;

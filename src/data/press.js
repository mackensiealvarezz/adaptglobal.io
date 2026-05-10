const CDN = 'https://adaptglobal.io/wp-content/uploads/';

export const PRESS_ARTICLES = [
  {
    slug: 'adapt-dubformer-goalcast-localization-revenue',
    title: 'Adapt and Dubformer Help Goalcast Turn Localization into Immediate Revenue Across New Markets',
    date: '2026-04-20',
    category: 'Partnership',
    excerpt: "Goalcast's French-language channel generated 9 million views and 100,000 subscribers within its first weekend — powered by Adapt and Dubformer's AI dubbing platform, with Facebook monetization thresholds crossed within days.",
    banner: CDN + 'image_2026-04-20_151231735.png',
    externalUrl: 'https://adaptglobal.io/news/adapt-and-dubformer-help-goalcast-turn-localization-into-immediate-revenue-across-new-markets/',
  },
  {
    slug: 'matchpoint-adapt-ai-powered-localization',
    title: 'Matchpoint® and Adapt Enable Seamless Integration for AI-Powered Localization',
    date: '2026-04-17',
    category: 'Partnership',
    excerpt: 'Adapt and Matchpoint® announce a seamless workflow integration enabling studios and broadcasters to trigger AI-powered localization directly within Matchpoint\'s production management platform.',
    banner: CDN + 'PR-Thumbnail-1080x675.jpg',
    externalUrl: 'https://adaptglobal.io/news/matchpoint-and-adapt-enable-seamless-integration-for-ai-powered-localization/',
  },
  {
    slug: 'zawadie-solutions-adapt-african-refugees',
    title: 'Zawadie Solutions and Adapt Partner to Bring Job Opportunities to African Refugees',
    date: '2026-03-18',
    category: 'Partnership',
    excerpt: 'Adapt and Zawadie Solutions partner to create professional dubbing and localization opportunities for African refugees, combining AI efficiency with meaningful human talent development.',
    banner: CDN + 'PR-Thumbnail-031826-1080x675.jpg',
    externalUrl: 'https://adaptglobal.io/news/zawadie-solutions-and-adapt-partner-to-bring-job-opportunities-to-african-refugees/',
  },
  {
    slug: 'adapt-ai-dubs-pizza-guys-vs-vampires',
    title: "Adapt Produces AI-Enabled Dubs for Flashback Pictures' Pizza Guys vs Vampires",
    date: '2026-02-25',
    category: 'Production',
    excerpt: "Adapt delivers AI-enabled dubbing for Flashback Pictures' feature film, demonstrating how independent productions can now access broadcast-quality localization at speed and scale.",
    banner: CDN + 'Untitled-design-1080x675.jpg',
    externalUrl: 'https://adaptglobal.io/news/adapt-produces-ai-enabled-dubs-for-flashback-pictures-pizza-guys-vs-vampires/',
  },
  {
    slug: 'adapt-creator-economy-creator-portal',
    title: 'Adapt Makes Strategic Investments in the Creator Economy and Launches Its Creator Portal',
    date: '2026-01-07',
    category: 'Product',
    excerpt: 'Adapt launches its Creator Portal and announces strategic investments in the creator economy, enabling individual content creators to access professional AI dubbing and localization services.',
    banner: CDN + 'Image-1080x675.jpeg',
    externalUrl: 'https://adaptglobal.io/news/adapt-makes-strategic-investments-in-the-creator-economy-and-launches-its-creator-portal/',
  },
  {
    slug: 'adapt-streaming-media-top-100-2025',
    title: "Adapt Named to Streaming Media's 2025 Top 100 Alongside Disney and Apple",
    date: '2025-12-15',
    category: 'Recognition',
    excerpt: "Adapt has been named to Streaming Media's 2025 Top 100 companies list alongside Disney and Apple, recognizing its leadership in AI-powered media localization.",
    banner: CDN + 'Adapt-Named-to-Streaming-Medias-2025-Top-100-Alongside-Disney-and-Apple-1080x675.jpeg',
    externalUrl: 'https://adaptglobal.io/news/adapt-named-to-streaming-medias-2025-top-100-alongside-disney-and-apple/',
  },
  {
    slug: 'matteo-kevin-ega-top-100',
    title: 'Matteo Natale and Kevin Munro Recognized in the EGA Association Top 100',
    date: '2025-12-10',
    category: 'Recognition',
    excerpt: "Adapt's Matteo Natale and Kevin Munro have been recognized among the EGA Association's Top 100 most influential leaders in global entertainment technology.",
    banner: CDN + 'Matteo-Natale-and-Kevin-Munro-Recognized-in-the-EGA-Association-Top-100-copy-1080x675.jpg',
    externalUrl: 'https://adaptglobal.io/news/matteo-natale-and-kevin-munro-recognized-in-the-ega-association-top-100/',
  },
  {
    slug: 'adapt-strategic-advisory-board',
    title: 'Adapt Expands Strategic Advisory Board to Accelerate AI Localization Growth',
    date: '2025-10-28',
    category: 'Company',
    excerpt: 'Adapt expands its Strategic Advisory Board with industry veterans from major studios and streaming platforms to accelerate growth in AI-powered localization worldwide.',
    banner: CDN + 'Adapt-Expands-Strategic-Advisory-Board-to-Accelerate-AI-Localization-Growth-1080x675.jpeg',
    externalUrl: 'https://adaptglobal.io/news/adapt-expands-strategic-advisory-board-to-accelerate-ai-localization-growth/',
  },
  {
    slug: 'adapt-we-collaborative-human-ai-localization',
    title: 'Adapt Partners with We Collaborative to Advance Human-Driven, AI-Enabled Localization',
    date: '2025-10-23',
    category: 'Partnership',
    excerpt: 'Adapt and We Collaborative announce a strategic partnership to advance localization that prioritizes human creativity and cultural nuance, powered by AI tools built for the modern localization workflow.',
    banner: CDN + 'Adapt-x-We-Collaborative.jpg',
    externalUrl: 'https://adaptglobal.io/news/adapt-partners-with-we-collaborative-to-advance-human-driven-ai-enabled-localization/',
  },
  {
    slug: 'adapt-slator-language-ai-50-under-50',
    title: "Adapt Named to Slator's 2025 Language AI '50 Under 50'",
    date: '2025-07-10',
    category: 'Recognition',
    excerpt: "Adapt has been named to Slator's 2025 Language AI '50 Under 50' list, recognizing the company as one of the fastest-growing AI localization companies globally.",
    banner: CDN + 'image003-1-1080x675.jpg',
    externalUrl: 'https://adaptglobal.io/news/adapt-named-to-slators-2025-language-ai-50-under-50/',
  },
];

// Category display colors (mapped to CSS variable names)
export const CATEGORY_COLORS = {
  Partnership: 'var(--accent-2)',
  Recognition: 'var(--accent)',
  Product:     'var(--accent-2)',
  Production:  'var(--accent)',
  Company:     'var(--accent)',
};

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });
}

import './globals.css';

export const metadata = {
  metadataBase: new URL('https://adaptglobal.io'),
  title: 'Adapt — The Future of Media Localization | AI Dubbing, Subtitling & Voice Synthesis',
  description: 'Adapt combines AI tools for transcription, translation, and voice synthesis with regional experts to create premium dubs and subtitles — 4× less than market rates, 4× faster delivery.',
  keywords: ['media localization', 'AI dubbing', 'subtitling', 'voice synthesis', 'voice cloning', 'translation', 'ElevenLabs', 'Nuance platform'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Adapt — The Future of Media Localization',
    description: 'Premium AI-powered dubbing and subtitling. 4× cheaper, 4× faster.',
    url: 'https://adaptglobal.io/',
    siteName: 'Adapt',
    type: 'website',
    images: [
      {
        url: 'https://adaptglobal.io/wp-content/uploads/2024/08/press-release_4.1.24.jpg',
        width: 896,
        height: 438,
        alt: 'Adapt — The Future of Media Localization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adapt — The Future of Media Localization',
    description: 'Premium AI-powered dubbing and subtitling. 4× cheaper, 4× faster.',
    images: ['https://adaptglobal.io/wp-content/uploads/2024/08/press-release_4.1.24.jpg'],
  },
  robots: { index: true, follow: true },
};

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://adaptglobal.io/#organization',
      name: 'Adapt',
      url: 'https://adaptglobal.io/',
      foundingDate: '2024',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adaptglobal.io/wp-content/uploads/2024/04/Adapt_Logo_Primary_Color-White.svg',
      },
      description: 'AI-powered media localization combining 500+ Cultural Ambassadors with AI tools to deliver premium dubbing and subtitles at 4× less than market rates and 4× faster.',
      sameAs: [
        'https://www.linkedin.com/company/adaptglobal',
        'https://www.instagram.com/adaptglobal.io/',
        'https://www.youtube.com/@Adaptglobal-io',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adaptglobal.io/#website',
      url: 'https://adaptglobal.io/',
      name: 'Adapt',
      publisher: { '@id': 'https://adaptglobal.io/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://adaptglobal.io/?s={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

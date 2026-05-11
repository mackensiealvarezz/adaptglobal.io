import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Nav } from '../../../components/nav.jsx';
import { Footer } from '../../../components/footer.jsx';
import { CTA } from '../../../components/cta.jsx';
import { getAllSlugs, getArticle, CATEGORY_COLORS, formatDate } from '../../../lib/press.js';

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Adapt`,
    description: article.excerpt,
    alternates: { canonical: `/press/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://adaptglobal.io/press/${slug}/`,
      type: 'article',
      publishedTime: article.date,
      images: [{ url: article.banner, width: 1080, height: 675, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.banner],
    },
  };
}

export default async function PressArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return notFound();

  const categoryColor = CATEGORY_COLORS[article.category] || 'var(--fg-3)';
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    datePublished: article.date,
    description: article.excerpt,
    image: article.banner,
    publisher: {
      '@type': 'Organization',
      name: 'Adapt',
      logo: { '@type': 'ImageObject', url: 'https://adaptglobal.io/wp-content/uploads/2024/04/Adapt_Logo_Primary_Color-White.svg' },
    },
    url: `https://adaptglobal.io/press/${slug}/`,
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main>
        {/* ── Banner ── */}
        <div style={{ paddingTop: 72, position: 'relative' }}>
          <div style={{
            width: '100%',
            aspectRatio: '21/9',
            overflow: 'hidden',
            maxHeight: 520,
            position: 'relative',
          }}>
            <img
              src={article.banner}
              alt={article.title}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                display: 'block',
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, var(--bg) 100%)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>

        {/* ── Article Header ── */}
        <div className="wrap" style={{ maxWidth: 800, paddingTop: 40, paddingBottom: 80 }}>
          <Link
            href="/press"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--fg-3)',
              marginBottom: 32, transition: 'color 0.15s',
            }}
            className="press-back-link"
          >
            ← Press
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 10px',
              border: `1px solid ${categoryColor}`,
              borderRadius: 999,
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: categoryColor,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: categoryColor, flexShrink: 0 }} />
              {article.category}
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>
              {formatDate(article.date)}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(26px, 4vw, 48px)',
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: 24,
          }}>
            {article.title}
          </h1>

          <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.65, borderLeft: '2px solid var(--accent)', paddingLeft: 20, marginBottom: 48 }}>
            {article.excerpt}
          </p>

          {/* Article body */}
          {article.contentHtml && (
            <div className="press-body" style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.75 }}
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          )}
        </div>

        {/* ── Back to Press ── */}
        <div className="wrap" style={{ paddingBottom: 64, display: 'flex', justifyContent: 'center' }}>
          <Link href="/press" className="btn" style={{
            border: '1px solid var(--line-2)', borderRadius: 999,
            padding: '12px 24px', fontSize: 13, color: 'var(--fg)',
          }}>
            ← Back to Press Room
          </Link>
        </div>

        <CTA />
      </main>
      <Footer />
      <style>{`
        .press-back-link:hover { color: var(--fg) !important; }
        .press-body h2 { font-size: clamp(18px,2vw,24px); font-family: var(--serif); font-weight: 400; margin: 48px 0 16px; color: var(--fg); }
        .press-body h3 { font-size: clamp(15px,1.5vw,19px); font-family: var(--serif); font-weight: 400; margin: 32px 0 12px; color: var(--fg); }
        .press-body p { margin-bottom: 20px; }
        .press-body ul, .press-body ol { padding-left: 24px; margin-bottom: 20px; }
        .press-body li { margin-bottom: 8px; }
        .press-body blockquote { border-left: 2px solid var(--accent); margin: 32px 0; padding: 8px 0 8px 20px; color: var(--fg); font-style: italic; }
        .press-body blockquote p { margin-bottom: 0; }
        .press-body a { color: var(--accent); text-decoration: underline; }
        .press-body strong { color: var(--fg); font-weight: 500; }
        .press-body hr { border: none; border-top: 1px solid var(--line); margin: 40px 0; }
      `}</style>
    </>
  );
}

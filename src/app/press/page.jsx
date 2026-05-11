import React from 'react';
import { Nav } from '../../components/nav.jsx';
import { Footer } from '../../components/footer.jsx';
import { CTA } from '../../components/cta.jsx';
import { getAllArticles, CATEGORY_COLORS, formatDate } from '../../lib/press.js';

export const metadata = {
  title: 'Press — Adapt | News & Recognition',
  description: 'Adapt in the news — partnerships, industry recognition, product launches, and more. Read the latest press releases and coverage from Adapt, the future of AI-powered media localization.',
  alternates: { canonical: '/press' },
  openGraph: {
    title: 'Press — Adapt | News & Recognition',
    description: 'Partnerships, industry recognition, and product launches from Adapt — the AI-powered media localization company trusted by studios and broadcasters worldwide.',
    url: 'https://adaptglobal.io/press/',
    images: [
      {
        url: 'https://adaptglobal.io/wp-content/uploads/image_2026-04-20_151231735.png',
        width: 1080,
        height: 675,
        alt: 'Adapt Press Room',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press — Adapt',
    description: 'Partnerships, recognition, and product launches from Adapt.',
    images: ['https://adaptglobal.io/wp-content/uploads/image_2026-04-20_151231735.png'],
  },
};

export default function PressPage() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;

  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section style={{
          paddingTop: 'clamp(100px, 14vw, 160px)',
          paddingBottom: 'clamp(48px, 6vw, 80px)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: -200, right: -200,
            width: 600, height: 600, borderRadius: '50%',
            background: 'var(--accent)', opacity: 0.05, filter: 'blur(120px)',
            pointerEvents: 'none',
          }} />
          <div className="wrap">
            <div className="section-label" style={{ marginBottom: 24 }}><span>Press Room</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'end' }} className="press-hero-grid">
              <div>
                <h1 className="display-1" style={{ marginBottom: 0 }}>
                  Every chapter<br />
                  of our <span className="italic-serif" style={{ color: 'var(--accent)' }}>story.</span>
                </h1>
              </div>
              <div>
                <p className="lead" style={{ marginBottom: 28 }}>
                  From partnerships and industry recognition to product launches — follow Adapt&apos;s journey as we redefine what&apos;s possible in media localization.
                </p>
                <a href="mailto:press@adaptglobal.io" className="press-contact-pill" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '12px 20px', border: '1px solid var(--line-2)',
                  borderRadius: 999, fontSize: 13, color: 'var(--fg)',
                }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Press Inquiries</span>
                  <span style={{ color: 'var(--fg-3)' }}>·</span>
                  <span style={{ color: 'var(--accent)' }}>press@adaptglobal.io</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div style={{
              display: 'flex', gap: 'clamp(24px,4vw,64px)',
              marginTop: 'clamp(40px,5vw,64px)', paddingTop: 32,
              borderTop: '1px solid var(--line)', flexWrap: 'wrap',
            }}>
              {[
                { n: String(articles.length), label: 'press releases' },
                { n: '3', label: 'industry awards' },
                { n: '2', label: 'Top 100 lists' },
                { n: '5+', label: 'strategic partnerships' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 'clamp(28px,4vw,48px)', fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured ── */}
        <section style={{ paddingBottom: 'clamp(48px,5vw,80px)' }}>
          <div className="wrap">
            <div className="eyebrow" style={{ marginBottom: 24 }}>Latest</div>
            <a href={`/press/${featured.slug}`} className="featured-card" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              minHeight: 400, border: '1px solid var(--line)',
              borderRadius: 20, overflow: 'hidden',
              textDecoration: 'none', color: 'inherit',
            }}>
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: 320 }}>
                <img src={featured.banner} alt={featured.title} className="featured-img" style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(0,0,0,0.3) 0%,transparent 60%)', pointerEvents: 'none' }} />
              </div>
              <div style={{ padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
                    <CategoryPill cat={featured.category} />
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>{formatDate(featured.date)}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(20px,2.5vw,32px)', fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1.25, letterSpacing: '-0.02em', marginBottom: 16, color: 'var(--fg)' }}>{featured.title}</h2>
                  <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, maxWidth: '52ch' }}>{featured.excerpt}</p>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  Read article <span style={{ fontSize: 14 }}>→</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="section-pad" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(16px,2vw,28px)' }} className="press-grid">
              {rest.map(article => <PressCard key={article.slug} article={article} />)}
            </div>
          </div>
        </section>

        {/* ── Press Contact ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
              <div>
                <div className="section-label" style={{ marginBottom: 12 }}><span>Press Contact</span></div>
                <h3 style={{ fontSize: 'clamp(22px,3vw,36px)', fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1.2, marginBottom: 8 }}>
                  Covering Adapt?<br /><span className="italic-serif" style={{ color: 'var(--accent)' }}>Let&apos;s connect.</span>
                </h3>
                <p style={{ color: 'var(--fg-2)', fontSize: 15, maxWidth: '48ch' }}>For press inquiries, interview requests, or media assets, reach out to our communications team.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 220 }}>
                <a href="mailto:press@adaptglobal.io" className="btn btn--primary" style={{ fontSize: 14, textAlign: 'center' }}>
                  press@adaptglobal.io <span className="arrow">→</span>
                </a>
                <a href="https://adaptglobal.io/brand/" target="_blank" rel="noopener noreferrer" className="press-brand-btn" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '12px 20px', fontSize: 13, border: '1px solid var(--line-2)',
                  borderRadius: 999, color: 'var(--fg-2)', textAlign: 'center',
                }}>
                  Download brand kit ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />

      <style>{`
        .press-contact-pill:hover { border-color: var(--accent); background: rgba(255,255,255,0.04); }
        .press-brand-btn:hover { color: var(--fg); }
        .featured-card:hover { border-color: var(--line-2); }
        .featured-card:hover .featured-img { transform: scale(1.03); }
        .featured-img { transition: transform 0.5s ease; }
        .press-card:hover { border-color: var(--line-2) !important; transform: translateY(-3px); }
        .press-card:hover .card-img { transform: scale(1.04); }
        .card-img { transition: transform 0.4s ease; }
        @media(max-width:900px){
          .press-hero-grid { grid-template-columns: 1fr !important; }
          .featured-card { grid-template-columns: 1fr !important; }
          .press-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:600px){ .press-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}

function CategoryPill({ cat }) {
  const color = CATEGORY_COLORS[cat] || 'var(--fg-3)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px',
      border: `1px solid ${color}`, borderRadius: 999,
      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: color, flexShrink: 0 }} />
      {cat}
    </span>
  );
}

function PressCard({ article }) {
  return (
    <a href={`/press/${article.slug}`} className="press-card" style={{
      display: 'flex', flexDirection: 'column',
      border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden',
      textDecoration: 'none', color: 'inherit',
      transition: 'border-color 0.2s, transform 0.2s',
      background: 'rgba(255,255,255,0.01)',
    }}>
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
        <img src={article.banner} alt={article.title} className="card-img" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block',
        }} />
      </div>
      <div style={{ padding: 'clamp(16px,2vw,24px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
          <CategoryPill cat={article.category} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>{formatDate(article.date)}</span>
        </div>
        <h3 style={{ fontSize: 'clamp(15px,1.4vw,18px)', fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--fg)', marginBottom: 10, flex: 1 }}>
          {article.title}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.55, marginBottom: 16 }}>
          {article.excerpt.slice(0, 120)}{article.excerpt.length > 120 ? '…' : ''}
        </p>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6 }}>
          Read →
        </div>
      </div>
    </a>
  );
}

import React from 'react';
import { Nav } from '../../components/nav.jsx';
import { Footer } from '../../components/footer.jsx';
import { VideoCard, ScreenRow, PlatformAnimation, AdaptProcessFlow } from '../../components/page-utils.jsx';
import { CTA } from '../../components/cta.jsx';

const DEMOS = [
  { src: 'https://adaptglobal.io/wp-content/uploads/Nuance-Promo-Reel-Trim.mp4',   title: 'Nuance Promo Reel',         lang: 'Platform Tour', type: 'Overview' },
  { src: 'https://adaptglobal.io/wp-content/uploads/Adapt_RoadMap_HQ-01.mp4',      title: 'Adapt Roadmap',             lang: 'Vision',        type: 'Walkthrough' },
  { src: 'https://adaptglobal.io/wp-content/uploads/RealSync_3d-Mapping-01.mp4',   title: 'RealSync — 3D Lip Mapping', lang: 'Tech',          type: 'Feature' },
  { src: 'https://adaptglobal.io/wp-content/uploads/Resonance-Reel-01.mp4',        title: 'Resonance — Voice Engine',  lang: 'Tech',          type: 'Feature' },
];

const SCREENS = [
  {
    img: 'https://adaptglobal.io/wp-content/uploads/nuance_Order_search_high-scaled.jpg',
    tag: 'Dashboard',
    title: 'Centralized Order Management & Tracking',
    body: 'A comprehensive dashboard for all active and completed orders. Advanced search, filter, and export — a single source of truth so teams across departments can track project milestones and surface delays before they bite.',
  },
  {
    img: 'https://adaptglobal.io/wp-content/uploads/nuance_order_detail_high-scaled.jpg',
    tag: 'Detail',
    title: 'Order Orchestration & Metadata',
    body: 'Connects all relevant asset and title metadata into a holistic project view. Integrated with external systems and AI-powered automation, the order detail screen lets staff orchestrate complex workflows efficiently.',
  },
  {
    img: 'https://adaptglobal.io/wp-content/uploads/nuance_asset-inspector_high2-scaled.jpg',
    tag: 'Inspector',
    title: 'Asset Inspection',
    body: 'Review and analyze media assets directly within Nuance. Everything inspected in a secure, centralized environment — no need to leave the platform or access source files externally.',
  },
];

const TECH = [
  { name: 'DeepL',     kind: 'AI Translation' },
  { name: 'ElevenLabs', kind: 'AI Voice' },
  { name: 'Ooona',     kind: 'Subtitling' },
  { name: 'VoiceQ',    kind: 'Lip Sync' },
  { name: 'Pro Tools', kind: 'Audio Mixing' },
  { name: 'Nuance',    kind: 'Orchestration', accent: true },
];

export default function PlatformPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(platformSchema) }} />
      <Nav />
      <main>
        {/* Hero */}
        <header style={{
          borderBottom: '1px solid var(--line)',
          paddingTop: 72,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-20%', right: '5%', width: '50%', height: '100%',
            borderRadius: '50%', background: 'var(--accent-2)', opacity: 0.05, filter: 'blur(120px)',
          }} />
          <div className="wrap" style={{ padding: 'clamp(48px,6vw,80px) var(--pad)' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px,5vw,80px)', alignItems: 'start',
            }} className="plat-hero-grid">
              <div>
                <div className="eyebrow" style={{ color: 'var(--accent-2)' }}>Our Platform</div>
                <h1 className="display-2" style={{ marginTop: 16, maxWidth: '16ch' }}>
                  Next-gen tech, built for{' '}
                  <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>localization</span>{' '}
                  <span className="italic-serif" style={{ color: 'var(--accent)' }}>professionals.</span>
                </h1>
                <p className="lead" style={{ marginTop: 28 }}>
                  Adapt's proprietary platform, <strong style={{ color: 'var(--fg)' }}>Nuance</strong>, integrates
                  powerful AI — DeepL, ElevenLabs — with industry-leading toolsets for scripting and audio mixing.
                  Our Regional Leads get the most powerful tech in a UX they already know.
                </p>
                <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a href="https://nuance.adaptglobal.io/" className="btn btn--primary">
                    <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: 999, background: 'var(--accent-2)' }} />
                    Login to Nuance <span className="arrow">→</span>
                  </a>
                  <a href="mailto:info@adaptglobal.io" className="btn">Request a demo</a>
                </div>
              </div>

              <PlatformAnimation />
            </div>
          </div>
          <style>{`@media(max-width:880px){.plat-hero-grid{grid-template-columns:1fr!important;}}`}</style>
        </header>

        {/* Demo reels */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="wrap">
            <div className="section-label"><span>01 — Demos</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,80px)', alignItems: 'end', marginBottom: 56,
            }} className="demo-hdr">
              <h2 className="display-2">
                See Nuance<br />
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>in motion.</span>
              </h2>
              <p className="lead">
                Hover any tile to preview. Click for the full reel. Our platform is built around four
                pillars: orchestration, mapping, voice synthesis, and the human refinement layer.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }} className="demo-grid-2">
              {DEMOS.map(d => <VideoCard key={d.src} {...d} />)}
            </div>
          </div>
          <style>{`
            @media(max-width:880px){.demo-hdr,.demo-grid-2{grid-template-columns:1fr!important;}}
          `}</style>
        </section>

        {/* How Adapt does it — vertical animated flow */}
        <section className="section-pad">
          <div className="wrap">
            <div className="section-label"><span>02 — How it works</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1.6fr',
              gap: 'clamp(40px,6vw,96px)', alignItems: 'start',
            }} className="howitworks-grid">
              <div style={{ position: 'sticky', top: 96 }}>
                <h2 className="display-2" style={{ marginBottom: 20 }}>
                  From source to{' '}
                  <span className="italic-serif" style={{ color: 'var(--accent)' }}>screen</span>{' '}
                  in one pass.
                </h2>
                <p className="lead" style={{ marginBottom: 28 }}>
                  Where traditional dubbing chains hand off between a dozen vendors,
                  Adapt's Regional Leads move content through every step inside Nuance —
                  AI-assisted, human-led, single-pass.
                </p>
                <div style={{
                  padding: '16px 20px',
                  background: 'var(--bg-2)', border: '1px solid var(--line)',
                  borderRadius: 12, marginTop: 8,
                }}>
                  <div className="eyebrow" style={{ marginBottom: 12 }}>The old way</div>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-3)', lineHeight: 1.6 }}>
                    Separate subtitling &amp; dubbing pipelines. Dozens of hand-offs.
                    Each transition costs time, money, and consistency.
                  </p>
                </div>
              </div>
              <AdaptProcessFlow />
            </div>
          </div>
          <style>{`@media(max-width:880px){.howitworks-grid{grid-template-columns:1fr!important;} .howitworks-grid>div:first-child{position:static!important;}}`}</style>
        </section>

        {/* Inside Nuance */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="wrap">
            <div className="section-label"><span>03 — Inside Nuance</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,80px)', alignItems: 'end', marginBottom: 64,
            }} className="inside-hdr">
              <h2 className="display-2">
                A secure,<br />
                <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>seamless</span> workflow.
              </h2>
              <p className="lead">
                Nuance ushers content through every step — from receipt to AI-powered transcription,
                translation, and voice synthesis, to fine-tuning by regional experts.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 56 }}>
              {SCREENS.map((s, i) => (
                <ScreenRow key={i} index={i} img={s.img} tag={s.tag} title={s.title} body={s.body} />
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:880px){
              .inside-hdr,.screen-row{grid-template-columns:1fr!important;}
              .screen-row>a,.screen-row>div{order:unset!important;}
            }
          `}</style>
        </section>

        {/* Tech stack */}
        <section className="section-pad-sm" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="section-label"><span>04 — Integrated tech stack</span></div>
            <h2 className="display-3" style={{ maxWidth: '24ch', marginBottom: 40 }}>
              Best-in-class AI married to the tools localization pros already trust.
            </h2>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
              gap: 1, background: 'var(--line)',
              border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden',
            }}>
              {TECH.map(t => (
                <div key={t.name} style={{
                  background: 'var(--bg-2)', padding: '24px 20px',
                  display: 'flex', flexDirection: 'column', gap: 6, minHeight: 100,
                }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: t.accent ? 'var(--accent-2)' : 'var(--fg)' }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{t.kind}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Platform — Nuance | Adapt\'s AI Localization Workflow Engine',
  description: 'Nuance is Adapt\'s proprietary platform integrating AI tools — DeepL, ElevenLabs — with industry-leading scripting and audio mixing toolsets like Ooona, VoiceQ, and Pro Tools.',
  alternates: { canonical: '/platform' },
  openGraph: {
    title: 'Platform — Nuance | Adapt',
    description: 'The AI + human orchestration layer behind Adapt\'s premium dubs and subtitles.',
    url: 'https://adaptglobal.io/platform/',
    images: [{ url: 'https://adaptglobal.io/wp-content/uploads/nuance_Order_search_high-scaled.jpg', width: 1080, height: 675, alt: 'Nuance — Adapt\'s AI Localization Platform' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://adaptglobal.io/wp-content/uploads/nuance_Order_search_high-scaled.jpg'] },
};

const platformSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://adaptglobal.io' },
    { '@type': 'ListItem', position: 2, name: 'Platform', item: 'https://adaptglobal.io/platform/' },
  ],
};

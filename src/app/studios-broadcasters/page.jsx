import React from 'react';
import { Nav } from '../../components/nav.jsx';
import { Footer } from '../../components/footer.jsx';
import { AudioDemo } from '../../components/audio-demo.jsx';
import { CTA } from '../../components/cta.jsx';
import { VideoCard, FeaturedVideoCard } from '../../components/page-utils.jsx';

export const metadata = {
  title: 'Studios & Broadcasters — AI Dubbing & Subtitling at Scale | Adapt',
  description: 'Premium AI-powered dubbing and subtitling for studios and broadcasters. Preserve accents, emotion, and authenticity — 4× cheaper, 4× faster than traditional providers.',
  alternates: { canonical: '/studios-broadcasters' },
  openGraph: {
    title: 'Studios & Broadcasters | Adapt',
    description: 'Theatrical-grade localization at scale. Human-centric AI dubbing that sounds better than the competition.',
    url: 'https://adaptglobal.io/studios-broadcasters/',
  },
};

const QUALITY_PILLARS = [
  {
    n: '01',
    title: 'We Preserve Accents',
    body: 'Our proprietary process preserves accents, providing an authentic experience that 65% of viewers prefer. French content sounds French. Korean sounds Korean.',
    accent: 'var(--accent)',
  },
  {
    n: '02',
    title: 'We Preserve Emotion',
    body: 'Our translated dubs carry through the emotion of the original actors — not just the words. Every line is reviewed by human artists who understand the performance.',
    accent: 'var(--accent-2)',
  },
  {
    n: '03',
    title: 'Leads Are In-Region',
    body: "Translations and dubs are created by linguists sitting with the end viewers. Cultural nuance can't be replicated remotely — so we don't try.",
    accent: 'var(--accent)',
  },
  {
    n: '04',
    title: 'Best Screenwriters & Engineers',
    body: "Our regional leads aren't just local — they're the best in their markets. We hire quality leads because quality people make quality product.",
    accent: 'var(--accent-2)',
  },
  {
    n: '05',
    title: 'Best-in-Class Integrated Tech',
    body: 'DeepL for translation. ElevenLabs for voice. Ooona, VoiceQ, and Pro Tools for the craft layer. All orchestrated through our proprietary Nuance platform.',
    accent: 'var(--accent)',
  },
];

const FEATURED_DEMO = {
  src: 'https://adaptglobal.io/wp-content/uploads/RealSync_3d-Mapping-01.mp4',
  title: 'RealSync — 3D Lip Mapping',
  lang: 'ES · Drama · Lip Sync',
  type: 'Feature',
  badge: 'Featured Demo',
};

const SUPPORTING_DEMOS = [
  { src: 'https://adaptglobal.io/wp-content/uploads/Resonance-Reel-01.mp4',      title: 'Resonance Voice Engine',  lang: 'Multi · AI Voice',   type: 'Feature' },
  { src: 'https://adaptglobal.io/wp-content/uploads/Nuance-Promo-Reel-Trim.mp4', title: 'Nuance Platform Tour',    lang: 'Platform',            type: 'Tour' },
  { src: 'https://adaptglobal.io/wp-content/uploads/Adapt_RoadMap_HQ-01.mp4',    title: 'Adapt Product Roadmap',   lang: 'Vision',              type: 'Walkthrough' },
];

const REGIONAL_LEADS = [
  { name: 'Yasmine B.', role: 'French Producer',             lang: 'FR', img: 'https://adaptglobal.io/wp-content/uploads/Yasmine-B-French-P.jpg' },
  { name: 'Ahmad',       role: 'Arabic Language Lead',        lang: 'AR', img: 'https://adaptglobal.io/wp-content/uploads/Ahmad-1.jpg' },
  { name: 'Divya',       role: 'Hindi Tech Producer',         lang: 'HI', img: 'https://adaptglobal.io/wp-content/uploads/Divya.jpg' },
  { name: 'Murat',       role: 'Middle East Regional Head',   lang: 'TR', img: 'https://adaptglobal.io/wp-content/uploads/Murat.jpg' },
  { name: 'Ariana',      role: 'LAS Cultural Ambassador',     lang: 'ES', img: 'https://adaptglobal.io/wp-content/uploads/Ariana.jpg' },
  { name: 'Suzy',        role: 'Korean Cultural Ambassador',  lang: 'KO', img: 'https://adaptglobal.io/wp-content/uploads/Suzy.jpg' },
  { name: 'Beizhou',     role: 'Mandarin Cultural Ambassador',lang: 'ZH', img: 'https://adaptglobal.io/wp-content/uploads/Beizhou.jpg' },
  { name: 'Pedro',       role: 'European Portuguese CA',      lang: 'PT', img: 'https://adaptglobal.io/wp-content/uploads/Pedro.jpg' },
  { name: 'Rafael',      role: 'Brazilian Portuguese CA',     lang: 'BR', img: 'https://adaptglobal.io/wp-content/uploads/Rafael.jpg' },
];

export default function StudiosPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <header style={{
          paddingTop: 72, borderBottom: '1px solid var(--line)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-10%', left: '20%', width: '60%', height: '80%',
            borderRadius: '50%', background: 'var(--accent)', opacity: 0.04, filter: 'blur(120px)',
          }} />
          <div className="wrap" style={{ padding: 'clamp(56px,8vw,120px) var(--pad)' }}>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>Studios & Broadcasters</div>
            <h1 className="display-1" style={{ marginTop: 20, maxWidth: '15ch' }}>
              Human-centric AI<br />
              for{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>studios</span>{' '}
              &amp;{' '}
              <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>broadcasters.</span>
            </h1>
            <p className="lead" style={{ marginTop: 28, maxWidth: '60ch' }}>
              We combine powerful AI tools for transcription, translation, and voice synthesis
              with highly trained regional experts — delivering exceptional dubs and subtitles
              at <strong style={{ color: 'var(--fg)' }}>4× less than market rates</strong> and{' '}
              <strong style={{ color: 'var(--fg)' }}>4× faster</strong> than the competition.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="mailto:info@adaptglobal.io" className="btn btn--primary">
                Get in touch <span className="arrow">→</span>
              </a>
              <a href="/platform" className="btn">Tour our platform →</a>
            </div>

            {/* Metrics strip */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
              gap: 1, background: 'var(--line)',
              border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden',
              marginTop: 56,
            }} className="metrics-strip-s">
              {[
                { stat: '4×',   label: 'Less than market rates' },
                { stat: '4×',   label: 'Faster delivery' },
                { stat: '20+',  label: 'Languages covered' },
                { stat: '48h',  label: 'Rush turnaround' },
              ].map(m => (
                <div key={m.label} style={{ background: 'var(--bg-2)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', color: 'var(--accent)', lineHeight: 1 }}>{m.stat}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 10 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:880px){.metrics-strip-s{grid-template-columns:repeat(2,1fr)!important;}}
            @media(max-width:480px){.metrics-strip-s{grid-template-columns:1fr!important;}}
          `}</style>
        </header>

        {/* ── 01 — Hear it ──────────────────────────────────────── */}
        <AudioDemo />

        {/* ── 02 — See it ───────────────────────────────────────── */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="wrap">
            <div className="section-label"><span>02 — See it</span></div>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,80px)', alignItems: 'end', marginBottom: 48,
            }} className="see-hdr">
              <h2 className="display-2">
                Quality you can<br />
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>see.</span>
              </h2>
              <p className="lead">
                Watch our RealSync lip-mapping technology and Resonance voice engine in action.
                English speakers can hear the precision of our translations and dubs firsthand.
              </p>
            </div>

            {/* Featured demo — full width, cinematic */}
            <FeaturedVideoCard {...FEATURED_DEMO} />

            {/* Supporting demos — 3 col */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 20,
            }} className="support-demos">
              {SUPPORTING_DEMOS.map(d => <VideoCard key={d.src} {...d} />)}
            </div>

            <p style={{ marginTop: 24, fontSize: 14, color: 'var(--fg-3)' }}>
              More samples available on{' '}
              <a
                href="https://www.youtube.com/@Adaptglobal-io"
                style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                target="_blank" rel="noopener"
              >
                our YouTube channel ↗
              </a>
            </p>
          </div>
          <style>{`
            @media(max-width:880px){.see-hdr,.support-demos{grid-template-columns:1fr!important;}}
          `}</style>
        </section>

        {/* ── 03 — Why we sound better ──────────────────────────── */}
        <section className="section-pad">
          <div className="wrap">
            <div className="section-label"><span>03 — Why we sound better</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,80px)', alignItems: 'end', marginBottom: 64,
            }} className="why-hdr">
              <h2 className="display-2">
                When you put it all together,<br />
                our dubs just{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>sound better.</span>
              </h2>
              <p className="lead">
                Better-sounding dubs mean stories resonate more — which means higher ratings,
                more views, and increased consumption in every language.
              </p>
            </div>
            <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {QUALITY_PILLARS.map((p, i) => (
                <li key={p.n} style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr 2fr',
                  gap: 'clamp(20px,3vw,56px)',
                  padding: 'clamp(24px,3vw,40px) 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: i === QUALITY_PILLARS.length - 1 ? '1px solid var(--line)' : 'none',
                  alignItems: 'baseline',
                }} className="pillar-row">
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.18em', color: 'var(--fg-4)' }}>{p.n}</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px,2.5vw,36px)', lineHeight: 1.1, color: p.accent }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6 }}>{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <style>{`
            @media(max-width:880px){
              .why-hdr{grid-template-columns:1fr!important;}
              .pillar-row{grid-template-columns:1fr!important;gap:8px!important;}
            }
          `}</style>
        </section>

        {/* ── 04 — The team ─────────────────────────────────────── */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="wrap">
            <div className="section-label"><span>04 — The team</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px,6vw,96px)', alignItems: 'end', marginBottom: 56,
            }} className="team-hdr-s">
              <h2 className="display-2">
                Translation is<br />
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>storytelling.</span>
              </h2>
              <div>
                <p className="lead">
                  Our Language Leads — Cultural Ambassadors and Tech Producers — sit at the center
                  of every dub. The best linguists, artists, and engineers in the regions we serve,
                  working hand-in-hand with Nuance.
                </p>
                <div style={{
                  display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24,
                }}>
                  {['FR','AR','HI','TR','ES','KO','ZH','PT','BR','DE','IT','JA'].map((l, i) => (
                    <span key={l} style={{
                      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em',
                      padding: '5px 10px',
                      border: '1px solid var(--line)',
                      borderRadius: 999,
                      color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
                      background: i % 2 === 0
                        ? 'color-mix(in oklab, var(--accent) 7%, transparent)'
                        : 'color-mix(in oklab, var(--accent-2) 7%, transparent)',
                    }}>{l}</span>
                  ))}
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em',
                    padding: '5px 10px',
                    border: '1px solid var(--line)',
                    borderRadius: 999, color: 'var(--fg-3)',
                  }}>+more</span>
                </div>
              </div>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16,
            }} className="team-grid-s">
              {REGIONAL_LEADS.map((p, i) => (
                <figure key={p.name} style={{
                  margin: 0, borderRadius: 16, overflow: 'hidden',
                  background: 'var(--bg-3)', border: '1px solid var(--line)',
                  position: 'relative', aspectRatio: '4 / 5',
                }}>
                  <img
                    src={p.img}
                    alt={`${p.name} — ${p.role}`}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) contrast(1.05)' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,11,0.88) 0%, transparent 55%)',
                  }} />

                  {/* Language badge — top right */}
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
                    padding: '5px 10px',
                    background: i % 2 === 0
                      ? 'color-mix(in oklab, var(--accent) 12%, rgba(10,10,11,0.8))'
                      : 'color-mix(in oklab, var(--accent-2) 12%, rgba(10,10,11,0.8))',
                    border: `1px solid ${i % 2 === 0
                      ? 'color-mix(in oklab, var(--accent) 35%, var(--line))'
                      : 'color-mix(in oklab, var(--accent-2) 35%, var(--line))'}`,
                    borderRadius: 999,
                    color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
                  }}>{p.lang}</div>

                  <figcaption style={{ position: 'absolute', left: 20, right: 20, bottom: 20 }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.2 }}>{p.name}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 5 }}>{p.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <a href="/about#team" className="btn">Meet the full network <span className="arrow">→</span></a>
            </div>
          </div>
          <style>{`
            @media(max-width:880px){
              .team-hdr-s{grid-template-columns:1fr!important;}
              .team-grid-s{grid-template-columns:repeat(2,1fr)!important;}
            }
            @media(max-width:480px){.team-grid-s{grid-template-columns:1fr!important;}}
          `}</style>
        </section>

        {/* ── 05 — How to work with us ──────────────────────────── */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="section-label"><span>05 — How to work with us</span></div>
            <h2 className="display-2" style={{ maxWidth: '16ch', marginBottom: 56 }}>
              Everything you need,{' '}
              <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>end to end.</span>
            </h2>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
              gap: 1, background: 'var(--line)',
              border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden',
            }} className="how-grid-s">
              {[
                {
                  icon: '◈',
                  title: 'Service with Technology',
                  body: "We take your source content and deliver a dub in your chosen language — preserving the original actors' accents, emotion, and performance. Ancillary deliverables (subtitles, closed captions, forced narratives) are included.",
                },
                {
                  icon: '◆',
                  title: 'Pricing',
                  body: 'We charge by the minute of supplied content. Prices vary by language and dubbing type: Full Lip Sync, Voice Over, or Audio Description. Generally one-quarter the cost of traditional providers for the same quality.',
                },
                {
                  icon: '◉',
                  title: 'Turnaround Times',
                  body: 'Standard turnaround is 7 business days — one-fourth to one-fifth of typical industry delivery. Rush projects can be expedited to 48 hours. Subtitles and forced narratives are included at no extra cost.',
                },
              ].map(item => (
                <div key={item.title} style={{
                  background: 'var(--bg-2)', padding: 'clamp(28px,3.5vw,48px)',
                  display: 'flex', flexDirection: 'column', gap: 20,
                }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--accent)' }}>{item.icon}</div>
                  <h3 className="display-3">{item.title}</h3>
                  <p className="body">{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <a href="mailto:info@adaptglobal.io" className="btn btn--accent">
                Get a scoped plan <span className="arrow">→</span>
              </a>
            </div>
          </div>
          <style>{`@media(max-width:880px){.how-grid-s{grid-template-columns:1fr!important;}}`}</style>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

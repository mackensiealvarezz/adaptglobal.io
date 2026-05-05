import React from 'react';
import { Nav } from '../../components/nav.jsx';
import { Footer } from '../../components/footer.jsx';
import { CTA } from '../../components/cta.jsx';

export const metadata = {
  title: 'About — Adapt | The Future of Media Localization',
  description: 'Adapt was founded in 2024 by Justin Beaudin with a mission to integrate AI with human artistry to revolutionize media localization. Meet the team behind premium AI dubbing.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Adapt | The Future of Media Localization',
    description: 'A small team of experts from Netflix, Warner, NBCUniversal, Deluxe, and IYUNO — combining AI with the best localization artists in the world.',
    url: 'https://adaptglobal.io/about/',
  },
};

const LEADERSHIP = [
  { name: 'Justin Beaudin',      title: 'President & CEO',                           img: 'https://adaptglobal.io/wp-content/uploads/Justin-Beaudin.jpg' },
  { name: 'Kevin Munro',         title: 'Chief Technology Officer',                  img: 'https://adaptglobal.io/wp-content/uploads/Kevin-Munro.jpg' },
  { name: 'Matteo Natale',       title: 'Chief Operating Officer',                   img: 'https://adaptglobal.io/wp-content/uploads/Matteo-Natale.jpg' },
  { name: 'Svetlana Jacobs',     title: 'VP of Localization',                        img: 'https://adaptglobal.io/wp-content/uploads/Svetlana-Jacobs.jpg' },
  { name: 'Bipin Doshi',         title: 'VP of Operations',                          img: 'https://adaptglobal.io/wp-content/uploads/Bipin-Doshi.jpg' },
  { name: 'Rachel Marie Hamid',  title: 'VP Client Solutions, North America',        img: 'https://adaptglobal.io/wp-content/uploads/Rachel-Marie-Hamid.jpg' },
  { name: 'Robert Zablith',      title: 'VP Business Development & Talent',          img: 'https://adaptglobal.io/wp-content/uploads/Robert-Zablith.jpg' },
  { name: 'Madisen Farace',      title: 'Director of Marketing & Communications',    img: 'https://adaptglobal.io/wp-content/uploads/Madisen-Farace.jpg' },
];

const PRINCIPLES = [
  {
    title: 'Make the Acceptable Exceptional',
    body: 'There is too much focus on making things cheaper and not enough focus on making them exceptional. We combine new technology with the best experts and artists to create an exceptional output.',
    accent: 'var(--accent)',
  },
  {
    title: 'Service Matters',
    body: 'We love our customers and want to build relationships that exceed expectations. Working with us should be easy and frictionless — full end-to-end service with great experts, artists, technology, and support.',
    accent: 'var(--accent-2)',
  },
  {
    title: 'Great AI Solutions Leave Room to Play',
    body: 'AI should empower users, enhancing capabilities without replacing human expertise or creativity. There should be plenty of room for play, passion, and fun.',
    accent: 'var(--accent)',
  },
  {
    title: 'Artistry at the Core',
    body: 'Build processes around key operators, experts, and artists. Give them the best tools, more time, and the required space to create. Artistry is at the core of what we do.',
    accent: 'var(--accent-2)',
  },
  {
    title: 'Localization is Storytelling',
    body: 'Localization is more than translating a line or a scene. It requires translating the entire story — preserving the author\'s authenticity while ensuring it resonates in every language.',
    accent: 'var(--accent)',
  },
  {
    title: 'Regionally Authentic, Globally Resonant',
    body: 'Our goal is to resonate with audiences worldwide. We balance preserving original intent while adapting to viewers\' culture and context, making every dub feel native.',
    accent: 'var(--accent-2)',
  },
  {
    title: 'Better Translations, Better Dubs',
    body: 'We believe there is room for improvement in the dubs made today and are committed to being open and innovative in our goal to make them better — always.',
    accent: 'var(--accent)',
  },
];

const REGIONAL_LEADS = [
  { name: 'Yasmine B.', role: 'French Producer',               img: 'https://adaptglobal.io/wp-content/uploads/Yasmine-B-French-P.jpg' },
  { name: 'Ahmad',       role: 'Arabic Language Lead',          img: 'https://adaptglobal.io/wp-content/uploads/Ahmad-1.jpg' },
  { name: 'Divya',       role: 'Hindi Tech Producer',           img: 'https://adaptglobal.io/wp-content/uploads/Divya.jpg' },
  { name: 'Murat',       role: 'Middle East Regional Head',     img: 'https://adaptglobal.io/wp-content/uploads/Murat.jpg' },
  { name: 'Ariana',      role: 'LAS Cultural Ambassador',       img: 'https://adaptglobal.io/wp-content/uploads/Ariana.jpg' },
  { name: 'Suzy',        role: 'Korean Cultural Ambassador',    img: 'https://adaptglobal.io/wp-content/uploads/Suzy.jpg' },
  { name: 'Beizhou',     role: 'Mandarin Cultural Ambassador',  img: 'https://adaptglobal.io/wp-content/uploads/Beizhou.jpg' },
  { name: 'Pedro',       role: 'European Portuguese CA',        img: 'https://adaptglobal.io/wp-content/uploads/Pedro.jpg' },
  { name: 'Rafael',      role: 'Brazilian Portuguese CA',       img: 'https://adaptglobal.io/wp-content/uploads/Rafael.jpg' },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <header style={{
          paddingTop: 72, borderBottom: '1px solid var(--line)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-10%', right: '10%', width: '50%', height: '90%',
            borderRadius: '50%', background: 'var(--accent)', opacity: 0.04, filter: 'blur(120px)',
          }} />
          <div className="wrap" style={{ padding: 'clamp(48px,6vw,80px) var(--pad)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'end' }} className="about-hero-grid">
              <div>
                <div className="eyebrow" style={{ color: 'var(--accent)' }}>About Adapt</div>
                <h1 className="display-2" style={{ marginTop: 16 }}>
                  Innovation{' '}
                  <span className="italic-serif" style={{ color: 'var(--accent)' }}>meets</span>{' '}
                  tradition.
                </h1>
              </div>
              <div>
                <p className="lead">
                  Justin Beaudin, an industry veteran, founded Adapt in April 2024 to explore how
                  AI can complement the creative process — helping media professionals and artists
                  achieve more while preserving the highest quality.
                </p>
                <p className="body" style={{ marginTop: 20 }}>
                  Today, Adapt combines powerful AI tools for transcription, translation, and voice
                  synthesis with regional experts and artists to create quality dubs and subtitles
                  for premium content — at 4× less than market rates, delivered 4× faster.
                </p>
                <p className="body" style={{ marginTop: 16 }}>
                  We are a small team of experts from major studios — Netflix, Warner, NBCUniversal —
                  and industry providers like Deluxe and IYUNO. We are proud of the tradition of
                  localization and excited to shape its future.
                </p>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:880px){.about-hero-grid{grid-template-columns:1fr!important;}}`}</style>
        </header>

        {/* Mission stat strip */}
        <section className="section-pad-sm" style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }} className="stat-strip">
              {[
                { stat: '2024', label: 'Founded' },
                { stat: '20+', label: 'Languages covered' },
                { stat: '4×', label: 'Faster than traditional' },
                { stat: '4×', label: 'Cheaper than market rate' },
              ].map(m => (
                <div key={m.label} style={{ background: 'var(--bg-2)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', color: 'var(--accent)', lineHeight: 1 }}>{m.stat}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 10 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){.stat-strip{grid-template-columns:1fr 1fr!important;}}`}</style>
        </section>

        {/* Leadership */}
        <section className="section-pad">
          <div className="wrap">
            <div className="section-label"><span>01 — Leadership</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'end', marginBottom: 56 }} className="lead-hdr">
              <h2 className="display-2">
                Experts from the<br />
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>world's best</span> studios.
              </h2>
              <p className="lead">
                Our leadership team brings decades of combined experience from Netflix, Warner Bros.,
                NBCUniversal, Deluxe, and IYUNO — united by a belief that AI and artistry are better together.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="leadership-grid">
              {LEADERSHIP.map(p => (
                <figure key={p.name} style={{
                  margin: 0, borderRadius: 16, overflow: 'hidden',
                  background: 'var(--bg-3)', border: '1px solid var(--line)',
                  position: 'relative', aspectRatio: '3 / 4',
                }}>
                  <img src={p.img} alt={`${p.name} — ${p.title}`} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'saturate(0.85) contrast(1.05)' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,11,0.9) 0%, transparent 55%)',
                  }} />
                  <figcaption style={{ position: 'absolute', left: 16, right: 16, bottom: 16 }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.2 }}>{p.name}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 5, lineHeight: 1.4 }}>{p.title}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:880px){.lead-hdr{grid-template-columns:1fr!important;}.leadership-grid{grid-template-columns:repeat(2,1fr)!important;}}
            @media(max-width:480px){.leadership-grid{grid-template-columns:1fr!important;}}
          `}</style>
        </section>

        {/* Regional team */}
        <section id="team" className="section-pad" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="wrap">
            <div className="section-label"><span>02 — Regional leads</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'end', marginBottom: 56 }} className="regional-hdr">
              <h2 className="display-2">
                Translation is<br />
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>storytelling.</span>
              </h2>
              <p className="lead">
                Our Language Leads — Cultural Ambassadors and Tech Producers — are at the center
                of every dub. The best linguists, artists, and audio engineers in the regions
                we serve, working alongside Nuance.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="regional-grid">
              {REGIONAL_LEADS.map(p => (
                <figure key={p.name} style={{
                  margin: 0, borderRadius: 16, overflow: 'hidden',
                  background: 'var(--bg-3)', border: '1px solid var(--line)',
                  position: 'relative', aspectRatio: '4 / 5',
                }}>
                  <img src={p.img} alt={`${p.name} — ${p.role}`} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) contrast(1.05)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,11,0.85) 0%, transparent 50%)' }} />
                  <figcaption style={{ position: 'absolute', left: 20, right: 20, bottom: 20 }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{p.name}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 4 }}>{p.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:880px){.regional-hdr{grid-template-columns:1fr!important;}.regional-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* Mission Principles */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="section-label"><span>03 — Mission principles</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'end', marginBottom: 64 }} className="mission-hdr">
              <h2 className="display-2">
                What we{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>stand for.</span>
              </h2>
              <p className="lead">
                Adapt's beliefs and mission principles are foundational to our business.
                We share them broadly because they create accountability to our own vision.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }} className="principles-grid">
              {PRINCIPLES.map((p, i) => (
                <div key={i} style={{
                  padding: 'clamp(28px,3vw,40px)',
                  background: 'var(--bg-2)', border: '1px solid var(--line)',
                  borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 16,
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div aria-hidden="true" style={{
                    position: 'absolute', top: -60, right: -60, width: 160, height: 160,
                    borderRadius: '50%', background: p.accent, opacity: 0.06, filter: 'blur(40px)',
                  }} />
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: p.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2vw,30px)', lineHeight: 1.1 }}>{p.title}</h3>
                  <p className="body" style={{ margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:880px){.mission-hdr{grid-template-columns:1fr!important;}.principles-grid{grid-template-columns:1fr!important;}}
          `}</style>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

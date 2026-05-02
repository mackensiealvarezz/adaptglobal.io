'use client';
import React from 'react';

// Audiences — dual path: Studios & Broadcasters / Creators
const Audiences = () => {
  return (
    <section id="studios" className="section-pad">
      <div className="wrap">
        <div className="section-label"><span>06 — Who we serve</span></div>

        <h2 className="display-2" style={{ marginBottom: 56, maxWidth: '14ch' }}>
          Built for two audiences who never compromise on craft.
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
          background: 'var(--line)',
          border: '1px solid var(--line)',
          borderRadius: 20,
          overflow: 'hidden',
        }} className="aud-grid">
          <AudienceCard
            tag="Enterprise"
            title="Studios & Broadcasters"
            body="High-volume catalog localization, theatrical-grade dubbing, and broadcast-compliant deliverables — engineered for scale without losing the human craft your audiences expect."
            bullets={[
              'Catalog & series localization at scale',
              'Theatrical-quality dubbing pipelines',
              'Broadcast & streaming deliverables',
              'NDA-protected, TPN-aligned workflows',
            ]}
            cta="Talk to enterprise"
          />
          <AudienceCard
            tag="Creator"
            title="Creators & Studios-of-One"
            body="The same Nuance platform, sized for independent creators. Reach global audiences with dubs that don't sound like dubs — at a price that doesn't gatekeep your growth."
            bullets={[
              'Self-serve language packs',
              'YouTube & podcast-ready masters',
              'Voice cloning of your own performance',
              'Per-episode pricing',
            ]}
            cta="Start as a creator"
            accent
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .aud-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const AudienceCard = ({ tag, title, body, bullets, cta, accent }) => (
  <div style={{
    background: 'var(--bg-2)',
    padding: 'clamp(28px, 4vw, 56px)',
    display: 'flex', flexDirection: 'column', gap: 24,
    position: 'relative',
    overflow: 'hidden',
  }}>
    {accent && (
      <div aria-hidden="true" style={{
        position: 'absolute', top: -100, right: -100,
        width: 280, height: 280, borderRadius: '50%',
        background: 'var(--accent)', opacity: 0.06, filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
    )}
    <div style={{
      fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: accent ? 'var(--accent)' : 'var(--fg-3)',
    }}>{tag}</div>
    <h3 className="display-3">{title}</h3>
    <p className="body">{body}</p>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
      {bullets.map(b => (
        <li key={b} style={{
          display: 'flex', alignItems: 'flex-start', gap: 12,
          fontSize: 14, color: 'var(--fg-2)',
          paddingTop: 10, borderTop: '1px solid var(--line)',
        }}>
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12 }}>→</span>
          {b}
        </li>
      ))}
    </ul>
    <div style={{ marginTop: 'auto', paddingTop: 12 }}>
      <a href="#contact" className={accent ? 'btn btn--accent' : 'btn btn--primary'}>
        {cta} <span className="arrow">→</span>
      </a>
    </div>
  </div>
);

export { Audiences };

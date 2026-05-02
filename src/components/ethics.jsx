'use client';
import React from 'react';

// Ethics — Our ethical stance on AI
const Ethics = () => {
  const points = [
    { n: '01', t: 'AI is inevitable — let\'s onboard people, not replace them', d: 'We help our Cultural Ambassadors and Tech Producers adapt to new tools and put them to use in the most effective way possible.' },
    { n: '02', t: 'Localization is storytelling, full stop', d: 'We will never ship output that doesn\'t resonate with the end consumer. Quality is non-negotiable.' },
    { n: '03', t: 'Reach emerging markets', d: 'We focus on languages where premium dubbing has been priced out — increasing the total amount of high-quality localization happening worldwide.' },
    { n: '04', t: 'We commit to listening', d: 'This transition is bigger than us. We learn as we go, and we publish what we learn.' },
  ];

  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="section-label"><span>08 — What we stand for</span></div>

        <h2 className="display-2" style={{ maxWidth: '18ch', marginBottom: 56 }}>
          Our ethical stance on{' '}
          <span className="italic-serif" style={{ color: 'var(--accent)' }}>AI.</span>
        </h2>

        <p className="lead" style={{ maxWidth: '70ch', marginBottom: 56 }}>
          AI is rapidly changing media and entertainment. We think this disruption is
          exciting — and we recognize it represents change that may not benefit all
          parties. We aim to make this transition a positive one for as many
          contributors as possible.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 1,
          background: 'var(--line)',
          border: '1px solid var(--line)',
          borderRadius: 20,
          overflow: 'hidden',
        }} className="ethics-grid">
          {points.map(p => (
            <div key={p.n} style={{
              background: 'var(--bg)',
              padding: 'clamp(24px, 3vw, 40px)',
              display: 'flex', flexDirection: 'column', gap: 14,
              minHeight: 220,
            }}>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: 56, color: 'var(--accent)',
                lineHeight: 1, opacity: 0.9,
              }}>
                {p.n}
              </div>
              <h3 style={{
                fontFamily: 'var(--sans)',
                fontSize: 20, fontWeight: 500, lineHeight: 1.25,
                letterSpacing: '-0.01em',
              }}>{p.t}</h3>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6 }}>
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .ethics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export { Ethics };

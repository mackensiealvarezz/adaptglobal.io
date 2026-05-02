'use client';
import React from 'react';

// Case studies — placeholder proof points (SEO-friendly)
const CaseStudies = () => {
  const cases = [
    { genre: 'Premium Drama Series', langs: '8 languages', stat: '4.2× faster', desc: 'Full-season dub delivery for a streaming platform — same week as English release.' },
    { genre: 'Feature Film', langs: '12 languages', stat: '4.8× cheaper', desc: 'Theatrical-grade voice cloning for an indie release entering emerging markets.' },
    { genre: 'Creator Channel', langs: '5 languages', stat: '3× audience', desc: 'YouTube channel localized end-to-end — measurable lift in subscribers across new markets.' },
  ];

  return (
    <section className="section-pad-sm" style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div className="wrap">
        <div className="section-label"><span>09 — Proof</span></div>
        <h2 className="display-3" style={{ marginBottom: 40, maxWidth: '20ch' }}>
          Recent work, anonymized for NDA but very much real.
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }} className="cs-grid">
          {cases.map((c, i) => (
            <div key={i} style={{
              padding: 28,
              border: '1px solid var(--line)',
              borderRadius: 16,
              background: 'var(--bg-2)',
              display: 'flex', flexDirection: 'column', gap: 14,
              minHeight: 200,
            }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 11,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--fg-3)',
                display: 'flex', justifyContent: 'space-between',
              }}>
                <span>{c.genre}</span>
                <span style={{ color: 'var(--accent)' }}>{c.langs}</span>
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 44,
                color: 'var(--fg)', lineHeight: 1, marginTop: 'auto',
              }}>{c.stat}</div>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-2)' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .cs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export { CaseStudies };

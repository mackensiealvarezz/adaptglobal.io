'use client';
import React from 'react';

// Metrics strip — sits right under hero, big numbers
const Metrics = () => {
  const stats = [
    { value: '500+', label: 'Human experts worldwide', sub: 'Cultural Ambassadors & Tech Producers', accent: true },
    { value: '100%', label: 'Human-reviewed output', sub: 'Every line, every time — no exceptions', accent: true },
    { value: '4×', label: 'Less than market rates', sub: 'Cost reduction without quality loss' },
    { value: '4×', label: 'Faster delivery', sub: 'From source to streaming-ready' },
  ];

  return (
    <section style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      background: 'var(--bg-2)',
    }}>
      <div className="wrap">
        <div className="metrics-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }}>
          {stats.map((s, i) => (
            <div key={i} className="metrics-cell" style={{
              padding: 'clamp(28px, 4vw, 48px) clamp(20px, 2.5vw, 32px)',
              borderRight: i < stats.length - 1 ? '1px solid var(--line)' : 'none',
              display: 'flex', flexDirection: 'column', gap: 8,
              background: s.accent ? 'linear-gradient(180deg, color-mix(in oklab, var(--accent) 5%, transparent), transparent)' : 'transparent',
            }}>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(40px, 5vw, 72px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: s.accent ? 'var(--accent)' : 'var(--fg)',
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, marginTop: 8, color: 'var(--fg)' }}>
                {s.label}
              </div>
              <div style={{ fontSize: 13, color: 'var(--fg-3)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .metrics-cell:nth-child(2) { border-right: none !important; }
          .metrics-cell:nth-child(1), .metrics-cell:nth-child(2) {
            border-bottom: 1px solid var(--line);
          }
        }
        @media (max-width: 480px) {
          .metrics-grid { grid-template-columns: 1fr !important; }
          .metrics-cell { border-right: none !important; }
          .metrics-cell:not(:last-child) { border-bottom: 1px solid var(--line); }
        }
      `}</style>
    </section>
  );
};

export { Metrics };

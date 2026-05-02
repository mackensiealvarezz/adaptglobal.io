'use client';
import React from 'react';

// Team — Language Leads
const Team = () => {
  const people = [
    { name: 'Yasmine B.', role: 'French Producer', img: 'https://adaptglobal.io/wp-content/uploads/Yasmine-B-French-P.jpg' },
    { name: 'Ahmad',      role: 'Arabic Cultural Ambassador', img: 'https://adaptglobal.io/wp-content/uploads/Ahmad-1.jpg' },
    { name: 'Divya',      role: 'Hindi Tech Producer', img: 'https://adaptglobal.io/wp-content/uploads/Divya.jpg' },
  ];

  return (
    <section id="about" className="section-pad" style={{
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--line)',
    }}>
      <div className="wrap">
        <div className="section-label"><span>07 — The team</span></div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 96px)', alignItems: 'end',
          marginBottom: 56,
        }} className="team-header">
          <h2 className="display-2">
            Translation is<br />
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>storytelling.</span>
          </h2>
          <p className="lead">
            Our Language Leads — Cultural Ambassadors and Tech Producers — are at the
            center of every dub. The best linguists, artists, and audio engineers in
            the regions we serve, working alongside Nuance to make every line resonate.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }} className="team-grid">
          {people.map(p => (
            <figure key={p.name} style={{
              margin: 0,
              borderRadius: 16,
              overflow: 'hidden',
              background: 'var(--bg-3)',
              border: '1px solid var(--line)',
              position: 'relative',
              aspectRatio: '4 / 5',
            }}>
              <img src={p.img} alt={`${p.name}, ${p.role}`} loading="lazy"
                   style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) contrast(1.05)' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0) 50%)',
              }} />
              <figcaption style={{
                position: 'absolute', left: 20, right: 20, bottom: 20,
                color: 'var(--fg)',
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24 }}>{p.name}</div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 11,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--fg-3)', marginTop: 4,
                }}>{p.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <a href="#about" className="btn">Meet the full network <span className="arrow">→</span></a>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .team-header { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export { Team };

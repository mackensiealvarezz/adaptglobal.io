'use client';
import React from 'react';

// Languages — coverage grid (huge for SEO)
const Languages = () => {
  const langs = [
    { code: 'EN', name: 'English', region: 'US/UK/AU' },
    { code: 'ES', name: 'Spanish', region: 'LatAm/EU' },
    { code: 'PT', name: 'Portuguese', region: 'BR/PT' },
    { code: 'FR', name: 'French', region: 'FR/CA' },
    { code: 'DE', name: 'German', region: 'DE/AT' },
    { code: 'IT', name: 'Italian', region: 'IT' },
    { code: 'NL', name: 'Dutch', region: 'NL/BE' },
    { code: 'PL', name: 'Polish', region: 'PL' },
    { code: 'RU', name: 'Russian', region: 'RU' },
    { code: 'TR', name: 'Turkish', region: 'TR' },
    { code: 'AR', name: 'Arabic', region: 'MENA' },
    { code: 'HE', name: 'Hebrew', region: 'IL' },
    { code: 'HI', name: 'Hindi', region: 'IN' },
    { code: 'TA', name: 'Tamil', region: 'IN/LK' },
    { code: 'TE', name: 'Telugu', region: 'IN' },
    { code: 'BN', name: 'Bengali', region: 'IN/BD' },
    { code: 'UR', name: 'Urdu', region: 'PK/IN' },
    { code: 'JA', name: 'Japanese', region: 'JP' },
    { code: 'KO', name: 'Korean', region: 'KR' },
    { code: 'ZH', name: 'Mandarin', region: 'CN/TW' },
    { code: 'TH', name: 'Thai', region: 'TH' },
    { code: 'VI', name: 'Vietnamese', region: 'VN' },
    { code: 'ID', name: 'Indonesian', region: 'ID' },
    { code: 'MS', name: 'Malay', region: 'MY' },
    { code: 'TL', name: 'Tagalog', region: 'PH' },
    { code: 'SW', name: 'Swahili', region: 'KE/TZ' },
  ];

  return (
    <section id="languages" className="section-pad" style={{
      background: 'var(--bg-2)', borderTop: '1px solid var(--line)',
    }}>
      <div className="wrap">
        <div className="section-label"><span>05 — Languages</span></div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 5vw, 80px)', alignItems: 'end', marginBottom: 56,
        }} className="lang-header">
          <h2 className="display-2">
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>40+</span> languages.<br />
            Real regional<br />expertise.
          </h2>
          <p className="lead">
            We focus on emerging dubbing markets where premium localization unlocks audiences
            that haven't had it. Every language is led by native Cultural Ambassadors —
            not generic translators.
          </p>
        </div>

        <div className="lang-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 1,
          background: 'var(--line)',
          border: '1px solid var(--line)',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          {langs.map(l => (
            <div key={l.code} style={{
              background: 'var(--bg-2)',
              padding: '20px 18px',
              display: 'flex', flexDirection: 'column', gap: 4,
              minHeight: 96,
              transition: 'background 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-3)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-2)'}
            >
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 11,
                letterSpacing: '0.15em',
                color: langs.indexOf(l) % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
              }}>{l.code}</div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>{l.name}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--mono)' }}>{l.region}</div>
            </div>
          ))}
          {/* "+ more" cell */}
          <div style={{
            background: 'var(--bg-2)',
            padding: '20px 18px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            gap: 4, minHeight: 96,
            color: 'var(--fg-3)',
          }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 24 }}>+ more</div>
            <div style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '0.15em' }}>
              ON REQUEST
            </div>
          </div>
        </div>

        <p style={{ marginTop: 24, fontSize: 13, color: 'var(--fg-3)', maxWidth: '70ch' }}>
          Don't see your language? Our network is expanding constantly.{' '}
          <a href="#contact" style={{ color: 'var(--accent)', borderBottom: '1px solid currentColor' }}>
            Tell us what you need.
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 1100px) { .lang-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width: 720px)  { .lang-grid { grid-template-columns: repeat(3, 1fr) !important; } .lang-header { grid-template-columns: 1fr !important; } }
        @media (max-width: 480px)  { .lang-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
};

export { Languages };

'use client';
import React from 'react';

// Footer
const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--line)',
      padding: '56px 0 32px',
    }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 56,
        }} className="foot-grid">
          <div>
            <a href="/" aria-label="Adapt — home" style={{
              display: 'inline-flex', alignItems: 'center',
            }}>
              <img
                src="https://adaptglobal.io/wp-content/uploads/2024/04/Adapt_Logo_Primary_Color-White.svg"
                alt="Adapt"
                style={{ height: 32, width: 'auto', display: 'block' }}
              />
            </a>
            <p style={{ marginTop: 20, color: 'var(--fg-2)', fontSize: 14, maxWidth: '40ch' }}>
              The future of media localization — AI-powered tools, human-led craft.
            </p>
            <a
              href="https://nuance.adaptglobal.io/"
              style={{
                marginTop: 20,
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '12px 18px',
                border: '1px solid var(--accent-2)',
                borderRadius: 999,
                background: 'color-mix(in oklab, var(--accent-2) 8%, transparent)',
                color: 'var(--fg)',
                fontSize: 13,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'color-mix(in oklab, var(--accent-2) 18%, transparent)'}
              onMouseLeave={e => e.currentTarget.style.background = 'color-mix(in oklab, var(--accent-2) 8%, transparent)'}
            >
              <span style={{
                width: 8, height: 8, borderRadius: 999,
                background: 'var(--accent-2)',
                boxShadow: '0 0 10px var(--accent-2-glow)',
              }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Nuance
              </span>
              <span style={{ color: 'var(--fg-3)' }}>·</span>
              <span>Login to platform</span>
              <span style={{ marginLeft: 4 }}>↗</span>
            </a>
          </div>

          <FooterCol title="Platform" links={[
            ['Nuance', '/platform'],
            ['Process', '/studios-broadcasters#process'],
            ['Languages', '/#languages'],
            ['Brand guidelines', 'https://adaptglobal.io/brand/'],
          ]} />
          <FooterCol title="For" links={[
            ['Studios & Broadcasters', '/studios-broadcasters'],
            ['Creators', '/creators'],
            ['Freelancers', 'mailto:joinus@adaptglobal.io'],
          ]} />
          <FooterCol title="Company" links={[
            ['About', '/about'],
            ['Press', 'https://adaptglobal.io/press/'],
            ['Privacy', 'https://adaptglobal.io/privacy-policy/'],
            ['Contact', 'mailto:info@adaptglobal.io'],
          ]} />
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 24, borderTop: '1px solid var(--line)',
          fontFamily: 'var(--mono)', fontSize: 11,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--fg-3)', flexWrap: 'wrap', gap: 16,
        }}>
          <div>© 2026 Adapt — All rights reserved</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="https://www.linkedin.com/company/adaptglobal">LinkedIn ↗</a>
            <a href="https://www.instagram.com/adaptglobal.io/">Instagram ↗</a>
            <a href="https://www.tiktok.com/@adaptglobal.io">TikTok ↗</a>
            <a href="https://www.youtube.com/@Adaptglobal-io">YouTube ↗</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .foot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

const FooterCol = ({ title, links }) => (
  <div>
    <div className="eyebrow" style={{ marginBottom: 16 }}>{title}</div>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
      {links.map(([label, href]) => (
        <li key={label}>
          <a href={href} style={{ fontSize: 14, color: 'var(--fg-2)' }}
             onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
             onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-2)'}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export { Footer };

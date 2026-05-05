'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Top navigation
const Nav = ({ tweaks }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(10,10,11,0.78)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px) saturate(1.2)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.2)' : 'none',
    borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
  };

  const links = [
    { label: 'Platform', href: '/platform' },
    { label: 'Studios & Broadcasters', href: '/studios-broadcasters' },
    { label: 'Creators', href: '/creators' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav style={navStyle} aria-label="Primary">
      <div className="wrap" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72, gap: 24,
      }}>
        <Link href="/" aria-label="Adapt — home" style={{
          display: 'flex', alignItems: 'center',
          height: 28,
        }}>
          <img
            src="https://adaptglobal.io/wp-content/uploads/2024/04/Adapt_Logo_Primary_Color-White.svg"
            alt="Adapt"
            style={{ height: 24, width: 'auto', display: 'block' }}
          />
        </Link>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 28,
          fontSize: 14, color: 'var(--fg-2)',
        }} className="nav-links-desktop">
          {links.map(l => {
            const active = pathname === l.href || pathname.startsWith(l.href + '/');
            return (
              <Link key={l.label} href={l.href} style={{
                transition: 'color 0.15s',
                color: active ? 'var(--fg)' : 'var(--fg-2)',
                borderBottom: active ? '1px solid var(--accent)' : '1px solid transparent',
                paddingBottom: 2,
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
                onMouseLeave={e => e.currentTarget.style.color = active ? 'var(--fg)' : 'var(--fg-2)'}>
                {l.label}
              </Link>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a
            href="https://nuance.adaptglobal.io/"
            className="nuance-login"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 16px', fontSize: 13,
              border: '1px solid var(--line-2)',
              borderRadius: 999,
              color: 'var(--fg)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(74,144,226,0.08)';
              e.currentTarget.style.borderColor = 'var(--accent-2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'var(--line-2)';
            }}
          >
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: 999,
              background: 'var(--accent-2)',
              boxShadow: '0 0 8px var(--accent-2-glow)',
            }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Nuance
            </span>
            <span style={{ color: 'var(--fg-3)' }}>·</span>
            <span>Login</span>
          </a>
          <a href="mailto:info@adaptglobal.io" className="btn btn--primary nav-contact" style={{
            padding: '10px 18px', fontSize: 13,
          }}>
            Get in touch <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .nav-links-desktop { display: none !important; }
        }
        @media (max-width: 640px) {
          .nav-contact { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export { Nav };

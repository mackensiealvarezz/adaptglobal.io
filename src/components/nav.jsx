'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = ({ tweaks }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => { setMenuOpen(false); }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { label: 'Platform', href: '/platform' },
    { label: 'Studios & Broadcasters', href: '/studios-broadcasters' },
    { label: 'Creators', href: '/creators' },
    { label: 'About', href: '/about' },
    { label: 'Press', href: '/press' },
  ];

  const navBg = menuOpen
    ? 'rgba(10,10,11,0.98)'
    : scrolled ? 'rgba(10,10,11,0.78)' : 'transparent';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 200,
      transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
      background: navBg,
      backdropFilter: scrolled || menuOpen ? 'blur(16px) saturate(1.2)' : 'none',
      WebkitBackdropFilter: scrolled || menuOpen ? 'blur(16px) saturate(1.2)' : 'none',
      borderBottom: scrolled || menuOpen ? '1px solid var(--line)' : '1px solid transparent',
    }} aria-label="Primary">

      {/* Top bar */}
      <div className="wrap" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72, gap: 24,
      }}>
        <Link href="/" aria-label="Adapt — home" style={{ display: 'flex', alignItems: 'center', height: 28 }}>
          <img
            src="https://adaptglobal.io/wp-content/uploads/2024/04/Adapt_Logo_Primary_Color-White.svg"
            alt="Adapt"
            style={{ height: 24, width: 'auto', display: 'block' }}
          />
        </Link>

        {/* Desktop links */}
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
              borderRadius: 999, color: 'var(--fg)', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(74,144,226,0.08)'; e.currentTarget.style.borderColor = 'var(--accent-2)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--line-2)'; }}
          >
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: 999,
              background: 'var(--accent-2)', boxShadow: '0 0 8px var(--accent-2-glow)',
            }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Nuance</span>
            <span style={{ color: 'var(--fg-3)' }}>·</span>
            <span>Login</span>
          </a>
          <a href="mailto:info@adaptglobal.io" className="btn btn--primary nav-contact" style={{ padding: '10px 18px', fontSize: 13 }}>
            Get in touch <span className="arrow">→</span>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              display: 'none',
              flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              width: 40, height: 40, gap: 5,
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: 0, flexShrink: 0,
            }}
          >
            <span style={{
              display: 'block', width: 22, height: 1.5, background: 'var(--fg)',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 22, height: 1.5, background: 'var(--fg)',
              transition: 'opacity 0.2s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 22, height: 1.5, background: 'var(--fg)',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div style={{
        display: menuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '8px 0 32px',
        borderTop: '1px solid var(--line)',
      }} className="nav-mobile-panel">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {links.map(l => {
            const active = pathname === l.href || pathname.startsWith(l.href + '/');
            return (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontSize: 22,
                  fontFamily: 'var(--serif)',
                  color: active ? 'var(--accent)' : 'var(--fg)',
                  borderBottom: '1px solid var(--line)',
                  letterSpacing: '-0.01em',
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="mailto:info@adaptglobal.io" className="btn btn--primary" style={{ textAlign: 'center' }}>
              Get in touch <span className="arrow">→</span>
            </a>
            <a
              href="https://nuance.adaptglobal.io/"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '12px 0', fontSize: 14,
                border: '1px solid var(--line-2)', borderRadius: 999, color: 'var(--fg)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent-2)', boxShadow: '0 0 8px var(--accent-2-glow)' }} />
              Nuance Login
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 640px) {
          .nav-contact { display: none !important; }
        }
        @media (min-width: 1081px) {
          .nav-mobile-panel { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export { Nav };

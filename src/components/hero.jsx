'use client';
import React from 'react';

// Hero — language-morphing headline with ambient video background and live waveform
const Hero = ({ tweaks }) => {
  const phrases = [
    { lang: 'EN', label: 'English',   word: 'localization' },
    { lang: 'ES', label: 'Spanish',   word: 'localización' },
    { lang: 'HI', label: 'Hindi',     word: 'स्थानीयकरण' },
    { lang: 'FR', label: 'French',    word: 'localisation' },
    { lang: 'JA', label: 'Japanese',  word: 'ローカリゼーション' },
    { lang: 'PT', label: 'Portuguese',word: 'localização' },
    { lang: 'AR', label: 'Arabic',    word: 'التوطين' },
    { lang: 'RU', label: 'Russian',   word: 'локализация' },
    { lang: 'KO', label: 'Korean',    word: '현지화' },
    { lang: 'DE', label: 'German',    word: 'Lokalisierung' },
  ];

  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused || tweaks?.motion === 'off') return;
    const speed = tweaks?.motion === 'reduced' ? 4500 : 2600;
    const t = setInterval(() => setIdx(i => (i + 1) % phrases.length), speed);
    return () => clearInterval(t);
  }, [paused, tweaks?.motion]);

  const cur = phrases[idx];

  return (
    <header style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 68,
      overflow: 'hidden',
      isolation: 'isolate',
    }}>
      {/* Ambient video background */}
      {tweaks?.heroBg !== 'minimal' && (
        <video
          autoPlay muted loop playsInline
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', zIndex: -2,
            opacity: tweaks?.heroBg === 'subtle' ? 0.18 : 0.32,
            filter: 'saturate(0.7) contrast(1.05)',
          }}
        >
          <source src="https://adaptglobal.wpenginepowered.com/wp-content/uploads/2024/04/Adapt_Intro-02.mp4" type="video/mp4" />
        </video>
      )}

      {/* Gradient veil */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: -1,
        background: `
          radial-gradient(80% 60% at 50% 20%, transparent, rgba(10,10,11,0.7) 70%, var(--bg) 100%),
          linear-gradient(to bottom, rgba(10,10,11,0.55), rgba(10,10,11,0.85) 60%, var(--bg))
        `,
      }} />

      {/* Top bar of meta */}
      <div className="wrap" style={{
        display: 'flex', justifyContent: 'space-between',
        paddingTop: 28, paddingBottom: 28,
        fontFamily: 'var(--mono)', fontSize: 11,
        textTransform: 'uppercase', letterSpacing: '0.18em',
        color: 'var(--fg-3)',
      }}>
        <span>◉ The Future of Media Localization</span>
        <span className="hero-meta-r">EST · 2024 / Global Network</span>
      </div>

      {/* Main hero content */}
      <div className="wrap" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '4vh', paddingBottom: '8vh',
      }}>
        <h1 className="display-1" style={{ maxWidth: '14ch' }}>
          The future of<br />
          <span style={{ color: 'var(--accent-2)' }} className="italic-serif">media</span>{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <span
              key={cur.word}
              className="italic-serif"
              style={{
                color: 'var(--accent)',
                display: 'inline-block',
                opacity: 1,
                animation: 'morphIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both',
              }}
            >
              {cur.word}
            </span>
            <Waveform paused={paused} />
          </span>
        </h1>

        <p className="lead" style={{ marginTop: 32, maxWidth: '52ch' }}>
          We combine powerful AI tools for transcription, translation, and voice synthesis
          with regional experts — delivering premium dubs and subtitles at <strong style={{ color: 'var(--fg)' }}>4× less than market rates</strong> and <strong style={{ color: 'var(--fg)' }}>4× faster</strong>.
        </p>

        <div style={{
          marginTop: 36,
          display: 'flex', flexWrap: 'wrap', gap: 12,
          alignItems: 'center',
        }}>
          <a href="#contact" className="btn btn--primary" style={{ padding: '16px 24px', fontSize: 14 }}>
            Get in touch <span className="arrow">→</span>
          </a>
          <a href="#demo" className="btn" style={{ padding: '16px 24px', fontSize: 14 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 18, height: 18, borderRadius: 999,
              background: 'var(--accent)', color: '#0a0a0b',
              fontSize: 9,
            }}>▶</span>
            Hear the difference
          </a>
        </div>

        {/* Language selector strip */}
        <div style={{ marginTop: 'clamp(48px, 8vh, 88px)' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Now showing — {cur.label}
          </div>
          <div
            role="tablist"
            aria-label="Preview language"
            style={{
              display: 'flex', flexWrap: 'wrap', gap: 6,
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {phrases.map((p, i) => (
              <button
                key={p.lang}
                role="tab"
                aria-selected={i === idx}
                onClick={() => setIdx(i)}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '8px 12px',
                  background: i === idx ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
                  color: i === idx ? '#0a0a0b' : 'var(--fg-2)',
                  border: '1px solid',
                  borderColor: i === idx ? 'var(--accent)' : 'var(--line)',
                  borderRadius: 999,
                  transition: 'all 0.18s ease',
                }}
                onMouseEnter={(e) => {
                  if (i !== idx) {
                    e.currentTarget.style.borderColor = 'var(--line-2)';
                    e.currentTarget.style.color = 'var(--fg)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== idx) {
                    e.currentTarget.style.borderColor = 'var(--line)';
                    e.currentTarget.style.color = 'var(--fg-2)';
                  }
                }}
              >
                {p.lang} · {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="wrap" style={{
        paddingBottom: 28,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--mono)', fontSize: 11,
        textTransform: 'uppercase', letterSpacing: '0.18em',
        color: 'var(--fg-3)',
      }}>
        <span>Scroll to explore ↓</span>
        <span className="hero-meta-r">Trusted by studios &amp; broadcasters</span>
      </div>

      <style>{`
        @keyframes morphIn {
          0%   { opacity: 0; transform: translateY(0.2em) skewX(-4deg); filter: blur(6px); }
          60%  { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: none; filter: blur(0); }
        }
        .italic-serif { animation-fill-mode: forwards; }
        @media (max-width: 720px) {
          .hero-meta-r { display: none; }
        }
      `}</style>
    </header>
  );
};

// Live SVG waveform underline beneath the morphing word
const Waveform = ({ paused }) => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    if (paused) return;
    let raf, start = performance.now();
    const tick = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const N = 28;
  const bars = Array.from({ length: N }, (_, i) => {
    const phase = i * 0.45 + t * 4;
    const env = Math.sin((i / N) * Math.PI); // taper at edges
    const v = (Math.sin(phase) * 0.5 + 0.5) * 0.7 + 0.2;
    return Math.max(0.1, env * v);
  });

  return (
    <span aria-hidden="true" style={{
      position: 'absolute',
      left: 0, right: 0, bottom: '-0.2em',
      height: '0.4em',
      display: 'flex', alignItems: 'flex-end', gap: 2,
      pointerEvents: 'none',
      opacity: 0.55,
    }}>
      {bars.map((h, i) => (
        <span key={i} suppressHydrationWarning style={{
          flex: 1,
          height: `${(h * 100).toFixed(4)}%`,
          minHeight: 2,
          background: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
          borderRadius: 1,
        }} />
      ))}
    </span>
  );
};

export { Hero, Waveform };

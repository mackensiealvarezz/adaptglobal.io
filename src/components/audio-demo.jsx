'use client';
import React from 'react';

const CDN = 'https://adaptglobal.wpenginepowered.com/wp-content/uploads/';

const TRACK_FILES = {
  female: {
    EN: CDN + 'Adapt_Mix_Female_Eng.mp3',
    HI: CDN + 'Adapt_Mix_Female_Hindi_2.mp3',
    FR: CDN + 'Adapt_Mix_Female_French_3.mp3',
    RU: CDN + 'Adapt_Mix_Female_Russian_3.mp3',
    PT: CDN + 'Adapt_Mix_Female_BPO_1.mp3',
  },
  male: {
    EN: CDN + 'Adapt_Mix_Male_Eng_4.mp3',
    HI: CDN + 'Adapt_Mix_Male_Hindi_7.mp3',
    FR: CDN + 'Adapt_Mix_Male_French_6.mp3',
    RU: CDN + 'Adapt_Mix_Male_Russian_8.mp3',
    PT: CDN + 'Adapt_Mix_Male_BPO_5.mp3',
  },
};

const AudioDemo = () => {
  const tracks = [
    { code: 'EN', label: 'Original English', flag: '🇬🇧' },
    { code: 'HI', label: 'Hindi Dub', flag: '🇮🇳' },
    { code: 'FR', label: 'French Dub', flag: '🇫🇷' },
    { code: 'RU', label: 'Russian Dub', flag: '🇷🇺' },
    { code: 'PT', label: 'Brazilian Portuguese', flag: '🇧🇷' },
  ];

  const [voice, setVoice] = React.useState('female');
  const [active, setActive] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(12);
  const [loadError, setLoadError] = React.useState(false);
  const audioRef = React.useRef(null);

  const currentUrl = TRACK_FILES[voice][tracks[active].code];

  // Build / swap audio element
  React.useEffect(() => {
    const a = new Audio();
    a.preload = 'metadata';
    a.crossOrigin = 'anonymous';
    audioRef.current = a;

    const onTime = () => {
      if (a.duration > 0) {
        setProgress(a.currentTime / a.duration);
        setDuration(a.duration);
      }
    };
    const onEnded = () => { setPlaying(false); setProgress(1); };
    const onLoaded = () => { setDuration(a.duration || 12); setLoadError(false); };
    const onError = () => { setLoadError(true); setPlaying(false); };

    a.addEventListener('timeupdate', onTime);
    a.addEventListener('ended', onEnded);
    a.addEventListener('loadedmetadata', onLoaded);
    a.addEventListener('error', onError);

    return () => {
      a.pause();
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('ended', onEnded);
      a.removeEventListener('loadedmetadata', onLoaded);
      a.removeEventListener('error', onError);
    };
  }, []);

  // Switch source when voice/track changes
  React.useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.src = currentUrl;
    a.load();
    setProgress(0);
    setLoadError(false);
    if (playing) a.play().catch(() => setLoadError(true));
  }, [voice, active]);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      if (progress >= 0.999) { a.currentTime = 0; setProgress(0); }
      a.play().then(() => setPlaying(true)).catch(() => setLoadError(true));
    }
  };

  const seek = (p) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    a.currentTime = p * a.duration;
    setProgress(p);
  };

  return (
    <section id="demo" className="section-pad" style={{ position: 'relative' }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 96px)',
          alignItems: 'end',
          marginBottom: 64,
        }} className="demo-header">
          <div>
            <div className="section-label"><span>02 — Listen</span></div>
            <h2 className="display-2">
              We turn the<br />
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>acceptable</span> into<br />
              the <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>exceptional.</span>
            </h2>
          </div>
          <p className="lead">
            Paid actors recorded the English source. Their performances were translated and voice-cloned
            using AI — preserving emotion, tone, and timbre — then refined by regional artists and engineers
            on our Nuance platform.
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
          border: '1px solid var(--line)',
          borderRadius: 24,
          padding: 'clamp(24px, 3.5vw, 48px)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Dual color glow accents — orange + blue */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: -120, right: -120,
            width: 360, height: 360, borderRadius: '50%',
            background: 'var(--accent)', opacity: 0.08, filter: 'blur(80px)',
            pointerEvents: 'none',
          }} />
          <div aria-hidden="true" style={{
            position: 'absolute', bottom: -120, left: -120,
            width: 360, height: 360, borderRadius: '50%',
            background: 'var(--accent-2)', opacity: 0.10, filter: 'blur(80px)',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 32, flexWrap: 'wrap', gap: 16, position: 'relative',
          }}>
            <div className="eyebrow">Voice Sample</div>
            <div style={{
              display: 'inline-flex',
              padding: 4,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--line)',
              borderRadius: 999,
            }}>
              {['female', 'male'].map(v => (
                <button key={v}
                  onClick={() => setVoice(v)}
                  style={{
                    padding: '8px 18px',
                    fontSize: 12,
                    fontFamily: 'var(--mono)',
                    textTransform: 'uppercase', letterSpacing: '0.15em',
                    border: 'none', borderRadius: 999,
                    background: voice === v ? 'var(--fg)' : 'transparent',
                    color: voice === v ? '#0a0a0b' : 'var(--fg-2)',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}>
                  {v}
                </button>
              ))}
            </div>
          </div>

          <BigWaveform progress={progress} playing={playing} />

          <div style={{
            display: 'flex', alignItems: 'center', gap: 20,
            marginTop: 28, position: 'relative',
          }}>
            <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'} style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'var(--accent)', color: '#0a0a0b',
              border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, flexShrink: 0,
              boxShadow: '0 0 0 6px rgba(255,255,255,0.04)',
              transition: 'transform 0.15s',
              cursor: 'pointer',
            }} onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
               onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}>
              {playing ? '❚❚' : '▶'}
            </button>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--fg-3)',
                display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap',
              }}>
                <span>{tracks[active].label} · {voice}{loadError ? ' · file unavailable' : ''}</span>
                <span>{formatTime(progress * duration)} / {formatTime(duration)}</span>
              </div>
              <div style={{
                position: 'relative', height: 4, background: 'rgba(255,255,255,0.08)',
                borderRadius: 999, cursor: 'pointer',
              }} onClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                seek((e.clientX - r.left) / r.width);
              }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: `${progress * 100}%`,
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                  borderRadius: 999,
                }} />
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 32, position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 8,
          }}>
            {tracks.map((t, i) => (
              <button key={t.code}
                onClick={() => { setActive(i); setProgress(0); }}
                style={{
                  textAlign: 'left',
                  padding: '14px 16px',
                  background: active === i ? 'rgba(255,255,255,0.06)' : 'transparent',
                  border: '1px solid',
                  borderColor: active === i ? 'var(--line-2)' : 'var(--line)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', gap: 12,
                  transition: 'all 0.15s', cursor: 'pointer',
                }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ fontSize: 20 }}>{t.flag}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, color: 'var(--fg)' }}>{t.label}</div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: 'var(--fg-3)',
                  }}>
                    {t.code} · {voice === 'female' ? 'F' : 'M'}
                  </div>
                </div>
                {active === i && (
                  <span style={{
                    marginLeft: 'auto',
                    width: 8, height: 8, borderRadius: 999,
                    background: 'var(--accent-2)',
                    boxShadow: '0 0 8px var(--accent-2-glow)',
                  }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .demo-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const formatTime = (s) => {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
};

const BigWaveform = ({ progress, playing }) => {
  const N = 96;
  const [t, setT] = React.useState(0);

  React.useEffect(() => {
    if (!playing) return;
    let raf, start = performance.now();
    const tick = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const heights = React.useMemo(() => {
    return Array.from({ length: N }, (_, i) => {
      const a = Math.sin(i * 0.31) * 0.35;
      const b = Math.sin(i * 0.13 + 1.4) * 0.4;
      const c = Math.sin(i * 0.07 + 2.1) * 0.25;
      const env = Math.sin((i / N) * Math.PI * 1.6) * 0.6 + 0.4;
      return Math.max(0.08, Math.min(1, Math.abs(a + b + c) * env + 0.15));
    });
  }, []);

  return (
    <div style={{
      position: 'relative',
      height: 140,
      display: 'flex', alignItems: 'center', gap: 3,
    }}>
      {heights.map((h, i) => {
        const passed = i / N <= progress;
        const liveBoost = playing && passed
          ? 1 + Math.sin(t * 6 + i * 0.3) * 0.12
          : 1;
        // Bar color: gradient from accent (orange) to accent-2 (blue) across the played portion
        const ratio = i / N;
        const color = passed
          ? `oklch(${0.78 - ratio * 0.06} ${0.16 - ratio * 0.02} ${55 + ratio * 180})`
          : 'rgba(255,255,255,0.18)';
        return (
          <div key={i} suppressHydrationWarning style={{
            flex: 1,
            height: `${(h * 100 * liveBoost).toFixed(4)}%`,
            minHeight: 3,
            background: color,
            borderRadius: 1,
            transition: playing ? 'none' : 'background 0.4s',
          }} />
        );
      })}
      <div style={{
        position: 'absolute',
        left: `${progress * 100}%`,
        top: -8, bottom: -8,
        width: 1.5,
        background: 'var(--fg)',
        boxShadow: '0 0 12px rgba(255,255,255,0.5)',
        pointerEvents: 'none',
        transition: playing ? 'none' : 'left 0.2s',
      }} />
    </div>
  );
};

export { AudioDemo, BigWaveform };

'use client';
import React from 'react';
import { createPortal } from 'react-dom';

// Full-screen video modal — rendered in document.body via portal
const VideoModal = ({ src, title, lang, type, onClose }) => {
  const videoRef = React.useRef(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => { setMounted(true); }, []);

  React.useEffect(() => {
    if (!mounted) return;
    videoRef.current?.play().catch(() => {});
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        animation: 'vModalIn 0.2s ease',
        overflowY: 'auto',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative', width: '100%', maxWidth: 1100,
          background: 'var(--bg-3)', borderRadius: 16,
          border: '1px solid var(--line-2)',
          overflow: 'hidden',
          boxShadow: '0 40px 120px rgba(0,0,0,0.85)',
          animation: 'vModalUp 0.25s ease',
          flexShrink: 0,
        }}
      >
        {/* Close — always in top-right, large touch target */}
        <button
          onClick={onClose}
          aria-label="Close video"
          className="modal-close-btn"
          style={{
            position: 'absolute', top: 10, right: 10, zIndex: 10,
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', fontSize: 22, lineHeight: 1,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
        >×</button>

        <video
          ref={videoRef}
          controls loop playsInline
          style={{ width: '100%', display: 'block', maxHeight: '75vh', background: '#000' }}
        >
          <source src={src} type="video/mp4" />
        </video>

        <div className="v-modal-footer" style={{
          padding: '14px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 12, flexWrap: 'wrap',
        }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{lang}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(15px,2vw,20px)', color: 'var(--fg)', marginTop: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
          </div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--fg-3)',
            padding: '5px 12px', border: '1px solid var(--line)', borderRadius: 999, flexShrink: 0,
          }}>{type}</div>
        </div>
      </div>
      <style>{`
        @keyframes vModalIn { from { opacity:0 } to { opacity:1 } }
        @keyframes vModalUp { from { transform:translateY(24px);opacity:0 } to { transform:none;opacity:1 } }
        @media(max-width:480px){
          .v-modal-footer { padding: 12px 16px !important; }
        }
      `}</style>
    </div>,
    document.body
  );
};

// Reusable video card — hover to preview with sound, click to open modal
const VideoCard = ({ src, title, lang, type }) => {
  const videoRef = React.useRef(null);
  const [hovered, setHovered] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        if (videoRef.current) { videoRef.current.muted = true; videoRef.current.play().catch(() => {}); }
      });
    }
  };
  const handleLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  };

  return (
    <>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => setModalOpen(true)}
        style={{
          position: 'relative', borderRadius: 16, overflow: 'hidden',
          background: 'var(--bg-3)', border: '1px solid var(--line)',
          aspectRatio: '16 / 9', cursor: 'pointer',
          transition: 'border-color 0.3s',
          borderColor: hovered ? 'var(--line-2)' : 'var(--line)',
        }}
      >
        <video
          ref={videoRef}
          muted loop playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src={src} type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,11,0.9) 0%, rgba(10,10,11,0) 55%)',
          transition: 'opacity 0.3s', opacity: hovered ? 0.6 : 1,
        }} />
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--fg-3)',
            padding: '6px 10px', background: 'rgba(10,10,11,0.6)',
            border: '1px solid var(--line)', borderRadius: 999,
          }}>{type}</div>
        </div>
        <div style={{ position: 'absolute', left: 20, bottom: 20 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{lang}</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--fg)', marginTop: 4 }}>{title}</div>
        </div>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 48, height: 48, borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, color: 'var(--fg)',
          opacity: hovered ? 0 : 1, transition: 'opacity 0.2s',
        }}>▶</div>
      </div>
      {modalOpen && <VideoModal src={src} title={title} lang={lang} type={type} onClose={() => setModalOpen(false)} />}
    </>
  );
};

// Reusable page hero with optional right-side image
const PageHero = ({ eyebrow, eyebrowColor, headline, lead, ctas, visual, visualAlt }) => (
  <header style={{
    borderBottom: '1px solid var(--line)',
    background: 'var(--bg)',
    paddingTop: 72,
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div aria-hidden="true" style={{
      position: 'absolute', top: '-20%', left: '30%', width: '60%', height: '80%',
      borderRadius: '50%', background: 'var(--accent)', opacity: 0.04, filter: 'blur(120px)',
      pointerEvents: 'none',
    }} />
    <div className="wrap" style={{ padding: 'clamp(56px, 8vw, 120px) var(--pad)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: visual ? '1fr 1fr' : '1fr',
        gap: 'clamp(40px, 6vw, 96px)',
        alignItems: 'center',
      }} className="page-hero-grid">
        <div>
          <div className="eyebrow" style={{ color: eyebrowColor || 'var(--accent)' }}>{eyebrow}</div>
          <div style={{ marginTop: 20 }}>{headline}</div>
          <div style={{ marginTop: 28 }}>{lead}</div>
          {ctas && <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>{ctas}</div>}
        </div>
        {visual && (
          <div style={{
            borderRadius: 16, overflow: 'hidden',
            border: '1px solid var(--line)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
          }}>
            <img src={visual} alt={visualAlt || ''} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        )}
      </div>
    </div>
    <style>{`@media(max-width:880px){.page-hero-grid{grid-template-columns:1fr!important;}}`}</style>
  </header>
);

// Screen tour row with hover effect (client only)
const ScreenRow = ({ img, tag, title, body, index: i }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: i % 2 === 0 ? '1.4fr 1fr' : '1fr 1.4fr',
    gap: 'clamp(32px,5vw,64px)', alignItems: 'center',
  }} className="screen-row">
    <a href={img} target="_blank" rel="noopener" style={{
      order: i % 2 === 0 ? 1 : 2,
      display: 'block', border: '1px solid var(--line)',
      borderRadius: 16, overflow: 'hidden',
      transition: 'transform 0.3s, border-color 0.3s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--line-2)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}
    >
      <img src={img} alt={title} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </a>
    <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
      <div className="eyebrow" style={{ color: 'var(--accent)' }}>0{i + 1} · {tag}</div>
      <h3 style={{
        fontFamily: 'var(--serif)', fontSize: 'clamp(28px,3vw,40px)',
        lineHeight: 1.1, margin: '14px 0 16px', letterSpacing: '-0.02em',
      }}>{title}</h3>
      <p className="body" style={{ maxWidth: '54ch' }}>{body}</p>
    </div>
  </div>
);

// Animated platform pipeline visualization for the Platform hero
const STEPS = [
  { id: 'src',       label: 'source.mp4',   tag: 'Input',       color: 'var(--fg-3)' },
  { id: 'tx',        label: 'Transcribe',   tag: 'AI',          color: 'var(--accent)' },
  { id: 'tr',        label: 'Translate',    tag: 'AI + Human',  color: 'var(--accent)' },
  { id: 'vc',        label: 'Voice Clone',  tag: 'ElevenLabs',  color: 'var(--accent-2)' },
  { id: 'ref',       label: 'Refine',       tag: 'Regional Lead', color: 'var(--accent-2)' },
  { id: 'mix',       label: 'Mix & Master', tag: 'Pro Tools',   color: 'var(--accent)' },
  { id: 'out',       label: 'Deliver',      tag: 'Output',      color: 'var(--fg-3)' },
];

const LANGS = ['ES', 'HI', 'FR', 'PT', 'RU', 'KO', 'AR', 'DE', 'JA'];

const PlatformAnimation = () => {
  const [active, setActive] = React.useState(0);
  const [done, setDone] = React.useState([]);
  const [cycle, setCycle] = React.useState(0);

  React.useEffect(() => {
    const STEP_MS = 900;
    let step = 0;
    const advance = () => {
      step++;
      if (step < STEPS.length) {
        setActive(step);
        setDone(prev => [...prev, step - 1]);
      } else {
        // reset after a pause
        setTimeout(() => {
          setActive(0);
          setDone([]);
          setCycle(c => c + 1);
          step = 0;
        }, 1800);
      }
    };
    const t = setInterval(advance, STEP_MS);
    return () => clearInterval(t);
  }, [cycle]);

  return (
    <div style={{
      background: 'var(--bg-3)',
      border: '1px solid var(--line-2)',
      borderRadius: 20,
      padding: '28px 24px',
      fontFamily: 'var(--mono)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
    }}>
      {/* Ambient glow behind active step */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '30%', left: '20%',
        width: '60%', height: '40%',
        borderRadius: '50%',
        background: STEPS[active].color,
        opacity: 0.06, filter: 'blur(60px)',
        transition: 'background 0.6s ease',
        pointerEvents: 'none',
      }} />

      {/* Top bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 28, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'var(--fg-4)',
      }}>
        <span>Nuance · Pipeline</span>
        <span style={{
          display: 'flex', alignItems: 'center', gap: 6,
          color: 'var(--accent-2)', opacity: active > 0 && active < STEPS.length - 1 ? 1 : 0,
          transition: 'opacity 0.4s',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-2)',
            boxShadow: '0 0 8px var(--accent-2)',
            animation: 'platPulse 1.2s ease-in-out infinite',
          }} />
          Processing
        </span>
      </div>

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {STEPS.map((s, i) => {
          const isActive = i === active;
          const isDone = done.includes(i);
          const c = isDone ? 'var(--fg-3)' : isActive ? s.color : 'var(--fg-4)';
          return (
            <div key={s.id} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 14px',
              borderRadius: 10,
              background: isActive
                ? `color-mix(in oklab, ${s.color} 8%, var(--bg-3))`
                : isDone ? 'rgba(255,255,255,0.02)' : 'transparent',
              border: '1px solid',
              borderColor: isActive
                ? `color-mix(in oklab, ${s.color} 35%, transparent)`
                : isDone ? 'var(--line)' : 'transparent',
              transition: 'all 0.35s ease',
            }}>
              {/* step icon */}
              <span style={{
                width: 20, height: 20, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, flexShrink: 0,
                background: isActive ? s.color : isDone ? 'var(--line-2)' : 'transparent',
                border: `1px solid ${isActive ? s.color : isDone ? 'var(--line-2)' : 'var(--line)'}`,
                color: isActive ? '#0a0a0b' : isDone ? 'var(--fg-3)' : 'var(--fg-4)',
                transition: 'all 0.35s ease',
                boxShadow: isActive ? `0 0 12px ${s.color}` : 'none',
              }}>
                {isDone ? '✓' : String(i + 1)}
              </span>

              {/* label */}
              <span style={{
                flex: 1, fontSize: 12, letterSpacing: '0.08em',
                color: c, transition: 'color 0.35s ease',
                fontWeight: isActive ? 500 : 400,
              }}>{s.label}</span>

              {/* tag */}
              <span style={{
                fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: isActive ? s.color : 'var(--fg-4)',
                opacity: isActive || isDone ? 1 : 0.4,
                transition: 'all 0.35s ease',
              }}>{s.tag}</span>

              {/* progress bar for active */}
              {isActive && (
                <span style={{
                  width: 32, height: 3, borderRadius: 999, overflow: 'hidden',
                  background: 'var(--line)', flexShrink: 0,
                }}>
                  <span style={{
                    display: 'block', height: '100%',
                    background: s.color,
                    animation: 'platProgress 0.85s ease-out forwards',
                    borderRadius: 999,
                  }} />
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Output languages strip — visible after done */}
      <div style={{
        marginTop: 20, paddingTop: 16,
        borderTop: '1px solid var(--line)',
        display: 'flex', gap: 6, flexWrap: 'wrap',
        opacity: done.length >= STEPS.length - 1 ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}>
        <span style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-4)', alignSelf: 'center', marginRight: 4 }}>Output</span>
        {LANGS.map((l, i) => (
          <span key={l} style={{
            fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase',
            padding: '4px 8px',
            border: '1px solid var(--line)',
            borderRadius: 999,
            color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
            background: i % 2 === 0
              ? 'color-mix(in oklab, var(--accent) 8%, transparent)'
              : 'color-mix(in oklab, var(--accent-2) 8%, transparent)',
          }}>{l}</span>
        ))}
      </div>

      <style>{`
        @keyframes platPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(0.8); }
        }
        @keyframes platProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
};

// Scroll-triggered vertical process flow — "How Adapt Does It"
const FLOW_STEPS = [
  {
    n: '01', label: 'Content In',
    desc: 'Source file received. One global PM coordinates across all regions and assembles the right Cultural Ambassadors and Tech Producers.',
    tag: 'Intake', color: 'var(--fg-3)',
  },
  {
    n: '02', label: 'AI Transcription',
    desc: 'Nuance runs AI-powered transcription with regional dialect awareness baked in. Every line is human-verified before the next stage begins.',
    tag: 'AI · Nuance', color: 'var(--accent)',
  },
  {
    n: '03', label: 'Cultural Adaptation',
    desc: 'Cultural Ambassador translates AND adapts — preserving humor, cadence, and cultural meaning, not just words.',
    tag: 'Human + AI', color: 'var(--accent)',
    tasks: { color: 'var(--accent)', items: ['Translate', 'Format subs', 'Format script', 'Synthesize voices', 'Prelim dub'] },
  },
  {
    n: '04', label: 'Tech Production',
    desc: 'Tech Producer refines synthesized voices, adjusts timing, and ensures the final mix meets broadcast standards.',
    tag: 'Human + AI', color: 'var(--accent-2)',
    tasks: { color: 'var(--accent-2)', items: ['Adjust voices', 'Finalize mix', 'Tech check', 'Deliver'] },
  },
  {
    n: '05', label: 'Delivered',
    desc: 'Streaming-ready masters in every format and codec your distribution chain demands — on time, every time.',
    tag: 'Output', color: 'var(--fg-3)',
    outputs: ['Subtitle', 'Dubbed Audio'],
  },
];

const AdaptProcessFlow = () => {
  const [visible, setVisible] = React.useState(() => Array(FLOW_STEPS.length).fill(false));
  const refs = React.useRef([]);

  React.useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => { const n = [...prev]; n[i] = true; return n; });
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <div>
      {FLOW_STEPS.map((step, i) => (
        <div key={step.n} style={{ display: 'flex', gap: 0 }}>
          {/* Left spine */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 48 }}>
            {/* Dot */}
            <div style={{
              width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
              background: visible[i] ? `color-mix(in oklab, ${step.color} 15%, var(--bg-3))` : 'var(--bg-3)',
              border: `1px solid`,
              borderColor: visible[i] ? `color-mix(in oklab, ${step.color} 50%, var(--line))` : 'var(--line)',
              color: visible[i] ? step.color : 'var(--fg-4)',
              transition: 'all 0.5s ease',
              boxShadow: visible[i] && step.color !== 'var(--fg-3)' ? `0 0 14px color-mix(in oklab, ${step.color} 30%, transparent)` : 'none',
              zIndex: 1,
            }}>{step.n}</div>
            {/* Connector line below dot (not on last step) */}
            {i < FLOW_STEPS.length - 1 && (
              <div style={{
                width: 1, flex: 1, minHeight: 32,
                background: `linear-gradient(to bottom, ${step.color}, ${FLOW_STEPS[i + 1].color})`,
                opacity: visible[i] ? 0.35 : 0,
                transform: visible[i] ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top',
                transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
              }} />
            )}
          </div>

          {/* Step content */}
          <div
            ref={el => refs.current[i] = el}
            style={{
              flex: 1,
              paddingLeft: 20,
              paddingBottom: i < FLOW_STEPS.length - 1 ? 'clamp(32px,4vw,56px)' : 0,
              opacity: visible[i] ? 1 : 0,
              transform: visible[i] ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.55s ease 0.05s, transform 0.55s ease 0.05s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <h3 style={{
                fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.2vw,32px)',
                lineHeight: 1.1, letterSpacing: '-0.02em',
              }}>{step.label}</h3>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: step.color,
                padding: '4px 8px', border: `1px solid color-mix(in oklab, ${step.color} 35%, var(--line))`,
                borderRadius: 999, flexShrink: 0,
                background: `color-mix(in oklab, ${step.color} 8%, transparent)`,
              }}>{step.tag}</span>
            </div>
            <p style={{ margin: 0, fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, maxWidth: '64ch' }}>
              {step.desc}
            </p>
            {step.tasks && (
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16,
              }}>
                {step.tasks.items.map((t, ti) => (
                  <span key={t} style={{
                    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em',
                    padding: '6px 12px',
                    background: `color-mix(in oklab, ${step.tasks.color} 8%, var(--bg-3))`,
                    border: `1px solid color-mix(in oklab, ${step.tasks.color} 25%, var(--line))`,
                    borderRadius: 999, color: step.tasks.color,
                    opacity: visible[i] ? 1 : 0,
                    transition: `opacity 0.4s ease ${0.1 + ti * 0.07}s`,
                  }}>{t}</span>
                ))}
              </div>
            )}
            {step.outputs && (
              <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                {step.outputs.map((o, oi) => (
                  <div key={o} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '10px 16px',
                    background: oi === 0
                      ? 'color-mix(in oklab, var(--accent-2) 8%, var(--bg-3))'
                      : 'color-mix(in oklab, var(--accent) 8%, var(--bg-3))',
                    border: `1px solid ${oi === 0
                      ? 'color-mix(in oklab, var(--accent-2) 30%, var(--line))'
                      : 'color-mix(in oklab, var(--accent) 30%, var(--line))'}`,
                    borderRadius: 10,
                    opacity: visible[i] ? 1 : 0,
                    transform: visible[i] ? 'none' : 'translateY(8px)',
                    transition: `opacity 0.5s ease ${0.15 + oi * 0.12}s, transform 0.5s ease ${0.15 + oi * 0.12}s`,
                  }}>
                    <span style={{ fontSize: 14, color: oi === 0 ? 'var(--accent-2)' : 'var(--accent)' }}>
                      {oi === 0 ? '▤' : '◉'}
                    </span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 16 }}>{o}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Legacy AdaptProcessAnimation kept for compatibility
const AdaptProcessAnimation = () => {
  const rootRef = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const node = (delay, children) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(18px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  const line = (delay) => ({
    width: visible ? '100%' : '0%',
    transition: `width 0.5s ease ${delay}ms`,
    height: 1,
    background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
    opacity: 0.4,
  });

  return (
    <div ref={rootRef} style={{
      padding: 'clamp(28px,3vw,40px)',
      background: 'linear-gradient(180deg, color-mix(in oklab, var(--accent) 6%, var(--bg-2)), var(--bg-2))',
      border: '1px solid color-mix(in oklab, var(--accent) 40%, var(--line))',
      borderRadius: 16,
      overflow: 'hidden',
    }}>
      <div style={node(0)}>
        <div className="eyebrow" style={{ color: 'var(--accent)' }}>After</div>
        <h3 className="display-3" style={{ marginTop: 12, marginBottom: 14 }}>How Adapt does it</h3>
        <p className="body" style={{ marginBottom: 32 }}>
          The latest AI combined with our Regional Leads reduces complexity, creates matching
          subs and dubs in a single pass, and maintains quality end to end.
        </p>
      </div>

      {/* Flow diagram */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 28px 1.6fr 28px 1fr',
        alignItems: 'center',
        gap: 0,
      }} className="proc-flow">

        {/* Node 1 — PM */}
        <div style={{ ...node(100), display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: 'color-mix(in oklab, var(--accent) 12%, var(--bg-3))',
            border: '1px solid color-mix(in oklab, var(--accent) 35%, var(--line))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20,
          }}>◎</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(14px,1.4vw,18px)', lineHeight: 1.3 }}>PM receives content &amp; coordinates</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-4)' }}>One global PM across all regions</div>
        </div>

        {/* Connector 1 */}
        <div style={{ padding: '0 4px' }}>
          <div style={line(350)} />
          <div style={{
            width: 0, height: 0,
            borderTop: '4px solid transparent', borderBottom: '4px solid transparent',
            borderLeft: `6px solid color-mix(in oklab, var(--accent-2) 50%, transparent)`,
            opacity: visible ? 1 : 0, transition: `opacity 0.3s ease 550ms`,
            marginTop: -4,
          }} />
        </div>

        {/* Node 2 — Regional Leads (center box) */}
        <div style={{
          ...node(400),
          background: 'var(--bg-3)',
          border: '1px solid var(--line-2)',
          borderRadius: 14,
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '10px 16px',
            background: 'color-mix(in oklab, var(--accent-2) 8%, transparent)',
            borderBottom: '1px solid var(--line)',
            fontFamily: 'var(--mono)', fontSize: 10,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--accent-2)', textAlign: 'center',
          }}>Adapt's Regional Leads</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            {[
              {
                role: 'Cultural Ambassador',
                color: 'var(--accent)',
                icon: '◈',
                tasks: ['Translate', 'Format subs', 'Format script', 'Synthesize voices', 'Prelim dub'],
              },
              {
                role: 'Tech Producer',
                color: 'var(--accent-2)',
                icon: '◆',
                tasks: ['Adjust voices', 'Finalize mix', 'Tech check', 'Deliver'],
              },
            ].map((r, i) => (
              <div key={r.role} style={{
                padding: '14px 14px 16px',
                borderRight: i === 0 ? '1px solid var(--line)' : 'none',
                ...node(500 + i * 80),
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: r.color, marginBottom: 10 }}>
                  {r.icon} {r.role}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 5 }}>
                  {r.tasks.map(t => (
                    <li key={t} style={{
                      display: 'flex', alignItems: 'center', gap: 7,
                      fontSize: 11, color: 'var(--fg-2)',
                    }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: r.color, flexShrink: 0, opacity: 0.7 }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Connector 2 */}
        <div style={{ padding: '0 4px' }}>
          <div style={line(750)} />
          <div style={{
            width: 0, height: 0,
            borderTop: '4px solid transparent', borderBottom: '4px solid transparent',
            borderLeft: `6px solid color-mix(in oklab, var(--accent) 50%, transparent)`,
            opacity: visible ? 1 : 0, transition: `opacity 0.3s ease 950ms`,
            marginTop: -4,
          }} />
        </div>

        {/* Node 3 — Outputs */}
        <div style={{ ...node(800), display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { label: 'Subtitle', icon: '▤', color: 'var(--accent-2)', delay: 850 },
            { label: 'Dubbed Audio', icon: '◉', color: 'var(--accent)', delay: 1000 },
          ].map(o => (
            <div key={o.label} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 14px',
              background: `color-mix(in oklab, ${o.color} 8%, var(--bg-3))`,
              border: `1px solid color-mix(in oklab, ${o.color} 30%, var(--line))`,
              borderRadius: 10,
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(12px)',
              transition: `opacity 0.55s ease ${o.delay}ms, transform 0.55s ease ${o.delay}ms`,
            }}>
              <span style={{ fontSize: 18, color: o.color }}>{o.icon}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 16 }}>{o.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:720px){.proc-flow{grid-template-columns:1fr!important;}.proc-flow>*:nth-child(even){display:none!important;}}}`}</style>
    </div>
  );
};

// Cinematic featured video card (21:9) — hover for sound, click for modal
const FeaturedVideoCard = ({ src, title, lang, type, badge }) => {
  const videoRef = React.useRef(null);
  const [hovered, setHovered] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        if (videoRef.current) { videoRef.current.muted = true; videoRef.current.play().catch(() => {}); }
      });
    }
  };
  const handleLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  };

  return (
    <>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => setModalOpen(true)}
        style={{
          position: 'relative', borderRadius: 20, overflow: 'hidden',
          background: 'var(--bg-3)', border: '1px solid var(--line)',
          aspectRatio: '21 / 9', cursor: 'pointer',
          transition: 'border-color 0.3s',
          borderColor: hovered ? 'var(--line-2)' : 'var(--line)',
        }}
      >
        <video
          ref={videoRef}
          muted loop playsInline preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src={src} type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,11,0.9) 0%, rgba(10,10,11,0.05) 55%)',
          transition: 'opacity 0.3s',
          opacity: hovered ? 0.4 : 1,
        }} />
        <div style={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {badge ? (
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
              textTransform: 'uppercase', padding: '6px 12px',
              background: 'color-mix(in oklab, var(--accent) 15%, rgba(10,10,11,0.8))',
              border: '1px solid color-mix(in oklab, var(--accent) 45%, var(--line))',
              borderRadius: 999, color: 'var(--accent)',
            }}>{badge}</div>
          ) : <span />}
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--fg-3)',
            padding: '6px 10px', background: 'rgba(10,10,11,0.6)',
            border: '1px solid var(--line)', borderRadius: 999,
          }}>{type}</div>
        </div>
        <div style={{ position: 'absolute', left: 28, right: 28, bottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{lang}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,3vw,38px)', color: 'var(--fg)', marginTop: 6, lineHeight: 1.1 }}>{title}</div>
          </div>
          <div style={{
            width: 60, height: 60, borderRadius: '50%', flexShrink: 0,
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, color: 'var(--fg)',
            opacity: hovered ? 0 : 1, transition: 'opacity 0.2s',
          }}>▶</div>
        </div>
      </div>
      {modalOpen && <VideoModal src={src} title={title} lang={lang} type={type} onClose={() => setModalOpen(false)} />}
    </>
  );
};

// Lang → accent color (used by TeamCard)
const LANG_COLOR = {
  ES: 'var(--accent)',   FR: 'var(--accent-2)', PT: 'var(--accent)',
  DE: 'var(--accent-2)', KO: 'var(--accent)',   ZH: 'var(--accent-2)',
  AR: 'var(--accent)',   HI: 'var(--accent-2)', ID: 'var(--accent)',
  TR: 'var(--accent-2)', EN: 'var(--accent-2)',
};

// Bio modal — portal-rendered
const TeamMemberModal = ({ name, role, lang, bio, img, color, onClose }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  React.useEffect(() => {
    if (!mounted) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [mounted, onClose]);
  if (!mounted) return null;

  return createPortal(
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.92)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
      animation: 'vModalIn 0.2s ease',
      overflowY: 'auto',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        position: 'relative', width: '100%', maxWidth: 680,
        background: 'var(--bg-3)', borderRadius: 20,
        border: '1px solid var(--line-2)',
        boxShadow: '0 40px 120px rgba(0,0,0,0.85)',
        animation: 'vModalUp 0.25s ease',
        display: 'grid', gridTemplateColumns: '180px 1fr',
        maxHeight: '90vh',
        overflow: 'hidden',
        flexShrink: 0,
      }} className="team-modal-grid">

        {/* Photo column */}
        <div className="team-modal-photo" style={{
          background: 'var(--bg)', borderRight: '1px solid var(--line)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '40px 20px',
        }}>
          <img src={img} alt={name} style={{
            width: '100%', aspectRatio: '1 / 1', borderRadius: '50%',
            objectFit: 'cover', objectPosition: 'top',
            filter: 'grayscale(1) contrast(1.1)',
            border: `2px solid color-mix(in oklab, ${color} 45%, var(--line))`,
            display: 'block',
          }} />
        </div>

        {/* Bio column — scrolls independently */}
        <div className="team-modal-bio" style={{ padding: '36px 28px 32px', overflowY: 'auto' }}>
          {/* Push right to avoid overlap with close button */}
          <div style={{ paddingRight: 40 }}>
            {lang && (
              <span style={{
                fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em',
                textTransform: 'uppercase', color,
                padding: '3px 10px', borderRadius: 999,
                border: `1px solid color-mix(in oklab, ${color} 40%, var(--line))`,
                background: `color-mix(in oklab, ${color} 8%, transparent)`,
                display: 'inline-block', marginBottom: 14,
              }}>{lang}</span>
            )}
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px,2.5vw,28px)', lineHeight: 1.15, marginBottom: 6 }}>{name}</h2>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 20 }}>{role}</div>
          </div>
          <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.8, margin: 0 }}>{bio}</p>
        </div>

        {/* Close — large tap target, always visible above content */}
        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: 12, right: 12, zIndex: 10,
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)', border: '1px solid var(--line)',
          color: 'var(--fg)', fontSize: 22, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
        >×</button>
      </div>

      <style>{`
        @media(max-width:560px){
          .team-modal-grid {
            grid-template-columns: 1fr !important;
            max-height: 88vh !important;
            overflow-y: auto !important;
          }
          .team-modal-photo {
            border-right: none !important;
            border-bottom: 1px solid var(--line) !important;
            padding: 28px 24px 20px !important;
            flex-direction: row !important;
            gap: 16px !important;
            align-items: center !important;
            justify-content: flex-start !important;
          }
          .team-modal-photo img {
            width: 80px !important;
            flex-shrink: 0 !important;
          }
          .team-modal-bio {
            padding: 20px 20px 28px !important;
            overflow-y: visible !important;
          }
          .team-modal-bio div { padding-right: 48px !important; }
        }
      `}</style>
    </div>,
    document.body
  );
};

// Circular B&W team card — click opens bio modal
const TeamCard = ({ name, role, lang, bio, img }) => {
  const [open, setOpen] = React.useState(false);
  const color = LANG_COLOR[lang] || 'var(--accent)';
  return (
    <>
      <figure
        onClick={() => setOpen(true)}
        style={{
          margin: 0, cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 10, padding: '12px 8px',
          borderRadius: 14, border: '1px solid transparent',
          transition: 'border-color 0.2s, background 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-2)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
      >
        <div style={{
          width: '100%', aspectRatio: '1 / 1', borderRadius: '50%', overflow: 'hidden',
          border: `2px solid color-mix(in oklab, ${color} 35%, var(--line))`,
          flexShrink: 0,
        }}>
          <img
            src={img} alt={name} loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top',
              filter: 'grayscale(1) contrast(1.1)', display: 'block',
            }}
          />
        </div>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.16em',
          textTransform: 'uppercase', color,
          padding: '2px 8px', borderRadius: 999,
          border: `1px solid color-mix(in oklab, ${color} 35%, var(--line))`,
          background: `color-mix(in oklab, ${color} 7%, transparent)`,
        }}>{lang}</span>
        <figcaption style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(13px,1.1vw,16px)', lineHeight: 1.2 }}>{name}</div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 4, lineHeight: 1.4,
          }}>{role}</div>
        </figcaption>
      </figure>
      {open && <TeamMemberModal name={name} role={role} lang={lang} bio={bio} img={img} color={color} onClose={() => setOpen(false)} />}
    </>
  );
};

// Portrait card for internal leadership — color photo, click for bio modal
const LeaderCard = ({ name, title, bio, img }) => {
  const [open, setOpen] = React.useState(false);
  const hasBio = Boolean(bio);
  return (
    <>
      <figure
        onClick={() => hasBio && setOpen(true)}
        style={{
          margin: 0, cursor: hasBio ? 'pointer' : 'default',
          borderRadius: 16, overflow: 'hidden',
          background: 'var(--bg-3)', border: '1px solid var(--line)',
          position: 'relative', aspectRatio: '3 / 4',
          transition: 'border-color 0.25s, transform 0.25s',
        }}
        onMouseEnter={e => { if (hasBio) { e.currentTarget.style.borderColor = 'var(--line-2)'; e.currentTarget.style.transform = 'translateY(-3px)'; } }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'none'; }}
      >
        <img src={img} alt={name} loading="lazy" style={{
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'top',
          filter: 'grayscale(1) contrast(1.1)', display: 'block',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0) 55%)',
        }} />
        {hasBio && (
          <div style={{
            position: 'absolute', top: 12, right: 12,
            width: 26, height: 26, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, color: 'var(--fg-2)',
          }}>↗</div>
        )}
        <figcaption style={{ position: 'absolute', left: 16, right: 16, bottom: 16 }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(15px,1.3vw,19px)', lineHeight: 1.2 }}>{name}</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 5, lineHeight: 1.4 }}>{title}</div>
        </figcaption>
      </figure>
      {open && (
        <TeamMemberModal name={name} role={title} lang="" bio={bio} img={img} color="var(--accent)" onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export { VideoCard, PageHero, ScreenRow, PlatformAnimation, AdaptProcessFlow, FeaturedVideoCard, TeamCard, LeaderCard };

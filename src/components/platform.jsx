'use client';
import React from 'react';

// Platform — Nuance
const Platform = () => {
  const features = [
    { tag: 'Transcribe', desc: 'AI-driven transcription with regional dialect awareness baked in.' },
    { tag: 'Translate', desc: 'Cultural adaptation by regional leads — not just literal translation.' },
    { tag: 'Voice Sync', desc: 'ElevenLabs-powered voice cloning preserving emotion, tone, and timbre.' },
    { tag: 'Refine', desc: 'Tech producers and artists tune every line until it lands.' },
    { tag: 'Mix & Master', desc: 'Studio-quality audio engineering on every deliverable.' },
    { tag: 'Deliver', desc: 'Streaming-ready outputs in every format your distribution chain needs.' },
  ];

  return (
    <section id="platform" className="section-pad" style={{
      borderTop: '1px solid var(--line)',
      background: 'var(--bg-2)',
    }}>
      <div className="wrap">
        <div className="section-label"><span>03 — Platform</span></div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 'clamp(40px, 6vw, 96px)',
          alignItems: 'start',
        }} className="platform-grid">

          <div>
            <img
              src="https://adaptglobal.io/wp-content/uploads/Adapt_Nuance_Wordmark_White.svg"
              alt="Nuance — Adapt's localization platform"
              style={{ height: 36, width: 'auto', display: 'block', marginBottom: 24 }}
            />
            <h2 className="display-2">
              Our <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>orchestration</span><br />
              layer for AI&nbsp;+&nbsp;<span className="italic-serif" style={{ color: 'var(--accent)' }}>artist.</span>
            </h2>
            <p className="lead" style={{ marginTop: 28 }}>
              Lightweight, evolving, and built around how regional teams actually work.
              Nuance sequences the right AI tool at the right step, then hands the
              creative judgment back to the humans who do it best.
            </p>

            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://nuance.adaptglobal.io/" className="btn btn--primary">
                <span style={{
                  display: 'inline-block', width: 6, height: 6, borderRadius: 999,
                  background: 'var(--accent-2)', marginRight: 4,
                }} />
                Login to Nuance <span className="arrow">→</span>
              </a>
              <a href="https://adaptglobal.io/platform/" className="btn">Tour the platform ↗</a>
              <a href="https://elevenlabs.io" className="btn">Built with ElevenLabs ↗</a>
            </div>

            {/* Pipeline visualization */}
            <div style={{
              marginTop: 48,
              padding: 24,
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid var(--line)',
              borderRadius: 16,
              fontFamily: 'var(--mono)',
              fontSize: 12,
            }}>
              <div style={{ color: 'var(--fg-3)', marginBottom: 14, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Pipeline
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, color: 'var(--fg-2)' }}>
                <PipelineStep label="src.mp4" muted />
                <Arrow />
                <PipelineStep label="transcribe()" />
                <Arrow />
                <PipelineStep label="translate()" />
                <Arrow />
                <PipelineStep label="clone(voice)" highlight2 />
                <Arrow />
                <PipelineStep label="refine[human]" />
                <Arrow />
                <PipelineStep label="master.mix" />
                <Arrow />
                <PipelineStep label="deliver" muted />
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 1,
            background: 'var(--line)',
            border: '1px solid var(--line)',
            borderRadius: 16,
            overflow: 'hidden',
          }}>
            {features.map((f, i) => (
              <div key={f.tag} style={{
                background: 'var(--bg-2)',
                padding: 'clamp(20px, 2.5vw, 32px)',
                minHeight: 180,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                gap: 16,
              }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 11,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
                  display: 'flex', justifyContent: 'space-between',
                }}>
                  <span>{f.tag}</span>
                  <span style={{ color: 'var(--fg-4)' }}>0{i + 1}</span>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .platform-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const PipelineStep = ({ label, highlight, highlight2, muted }) => {
  const c = highlight2 ? 'var(--accent-2)' : highlight ? 'var(--accent)' : null;
  return (
    <span style={{
      padding: '6px 10px',
      border: '1px solid',
      borderColor: c || 'var(--line)',
      background: c ? `color-mix(in oklab, ${c} 10%, transparent)` : muted ? 'transparent' : 'rgba(255,255,255,0.03)',
      borderRadius: 6,
      color: c || (muted ? 'var(--fg-3)' : 'var(--fg-2)'),
      whiteSpace: 'nowrap',
    }}>{label}</span>
  );
};

const Arrow = () => (
  <span style={{ color: 'var(--fg-4)', fontSize: 12 }}>→</span>
);

export { Platform };

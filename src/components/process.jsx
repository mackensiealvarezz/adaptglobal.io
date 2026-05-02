'use client';
import React from 'react';

// Process — How it works (numbered timeline)
const Process = () => {
  const steps = [
    { n: '01', t: 'Discovery', d: 'You share content, target languages, and quality benchmarks. We assemble the right Cultural Ambassadors and Tech Producers.' },
    { n: '02', t: 'Transcription', d: 'AI transcribes the source with regional dialect awareness. Every line is human-verified before translation begins.' },
    { n: '03', t: 'Adaptation', d: 'Regional Leads translate AND adapt — preserving humor, cadence, and cultural meaning, not just words.' },
    { n: '04', t: 'Voice Synthesis', d: 'Voices are cloned with ElevenLabs, retaining the original performance\'s emotion, tone, and timbre.' },
    { n: '05', t: 'Refinement', d: 'Tech Producers and audio engineers refine each line. Lip-sync, pacing, performance — all hand-tuned.' },
    { n: '06', t: 'Delivery', d: 'Streaming-ready masters in every format and codec your distribution chain demands.' },
  ];

  return (
    <section id="process" className="section-pad">
      <div className="wrap">
        <div className="section-label"><span>04 — Process</span></div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 5vw, 80px)', alignItems: 'end', marginBottom: 64,
        }} className="process-header">
          <h2 className="display-2">
            Six steps from<br />
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>source</span> to{' '}
            <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>screen.</span>
          </h2>
          <p className="lead">
            Every project follows the same disciplined path through Nuance — but the
            judgment at each handoff is human.
          </p>
        </div>

        <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {steps.map((s, i) => (
            <li key={s.n} style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 2fr',
              gap: 'clamp(20px, 3vw, 56px)',
              padding: 'clamp(24px, 3vw, 40px) 0',
              borderTop: '1px solid var(--line)',
              borderBottom: i === steps.length - 1 ? '1px solid var(--line)' : 'none',
              alignItems: 'baseline',
            }} className="process-row">
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 12,
                letterSpacing: '0.18em', color: 'var(--fg-3)',
              }}>{s.n}</div>
              <h3 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(28px, 3vw, 40px)',
                lineHeight: 1.05,
              }}>{s.t}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6, maxWidth: '60ch' }}>
                {s.d}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .process-header { grid-template-columns: 1fr !important; }
          .process-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
};

export { Process };

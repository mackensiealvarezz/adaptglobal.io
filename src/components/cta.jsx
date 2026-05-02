'use client';
import React from 'react';

// CTA — Final big call to action
const CTA = () => {
  return (
    <section id="contact" className="section-pad" style={{
      borderTop: '1px solid var(--line)',
      background: 'var(--bg-2)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-30%', left: '30%',
        width: '40%', height: '120%', borderRadius: '50%',
        background: 'var(--accent)', opacity: 0.07, filter: 'blur(120px)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-20%', right: '15%',
        width: '40%', height: '120%', borderRadius: '50%',
        background: 'var(--accent-2)', opacity: 0.09, filter: 'blur(120px)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div className="section-label"><span>11 — Get in touch</span></div>

        <h2 className="display-1" style={{ maxWidth: '14ch', marginBottom: 32 }}>
          Let's make something{' '}
          <span className="italic-serif" style={{ color: 'var(--accent)' }}>worth watching</span>{' '}
          <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>everywhere.</span>
        </h2>

        <p className="lead" style={{ marginBottom: 40, maxWidth: '60ch' }}>
          Tell us about your project — runtime, languages, target delivery — and we'll
          come back within one business day with a scoped plan.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 56 }}>
          <a href="mailto:info@adaptglobal.io" className="btn btn--accent" style={{ padding: '18px 28px', fontSize: 15 }}>
            info@adaptglobal.io <span className="arrow">→</span>
          </a>
          <a href="mailto:joinus@adaptglobal.io" className="btn" style={{ padding: '18px 28px', fontSize: 15 }}>
            Join our network · joinus@adaptglobal.io
          </a>
        </div>

        {/* Partner / trust strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'auto 1fr',
          gap: 32, alignItems: 'center',
          padding: '32px 0', borderTop: '1px solid var(--line)',
        }} className="trust-strip">
          <div className="eyebrow">Trusted partners &amp; memberships</div>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 32,
            alignItems: 'center', opacity: 0.7,
          }}>
            <PartnerLogo label="DPP" />
            <PartnerLogo label="TPN" />
            <PartnerLogo label="ElevenLabs" />
            <PartnerLogo label="EMIA" />
            <PartnerLogo label="MESA" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) { .trust-strip { grid-template-columns: 1fr !important; gap: 16px !important; } }
      `}</style>
    </section>
  );
};

const PartnerLogo = ({ label }) => (
  <div style={{
    fontFamily: 'var(--mono)', fontSize: 13,
    letterSpacing: '0.15em', textTransform: 'uppercase',
    color: 'var(--fg-2)',
    padding: '10px 16px',
    border: '1px solid var(--line-2)',
    borderRadius: 999,
  }}>{label}</div>
);

export { CTA };

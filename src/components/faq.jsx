'use client';
import React from 'react';

// FAQ — accordion, schema-friendly
const FAQ = () => {
  const items = [
    { q: 'How is Adapt different from a traditional dubbing studio?',
      a: 'We sequence AI tools — transcription, translation, voice cloning — through our Nuance platform, then hand off creative judgment to regional Cultural Ambassadors and Tech Producers. The result is studio-quality output at 4× the speed and 1/4 the cost.' },
    { q: 'What languages do you support?',
      a: 'We currently support 40+ languages with real regional expertise, with a focus on emerging dubbing markets. We can stand up new languages on request when there is a network of qualified Cultural Ambassadors available.' },
    { q: 'Do you replace human translators and voice actors?',
      a: 'No. AI handles the heavy lifting. Humans handle the craft, the cultural adaptation, and every quality decision. Our Language Leads are the center of every project.' },
    { q: 'How do you handle voice cloning consent and rights?',
      a: 'We work exclusively with paid actors who consent to voice cloning for the project. All voice models are project-scoped and not reused without explicit further consent. We are TPN-aligned and operate under strict NDA-protected workflows.' },
    { q: 'What deliverables do you provide?',
      a: 'Streaming-ready audio masters, broadcast-compliant deliverables, subtitle files in every standard format (SRT, VTT, TTML, etc.), and any project-specific format your distribution chain requires.' },
    { q: 'Can creators use Adapt directly?',
      a: 'Yes. We have a creator-tier of Nuance with self-serve language packs, per-episode pricing, and YouTube/podcast-ready masters. Reach out and we\'ll get you set up.' },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" className="section-pad">
      <div className="wrap">
        <div className="section-label"><span>10 — FAQ</span></div>

        <div style={{
          display: 'grid', gridTemplateColumns: '0.9fr 1.1fr',
          gap: 'clamp(40px, 6vw, 96px)', alignItems: 'start',
        }} className="faq-grid">
          <div style={{ position: 'sticky', top: 100 }}>
            <h2 className="display-2">
              Common<br />
              <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>questions.</span>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Localization is complex. Here's what most teams want to know up front.
            </p>
            <a href="#contact" className="btn btn--primary" style={{ marginTop: 28 }}>
              Ask us anything <span className="arrow">→</span>
            </a>
          </div>

          <div>
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderTop: '1px solid var(--line)', borderBottom: i === items.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%', textAlign: 'left',
                      padding: '24px 0',
                      background: 'transparent', border: 'none',
                      color: 'var(--fg)',
                      display: 'flex', alignItems: 'flex-start', gap: 24,
                      fontFamily: 'var(--sans)',
                      fontSize: 'clamp(17px, 1.6vw, 20px)',
                      fontWeight: 400, letterSpacing: '-0.01em',
                      lineHeight: 1.35,
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: 11,
                      letterSpacing: '0.15em', color: 'var(--fg-3)',
                      paddingTop: 4, flexShrink: 0,
                    }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ flex: 1 }}>{it.q}</span>
                    <span style={{
                      fontSize: 20,
                      color: isOpen ? 'var(--accent-2)' : 'var(--accent)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease, color 0.3s ease', flexShrink: 0,
                    }}>+</span>
                  </button>
                  <div style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 400 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  }}>
                    <p style={{
                      margin: 0, paddingBottom: 24, paddingLeft: 56, paddingRight: 40,
                      fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, maxWidth: '60ch',
                    }}>
                      {it.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(it => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      })}} />

      <style>{`
        @media (max-width: 880px) { .faq-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export { FAQ };

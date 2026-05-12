import React from 'react';
import { Nav } from '../../components/nav.jsx';
import { Footer } from '../../components/footer.jsx';
import { CTA } from '../../components/cta.jsx';

export const metadata = {
  title: 'Creators — Take Your Content Global | Adapt',
  description: 'Adapt helps creators reach global audiences with AI-powered dubbing. Single clips from $10/min, monthly subscription plans, or apply for our free Global Launch Program.',
  alternates: { canonical: '/creators' },
  openGraph: {
    title: 'Creators | Adapt',
    description: 'AI-enabled localization for content creators. Single clips, subscriptions, or go global free.',
    url: 'https://adaptglobal.io/creators/',
    images: [{ url: 'https://adaptglobal.io/wp-content/uploads/Image-1080x675.jpeg', width: 1080, height: 675, alt: 'Adapt Creator Portal — Go Global' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://adaptglobal.io/wp-content/uploads/Image-1080x675.jpeg'] },
};

const creatorsSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://adaptglobal.io' },
    { '@type': 'ListItem', position: 2, name: 'Creators', item: 'https://adaptglobal.io/creators/' },
  ],
};

const PLANS = [
  {
    name: 'Starter',
    price: '$160',
    period: '/month',
    sub: '10 mins · Spanish or Hindi',
    features: ['Spanish or Hindi only', '10 minutes of content', 'Standard turnaround', 'Email support'],
    cta: 'Get started',
    accent: false,
  },
  {
    name: 'Influencer',
    price: '$420',
    period: '/month',
    sub: '20 mins · any language',
    features: ['Any language available', '20 minutes of content', 'Priority turnaround', 'Priority support', 'Dedicated account manager'],
    cta: 'Most popular',
    accent: true,
  },
  {
    name: 'Enterprise',
    price: '$1,200',
    period: '/month',
    sub: '60 mins · any language mix',
    features: ['Mix any languages', '60 minutes of content', 'Fastest turnaround', 'VIP support', 'Custom workflows'],
    cta: 'Contact us',
    accent: false,
  },
];

export default function CreatorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creatorsSchema) }} />
      <Nav />
      <main>
        {/* Hero */}
        <header style={{
          paddingTop: 72, borderBottom: '1px solid var(--line)',
          position: 'relative', overflow: 'hidden', minHeight: '70vh',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <video autoPlay muted loop playsInline aria-hidden="true" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', zIndex: -2, opacity: 0.22, filter: 'saturate(0.6) contrast(1.1)',
          }}>
            <source src="https://adaptglobal.wpenginepowered.com/wp-content/uploads/2024/04/Adapt_Intro-02.mp4" type="video/mp4" />
          </video>
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0, zIndex: -1,
            background: 'linear-gradient(to bottom, rgba(10,10,11,0.55), rgba(10,10,11,0.9) 70%, var(--bg))',
          }} />
          <div className="wrap" style={{ padding: 'clamp(56px,8vw,120px) var(--pad)' }}>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>Creator Portal</div>
            <h1 className="display-1" style={{ marginTop: 20, maxWidth: '14ch' }}>
              Take your content{' '}
              <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>global.</span>
            </h1>
            <p className="lead" style={{ marginTop: 28, maxWidth: '52ch' }}>
              AI-enabled localization built for creators. Reach global audiences with dubs that
              don't sound like dubs — at a price that doesn't gatekeep your growth.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="mailto:info@adaptglobal.io" className="btn btn--primary">
                Get a free quote <span className="arrow">→</span>
              </a>
              <a href="#plans" className="btn">View subscription plans</a>
            </div>
          </div>
        </header>

        {/* 3 Ways to work */}
        <section className="section-pad" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="section-label"><span>01 — Ways to work with us</span></div>
            <h2 className="display-2" style={{ marginBottom: 56, maxWidth: '18ch' }}>
              Three ways to{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>go global</span> with Adapt.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden' }} className="ways-grid">
              {[
                {
                  n: '01',
                  title: 'Localize a Single Clip',
                  body: 'Perfect for testing the waters. Get a single video dubbed professionally. Dub your content into another language for as little as $10/min. Free quote in 24 hours, content delivered in 5 days.',
                  cta: 'Get a quote',
                  href: 'mailto:info@adaptglobal.io',
                  accent: false,
                },
                {
                  n: '02',
                  title: 'Subscribe & Save',
                  body: 'Regular content? Save with monthly plans that scale with your needs. Get better rates and priority support. 10% discount for full-year plans.',
                  cta: 'View plans',
                  href: '#plans',
                  accent: true,
                },
                {
                  n: '03',
                  title: 'Global Launch Program',
                  body: 'We pay you to launch your channel globally. 100% free for creators. Adapt covers all localization costs and shares revenue with you. It\'s our investment in your global success.',
                  cta: 'Apply now — it\'s free',
                  href: '#global-launch',
                  accent: false,
                },
              ].map(item => (
                <div key={item.n} style={{
                  background: 'var(--bg-2)', padding: 'clamp(28px,3.5vw,48px)',
                  display: 'flex', flexDirection: 'column', gap: 20,
                  position: 'relative', overflow: 'hidden',
                }}>
                  {item.accent && (
                    <div aria-hidden="true" style={{
                      position: 'absolute', top: -80, right: -80, width: 240, height: 240,
                      borderRadius: '50%', background: 'var(--accent)', opacity: 0.07, filter: 'blur(60px)',
                    }} />
                  )}
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: item.accent ? 'var(--accent)' : 'var(--fg-4)' }}>{item.n}</div>
                  <h3 className="display-3">{item.title}</h3>
                  <p className="body" style={{ flex: 1 }}>{item.body}</p>
                  <div>
                    <a href={item.href} className={item.accent ? 'btn btn--accent' : 'btn btn--primary'}>
                      {item.cta} <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:880px){.ways-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* Quote section */}
        <section className="section-pad">
          <div className="wrap">
            <div className="section-label"><span>02 — Get a quote</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }} className="quote-grid">
              <div>
                <h2 className="display-2" style={{ marginBottom: 28 }}>
                  Get a 100% free quote{' '}
                  <span className="italic-serif" style={{ color: 'var(--accent)' }}>in 24 hours.</span>
                </h2>
                <p className="lead" style={{ marginBottom: 32 }}>
                  No obligation. No credit card required. Tell us about your content and
                  we'll come back with a scoped plan and transparent pricing.
                </p>
                <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 20 }}>
                  {[
                    { n: '1', t: 'Submit & Get Quote', d: 'Share your YouTube link and target language. Free quote in 24 hours.' },
                    { n: '2', t: 'Upload Instructions', d: 'We\'ll send upload instructions for your source file.' },
                    { n: '3', t: 'Approve & Receive', d: 'Review a sample, approve, and receive your dubbed content in ~5 days.' },
                  ].map(s => (
                    <li key={s.n} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', paddingTop: 20, borderTop: '1px solid var(--line)' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--accent)', flexShrink: 0, marginTop: 4 }}>{s.n}</div>
                      <div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{s.t}</div>
                        <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--fg-2)' }}>{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div style={{
                background: 'var(--bg-2)', border: '1px solid var(--line)',
                borderRadius: 20, padding: 'clamp(28px,3.5vw,48px)',
              }}>
                <div className="eyebrow" style={{ marginBottom: 24 }}>Request a quote</div>
                <div style={{ display: 'grid', gap: 16 }}>
                  {[
                    { label: 'Name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email', type: 'email', placeholder: 'you@example.com' },
                    { label: 'YouTube / Content Link', type: 'url', placeholder: 'https://youtube.com/...' },
                    { label: 'Target Language', type: 'text', placeholder: 'e.g. Spanish, Hindi, French' },
                  ].map(f => (
                    <div key={f.label}>
                      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type} placeholder={f.placeholder}
                        style={{
                          width: '100%', padding: '14px 16px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid var(--line-2)', borderRadius: 10,
                          color: 'var(--fg)', fontFamily: 'var(--sans)', fontSize: 15,
                          outline: 'none', boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>
                      Anything else we should know?
                    </label>
                    <textarea placeholder="Content type, runtime, special requirements..." rows={3}
                      style={{
                        width: '100%', padding: '14px 16px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--line-2)', borderRadius: 10,
                        color: 'var(--fg)', fontFamily: 'var(--sans)', fontSize: 15,
                        outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                      }} />
                  </div>
                  <a href="mailto:info@adaptglobal.io?subject=Creator Quote Request" className="btn btn--accent" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    Send quote request <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:880px){.quote-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* Subscription plans */}
        <section id="plans" className="section-pad" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="wrap">
            <div className="section-label"><span>03 — Subscription plans</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'end', marginBottom: 56 }} className="plan-hdr">
              <h2 className="display-2">
                Subscribe &amp; save by localizing{' '}
                <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>every month.</span>
              </h2>
              <p className="lead">
                Get better rates and priority support with monthly plans.
                10% discount for full-year plans.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="plans-grid">
              {PLANS.map(p => (
                <div key={p.name} style={{
                  padding: 'clamp(28px,3vw,40px)',
                  background: p.accent ? 'linear-gradient(180deg, color-mix(in oklab, var(--accent) 8%, var(--bg-2)), var(--bg-2))' : 'var(--bg-3)',
                  border: '1px solid',
                  borderColor: p.accent ? 'color-mix(in oklab, var(--accent) 40%, var(--line))' : 'var(--line)',
                  borderRadius: 20,
                  display: 'flex', flexDirection: 'column', gap: 24,
                  position: 'relative', overflow: 'hidden',
                }}>
                  {p.accent && (
                    <div style={{
                      position: 'absolute', top: 16, right: 16,
                      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'var(--accent)', padding: '5px 10px',
                      border: '1px solid var(--accent)', borderRadius: 999,
                    }}>Most popular</div>
                  )}
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{p.name}</div>
                    <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px,4vw,56px)', color: 'var(--fg)', lineHeight: 1 }}>{p.price}</span>
                      <span style={{ fontSize: 14, color: 'var(--fg-3)' }}>{p.period}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-4)', marginTop: 8 }}>{p.sub}</div>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10, flex: 1 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--fg-2)', paddingTop: 10, borderTop: '1px solid var(--line)' }}>
                        <span style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12 }}>→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="mailto:info@adaptglobal.io" className={p.accent ? 'btn btn--accent' : 'btn'} style={{ textAlign: 'center', justifyContent: 'center' }}>
                    {p.cta} <span className="arrow">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:880px){.plan-hdr,.plans-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* Global Launch Program */}
        <section id="global-launch" className="section-pad" style={{ borderTop: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-20%', left: '20%', width: '60%', height: '120%',
            borderRadius: '50%', background: 'var(--accent-2)', opacity: 0.06, filter: 'blur(120px)',
          }} />
          <div className="wrap" style={{ position: 'relative' }}>
            <div className="section-label"><span>04 — Global Launch Program</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }} className="glp-grid">
              <div>
                <h2 className="display-2" style={{ marginBottom: 24 }}>
                  Ready to go global?<br />
                  <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>We pay you.</span>
                </h2>
                <p className="lead" style={{ marginBottom: 32 }}>
                  Apply for the Global Launch Program — it's 100% free for creators.
                  Adapt covers all localization costs and shares revenue with you.
                  It's our investment in your global success.
                </p>
                <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 16 }}>
                  {[
                    { n: '1', t: 'Apply', d: 'Submit your channel application.' },
                    { n: '2', t: 'Get Accepted', d: 'We review and approve selected channels.' },
                    { n: '3', t: 'Launch Global', d: 'We localize your content and launch your channel. No fees. We pay you.' },
                  ].map(s => (
                    <li key={s.n} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent-2)', flexShrink: 0, marginTop: 3 }}>{s.n}</div>
                      <div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 20 }}>{s.t}</div>
                        <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--fg-2)' }}>{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div style={{
                background: 'var(--bg-2)', border: '1px solid color-mix(in oklab, var(--accent-2) 40%, var(--line))',
                borderRadius: 20, padding: 'clamp(28px,3.5vw,48px)',
              }}>
                <div className="eyebrow" style={{ color: 'var(--accent-2)', marginBottom: 24 }}>Apply now · it's free</div>
                <div style={{ display: 'grid', gap: 16 }}>
                  {[
                    { label: 'Name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email', type: 'email', placeholder: 'you@example.com' },
                    { label: 'YouTube Channel URL', type: 'url', placeholder: 'https://youtube.com/...' },
                  ].map(f => (
                    <div key={f.label}>
                      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>
                        {f.label}
                      </label>
                      <input type={f.type} placeholder={f.placeholder}
                        style={{
                          width: '100%', padding: '14px 16px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid var(--line-2)', borderRadius: 10,
                          color: 'var(--fg)', fontFamily: 'var(--sans)', fontSize: 15,
                          outline: 'none', boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 8 }}>
                      Why is your channel ready to go global?
                    </label>
                    <textarea placeholder="Tell us about your audience, content type, and global ambitions..." rows={4}
                      style={{
                        width: '100%', padding: '14px 16px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--line-2)', borderRadius: 10,
                        color: 'var(--fg)', fontFamily: 'var(--sans)', fontSize: 15,
                        outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                      }} />
                  </div>
                  <a href="mailto:info@adaptglobal.io?subject=Global Launch Program Application" className="btn btn--primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    Submit Application <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:880px){.glp-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* YouTube CTA */}
        <section className="section-pad-sm" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>See it in action</div>
              <h2 className="display-3" style={{ maxWidth: '28ch' }}>
                Watch how we've helped creators reach global audiences.
              </h2>
            </div>
            <a href="https://www.youtube.com/@Adaptglobal-io" target="_blank" rel="noopener" className="btn" style={{ flexShrink: 0 }}>
              Visit our YouTube ↗
            </a>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

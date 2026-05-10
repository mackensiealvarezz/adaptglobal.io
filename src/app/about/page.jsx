import React from 'react';
import { Nav } from '../../components/nav.jsx';
import { Footer } from '../../components/footer.jsx';
import { CTA } from '../../components/cta.jsx';
import { LeaderCard } from '../../components/page-utils.jsx';

export const metadata = {
  title: 'About — Adapt | The Future of Media Localization',
  description: 'Adapt was founded in 2024 by Justin Beaudin with a mission to integrate AI with human artistry to revolutionize media localization. Meet the team behind premium AI dubbing.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Adapt | The Future of Media Localization',
    description: 'A team of experts from Netflix, Warner, NBCUniversal, Deluxe, and IYUNO — combining AI with the best localization artists in the world.',
    url: 'https://adaptglobal.io/about/',
  },
};

const CDN = 'https://adaptglobal.io/wp-content/uploads/';

const LEADERSHIP = [
  {
    name: 'Justin Beaudin', title: 'President & CEO',
    img: CDN + '1727953047900-1.jpg',
    bio: "Justin Beaudin, an industry veteran, founded Adapt in April 2024 with a vision for how AI can complement the creative process — helping media professionals and artists achieve more while preserving quality and the human touch. Rather than focusing purely on technology development, Adapt applies AI to enable the world's best regional dubbing directors, linguists, and audio engineers to do their finest work.",
  },
  {
    name: 'Kevin Munro', title: 'Chief Technology Officer',
    img: CDN + '1647397739298.jpg',
    bio: "As Adapt's CTO, Kevin Munro oversees the development and integration of AI-driven localization technologies. With a deep background in cloud infrastructure, security, and workflow automation — including roles as Head of Technology for JUICE Inc. and SVP of Product for Vubiquity — he leads the technological innovation behind Adapt's Nuance platform and broader technical ecosystem.",
  },
  {
    name: 'Matteo Natale', title: 'Chief Operating Officer',
    img: CDN + 'Matteo-1.jpeg',
    bio: "Matteo Natale is Adapt's Chief Operating Officer, driving the company's overall localization offering by combining innovative technologies with localization experts from around the world. With extensive experience at Deluxe, Vubiquity, Prime Focus, and IDC, he has helped scale localization and content distribution for major studios.",
  },
  {
    name: 'Svetlana Jacobs', title: 'VP of Localization',
    img: CDN + '1699656148150.jpg',
    bio: "Svetlana Jacobs brings over 20 years of localization expertise, having held key roles at Netflix and Roku. A native Russian speaker fluent in English, French, and Italian, she manages Adapt's regional heads and worldwide team of Cultural Ambassadors to ensure every product resonates authentically around the globe.",
  },
  {
    name: 'Bipin Doshi', title: 'VP of Operations',
    img: CDN + '1727751229100-1.jpg',
    bio: 'Bipin Doshi is a seasoned media operations executive with a track record of delivering top-tier projects for Netflix, Sony Pictures, Lionsgate, Disney, and Amazon. With over two decades of experience, he leads Adapt\'s operational strategies, ensuring seamless execution across all projects.',
  },
  {
    name: 'Rachel Marie Hamid', title: 'VP Client Solutions, North America',
    img: CDN + '1730220612370.jpg',
    bio: "Rachel Hamid has extensive experience in localization and client solutions, having worked with Deluxe and Crunchyroll, serving major clients including Netflix, Lionsgate, NBCUniversal, and MGM. With a passion for problem-solving and process optimization, she ensures exceptional service delivery tailored to each content creator's needs.",
  },
  {
    name: 'Robert Zablith', title: 'VP Business Development & Talent',
    img: CDN + '1724624221666.jpg',
    bio: "With 25 years in the localization industry, Robert Zablith has a deep understanding of dubbing, voice talent, and multilingual project management. He has worked with Iyuno/SDI, Deluxe, and TransPerfect, leveraging his global network to build Adapt's world-class talent pool of Cultural Ambassadors and Tech Producers.",
  },
  {
    name: 'Max Bienvenu', title: 'Director of Client Solutions, North America',
    img: CDN + 'Profile-Photo_Max-1.jpg',
    bio: 'With over 12 years of experience in media localization, Max has built a career at the intersection of client solutions, business development, and operational excellence. He has worked closely with large enterprise clients, securing high-value contracts and building long-term partnerships. His background covers the full localization pipeline from pre-production through post, giving him a unique perspective on client needs.',
  },
  {
    name: 'Andre Scheidt', title: 'Director Global Audio & Regional Head LATAM',
    img: CDN + 'andre-scheidt_square.jpeg',
    bio: 'With 12+ years in localization, Andre is fluent in European and Brazilian Portuguese and proficient in Spanish and Italian. He has worked as a Dubbing Producer, Director, and Audio Engineer at The Kitchen, Olympus Sat, and BKS, bringing deep production expertise to Adapt\'s Latin American operations.',
  },
  {
    name: 'Russell Wait', title: 'Director Product & Regional Head APAC',
    img: CDN + 'russell.jpg',
    bio: "Based in Hong Kong, Russell has 20+ years of experience in Asian localization, dubbing, and voice-over. He was Head of Dubbing at Red Angel Media, working on major titles for Netflix, Disney+, HBO, FOX, and National Geographic. He leads Adapt's product vision and all Asia-Pacific operations.",
  },
  {
    name: 'Madisen Farace', title: 'Director of Marketing & Communications',
    img: CDN + 'madisen-farace-1.jpeg',
    bio: "Madisen leads Adapt's marketing and communications strategy, building the brand presence that brings Adapt's mission to the world. She shapes how the company presents itself across channels and ensures the story of AI-powered localization reaches studios, broadcasters, and creators.",
  },
  {
    name: 'Tolu Briggs', title: 'Director, Global Channel Management',
    img: CDN + 'tolu.jpeg',
    bio: "Tolu Briggs brings over 8 years' experience driving growth across YouTube and social platforms. She leads the distribution of clients' AI-localized content at scale, heading a global team focused on scaling audiences across international markets. Her experience includes senior roles at WildBrain, Papercup, and Little Dot Studios, overseeing channel management for localized content across YouTube, Facebook, and other social platforms.",
  },
  {
    name: 'Judah Purcell', title: 'Director of Development',
    img: CDN + 'Judah-Purcell-e1775676321179.jpeg',
    bio: "A full-stack developer who brings ideas to life, designing and building web applications that are smart under the hood, seamless on the surface, and built to last. Judah shapes the engineering culture and technical architecture that powers Adapt's internal tools and Nuance platform.",
  },
  {
    name: 'Hrithik Jain', title: 'Finance Lead',
    img: CDN + 'hrithik-jain.jpg',
    bio: "Hrithik leads Adapt's finance operations, providing the financial rigour and strategic insight that underpins the company's growth. He ensures Adapt's resources are deployed effectively as the company scales its AI-powered localization platform globally.",
  },
];

const PRINCIPLES = [
  { n: '01', title: 'Make the Acceptable Exceptional',        accent: 'var(--accent)',   body: "There is too much focus on making things cheaper and not enough on making them exceptional. Our goal is to combine new technology with the best experts and artists to create an exceptional output." },
  { n: '02', title: 'Service Matters',                        accent: 'var(--accent-2)', body: "We love our customers and want to build relationships that exceed expectations. Working with us should be easy and frictionless — full E2E service with great experts, artists, technology, and support." },
  { n: '03', title: 'Great AI Solutions Leave Room to Play',  accent: 'var(--accent)',   body: "AI should empower users, enhancing capabilities without replacing human expertise or creativity. There should be plenty of room for play, passion, and fun." },
  { n: '04', title: 'Artistry at the Core',                  accent: 'var(--accent-2)', body: "Build processes around key operators, experts, and artists. Give them the best tools, more time, and the required space to create. Artistry is at the core of what we do." },
  { n: '05', title: 'Localization is Storytelling',          accent: 'var(--accent)',   body: "Localization is more than translating a line or a scene. It requires translating the entire story — preserving the author's authenticity while ensuring it resonates in every language." },
  { n: '06', title: 'Regionally Authentic, Globally Resonant', accent: 'var(--accent-2)', body: "Our goal is to resonate with audiences worldwide. We balance preserving original intent while adapting to viewers' culture and surroundings — making every dub feel native." },
  { n: '07', title: 'Integrate with the Best: Humans and Tech', accent: 'var(--accent)', body: "We embrace what technology brings to enhance our craft. Tech is our ally, empowering us to deliver localization that is nuanced, authentic, and efficient." },
  { n: '08', title: 'Better Translations, Better Dubs',       accent: 'var(--accent-2)', body: "We believe there is room for improvement in the dubs made today and are committed to being open and innovative in our goal to make them better — always." },
];

const STUDIOS = ['Netflix', 'Warner Bros.', 'NBCUniversal', 'Deluxe', 'IYUNO', 'Crunchyroll', 'Lionsgate', 'Disney'];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <header style={{
          paddingTop: 72, borderBottom: '1px solid var(--line)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-10%', right: '5%', width: '55%', height: '90%',
            borderRadius: '50%', background: 'var(--accent)', opacity: 0.04, filter: 'blur(130px)',
          }} />
          <div className="wrap" style={{ padding: 'clamp(48px,6vw,80px) var(--pad)' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1.3fr 0.7fr',
              gap: 'clamp(40px,6vw,96px)', alignItems: 'start',
            }} className="about-hero-grid">

              {/* Left — story */}
              <div>
                <div className="eyebrow" style={{ color: 'var(--accent)' }}>About Adapt</div>
                <h1 className="display-2" style={{ marginTop: 16 }}>
                  Innovation{' '}
                  <span className="italic-serif" style={{ color: 'var(--accent)' }}>meets</span>{' '}
                  tradition.
                </h1>
                <p className="lead" style={{ marginTop: 24 }}>
                  Justin Beaudin founded Adapt in April 2024 to explore how AI can complement the
                  creative process — helping media professionals and artists achieve more while
                  preserving the highest quality.
                </p>
                <p className="body" style={{ marginTop: 16, color: 'var(--fg-2)' }}>
                  That journey led to localization and AI dubbing. Rather than chasing cheaper,
                  Adapt applies the latest AI to empower the world's best regional dubbing
                  directors, linguists, and audio engineers — delivering premium dubs and subtitles
                  at <strong style={{ color: 'var(--fg)' }}>4× less than market rates</strong>, delivered{' '}
                  <strong style={{ color: 'var(--fg)' }}>4× faster.</strong>
                </p>
                <p className="body" style={{ marginTop: 14, color: 'var(--fg-2)' }}>
                  We are a small, senior team from major studios and industry leaders — proud of
                  the tradition of localization and excited to shape its future.
                </p>

                {/* Studio pedigree */}
                <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-4)', marginBottom: 14 }}>
                    Our team comes from
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 24, rowGap: 8 }}>
                    {STUDIOS.map(s => (
                      <span key={s} style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(14px,1.3vw,18px)', color: 'var(--fg-2)' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — stats */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 1, background: 'var(--line)',
                border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden',
                alignSelf: 'start', marginTop: 8,
              }}>
                {[
                  { stat: '2024', label: 'Founded' },
                  { stat: '20+',  label: 'Languages' },
                  { stat: '4×',   label: 'Faster delivery' },
                  { stat: '4×',   label: 'Cost savings' },
                ].map(m => (
                  <div key={m.label} style={{ background: 'var(--bg-2)', padding: '28px 20px' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,3.5vw,48px)', color: 'var(--accent)', lineHeight: 1 }}>{m.stat}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 10 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:880px){.about-hero-grid{grid-template-columns:1fr!important;}}`}</style>
        </header>

        {/* ── 01 — Leadership team ──────────────────────────────── */}
        <section className="section-pad">
          <div className="wrap">
            <div className="section-label"><span>01 — Leadership</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,80px)', alignItems: 'end', marginBottom: 64,
            }} className="lead-hdr">
              <h2 className="display-2">
                Experts from the<br />
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>world's best</span> studios.
              </h2>
              <p className="lead">
                Our leadership team brings decades of combined experience from the world's leading
                studios and localization providers — united by a shared belief that AI and artistry
                are better together. Click any portrait to read their bio.
              </p>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16,
            }} className="leader-grid">
              {LEADERSHIP.map(p => (
                <LeaderCard key={p.name} name={p.name} title={p.title} bio={p.bio} img={p.img} />
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:1080px){.leader-grid{grid-template-columns:repeat(3,1fr)!important;}}
            @media(max-width:880px){.lead-hdr{grid-template-columns:1fr!important;}.leader-grid{grid-template-columns:repeat(2,1fr)!important;}}
            @media(max-width:480px){.leader-grid{grid-template-columns:1fr!important;}}
          `}</style>
        </section>

        {/* ── Pedigree strip ────────────────────────────────────── */}
        <div style={{
          borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
          background: 'var(--bg-2)', padding: '18px 0',
        }}>
          <div className="wrap" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-4)', flexShrink: 0 }}>Team pedigree</span>
            <span style={{ color: 'var(--line-2)', flexShrink: 0, marginRight: 4 }}>·</span>
            {STUDIOS.map((s, i) => (
              <React.Fragment key={s}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(15px,1.3vw,19px)', color: 'var(--fg-2)' }}>{s}</span>
                {i < STUDIOS.length - 1 && <span style={{ color: 'var(--line-2)' }}>·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── 02 — Mission principles ───────────────────────────── */}
        <section className="section-pad">
          <div className="wrap">
            <div className="section-label"><span>02 — Mission principles</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,80px)', alignItems: 'end', marginBottom: 64,
            }} className="mission-hdr">
              <h2 className="display-2">
                What we{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>stand for.</span>
              </h2>
              <p className="lead">
                Adapt's beliefs and mission principles are foundational to our business.
                We share them broadly because they create accountability to our own vision.
                We welcome your feedback and input.
              </p>
            </div>

            <div>
              {PRINCIPLES.map((p, i) => (
                <div key={p.n} style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr 2.2fr',
                  gap: 'clamp(16px,3vw,48px)',
                  padding: 'clamp(24px,3vw,40px) 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: i === PRINCIPLES.length - 1 ? '1px solid var(--line)' : 'none',
                  alignItems: 'baseline',
                }} className="principle-row">
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', color: p.accent }}>{p.n}</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px,2vw,28px)', lineHeight: 1.1, letterSpacing: '-0.01em' }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.65 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:880px){
              .mission-hdr{grid-template-columns:1fr!important;}
              .principle-row{grid-template-columns:1fr!important;gap:8px!important;}
            }
          `}</style>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

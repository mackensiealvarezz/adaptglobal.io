import React from 'react';
import { Nav } from '../../components/nav.jsx';
import { Footer } from '../../components/footer.jsx';
import { AudioDemo } from '../../components/audio-demo.jsx';
import { CTA } from '../../components/cta.jsx';
import { VideoCard, FeaturedVideoCard, TeamCard } from '../../components/page-utils.jsx';

export const metadata = {
  title: 'Studios & Broadcasters — AI Dubbing & Subtitling at Scale | Adapt',
  description: 'Premium AI-powered dubbing and subtitling for studios and broadcasters. Preserve accents, emotion, and authenticity — 4× cheaper, 4× faster than traditional providers.',
  alternates: { canonical: '/studios-broadcasters' },
  openGraph: {
    title: 'Studios & Broadcasters | Adapt',
    description: 'Theatrical-grade localization at scale. Human-centric AI dubbing that sounds better than the competition.',
    url: 'https://adaptglobal.io/studios-broadcasters/',
  },
};

const CDN = 'https://adaptglobal.io/wp-content/uploads/';

const FEATURED_DEMO = {
  src: CDN + 'Willa_Explainer_Video02_HQ-01.mp4',
  title: "Stephen King's Willa — in Spanish",
  lang: 'ES · Drama · RealSync Lip Sync',
  type: 'Featured',
  badge: 'Featured Demo',
};

const SUPPORTING_DEMOS = [
  { src: CDN + 'WMFO_sample_V2.mp4',                                   title: "The World's Most Fabulous Object", lang: 'Multi · Reality TV',       type: 'Dubbed' },
  { src: CDN + 'Passacaglia_AllLanguageDemo_v5.mp4',                   title: 'Passacaglia — Drinking Scene',    lang: 'Multi · Drama',            type: 'Multi-Lang' },
  { src: CDN + 'Smart_Scale_with_subs.mp4',                            title: 'Smart Scale Ruler',               lang: 'ES · Commercial',          type: 'Dubbed + Subs' },
  { src: CDN + 'Adapt_KidsDemoReel.mp4',                               title: 'Kids Content Reel',               lang: 'Multi · Kids & Animation', type: 'Demo Reel' },
  { src: CDN + 'AOfL_Hello_LAS-01.mp4',                                title: 'ABC Mouse — Hello Song',          lang: 'ES · Kids',                type: 'Dubbed' },
  { src: CDN + 'AOfL_CookingForHamsters_LAS_RealSync%20-%2001.mp4',   title: 'Cooking for Hamsters',            lang: 'ES · Kids · RealSync',     type: 'Lip Sync' },
];

const QUALITY_PILLARS = [
  { n: '01', title: 'We Preserve Accents',            accent: 'var(--accent)',   body: 'Our proprietary process preserves accents, providing an authentic experience that 65% of viewers prefer. French content sounds French. Korean sounds Korean.' },
  { n: '02', title: 'We Preserve Emotion',            accent: 'var(--accent-2)', body: 'Our translated dubs carry through the emotion of the original actors — not just the words. Every line is reviewed by human artists who understand the performance.' },
  { n: '03', title: 'Leads Are In-Region',            accent: 'var(--accent)',   body: "Translations and dubs are created by linguists sitting with the end viewers. Cultural nuance can't be replicated remotely — so we don't try." },
  { n: '04', title: 'Best Screenwriters & Engineers', accent: 'var(--accent-2)', body: "Our regional leads aren't just local — they're the best in their markets. We hire quality leads because quality people make quality product." },
  { n: '05', title: 'Best-in-Class Integrated Tech',  accent: 'var(--accent)',   body: 'DeepL for translation. ElevenLabs for voice. Ooona, VoiceQ, and Pro Tools for the craft layer. All orchestrated through our proprietary Nuance platform.' },
];

const REGIONAL_LEADS = [
  {
    name: 'Murat', role: 'Middle East Regional Head', lang: 'AR',
    img: CDN + 'murat.jpg',
    bio: 'Murat, based in Turkey, brings 30+ years of expertise in dubbing and subtitling. He has worked with Deluxe, Zoo Digital, and SDI Media, delivering content for Paramount, Disney, and Discovery.',
  },
  {
    name: 'Ariana', role: 'LAS Cultural Ambassador', lang: 'ES',
    img: CDN + 'Ariana-LAS.jpg',
    bio: 'Ariana is a multilingual translator fluent in English, French, and Spanish. She specializes in English to LAS translations, proofreading, and project management, having worked with Deluxe, RWS, and TransPerfect.',
  },
  {
    name: 'Suzy', role: 'Korean Cultural Ambassador', lang: 'KO',
    img: CDN + 'suzy.jpg',
    bio: 'Suzy has 10+ years of localization experience, previously serving as Country Manager for SDI Media and BTI. She specializes in translation, subtitling, and SDH for US studios and OTT platforms.',
  },
  {
    name: 'Beizhou', role: 'Mandarin Cultural Ambassador', lang: 'ZH',
    img: CDN + 'Beizhou-Mandarin.jpg',
    bio: 'A native Chinese translator in Hong Kong, Beizhou holds two master\'s degrees in Translation Technology and Audiovisual Translation. He has a background in STEM, humanities, and renewable energy.',
  },
  {
    name: 'Claudia', role: 'Castilian Spanish CA', lang: 'ES',
    img: CDN + 'Claudia-CAS-.jpg',
    bio: 'Claudia specializes in audiovisual and video game localization for English to CAS. With a background in English philology and two master\'s in translation, she focuses on delivering culturally resonant content.',
  },
  {
    name: 'Danny', role: 'French Canadian CA', lang: 'FR',
    img: CDN + 'Daniele-aka-Danny-French-Canadian.jpg',
    bio: 'Danny has a background in film production and has worked in the grip and camera departments. Passionate about AI dubbing, she combines creativity with emerging localization technologies.',
  },
  {
    name: 'Pedro', role: 'European Portuguese CA', lang: 'PT',
    img: CDN + 'Pedro-Euro-Portuguese.jpg',
    bio: 'Pedro is a Sound Director and Re-recording Mixer with 18+ years in sound design, editing, and mixing for film, TV, and multimedia projects.',
  },
  {
    name: 'Yasmine', role: 'French Language Lead', lang: 'FR',
    img: CDN + 'Yasmine-B-French-P.jpg',
    bio: 'Yasmine is a subtitle translator and QC specialist with experience on projects for Amazon, Netflix, and Paramount. She ensures high-quality, culturally adapted subtitles.',
  },
  {
    name: 'Rafael', role: 'Brazilian Portuguese CA', lang: 'PT',
    img: CDN + 'Rafael-BPO.jpg',
    bio: 'With 7+ years of experience, Rafael specializes in literary and technical translations. He has worked with Sublime and TransPerfect, focusing on audiovisual translation and subtitling.',
  },
  {
    name: 'Alex', role: 'German Language Advisor', lang: 'DE',
    img: CDN + 'alex.jpg',
    bio: 'Alexander Kurch has worked in audiovisual translation and media accessibility since 2012, specializing in speech-to-text interpreting, subtitling, audio description, voice-over, and dubbing. An independent researcher, author, and lecturer, his focus lies in combining accessible communication with speech and language technologies, including AI voice optimization, prompt engineering, and AI-driven workflow automation.',
  },
  {
    name: 'Antigoni', role: 'German Cultural Ambassador', lang: 'DE',
    img: CDN + 'Antigoni-German-and-Greek-1.png',
    bio: 'Antigoni specializes in dubbing script adaptation and multimedia translation for Greek, English, and German. She has worked on titles like Django and East New York to create culturally engaging adaptations.',
  },
  {
    name: 'Atika', role: 'Indonesian Cultural Ambassador', lang: 'ID',
    img: CDN + 'image002.jpg',
    bio: 'Atika is a language and localization specialist with hands-on expertise in localization, video subtitling, and translation. She is dedicated to delivering high-quality, culturally resonant content across diverse formats, ensuring both linguistic accuracy and audience relevance.',
  },
  {
    name: 'Jose', role: 'LAS Cultural Ambassador', lang: 'ES',
    img: CDN + 'Jose.jpg',
    bio: 'Jose is an audio engineer with 10 years of experience in ADR, mixing, and dubbing. Bilingual in English and Spanish, with a strong track record of working with The Kitchen TV, VOA Studios, and Olympusat.',
  },
  {
    name: 'Jasmin', role: 'German Language Lead', lang: 'DE',
    img: CDN + 'Jasmin.jpg',
    bio: 'Jasmin is a native German speaker based in Los Angeles, fluent in German, English, and Farsi, and speaks conversational Spanish. She is passionate about delivering culturally accurate translations and adaptations.',
  },
  {
    name: 'Danny', role: 'Indonesian Technical Producer', lang: 'ID',
    img: CDN + 'Danny-2.jpg',
    bio: 'Danny is a musician, producer, sound engineer, and photographer. With expertise in live sound, recording, mixing, and mastering, he has worked with top artists like Indra Lesmana and Simak Dialog. He also creates jingles, teaches sound engineering, and captures powerful moments through photography.',
  },
  {
    name: 'Sami', role: 'Arabic Cultural Ambassador', lang: 'AR',
    img: CDN + 'Sami.jpg',
    bio: 'Sami Fraihat began as a freelance translator, bridging English and Arabic communities with cultural and linguistic expertise. His reputation for excellence led to roles in language consultancy, localization, team leadership, operations management, and technology. Today, he continues to innovate and influence the localization industry through his diverse experience.',
  },
  {
    name: 'Ann', role: 'LAS Cultural Ambassador', lang: 'ES',
    img: CDN + 'Ann.jpg',
    bio: 'Ann Montañana is a Spanish translator from Argentina, specializing in localization and audiovisual translation. With a strong passion for both entertainment and languages, she finds true joy in combining these worlds through her work, ensuring that content resonates authentically with Spanish-speaking audiences.',
  },
  {
    name: 'Ahmad', role: 'Arabic Language Lead', lang: 'AR',
    img: CDN + 'Ahmad.jpg',
    bio: 'With 8+ years of experience in localization, Ahmad served as Title Manager and Production Team Lead at Iyuno-SDI, managing dubbing and subtitling projects in 35+ languages. He has led high-profile accounts like Netflix and delivered localized content for Disney+, FOX, Amazon, HBO, and WB.',
  },
  {
    name: 'Divya', role: 'Hindi Language Lead', lang: 'HI',
    img: CDN + 'Divya.jpg',
    bio: 'Divya is a seasoned professional with over 11 years in the localisation industry, specializing in creative excellence and language adaptation. At Netflix, she led creative efforts for all Indian languages as a Language Production Manager. Previously a dubbing director, she worked on content for Netflix, Amazon Prime, Disney, and Reliance. A native Hindi speaker, she is fluent in English and also speaks Malayalam and Bengali.',
  },
  {
    name: 'Agostina', role: 'LAS Language Lead', lang: 'ES',
    img: CDN + 'agostina.jpg',
    bio: 'An English to Spanish audiovisual translator from Argentina with more than 5 years of experience in the industry. Works on translation, QC, proofreading, and dubbing for many of the major streaming platforms. Passionate about all things screen and storytelling.',
  },
  {
    name: 'Fernanda', role: 'LAS Cultural Ambassador', lang: 'ES',
    img: CDN + 'Maria-Fernanda-Drago-e1775673171117.jpeg',
    bio: 'Fernanda is an English-to-Spanish audiovisual translator from Argentina with 10+ years in localization. She works on all kinds of screen content — series, documentaries, interviews, and broadcast and streaming projects — creating subtitles and captions that feel natural and true to the original. She is genuinely excited about AI in the industry and enjoys exploring new tech-driven workflows.',
  },
  {
    name: 'Guadalupe', role: 'LAS Lead Cultural Ambassador', lang: 'ES',
    img: CDN + 'Guadalupe-Azanza-Website-pic-e1775674445905.jpg',
    bio: 'Guadalupe is an English–Spanish translator with 8+ years of experience in audiovisual translation. She specializes in subtitling and AI dubbing, combining linguistic expertise with a strong understanding of emerging language technologies. As Lead Cultural Ambassador for the Spanish team, she contributes to voice generation and subtitling, delivers training, and helps shape quality standards.',
  },
  {
    name: 'Estefanía', role: 'LAS Cultural Ambassador', lang: 'ES',
    img: CDN + 'Estefania-Allori-scaled-e1775675197266.jpg',
    bio: 'Estefanía is a freelance English into Latin American Spanish translator with 7+ years of experience localizing audiovisual content and video games. Her work spans AI-dubbing YouTube videos and reality TV shows, as well as bringing mobile and PC games to the LATAM market. At Adapt, she is part of a talented team of linguists delivering high-quality dubbing for crime shows, fitness sessions, and news content.',
  },
  {
    name: 'Candelaria', role: 'LAS Cultural Ambassador', lang: 'ES',
    img: CDN + 'Candelaria-Pedriel-Montes.jpg',
    bio: 'Candelaria is a translation and localization professional from Argentina with experience in linguistic quality control, cultural adaptation, and digital marketing. She holds a degree in Translation from Universidad del Museo Social Argentino and has worked with international teams across multilingual environments. Her work focuses on Spanish language quality, localization workflows, and supporting AI-driven content creation.',
  },
  {
    name: 'Colin', role: 'English Language Lead', lang: 'EN',
    img: CDN + 'Colin-St-John-e1775675575680.jpg',
    bio: 'Colin leverages 10+ years of localization management, theatrical direction, and audio engineering expertise to pioneer AI-driven storytelling solutions. By bridging performance arts, technical audio mastery, and cross-cultural adaptation, he crafts emotionally resonant experiences that translate stories across global audiences. His work in AI-powered overdubbing creates inclusive access to multicultural narratives.',
  },
];

export default function StudiosPage() {
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
            position: 'absolute', top: '-10%', left: '20%', width: '60%', height: '80%',
            borderRadius: '50%', background: 'var(--accent)', opacity: 0.04, filter: 'blur(120px)',
          }} />
          <div className="wrap" style={{ padding: 'clamp(56px,8vw,120px) var(--pad)' }}>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>Studios & Broadcasters</div>
            <h1 className="display-1" style={{ marginTop: 20, maxWidth: '15ch' }}>
              Human-centric AI<br />
              for{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>studios</span>{' '}
              &amp;{' '}
              <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>broadcasters.</span>
            </h1>
            <p className="lead" style={{ marginTop: 28, maxWidth: '60ch' }}>
              We combine powerful AI tools for transcription, translation, and voice synthesis
              with highly trained regional experts — delivering exceptional dubs and subtitles
              at <strong style={{ color: 'var(--fg)' }}>4× less than market rates</strong> and{' '}
              <strong style={{ color: 'var(--fg)' }}>4× faster</strong> than the competition.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="mailto:info@adaptglobal.io" className="btn btn--primary">Get in touch <span className="arrow">→</span></a>
              <a href="/platform" className="btn">Tour our platform →</a>
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
              gap: 1, background: 'var(--line)',
              border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden',
              marginTop: 56,
            }} className="metrics-strip-s">
              {[
                { stat: '4×',  label: 'Less than market rates' },
                { stat: '4×',  label: 'Faster delivery' },
                { stat: '20+', label: 'Languages covered' },
                { stat: '48h', label: 'Rush turnaround' },
              ].map(m => (
                <div key={m.label} style={{ background: 'var(--bg-2)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', color: 'var(--accent)', lineHeight: 1 }}>{m.stat}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 10 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:880px){.metrics-strip-s{grid-template-columns:repeat(2,1fr)!important;}}
            @media(max-width:480px){.metrics-strip-s{grid-template-columns:1fr!important;}}
          `}</style>
        </header>

        {/* ── 01 — Hear it ──────────────────────────────────────── */}
        <AudioDemo />

        {/* ── 02 — Content demos ────────────────────────────────── */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="wrap">
            <div className="section-label"><span>02 — Content demos</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,80px)', alignItems: 'end', marginBottom: 48,
            }} className="see-hdr">
              <h2 className="display-2">
                Quality you can<br />
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>hear and see.</span>
              </h2>
              <p className="lead">
                We include both English and foreign-language source content so you can evaluate
                the quality of our translations and dubs firsthand. Hover to preview with sound,
                click to watch full screen.
              </p>
            </div>

            {/* Flagship demo */}
            <FeaturedVideoCard {...FEATURED_DEMO} />

            {/* Supporting 6 demos */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 20,
            }} className="support-demos">
              {SUPPORTING_DEMOS.map(d => <VideoCard key={d.src} {...d} />)}
            </div>

            <p style={{ marginTop: 24, fontSize: 14, color: 'var(--fg-3)' }}>
              More samples on{' '}
              <a href="https://www.youtube.com/@Adaptglobal-io" style={{ color: 'var(--accent)', textDecoration: 'underline' }} target="_blank" rel="noopener">
                our YouTube channel ↗
              </a>
            </p>
          </div>
          <style>{`
            @media(max-width:880px){.see-hdr{grid-template-columns:1fr!important;} .support-demos{grid-template-columns:1fr!important;}}
            @media(max-width:1080px) and (min-width:641px){.support-demos{grid-template-columns:repeat(2,1fr)!important;}}
          `}</style>
        </section>

        {/* ── 03 — Why we sound better ──────────────────────────── */}
        <section className="section-pad">
          <div className="wrap">
            <div className="section-label"><span>03 — Why we sound better</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,80px)', alignItems: 'end', marginBottom: 64,
            }} className="why-hdr">
              <h2 className="display-2">
                When you put it all together,<br />
                our dubs just{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>sound better.</span>
              </h2>
              <p className="lead">
                Better-sounding dubs mean stories resonate more — which means higher ratings,
                more views, and increased consumption in every language.
              </p>
            </div>
            <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {QUALITY_PILLARS.map((p, i) => (
                <li key={p.n} style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr 2fr',
                  gap: 'clamp(20px,3vw,56px)',
                  padding: 'clamp(24px,3vw,40px) 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: i === QUALITY_PILLARS.length - 1 ? '1px solid var(--line)' : 'none',
                  alignItems: 'baseline',
                }} className="pillar-row">
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.18em', color: 'var(--fg-4)' }}>{p.n}</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px,2.5vw,36px)', lineHeight: 1.1, color: p.accent }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6 }}>{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <style>{`
            @media(max-width:880px){
              .why-hdr{grid-template-columns:1fr!important;}
              .pillar-row{grid-template-columns:1fr!important;gap:8px!important;}
            }
          `}</style>
        </section>

        {/* ── 04 — The team ─────────────────────────────────────── */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
          <div className="wrap">
            <div className="section-label"><span>04 — The team</span></div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px,6vw,96px)', alignItems: 'end', marginBottom: 64,
            }} className="team-hdr-s">
              <h2 className="display-2">
                Translation is<br />
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>storytelling.</span>
              </h2>
              <div>
                <p className="lead" style={{ marginBottom: 20 }}>
                  Our {REGIONAL_LEADS.length} Regional Leads — Cultural Ambassadors and Tech Producers —
                  sit at the center of every dub. The best linguists, artists, and engineers in the
                  regions we serve. Click any portrait to read their bio.
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['ES','FR','PT','DE','AR','KO','ZH','HI','ID','EN'].map((l, i) => (
                    <span key={l} style={{
                      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em',
                      padding: '4px 10px', borderRadius: 999, border: '1px solid var(--line)',
                      color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
                      background: i % 2 === 0 ? 'color-mix(in oklab, var(--accent) 7%, transparent)' : 'color-mix(in oklab, var(--accent-2) 7%, transparent)',
                    }}>{l}</span>
                  ))}
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', padding: '4px 10px', borderRadius: 999, border: '1px solid var(--line)', color: 'var(--fg-3)' }}>+more</span>
                </div>
              </div>
            </div>

            {/* 5-col circular grid — all 25 leads */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 8,
            }} className="team-grid-full">
              {REGIONAL_LEADS.map((p, i) => (
                <TeamCard key={`${p.name}-${i}`} {...p} />
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <a href="/about#team" className="btn">Learn about our full network <span className="arrow">→</span></a>
            </div>
          </div>
          <style>{`
            @media(max-width:1080px){.team-grid-full{grid-template-columns:repeat(4,1fr)!important;}}
            @media(max-width:880px){
              .team-hdr-s{grid-template-columns:1fr!important;}
              .team-grid-full{grid-template-columns:repeat(3,1fr)!important;}
            }
            @media(max-width:480px){.team-grid-full{grid-template-columns:repeat(2,1fr)!important;}}
          `}</style>
        </section>

        {/* ── 05 — How to work with us ──────────────────────────── */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="section-label"><span>05 — How to work with us</span></div>
            <h2 className="display-2" style={{ maxWidth: '16ch', marginBottom: 56 }}>
              Everything you need,{' '}
              <span className="italic-serif" style={{ color: 'var(--accent-2)' }}>end to end.</span>
            </h2>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
              gap: 1, background: 'var(--line)',
              border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden',
            }} className="how-grid-s">
              {[
                {
                  icon: '◈', title: 'Service with Technology',
                  body: "We take your source content and deliver a dub in your chosen language — preserving the original actors' accents, emotion, and performance. Subtitles, closed captions, and forced narratives are included.",
                },
                {
                  icon: '◆', title: 'Pricing',
                  body: 'We charge by the minute of supplied content. Prices vary by language and dubbing type: Full Lip Sync, Voice Over, or Audio Description. Generally one-quarter the cost of traditional providers for the same quality.',
                },
                {
                  icon: '◉', title: 'Turnaround',
                  body: 'Standard turnaround is 7 business days — one-fourth to one-fifth of typical industry delivery. Rush projects can be expedited to 48 hours. Subtitles and forced narratives are included at no extra cost.',
                },
              ].map(item => (
                <div key={item.title} style={{
                  background: 'var(--bg-2)', padding: 'clamp(28px,3.5vw,48px)',
                  display: 'flex', flexDirection: 'column', gap: 20,
                }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--accent)' }}>{item.icon}</div>
                  <h3 className="display-3">{item.title}</h3>
                  <p className="body">{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <a href="mailto:info@adaptglobal.io" className="btn btn--accent">Get a scoped plan <span className="arrow">→</span></a>
            </div>
          </div>
          <style>{`@media(max-width:880px){.how-grid-s{grid-template-columns:1fr!important;}}`}</style>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

'use client';

import React from 'react';
import { TweaksPanel, TweakSection, TweakRadio, useTweaks } from '../tweaks-panel.jsx';
import { Nav } from '../components/nav.jsx';
import { Hero } from '../components/hero.jsx';
import { Metrics } from '../components/metrics.jsx';
import { AudioDemo } from '../components/audio-demo.jsx';
import { Platform } from '../components/platform.jsx';
import { Process } from '../components/process.jsx';
import { Languages } from '../components/languages.jsx';
import { Audiences } from '../components/audiences.jsx';
import { Team } from '../components/team.jsx';
import { Ethics } from '../components/ethics.jsx';
import { CaseStudies } from '../components/casestudies.jsx';
import { FAQ } from '../components/faq.jsx';
import { CTA } from '../components/cta.jsx';
import { Footer } from '../components/footer.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "brand",
  "heroBg": "video",
  "density": "spacious",
  "motion": "full"
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  brand:    { '--accent': '#fdbb00',              '--accent-2': '#1480fe',               '--accent-glow': 'rgba(253,187,0,0.35)',        '--accent-2-glow': 'rgba(20,128,254,0.35)' },
  warm:     { '--accent': 'oklch(0.80 0.17 50)',  '--accent-2': 'oklch(0.74 0.12 30)',   '--accent-glow': 'oklch(0.80 0.17 50 / 0.35)', '--accent-2-glow': 'oklch(0.74 0.12 30 / 0.35)' },
  electric: { '--accent': 'oklch(0.78 0.18 65)',  '--accent-2': 'oklch(0.70 0.18 255)',  '--accent-glow': 'oklch(0.78 0.18 65 / 0.35)', '--accent-2-glow': 'oklch(0.70 0.18 255 / 0.35)' },
  ocean:    { '--accent': 'oklch(0.82 0.13 85)',  '--accent-2': 'oklch(0.70 0.13 215)',  '--accent-glow': 'oklch(0.82 0.13 85 / 0.35)', '--accent-2-glow': 'oklch(0.70 0.13 215 / 0.35)' },
};

export default function Page() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const preset = ACCENT_PRESETS[tweaks.accent] || ACCENT_PRESETS.brand;
    Object.entries(preset).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }, [tweaks.accent]);

  React.useEffect(() => {
    const root = document.documentElement;
    if (tweaks.density === 'compact') {
      root.style.setProperty('--pad', 'clamp(16px, 3vw, 40px)');
    } else {
      root.style.setProperty('--pad', 'clamp(20px, 4vw, 56px)');
    }
  }, [tweaks.density]);

  return (
    <>
      <Nav tweaks={tweaks} />
      <main>
        <Hero tweaks={tweaks} />
        <Metrics />
        <AudioDemo />
        <Platform />
        <Process />
        <Languages />
        <Audiences />
        <Team />
        <Ethics />
        <CaseStudies />
        <FAQ />
        <CTA />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Color accent">
          <TweakRadio
            value={tweaks.accent}
            onChange={(v) => setTweak('accent', v)}
            options={[
              { value: 'brand',    label: 'Brand (orange + blue)' },
              { value: 'warm',     label: 'Warm' },
              { value: 'electric', label: 'Electric' },
              { value: 'ocean',    label: 'Ocean' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Hero background">
          <TweakRadio
            value={tweaks.heroBg}
            onChange={(v) => setTweak('heroBg', v)}
            options={[
              { value: 'video',   label: 'Video' },
              { value: 'subtle',  label: 'Subtle' },
              { value: 'minimal', label: 'None' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Density">
          <TweakRadio
            value={tweaks.density}
            onChange={(v) => setTweak('density', v)}
            options={[
              { value: 'spacious', label: 'Spacious' },
              { value: 'compact',  label: 'Compact' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Motion">
          <TweakRadio
            value={tweaks.motion}
            onChange={(v) => setTweak('motion', v)}
            options={[
              { value: 'full',    label: 'Full' },
              { value: 'reduced', label: 'Reduced' },
              { value: 'off',     label: 'Off' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

import React, { useState } from 'react';
import { EDUCATION_ITEMS, SKILL_STICKERS, SkillSticker } from '../data/portfolioData';

export const AboutAndBadge: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillSticker | null>(null);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start my-8 scroll-mt-24"
      data-purpose="about-and-id-section"
      id="about"
    >
      {/* LEFT COLUMN: Bio + Education Ruled Note */}
      <div className="md:col-span-7 space-y-6">
        {/* (01) About Me Block */}
        <div
          className="bg-white/95 rounded-2xl p-6 sm:p-7 shadow-tactile border border-pink-soft/80 relative"
          data-purpose="about-me-card"
        >
          <div className="washi-tape-pink absolute -top-3 left-8 w-24 h-5 -rotate-2 rounded-xs" />

          <div className="flex items-center gap-2 mb-3 mt-1">
            <span className="text-xs font-mono font-bold text-pink-blush tracking-wider">(01)</span>
            <h2 className="font-serif italic text-3xl sm:text-4xl font-bold text-espresso flex items-center gap-2">
              About me! <span className="text-xl not-italic">★</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-ink/90 font-medium">
            I&apos;m <strong className="text-espresso font-bold">Adreanna Afroza Whiska</strong>, also
            known as <strong className="text-espresso font-bold">Adre</strong>, an Information
            Systems undergraduate student at{' '}
            <span className="underline decoration-pink-blush decoration-2">
              Institut Teknologi PLN (ITPLN)
            </span>{' '}
            with a strong academic foundation (3.98 GPA in Informatics Engineering at Universitas
            Sriwijaya). With hands-on experience in UI/UX prototyping, web &amp; Java desktop
            development, and economic analysis, I&apos;m passionate about bridging technology with
            business efficiency to create impactful digital solutions.
          </p>
        </div>

        {/* (02) Education Ruled Lined Paper Note */}
        <div
          className="relative bg-cream-note rounded-2xl p-6 sm:p-8 shadow-tactile border border-kraft-dark/40 rotate-[-0.5deg]"
          data-purpose="education-ruled-note"
        >
          <div className="washi-tape-dots absolute -top-3 left-1/3 w-32 h-6 -rotate-1 shadow-sm" />

          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs font-mono font-bold text-cocoa tracking-wider">(02)</span>
              <h3 className="font-serif italic text-3xl font-bold text-espresso">Education</h3>
            </div>

            <div className="w-14 h-14 rounded-full border-2 border-dashed border-cocoa/50 p-1 flex items-center justify-center text-center rotate-6 bg-white/70 shadow-sm shrink-0">
              <div className="w-full h-full rounded-full border border-cocoa/60 flex flex-col items-center justify-center p-0.5">
                <span className="text-[8px] font-bold text-cocoa uppercase tracking-tighter">
                  ITPLN
                </span>
                <span className="text-xs">⚡</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 font-sans text-xs sm:text-sm">
            {EDUCATION_ITEMS.map((item) => (
              <div key={item.id} className={`border-l-2 ${item.accentClass} pl-3 py-1`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-espresso text-sm sm:text-base">{item.title}</h4>
                  {item.isHighlightBadge ? (
                    <span className="text-[11px] font-mono font-bold text-espresso bg-pink-soft px-2 py-0.5 rounded whitespace-nowrap shrink-0 tabular-nums">
                      {item.periodOrMetric}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-cocoa font-bold whitespace-nowrap shrink-0 tabular-nums">
                      {item.periodOrMetric}
                    </span>
                  )}
                </div>
                <p className="text-ink/80 font-medium mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-dashed border-cocoa/20 flex justify-end">
            <span className="font-hand text-lg text-cocoa font-bold rotate-[-2deg]">
              &quot;Bridging technology with business efficiency!&quot; ✦
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Hanging Employee Card ID Badge & Die-Cut Skill Stickers */}
      <div className="md:col-span-5 flex flex-col items-center">
        {/* Silver Lobster Swivel Clip */}
        <div className="w-6 h-8 border-2 border-stone-400 bg-stone-200 rounded-t-full shadow-md -mb-2 z-20 flex items-center justify-center">
          <div className="w-1.5 h-3 bg-stone-500 rounded-full" />
        </div>

        {/* Tactile Employee ID Card Badge in Frosted Holder */}
        <div
          className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-tactile-deep border-2 border-pink-blush/60 relative rotate-1 transition-transform duration-300 hover:rotate-0"
          data-purpose="employee-id-badge"
        >
          <div className="flex items-center justify-between border-b-2 border-pink-soft pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="text-pink-blush text-sm">✦</span>
              <h3 className="font-serif font-black tracking-widest text-xs uppercase text-espresso">
                EMPLOYEE CARD ★
              </h3>
            </div>
            <span className="text-[10px] font-mono font-bold text-cocoa bg-pink-soft/60 px-2 py-0.5 rounded whitespace-nowrap">
              ID: 2026-IS-AW
            </span>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-1.5 text-[11px]">
              <div>
                <span className="font-mono text-cocoa/80 block text-[9px] uppercase tracking-wider">
                  NAME:
                </span>
                <span className="font-bold text-espresso text-xs">Adreanna Afroza Whiska</span>
              </div>
              <div>
                <span className="font-mono text-cocoa/80 block text-[9px] uppercase tracking-wider">
                  NICKNAME:
                </span>
                <span className="font-hand text-base font-bold text-espresso leading-none">Adre</span>
              </div>
              <div>
                <span className="font-mono text-cocoa/80 block text-[9px] uppercase tracking-wider">
                  DEPARTMENT:
                </span>
                <span className="font-semibold text-ink leading-tight block">
                  Information Systems &amp; UI/UX
                </span>
              </div>
              <div>
                <span className="font-mono text-cocoa/80 block text-[9px] uppercase tracking-wider">
                  SIGN:
                </span>
                <span className="font-script text-xl text-espresso leading-none">Adre</span>
              </div>
              <div className="pt-1">
                <span className="font-mono text-[9px] font-bold text-cocoa tabular-nums">
                  VALID UNTIL: 11 / 2030
                </span>
              </div>
            </div>

            <div className="w-24 flex flex-col items-center shrink-0">
              <div className="w-24 h-28 rounded-lg overflow-hidden border-2 border-pink-soft shadow-inner bg-stone-100 flex items-center justify-center relative">
                <div className="w-full h-full bg-gradient-to-b from-stone-200 to-pink-soft/40 flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-espresso text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                    AW
                  </div>
                  <span className="text-[9px] font-bold text-espresso mt-1 tracking-tight">
                    ADREANNA
                  </span>
                </div>
              </div>

              <div className="w-full mt-2 flex flex-col items-center">
                <div className="h-5 w-full flex justify-between items-end gap-0.5 px-1 py-0.5 bg-white border border-stone-200">
                  <div className="w-1 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-1 h-full bg-black" />
                  <div className="w-1.5 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-1 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-1.5 h-full bg-black" />
                </div>
                <span className="text-[8px] font-mono tracking-widest text-stone-500 tabular-nums">
                  8922757449
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-stone-300 border border-stone-400" />
        </div>

        {/* Die-Cut Skill Stickers Cluster on Pink Grid Backing Paper */}
        <div
          className="w-full max-w-sm mt-6 p-4 rounded-2xl bg-pink-grid-paper border border-pink-blush shadow-tactile relative overflow-hidden"
          data-purpose="skill-stickers-cluster"
        >
          <div className="text-[10px] font-mono uppercase tracking-widest text-cocoa font-bold mb-3 flex items-center justify-between">
            <span>Specialized Skills</span>
            <span className="text-pink-blush">★ ★ ★</span>
          </div>

          <div className="flex flex-wrap gap-2.5 items-center justify-center py-2">
            {SKILL_STICKERS.map((sticker) => {
              const isSelected = selectedSkill?.id === sticker.id;
              return (
                <button
                  key={sticker.id}
                  type="button"
                  onClick={() =>
                    setSelectedSkill((prev) => (prev?.id === sticker.id ? null : sticker))
                  }
                  className={`die-cut-sticker px-3.5 py-1.5 rounded-full text-xs cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-espresso ${sticker.bgClass} ${sticker.textClass} ${sticker.fontWeightClass} ${sticker.rotateClass} ${
                    isSelected ? 'ring-2 ring-espresso scale-105' : ''
                  }`}
                >
                  {sticker.id === 'system-analysis' ? (
                    <span className="flex items-center gap-1">
                      system <span className="text-pink-blush text-sm">★</span> analysis
                    </span>
                  ) : (
                    sticker.label
                  )}
                </button>
              );
            })}
          </div>

          {selectedSkill ? (
            <div className="mt-2 p-2.5 rounded-xl bg-white/90 border border-pink-soft text-[11px] text-espresso font-medium leading-snug shadow-sm">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-bold text-espresso">{selectedSkill.label}</span>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="text-cocoa hover:text-espresso font-mono text-[10px] cursor-pointer"
                >
                  close ✕
                </button>
              </div>
              <p className="text-ink/80">{selectedSkill.note}</p>
            </div>
          ) : (
            <div className="text-right text-[10px] font-hand text-cocoa/70 mt-1">
              tap any sticker to inspect ✦ always listening &amp; designing 🎧
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

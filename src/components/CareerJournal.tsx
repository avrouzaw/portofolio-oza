import React, { useState } from 'react';
import {
  CERTIFICATES,
  CertificateItem,
  FEATURED_HIGHLIGHTS,
  ORGANIZATIONAL_EXPERIENCES,
  TOOLS_ROW_1,
  TOOLS_ROW_2,
  ToolTile,
} from '../data/portfolioData';

interface CareerJournalProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const CareerJournal: React.FC<CareerJournalProps> = ({ onSelectCertificate }) => {
  const [activeTool, setActiveTool] = useState<ToolTile | null>(null);

  const scrollToProject = (projectId: string) => {
    const el = document.getElementById(projectId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      className="max-w-5xl mx-auto px-4 sm:px-6 my-16 scroll-mt-24"
      data-purpose="open-scrapbook-notebook"
      id="journal"
    >
      <div className="text-center mb-6">
        <span className="font-hand text-2xl text-cocoa font-bold">Flip through the pages</span>
        <h2 className="font-serif italic text-3xl sm:text-4xl font-bold text-espresso">
          The Career Journal &amp; Archive
        </h2>
      </div>

      {/* Notebook Spread Container */}
      <div className="relative bg-white rounded-3xl shadow-tactile-deep border border-stone-200 p-2 sm:p-4 overflow-hidden">
        {/* Binder Clip Decor on Top Edge */}
        <div
          aria-hidden="true"
          className="absolute -top-1 left-12 sm:left-24 w-10 h-7 bg-stone-800 rounded-b-md shadow-md z-30 flex items-center justify-center"
        >
          <div className="w-6 h-1 border-t-2 border-stone-400" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-1 right-12 sm:right-24 w-10 h-7 bg-stone-800 rounded-b-md shadow-md z-30 flex items-center justify-center"
        >
          <div className="w-6 h-1 border-t-2 border-stone-400" />
        </div>

        {/* Resting Ballpoint Pen on Left Edge */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-2 w-3 h-48 bg-gradient-to-r from-stone-800 via-stone-700 to-stone-900 rounded-full shadow-lg hidden lg:block z-30 pointer-events-none rotate-3"
        >
          <div className="w-full h-8 bg-amber-400/80 rounded-t-full" />
          <div className="w-1 h-12 bg-stone-300 mx-auto mt-2 rounded" />
        </div>

        {/* The Two Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative bg-[#FDFDFD] rounded-2xl">
          {/* Central Spine Gutter Shadow */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 journal-spine-shadow z-20 pointer-events-none"
          />

          {/* ================= LEFT PAGE ================= */}
          <div
            className="p-6 sm:p-10 border-b md:border-b-0 md:border-r border-stone-200/80 relative"
            data-purpose="journal-left-page"
          >
            {/* (03) Organizational Experiences */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-pink-blush tracking-wider">
                  (03)
                </span>
                <h3 className="font-serif italic text-2xl sm:text-3xl font-extrabold text-espresso">
                  organizational{' '}
                  <span className="font-hand font-normal text-xl text-cocoa block sm:inline">
                    experiences
                  </span>
                </h3>
              </div>

              <div className="space-y-6 text-xs sm:text-sm pl-2 border-l border-dashed border-cocoa/30">
                {ORGANIZATIONAL_EXPERIENCES.map((org) => (
                  <div key={org.id} className="relative pl-3">
                    <span
                      className={`absolute -left-[17px] top-1.5 w-2.5 h-2.5 rounded-full ${org.dotColorClass} border-2 border-white`}
                    />
                    <div className="flex justify-between items-baseline gap-2 mb-1">
                      <h4 className="font-bold text-espresso text-sm sm:text-base">{org.role}</h4>
                      <span className="text-[11px] font-mono font-semibold text-cocoa whitespace-nowrap shrink-0 tabular-nums">
                        {org.period}
                      </span>
                    </div>
                    <p className="text-cocoa font-medium text-xs mb-1">{org.organization}</p>
                    <p className="text-ink/80 text-xs leading-relaxed">{org.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* (04) Featured Projects Summary */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-pink-blush tracking-wider">
                  (04)
                </span>
                <h3 className="font-serif italic text-2xl sm:text-3xl font-extrabold text-espresso">
                  featured projects{' '}
                  <span className="font-hand font-normal text-xl text-cocoa block sm:inline">
                    highlights
                  </span>
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                {FEATURED_HIGHLIGHTS.map((item) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => scrollToProject(item.targetProjectId)}
                    className={`w-full text-left p-3 ${item.cardBgClass} rounded-xl border ${item.borderClass} flex items-start gap-3 hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-espresso`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg ${item.badgeBgClass} ${item.badgeTextClass} flex items-center justify-center font-bold shrink-0 text-xs tabular-nums`}
                    >
                      {item.number}
                    </div>
                    <div>
                      <h4 className="font-bold text-espresso">{item.title}</h4>
                      <p className="text-cocoa text-xs">{item.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT PAGE ================= */}
          <div
            className="p-6 sm:p-10 relative flex flex-col justify-between"
            data-purpose="journal-right-page"
          >
            {/* (05) Certificate & Achievement Grid */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-pink-blush tracking-wider">
                    (05)
                  </span>
                  <h3 className="font-serif italic text-2xl sm:text-3xl font-extrabold text-espresso">
                    certificate{' '}
                    <span className="font-hand font-normal text-xl text-cocoa block sm:inline">
                      &amp; achievement
                    </span>
                  </h3>
                </div>
                <span className="text-[10px] font-hand text-cocoa/80 hidden sm:inline">
                  tap to inspect ✦
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 my-3">
                {CERTIFICATES.map((cert) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => onSelectCertificate(cert)}
                    className="text-left p-2.5 sm:p-3 rounded-xl bg-white border border-pink-soft shadow-sm hover:shadow-tactile hover:-translate-y-0.5 transition duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-espresso"
                  >
                    <div
                      className={`h-16 sm:h-20 bg-gradient-to-br ${cert.gradientClass} border ${cert.borderClass} rounded flex flex-col items-center justify-center p-1 text-center relative overflow-hidden mb-2`}
                    >
                      <span className="text-base sm:text-xl">{cert.emoji}</span>
                      <span className="text-[9px] font-serif font-bold text-espresso leading-tight mt-0.5">
                        {cert.event}
                      </span>
                      <div className={`w-8 h-0.5 ${cert.barClass} mt-1`} />
                    </div>
                    <div className="text-[10px] sm:text-xs">
                      <p className="font-bold text-espresso leading-tight">{cert.rank}</p>
                      <p className="text-cocoa text-[9px] leading-tight">{cert.detail}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* (06) Tools: Sleek Square Tiles */}
            <div className="mt-6 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-pink-blush tracking-wider">
                  (06)
                </span>
                <h3 className="font-serif italic text-xl font-bold text-espresso">
                  tools &amp; software
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap gap-2 items-center">
                  {TOOLS_ROW_1.map((tool) => {
                    const isActive = activeTool?.code === tool.code;
                    return (
                      <button
                        key={tool.code}
                        type="button"
                        onClick={() =>
                          setActiveTool((prev) => (prev?.code === tool.code ? null : tool))
                        }
                        className={`w-10 h-10 rounded-lg bg-espresso text-white flex items-center justify-center text-xs font-bold shadow hover:scale-105 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-pink-blush ${
                          isActive ? 'ring-2 ring-pink-blush scale-105' : ''
                        }`}
                        title={tool.name}
                      >
                        {tool.code}
                      </button>
                    );
                  })}
                  <span className="text-[11px] font-mono text-cocoa self-center ml-2 hidden sm:inline">
                    Design &amp; IDEs
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  {TOOLS_ROW_2.map((tool) => {
                    const isActive = activeTool?.code === tool.code;
                    return (
                      <button
                        key={tool.code}
                        type="button"
                        onClick={() =>
                          setActiveTool((prev) => (prev?.code === tool.code ? null : tool))
                        }
                        className={`w-10 h-10 rounded-lg bg-cocoa text-white flex items-center justify-center text-xs font-bold shadow hover:scale-105 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-pink-blush ${
                          isActive ? 'ring-2 ring-pink-blush scale-105' : ''
                        }`}
                        title={tool.name}
                      >
                        {tool.code}
                      </button>
                    );
                  })}
                  <span className="text-[11px] font-mono text-cocoa self-center ml-2 hidden sm:inline">
                    Analytics &amp; Office
                  </span>
                </div>
              </div>

              {activeTool && (
                <div className="mt-3 p-2.5 rounded-xl bg-cream-note border border-kraft-dark/40 text-xs text-espresso flex items-start justify-between gap-2">
                  <div>
                    <span className="font-bold">{activeTool.name}</span>{' '}
                    <span className="text-cocoa font-mono text-[10px]">({activeTool.group})</span>
                    <p className="text-ink/80 text-[11px] mt-0.5">{activeTool.usage}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTool(null)}
                    className="text-cocoa hover:text-espresso font-mono text-[10px] shrink-0 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}

              <div className="text-right mt-6">
                <span className="font-hand text-lg text-cocoa/80 italic font-bold">
                  adre&apos;s archive 2026 ✦
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

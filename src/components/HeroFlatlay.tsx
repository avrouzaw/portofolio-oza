import React, { useState } from 'react';

const KEYBOARD_KEYS = [
  { label: 'esc', pink: true },
  { label: 'Q', pink: false },
  { label: 'W', pink: false },
  { label: 'E', pink: true },
  { label: 'R', pink: false },
  { label: 'T', pink: false },
  { label: 'A', pink: false },
  { label: 'S', pink: true },
  { label: 'D', pink: false },
  { label: 'F', pink: false },
  { label: 'G', pink: false },
  { label: '★', pink: true },
];

export const HeroFlatlay: React.FC = () => {
  const [keyStatus, setKeyStatus] = useState<string>('system ready');
  const [noteFlipped, setNoteFlipped] = useState<boolean>(false);

  const handleKeyTap = (label: string) => {
    if (label === 'esc') {
      setKeyStatus('system ready');
    } else if (label === '★') {
      setKeyStatus('hire adre ★');
    } else {
      setKeyStatus((prev) => {
        const base = prev === 'system ready' || prev === 'hire adre ★' ? 'typed: ' : prev;
        const next = `${base}${label}`;
        return next.length > 16 ? `typed: ${label}` : next;
      });
    }
  };

  return (
    <header
      className="relative max-w-5xl mx-auto pt-24 pb-14 px-4 sm:px-6"
      data-purpose="hero-desk-flatlay"
    >
      {/* Prop: Corner of Top Left Modern Pastel Keyboard */}
      <div
        className="absolute -top-6 -left-12 hidden md:block w-72 bg-white/90 p-3 rounded-2xl shadow-tactile border border-pink-soft -rotate-12 select-none z-20"
        aria-label="Interactive decorative pastel keyboard"
      >
        <div className="grid grid-cols-6 gap-1.5 p-2 bg-desk-bg rounded-xl border border-pink-soft/60">
          {KEYBOARD_KEYS.map((key) => (
            <button
              key={key.label}
              type="button"
              onClick={() => handleKeyTap(key.label)}
              className={`h-6 rounded text-[10px] flex items-center justify-center transition-transform active:translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-espresso ${
                key.pink
                  ? 'bg-pink-soft font-bold text-cocoa hover:bg-pink-blush/50'
                  : 'bg-white font-semibold text-ink hover:bg-cream-note'
              }`}
              title={`Press ${key.label}`}
            >
              {key.label}
            </button>
          ))}
        </div>
        <div className="text-[9px] text-center text-cocoa/80 mt-1 font-mono tracking-widest uppercase">
          {keyStatus}
        </div>
      </div>

      {/* Prop: Realistic Latte Cup with Foam Heart & Saucer */}
      <div
        aria-hidden="true"
        className="absolute top-44 -left-6 sm:left-2 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white shadow-tactile-deep border-4 border-stone-200/80 flex items-center justify-center z-20 pointer-events-none"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#9B6F55] via-[#BA8E74] to-[#C99F84] border-2 border-[#7A5C52]/40 shadow-inner flex items-center justify-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF5EA] to-[#E8D4C0] shadow-sm transform rotate-45 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#BA8E74]/30" />
          </div>
        </div>
      </div>

      {/* Prop: Angled Newspaper Clipping underneath coffee */}
      <div
        aria-hidden="true"
        className="absolute top-28 left-8 sm:left-20 w-52 sm:w-64 bg-cream-note p-3 shadow-tactile border border-kraft-dark/30 -rotate-12 z-10 pointer-events-none font-serif select-none"
      >
        <div className="text-xs uppercase tracking-widest border-b border-cocoa/30 pb-0.5 font-bold text-espresso">
          Business &amp; Economy
        </div>
        <h4 className="text-sm font-bold text-ink leading-tight mt-1">
          Digital Transformation &amp; Financial Efficiency
        </h4>
        <p className="text-[9px] leading-tight text-cocoa font-sans mt-1 line-clamp-3">
          Evaluating tech-driven enterprise strategies, scalable architectures, and user-centric
          data operations in modernized fiscal landscapes.
        </p>
      </div>

      {/* Prop: Sticky Note & Tortoiseshell Eyeglasses (Right Side) */}
      <div className="absolute top-16 right-4 sm:right-12 z-20 rotate-6 hidden sm:block">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 rounded-sm bg-gradient-to-r from-stone-400 via-stone-200 to-stone-400 shadow-sm border border-stone-500 z-30" />
        <button
          type="button"
          onClick={() => setNoteFlipped((prev) => !prev)}
          className="text-left w-48 bg-[#FFF8EB] p-4 shadow-tactile border-l-4 border-pink-blush transform rotate-2 cursor-pointer transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-espresso"
          title="Click to flip sticky note"
        >
          {noteFlipped ? (
            <>
              <p className="font-hand text-lg text-espresso leading-snug font-bold">
                "Currently based in West Jakarta &amp; ready for 2026/2027 internships!"
              </p>
              <span className="block text-right font-hand text-base text-cocoa mt-2">
                click to flip back ↺
              </span>
            </>
          ) : (
            <>
              <p className="font-hand text-xl text-espresso leading-snug font-bold">
                "Thanks in advance and hire me to unlock my full potential!"
              </p>
              <span className="block text-right font-hand text-lg text-cocoa mt-2">~ Adre ✦</span>
            </>
          )}
        </button>
      </div>

      {/* Eyeglasses Silhouette / Prop */}
      <div
        aria-hidden="true"
        className="absolute top-64 right-2 sm:right-16 z-20 rotate-12 hidden md:flex items-center gap-2 pointer-events-none opacity-90"
      >
        <div className="w-20 h-14 rounded-3xl border-4 border-amber-950 bg-white/10 backdrop-blur-[1px] shadow-tactile relative">
          <div className="absolute inset-1 rounded-2xl border border-amber-800/40" />
        </div>
        <div className="w-5 h-1 bg-amber-950 rounded" />
        <div className="w-20 h-14 rounded-3xl border-4 border-amber-950 bg-white/10 backdrop-blur-[1px] shadow-tactile relative">
          <div className="absolute inset-1 rounded-2xl border border-amber-800/40" />
        </div>
      </div>

      {/* Center Main Manila Folder Component */}
      <div className="relative max-w-2xl mx-auto mt-6 z-10" data-purpose="hero-kraft-folder">
        {/* Back Tab Layer 1: "dear mrs. recruiter" */}
        <a
          href="#about"
          className="absolute -top-7 left-12 bg-[#EFE8DD] px-5 py-2 rounded-t-xl font-hand text-lg text-espresso/90 shadow-sm border-t border-x border-kraft-dark/40 tracking-wide rotate-[-1deg] hover:-translate-y-0.5 transition-transform"
        >
          dear mrs. recruiter
        </a>

        {/* Back Tab Layer 2: "CONFIDENTIAL" with Silver Paperclip */}
        <a
          href="#journal"
          className="absolute -top-9 right-16 bg-[#FAF6F0] px-4 py-1.5 rounded-t-xl text-[11px] font-mono tracking-widest text-red-700/80 uppercase font-bold border-t border-x border-kraft-dark/40 rotate-[2deg] flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
        >
          <span className="w-3 h-8 -top-3 absolute left-2 rounded-full border-2 border-stone-400 bg-transparent shadow-paperclip" />
          <span>[ CONFIDENTIAL ]</span>
          <span className="text-xs">📎</span>
        </a>

        {/* Front Manila Kraft Folder */}
        <div className="relative bg-gradient-to-b from-[#D8C7B8] via-[#CFBDAE] to-[#C7B3A2] rounded-2xl p-8 sm:p-14 shadow-tactile-deep border border-[#BBA795] text-center overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#4A352E_1px,transparent_1px)] [background-size:12px_12px]" />

          <div className="absolute top-6 left-8 text-espresso/40 text-xl select-none">✦</div>
          <div className="absolute top-10 right-12 text-espresso/40 text-sm select-none">★</div>
          <div className="absolute bottom-8 left-12 text-espresso/40 text-base select-none">★</div>

          <div className="relative z-10 py-4">
            <p className="font-hand text-2xl sm:text-3xl text-espresso/80 -rotate-2 mb-1">
              Scrapbook &amp; Career Journey
            </p>
            <h1 className="font-serif italic text-4xl sm:text-6xl md:text-7xl font-extrabold text-espresso calligraphy-stars tracking-tight">
              Adre&apos;s Portfolio
            </h1>
            <p className="font-sans text-xs sm:text-sm tracking-widest uppercase font-bold text-cocoa mt-3">
              Information Systems • UI/UX Design • Tech &amp; Business Synergy
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 relative z-10">
            <div className="die-cut-sticker inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-pink-soft via-white to-pink-soft text-espresso rounded-full font-serif font-black text-lg sm:text-xl tracking-wider shadow-sticker tabular-nums">
              <span>2</span>
              <span className="text-pink-blush text-sm">★</span>
              <span>2</span>
              <span>6</span>
            </div>
            <div className="die-cut-sticker w-8 h-8 rounded-full bg-white flex items-center justify-center text-espresso text-base font-bold shadow-sticker rotate-12">
              ★
            </div>
          </div>
        </div>

        {/* Pink Polka-Dot Lanyard Dropping Down Toward ID Card */}
        <div
          aria-hidden="true"
          className="absolute -bottom-16 right-10 sm:right-20 w-8 h-24 lanyard-strap rounded-b-md z-20 pointer-events-none"
        />
      </div>
    </header>
  );
};

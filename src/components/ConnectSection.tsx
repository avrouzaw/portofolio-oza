import React, { useState } from 'react';

export const ConnectSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('adreanna.aw19@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <section
        className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 mb-24 scroll-mt-24"
        data-purpose="contact-section"
        id="contact"
      >
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-tactile-deep border border-pink-soft/80 text-center overflow-hidden">
          <div className="washi-tape-pink absolute -top-3 left-12 w-28 h-6 -rotate-3" />
          <div className="washi-tape-dots absolute -top-3 right-12 w-28 h-6 rotate-3" />

          <span className="font-hand text-2xl text-cocoa font-bold">
            Let&apos;s collaborate or chat!
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-extrabold text-espresso mt-1">
            Let&apos;s Connect!
          </h2>
          <p className="font-hand text-xl text-cocoa mt-2 max-w-md mx-auto">
            open for internships, UI/UX collabs &amp; tech projects
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5">
              <a
                className="die-cut-sticker px-5 py-2.5 rounded-full bg-cream-note text-espresso font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-white shadow-sticker"
                href="mailto:adreanna.aw19@gmail.com"
              >
                <span>✉</span>
                <span>adreanna.aw19@gmail.com</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="die-cut-sticker px-3 py-2.5 rounded-full bg-white text-cocoa font-mono font-bold text-[11px] hover:text-espresso shadow-sticker cursor-pointer focus-visible:outline-2 focus-visible:outline-espresso"
                title="Copy email address"
              >
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
            </div>

            <a
              className="die-cut-sticker px-5 py-2.5 rounded-full bg-[#EAF7EE] text-emerald-900 font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-white shadow-sticker"
              href="https://wa.me/6281929117393"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>💬</span>
              <span>+62 819-2911-7393</span>
            </a>

            <a
              className="die-cut-sticker px-5 py-2.5 rounded-full bg-[#EBF3FA] text-blue-900 font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-white shadow-sticker"
              href="https://linkedin.com/in/adreanna-afroza-whiska-3285ba420"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>💼</span>
              <span>LinkedIn / adreanna-afroza-whiska</span>
            </a>

            <a
              className="die-cut-sticker px-5 py-2.5 rounded-full bg-stone-100 text-stone-900 font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-white shadow-sticker"
              href="https://github.com/avrouzaw"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>🐙</span>
              <span>github.com/avrouzaw</span>
            </a>

            <a
              className="die-cut-sticker px-5 py-2.5 rounded-full bg-pink-soft text-espresso font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-white shadow-sticker"
              href="https://instagram.com/avrouza"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>📸</span>
              <span>@avrouza</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-dashed border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cocoa font-mono">
            <span>BASED IN: West Jakarta, Indonesia</span>
            <span>STATUS: Available for 2026/2027 Roles</span>
          </div>
        </div>
      </section>

      <footer
        className="border-t border-pink-blush/40 bg-white/70 py-6 px-4 text-center text-xs font-mono text-cocoa"
        data-purpose="page-footer"
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 Adreanna Afroza Whiska • All rights reserved.</p>
          <p className="font-hand text-base text-espresso font-bold">
            adre&apos;s archive 2026 ✦ designed with care
          </p>
        </div>
      </footer>
    </>
  );
};

import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'about', label: 'About (01–02)' },
  { id: 'journal', label: 'Experience (03–06)' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Connect' },
];

export const FloatingNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.05 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Primary portfolio navigation"
      className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-pink-blush/40 shadow-tactile flex items-center gap-3 sm:gap-6 text-[11px] sm:text-sm font-semibold text-cocoa transition-all duration-300 hover:bg-white/95 max-w-[95vw] overflow-x-auto"
      data-purpose="floating-nav"
    >
      {NAV_ITEMS.map((item, idx) => {
        const isActive = activeId === item.id;
        return (
          <React.Fragment key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`whitespace-nowrap shrink-0 transition underline-offset-4 decoration-pink-blush decoration-2 focus-visible:outline-2 focus-visible:outline-espresso rounded ${
                isActive
                  ? 'text-espresso underline'
                  : 'hover:text-espresso hover:underline'
              }`}
            >
              {item.label}
            </a>
            {idx < NAV_ITEMS.length - 1 && (
              <span className="text-pink-blush select-none shrink-0" aria-hidden="true">
                ✦
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

import React from 'react';
import { ProjectDetail, SELECTED_PROJECTS } from '../data/portfolioData';

interface SelectedProjectsProps {
  onOpenCaseStudy: () => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onOpenCaseStudy }) => {
  const renderCard = (project: ProjectDetail) => {
    const isEspresso = project.theme === 'espresso';
    const isCream = project.theme === 'cream';

    const containerClasses = isEspresso
      ? 'bg-[#3E2B24] text-white border-espresso shadow-tactile-deep'
      : isCream
        ? 'bg-[#F3ECE3] border-kraft-dark/50 shadow-tactile hover:shadow-tactile-deep'
        : 'bg-[#F8EFF2] border-pink-blush/60 shadow-tactile hover:shadow-tactile-deep';

    const washi = isEspresso ? (
      <div className="washi-tape-pink absolute -top-2 left-1/3 w-32 h-6 rotate-1" />
    ) : isCream ? (
      <div className="washi-tape-dots absolute -top-2 right-12 w-28 h-6 -rotate-2" />
    ) : (
      <div className="washi-tape-pink absolute -top-2 left-10 w-28 h-6 rotate-2" />
    );

    const mockupBoxClasses = isEspresso
      ? 'bg-gradient-to-tr from-stone-900 to-stone-800 border-stone-700'
      : isCream
        ? 'bg-gradient-to-tr from-amber-50 via-orange-50 to-red-50 border-amber-200'
        : 'bg-gradient-to-tr from-pink-soft via-pink-100 to-white border-pink-soft';

    return (
      <article
        key={project.id}
        id={project.id}
        className={`rounded-3xl p-6 sm:p-8 border relative overflow-hidden transition-all duration-300 scroll-mt-24 ${containerClasses}`}
        data-purpose="project-card"
      >
        {washi}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase ${
                isEspresso
                  ? 'bg-white/10 text-pink-blush border border-pink-blush/30'
                  : 'bg-white text-cocoa shadow-sm'
              }`}
            >
              {project.roleLabel}
            </span>

            <h3
              className={`font-serif text-2xl sm:text-3xl font-bold ${
                isEspresso ? 'text-pink-soft' : 'text-espresso'
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isEspresso ? 'text-stone-300' : 'text-ink/80'
              }`}
            >
              {project.description}
            </p>

            <ul
              className={`text-xs space-y-1 font-medium list-disc list-inside ${
                isEspresso ? 'text-pink-soft/80' : 'text-cocoa'
              }`}
            >
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="pt-2">
              {project.hasCaseStudyModal ? (
                <button
                  type="button"
                  onClick={onOpenCaseStudy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cocoa text-white text-xs font-bold tracking-wider shadow-tactile cursor-pointer hover:bg-espresso transition focus-visible:outline-2 focus-visible:outline-espresso"
                >
                  <span>{project.ctaLabel}</span>
                </button>
              ) : (
                <a
                  href={project.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider shadow-tactile transition focus-visible:outline-2 ${
                    isEspresso
                      ? 'bg-pink-soft text-espresso hover:bg-white focus-visible:outline-white'
                      : 'bg-espresso text-white hover:bg-cocoa focus-visible:outline-espresso'
                  }`}
                >
                  <span>{project.ctaLabel}</span>
                </a>
              )}
            </div>
          </div>

          {/* Polaroid-Framed Mockup Presentation */}
          <div className="md:col-span-5 flex justify-center">
            <div
              className={`w-full max-w-xs bg-white p-3 pb-6 rounded-xl shadow-tactile border border-stone-200 ${project.polaroidRotateClass} hover:rotate-0 transition duration-300`}
            >
              <div
                className={`w-full h-44 rounded-lg flex flex-col items-center justify-center p-4 text-center border ${mockupBoxClasses}`}
              >
                <span className="text-3xl mb-1">{project.mockupEmoji}</span>
                <span
                  className={`font-bold text-sm ${
                    isEspresso ? 'font-mono text-pink-soft' : 'font-serif text-espresso'
                  }`}
                >
                  {project.mockupTitle}
                </span>
                <span
                  className={`text-[10px] font-mono mt-1 ${
                    isEspresso ? 'text-stone-400' : 'text-cocoa'
                  }`}
                >
                  {project.mockupSubtitle}
                </span>
              </div>
              <div className="mt-3 text-center">
                <span
                  className={`font-hand text-lg font-bold ${
                    isEspresso ? 'text-espresso' : 'text-cocoa'
                  }`}
                >
                  {project.polaroidCaption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      className="max-w-5xl mx-auto px-4 sm:px-6 my-16 scroll-mt-24"
      data-purpose="detailed-projects"
      id="projects"
    >
      <div className="text-center mb-10">
        <p className="font-hand text-2xl text-cocoa font-bold">Take a closer look</p>
        <h2 className="font-serif italic text-3xl sm:text-5xl font-extrabold text-espresso">
          Selected Projects
        </h2>
        <p className="text-xs sm:text-sm font-mono tracking-widest text-cocoa uppercase mt-2">
          click to explore live prototypes &amp; repositories ✦
        </p>
      </div>

      <div className="space-y-10">{SELECTED_PROJECTS.map(renderCard)}</div>
    </section>
  );
};

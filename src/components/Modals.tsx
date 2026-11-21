import React, { useEffect, useState } from 'react';
import { CertificateItem } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    if (!certificate) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-espresso/45 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-cream-note rounded-3xl p-6 sm:p-8 shadow-tactile-deep border-2 border-pink-blush/60"
      >
        <div className="washi-tape-pink absolute -top-3 left-10 w-24 h-5 -rotate-2" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate details"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-stone-200 text-espresso font-bold text-sm flex items-center justify-center hover:bg-pink-soft transition cursor-pointer focus-visible:outline-2 focus-visible:outline-espresso"
        >
          ✕
        </button>

        <div
          className={`h-32 bg-gradient-to-br ${certificate.gradientClass} border ${certificate.borderClass} rounded-2xl flex flex-col items-center justify-center p-4 text-center mb-5 shadow-inner`}
        >
          <span className="text-4xl">{certificate.emoji}</span>
          <span className="font-serif font-bold text-lg text-espresso mt-1">
            {certificate.event}
          </span>
          <div className={`w-16 h-0.5 ${certificate.barClass} mt-1.5`} />
        </div>

        <div className="space-y-2">
          <p className="text-[11px] font-mono uppercase tracking-widest text-cocoa font-bold">
            {certificate.category} • {certificate.year}
          </p>
          <h3 id="cert-modal-title" className="font-serif italic text-2xl font-bold text-espresso">
            {certificate.rank} — {certificate.detail}
          </h3>
          <p className="text-xs font-mono text-cocoa">Issued by: {certificate.issuer}</p>
          <p className="text-sm text-ink/90 leading-relaxed pt-2">{certificate.summary}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-espresso text-white text-xs font-bold tracking-wider hover:bg-cocoa transition cursor-pointer"
          >
            Back to Journal
          </button>
        </div>
      </div>
    </div>
  );
};

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CrowdLevel = 'quiet' | 'moderate' | 'busy';

const CROWD_SCENARIOS: Record<
  CrowdLevel,
  {
    label: string;
    driversInRadius: number;
    waitMinutes: string;
    prepBuffer: string;
    badgeBg: string;
    statusText: string;
    guidance: string;
  }
> = {
  quiet: {
    label: 'Quiet Queue',
    driversInRadius: 3,
    waitMinutes: '12–16 min',
    prepBuffer: '+2 min buffer',
    badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    statusText: 'Low merchant density inside 150m geofence',
    guidance: 'Kitchen prep is running smoothly. Ideal window for express pickup or quick dispatch.',
  },
  moderate: {
    label: 'Moderate Flow',
    driversInRadius: 9,
    waitMinutes: '20–26 min',
    prepBuffer: '+6 min buffer',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
    statusText: 'Steady dine-in & delivery queue detected',
    guidance: 'Predictive buffer automatically adjusts diner ETA before checkout confirmation.',
  },
  busy: {
    label: 'Peak Rush',
    driversInRadius: 18,
    waitMinutes: '34–42 min',
    prepBuffer: '+14 min buffer',
    badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
    statusText: 'High GPS dwell density in merchant geofence',
    guidance:
      'Transparent surge warning shown to diners alongside nearby lower-crowd alternatives.',
  },
};

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose }) => {
  const [crowd, setCrowd] = useState<CrowdLevel>('moderate');

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const current = CROWD_SCENARIOS[crowd];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-espresso/45 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#FBF6EE] rounded-3xl p-6 sm:p-8 shadow-tactile-deep border-2 border-kraft-dark/50 my-8"
      >
        <div className="washi-tape-dots absolute -top-3 right-12 w-28 h-6 -rotate-2" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-stone-200 text-espresso font-bold text-sm flex items-center justify-center hover:bg-pink-soft transition cursor-pointer focus-visible:outline-2 focus-visible:outline-espresso"
        >
          ✕
        </button>

        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cocoa">
          UI/UX &amp; System Analysis Case Study • 2026
        </span>
        <h3
          id="case-study-title"
          className="font-serif italic text-2xl sm:text-3xl font-bold text-espresso mt-1"
        >
          GoFood Geofencing: Crowd &amp; Estimated-Time Tracker
        </h3>

        <p className="text-xs sm:text-sm text-ink/85 leading-relaxed mt-3">
          Designed to reduce wait-time anxiety during peak lunch and dinner rushes by measuring
          active driver &amp; order dwell counts inside a merchant&apos;s 150-meter GPS geofence
          radius before the user places an order.
        </p>

        {/* Interactive Geofence Crowd Simulator */}
        <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-white border border-pink-soft shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-espresso">
              Interactive Prototype: Crowd Radar Simulation
            </span>
            <div className="flex items-center gap-1 p-1 bg-desk-bg rounded-full border border-stone-200">
              {(['quiet', 'moderate', 'busy'] as CrowdLevel[]).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setCrowd(level)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold capitalize transition cursor-pointer ${
                    crowd === level
                      ? 'bg-espresso text-white shadow-xs'
                      : 'text-cocoa hover:text-espresso'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-cream-note border border-kraft-dark/30">
              <span className="font-mono text-[10px] text-cocoa block uppercase">
                150m Geofence Dwell
              </span>
              <span className="font-serif font-bold text-lg text-espresso tabular-nums">
                {current.driversInRadius} Active Couriers
              </span>
            </div>
            <div className="p-3 rounded-xl bg-cream-note border border-kraft-dark/30">
              <span className="font-mono text-[10px] text-cocoa block uppercase">
                Predicted ETA
              </span>
              <span className="font-serif font-bold text-lg text-espresso tabular-nums">
                {current.waitMinutes}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-cream-note border border-kraft-dark/30">
              <span className="font-mono text-[10px] text-cocoa block uppercase">
                Queue Buffer
              </span>
              <span className="font-serif font-bold text-lg text-espresso tabular-nums">
                {current.prepBuffer}
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-stone-100">
            <span
              className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${current.badgeBg} self-start`}
            >
              {current.label} — {current.statusText}
            </span>
          </div>
          <p className="text-xs text-cocoa mt-2">{current.guidance}</p>
        </div>

        {/* Stakeholder Value */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-white/80 border border-stone-200">
            <h4 className="font-bold text-espresso mb-1">For Diners</h4>
            <p className="text-cocoa leading-relaxed">
              Clear pre-checkout queue visibility eliminates unexpected 30-minute delays.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/80 border border-stone-200">
            <h4 className="font-bold text-espresso mb-1">For Drivers</h4>
            <p className="text-cocoa leading-relaxed">
              Fairer dispatch pacing reduces idle parking congestion at busy storefronts.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/80 border border-stone-200">
            <h4 className="font-bold text-espresso mb-1">For Merchants</h4>
            <p className="text-cocoa leading-relaxed">
              Balances kitchen throughput and lowers order cancellation rates at peak hours.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-espresso text-white text-xs font-bold tracking-wider hover:bg-cocoa transition cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

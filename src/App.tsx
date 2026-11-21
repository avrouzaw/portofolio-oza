import { useState } from 'react';
import { AboutAndBadge } from './components/AboutAndBadge';
import { CareerJournal } from './components/CareerJournal';
import { ConnectSection } from './components/ConnectSection';
import { FloatingNav } from './components/FloatingNav';
import { HeroFlatlay } from './components/HeroFlatlay';
import { CaseStudyModal, CertificateModal } from './components/Modals';
import { SelectedProjects } from './components/SelectedProjects';
import { CertificateItem } from './data/portfolioData';

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FloatingNav />
      <HeroFlatlay />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <AboutAndBadge />
      </main>

      <CareerJournal onSelectCertificate={setSelectedCertificate} />
      <SelectedProjects onOpenCaseStudy={() => setCaseStudyOpen(true)} />
      <ConnectSection />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
      <CaseStudyModal isOpen={caseStudyOpen} onClose={() => setCaseStudyOpen(false)} />
    </div>
  );
}

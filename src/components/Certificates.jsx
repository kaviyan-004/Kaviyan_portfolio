import { useState } from 'react';
import { certificates } from '../data/portfolioData';
import DocumentViewerModal from './DocumentViewerModal';

// ─── Eye Icon ─────────────────────────────────────────────────────────────────
const EyeIcon = () => (
  <svg
    className="w-4.5 h-4.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

// ─── Certificate Card ─────────────────────────────────────────────────────────
// Clean and minimal layout matching the user's reference image exactly.
// Displays the provider logo (top left), Eye icon (top right), title, issuer,
// green category badge, and year at the bottom.
const CertificateCard = ({ cert, aosDelay, onOpen }) => {
  const [hovered, setHovered] = useState(false);

  // Categories style matches the green 'CERTIFICATE' badge in reference image
  const isCertificate = cert.category?.toLowerCase() === 'certificate';
  const badgeClass = isCertificate
    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20';

  const primaryLogo = cert.logos && cert.logos[0];

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={aosDelay}
      role="button"
      tabIndex={0}
      aria-label={`View ${cert.name} certificate`}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-pointer rounded-2xl p-5 border border-white/10 hover:border-white/25 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between min-h-[180px] overflow-hidden"
      style={{
        background: hovered
          ? 'linear-gradient(135deg, rgba(25,10,10,0.95) 0%, rgba(20,8,8,0.95) 100%)'
          : 'rgba(12,12,16,0.85)',
      }}
    >
      {/* Subtle radial glow on hover */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at top left, rgba(255,42,42,0.06) 0%, transparent 60%)',
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* ── Top Row: Logo + Eye Icon ─────────────────────── */}
      <div className="flex items-center justify-between gap-4 relative z-10 w-full">
        {/* White Rounded Square Logo Container */}
        {primaryLogo ? (
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-md flex-shrink-0">
            <img
              src={primaryLogo}
              alt=""
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
            <span className="text-white/20 text-xs">Logo</span>
          </div>
        )}

        {/* Circular Eye Icon Button */}
        <div
          className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 transition-all duration-300"
          style={{
            background: hovered ? 'rgba(255,42,42,0.15)' : 'rgba(255,255,255,0.05)',
            border: hovered ? '1px solid rgba(255,42,42,0.3)' : '1px solid rgba(255,255,255,0.1)',
            color: hovered ? '#ff6a6a' : 'rgba(255,255,255,0.4)',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
          aria-hidden="true"
        >
          <EyeIcon />
        </div>
      </div>

      {/* ── Middle: Title + Issuer ────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-3">
        <h3
          className="font-bold text-sm md:text-base leading-snug transition-colors duration-300 line-clamp-2"
          style={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.9)' }}
        >
          {cert.name}
        </h3>
        <p
          className="text-[10px] md:text-xs font-semibold uppercase tracking-wider transition-colors duration-300 mt-1"
          style={{ color: hovered ? 'rgba(255,150,150,0.8)' : 'rgba(255,255,255,0.4)' }}
        >
          {cert.issuer}
        </p>
      </div>

      {/* ── Bottom: Category Badge + Year ─────────────────── */}
      <div className="flex items-center justify-between gap-2 relative z-10 w-full">
        {cert.category && (
          <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${badgeClass}`}>
            {cert.category}
          </span>
        )}
        {cert.issueDate && (
          <span className="text-[10px] font-semibold text-white/35 tabular-nums">
            {cert.issueDate}
          </span>
        )}
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const Certificates = () => {
  const [activeDocIndex, setActiveDocIndex] = useState(null);
  const docs = certificates.featured;

  const handleOpen = (index) => setActiveDocIndex(index);
  const handleClose = () => setActiveDocIndex(null);
  const handleNavigate = (index) => setActiveDocIndex(index);

  return (
    <>
      <section
        id="certificates"
        className="bg-[#ff2a2a] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans"
      >
        {/* Torn paper divider at top */}
        <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-20">
          {/* ── Section Header ──────────────────────────── */}
          <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
              Certifications
            </h2>
            <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
              Industry-recognized certifications that validate my technical and analytical expertise.
            </p>
            <p className="text-black/35 text-sm mt-2 font-medium">
              Click any card to preview the certificate
            </p>
          </div>

          {/* ── Certificate Cards Grid ──────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
            {docs.map((cert, index) => (
              <CertificateCard
                key={cert.id || cert.name}
                cert={cert}
                aosDelay={String((index + 1) * 100)}
                onOpen={() => handleOpen(index)}
              />
            ))}
          </div>

          {/* ── View All CTA ────────────────────────────── */}
          <div data-aos="fade-up" data-aos-delay="700" className="flex justify-center">
            <a
              href={certificates.viewAllUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-bold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View All Certificates
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Decorative stars ──────────────────────────── */}
        <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
          </svg>
        </div>
      </section>

      {/* ── Reusable Document Viewer Modal ────────────── */}
      <DocumentViewerModal
        docs={docs}
        activeIndex={activeDocIndex}
        onClose={handleClose}
        onNavigate={handleNavigate}
      />
    </>
  );
};

export default Certificates;

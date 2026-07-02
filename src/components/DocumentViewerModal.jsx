/**
 * DocumentViewerModal — Reusable Premium Document/Certificate Viewer
 *
 * Usage:
 *   <DocumentViewerModal
 *     docs={certificatesArray}     // Array of { name, issuer, issueDate, credentialId, verificationUrl, image, category }
 *     activeIndex={0}              // Index of the currently open doc, or null to close
 *     onClose={() => {}}           // Called when modal should close
 *     onNavigate={(i) => {}}       // Called with new index when user navigates prev/next
 *   />
 *
 * This component is intentionally generic — you can pass internship letters,
 * hackathon certificates, awards, research papers, or any document.
 */

import { useEffect, useCallback, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Icon Components ────────────────────────────────────────────────────────
const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ZoomInIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
);

const ZoomOutIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
  </svg>
);

const FitIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const ChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// ─── Zoom steps ───────────────────────────────────────────────────────────────
const ZOOM_STEPS = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3];
const DEFAULT_ZOOM_INDEX = 2; // 1x = fit

// ─── PDF detection ────────────────────────────────────────────────────────────
const isPdf = (src) => src && src.toLowerCase().endsWith('.pdf');

// ─── Category badge colors ────────────────────────────────────────────────────
const categoryColor = (cat) => {
  const map = {
    'Certificate': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'Achievement': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    'Award': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Research': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Internship': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  };
  return map[cat] || 'bg-white/10 text-white/70 border-white/20';
};

// ─── Main Component ───────────────────────────────────────────────────────────
const DocumentViewerModal = ({ docs = [], activeIndex, onClose, onNavigate }) => {
  const isOpen = activeIndex !== null && activeIndex !== undefined;
  const doc = isOpen ? docs[activeIndex] : null;
  const total = docs.length;

  const [zoomIndex, setZoomIndex] = useState(DEFAULT_ZOOM_INDEX);
  const [imageLoaded, setImageLoaded] = useState(false);
  const scrollContainerRef = useRef(null);

  const zoom = ZOOM_STEPS[zoomIndex];

  // ── Reset zoom and image state when doc changes ───────────────────────────
  useEffect(() => {
    setZoomIndex(DEFAULT_ZOOM_INDEX);
    setImageLoaded(false);
  }, [activeIndex]);

  // ── Lock body scroll when modal is open ───────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Keyboard navigation ───────────────────────────────────────────────────
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'ArrowLeft' && activeIndex > 0) { onNavigate(activeIndex - 1); return; }
    if (e.key === 'ArrowRight' && activeIndex < total - 1) { onNavigate(activeIndex + 1); return; }
    if (e.key === '+' || e.key === '=') { setZoomIndex(i => Math.min(i + 1, ZOOM_STEPS.length - 1)); return; }
    if (e.key === '-') { setZoomIndex(i => Math.max(i - 1, 0)); return; }
    if (e.key === '0') { setZoomIndex(DEFAULT_ZOOM_INDEX); return; }
  }, [isOpen, onClose, activeIndex, total, onNavigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // ── Zoom controls ─────────────────────────────────────────────────────────
  const handleZoomIn = () => setZoomIndex(i => Math.min(i + 1, ZOOM_STEPS.length - 1));
  const handleZoomOut = () => setZoomIndex(i => Math.max(i - 1, 0));
  const handleFit = () => setZoomIndex(DEFAULT_ZOOM_INDEX);

  // ── Backdrop click: close only if clicking directly on backdrop ───────────
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // ── Animation variants ────────────────────────────────────────────────────
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.93, y: 24 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.96, y: 16, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <AnimatePresence>
      {isOpen && doc && (
        <motion.div
          key="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          onClick={handleBackdropClick}
        >
          <motion.div
            key={`modal-panel-${activeIndex}`}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
            style={{
              background: 'linear-gradient(135deg, rgba(15,15,20,0.98) 0%, rgba(20,20,28,0.98) 100%)',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── TOP BAR ─────────────────────────────────────────────────── */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/8 flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.03)' }}>

              {/* Left: icon + title + meta */}
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl flex-shrink-0">{doc.icon}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-white font-bold text-base leading-tight truncate max-w-[220px] sm:max-w-xs">
                      {doc.name}
                    </h2>
                    {doc.category && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider flex-shrink-0 ${categoryColor(doc.category)}`}>
                        {doc.category}
                      </span>
                    )}
                  </div>
                  <p className="text-white/45 text-xs mt-0.5 truncate">
                    {doc.issuer}
                    {doc.issueDate && <span className="text-white/30"> · {doc.issueDate}</span>}
                    {doc.credentialId && <span className="text-white/25"> · ID: {doc.credentialId}</span>}
                  </p>
                </div>
              </div>

              {/* Right: verify + close */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {doc.verificationUrl && (
                  <a
                    href={doc.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/90 border border-white/15 hover:border-[#ff2a2a]/70 hover:bg-[#ff2a2a]/10 hover:text-white transition-all duration-200"
                  >
                    <ShieldIcon />
                    <span className="hidden sm:inline">Verify</span>
                    <ExternalLinkIcon />
                  </a>
                )}
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            {/* ── PREVIEW AREA ────────────────────────────────────────────── */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-auto relative"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(30,30,40,1) 0%, rgba(10,10,14,1) 100%)',
                minHeight: 0,
              }}
            >
              {/* Dot grid pattern */}
              <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

              <div className="relative flex items-start justify-center p-6 sm:p-10 min-h-[300px] sm:min-h-[400px]">
                {!doc.image ? (
                  /* ── No image yet: clean placeholder ─────────────────── */
                  <div className="flex flex-col items-center justify-center gap-5 py-16 px-10 w-full max-w-md text-center">
                    <div
                      className="flex items-center justify-center w-20 h-20 rounded-2xl text-4xl"
                      style={{ background: 'rgba(255,42,42,0.1)', border: '1px solid rgba(255,42,42,0.2)' }}
                    >
                      {doc.icon}
                    </div>
                    <div>
                      <p className="text-white/70 font-semibold text-base mb-1">{doc.name}</p>
                      <p className="text-white/35 text-sm">{doc.issuer}</p>
                    </div>
                    <div
                      className="px-4 py-2.5 rounded-xl text-sm text-white/40 font-medium"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.12)' }}
                    >
                      Certificate image will be uploaded soon
                    </div>
                    {doc.verificationUrl && (
                      <a
                        href={doc.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                        style={{ background: 'rgba(255,42,42,0.15)', border: '1px solid rgba(255,42,42,0.3)' }}
                      >
                        <ShieldIcon />
                        Verify on Issuer Website
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                ) : isPdf(doc.image) ? (
                  <iframe
                    src={doc.image}
                    title={doc.name}
                    className="w-full rounded-lg border border-white/10 shadow-2xl"
                    style={{ height: '65vh', minHeight: '300px' }}
                  />
                ) : (
                  <div className="relative" style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', transition: 'transform 0.25s ease' }}>
                    {!imageLoaded && (
                      <div className="flex flex-col items-center justify-center gap-3 py-20 px-10">
                        <div className="w-10 h-10 border-2 border-white/20 border-t-[#ff2a2a] rounded-full animate-spin" />
                        <p className="text-white/30 text-sm">Loading certificate...</p>
                      </div>
                    )}
                    <img
                      src={doc.image}
                      alt={doc.name}
                      onLoad={() => setImageLoaded(true)}
                      className={`rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 max-w-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      style={{ maxWidth: zoom <= 1 ? '100%' : 'none', width: zoom <= 1 ? '100%' : 'auto' }}
                      draggable={false}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* ── BOTTOM TOOLBAR ──────────────────────────────────────────── */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-white/8 flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.02)' }}>

              {/* Nav: Prev */}
              <button
                onClick={() => activeIndex > 0 && onNavigate(activeIndex - 1)}
                disabled={activeIndex <= 0}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Center: Zoom controls + index */}
              <div className="flex items-center gap-1">
                {/* Zoom toolbar */}
                {doc.image && !isPdf(doc.image) && (
                  <div className="flex items-center gap-1 rounded-lg border border-white/10 p-1 mr-2"
                    style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <button
                      onClick={handleZoomOut}
                      disabled={zoomIndex === 0}
                      title="Zoom Out ( - )"
                      className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150"
                    >
                      <ZoomOutIcon />
                    </button>
                    <span className="text-white/50 text-xs font-mono w-10 text-center select-none">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoomIndex === ZOOM_STEPS.length - 1}
                      title="Zoom In ( + )"
                      className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150"
                    >
                      <ZoomInIcon />
                    </button>
                    <div className="w-px h-4 bg-white/10 mx-0.5" />
                    <button
                      onClick={handleFit}
                      title="Fit to screen ( 0 )"
                      className="p-1.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-all duration-150"
                    >
                      <FitIcon />
                    </button>
                  </div>
                )}

                {/* Doc index */}
                {total > 1 && (
                  <span className="text-white/35 text-xs font-medium tabular-nums">
                    {activeIndex + 1} / {total}
                  </span>
                )}
              </div>

              {/* Nav: Next */}
              <button
                onClick={() => activeIndex < total - 1 && onNavigate(activeIndex + 1)}
                disabled={activeIndex >= total - 1}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DocumentViewerModal;

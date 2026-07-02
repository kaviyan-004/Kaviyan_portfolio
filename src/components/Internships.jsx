import { useState } from 'react';
import { internshipsList } from '../data/portfolioData';
import DocumentViewerModal from './DocumentViewerModal';

const InternshipCard = ({ intern, index, onOpen }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase">
          {intern.duration}
        </span>
        <span className="bg-white/10 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/15">
          Internship
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-white text-2xl font-black mb-1 tracking-tight">
          {intern.role}
        </h3>
        <p className="text-red-200 text-sm font-black tracking-wide uppercase mb-3">
          {intern.organization}
        </p>

        {intern.image && (
          <button
            onClick={() => onOpen(index)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all hover:scale-105 select-none whitespace-nowrap"
          >
            <span>📄 View Internship Letter</span>
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        )}
      </div>

      {/* Skills gained */}
      <div className="mb-6">
        <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Skills Gained:</h4>
        <ul className="text-white/90 text-sm font-medium space-y-1 pl-4 list-disc">
          {intern.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies used */}
    <div className="pt-4 border-t border-white/10">
      <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs font-mono font-bold text-white bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition-all"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Internships = () => {
  const [activeDocIndex, setActiveDocIndex] = useState(null);

  // Map internshipsList entries to Document format for the modal
  const docs = internshipsList.map(item => ({
    name: item.title || "Internship Letter",
    issuer: item.organization,
    issueDate: item.duration,
    category: "Internship",
    image: item.image,
    verificationUrl: null
  }));

  const handleOpen = (index) => setActiveDocIndex(index);
  const handleClose = () => setActiveDocIndex(null);
  const handleNavigate = (index) => setActiveDocIndex(index);

  return (
    <>
      <section id="experience" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
        
        {/* Torn paper divider at top */}
        <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-20">
          
          {/* Header */}
          <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
              Work Experience
            </h2>
            <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
              Hands-on experience applying data analytics, visualization, and technical skills in real-world environments.
            </p>
          </div>

          {/* Internship Cards Grid */}
          {internshipsList.length === 1 ? (
            <div className="flex justify-center">
              <div className="w-full max-w-lg lg:max-w-sm">
                <InternshipCard 
                  intern={internshipsList[0]} 
                  index={0} 
                  onOpen={handleOpen} 
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {internshipsList.map((intern, index) => (
                <InternshipCard 
                  key={intern.organization} 
                  intern={intern} 
                  index={index} 
                  onOpen={handleOpen} 
                />
              ))}
            </div>
          )}

        </div>

        {/* Decorative stars */}
        <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
        </div>
      </section>

      {/* Reusable Document Viewer Modal */}
      <DocumentViewerModal
        docs={docs}
        activeIndex={activeDocIndex}
        onClose={handleClose}
        onNavigate={handleNavigate}
      />
    </>
  );
};

export default Internships;

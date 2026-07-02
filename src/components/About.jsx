import heroImage from '../assets/hero/hero.png';
import { aboutContent, personalInfo } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#5A9FD4" />
        <stop offset="1" stopColor="#306998" />
      </linearGradient>
      <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.318" y2="1149.584" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#FFD43B" />
        <stop offset="1" stopColor="#FFE873" />
      </linearGradient>
      <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
      <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM78.929 90.539c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const SQLIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#00618A" d="M117.688 98.242a6.685 6.685 0 00-2.074.391c-.637.234-1.293.59-1.757.96l-.243-.089c-.09-.479-.191-.984-.191-1.472 0-.508.076-.86.161-1.192a4.16 4.16 0 01.508-1.262l-.183-.183c-.711.191-1.298.534-1.757.973a4.17 4.17 0 00-.96 1.586c-.304.88-.528 1.706-.528 3.07 0 1.012.254 2.028.69 3.04l.212-.04c.45-.547.907-1.124 1.357-1.757.196-.293.39-.621.586-.914.082.473.16.832.16 1.252 0 .41-.076.895-.254 1.395l.222.144c.64-.41 1.28-.876 1.757-1.472.445-.547.922-1.16 1.128-1.984l-.2-.124c-.394.176-.73.355-1.116.508.16-.64.308-1.255.308-2.01 0-.273-.078-.624-.117-.914l-.274-.086c-.375.547-.762 1.128-1.207 1.676-.402.488-.852.95-1.31 1.39-.078-.234-.133-.473-.133-.808 0-.332.078-.742.18-1.207.105-.449.262-.96.438-1.395.222-.55.469-.98.765-1.363.301-.39.61-.742 1.023-1.058a2.891 2.891 0 011.242-.613c.488-.117.953-.176 1.468-.176h.293l.023-.066z" />
      <path fill="#E48E00" d="M85.199 42.004c-2.344 0-4.383.477-6.125 1.043-1.742.566-3.203 1.262-4.414 2.047-1.211.785-2.207 1.648-3.012 2.547a15.795 15.795 0 00-1.98 2.828c-.509.93-.878 1.809-1.11 2.598-.234.785-.351 1.468-.351 2.016 0 1.023.312 1.758.938 2.207.625.449 1.398.672 2.32.672.727 0 1.504-.234 2.332-.703.828-.469 1.629-1.141 2.402-2.016a17.22 17.22 0 002.176-3.148 20.59 20.59 0 001.738-4.079c.14-.465.344-.84.613-1.125a.93.93 0 01.688-.293c.34 0 .574.133.703.398.129.266.191.578.191.938 0 .422-.074.895-.219 1.422-.148.527-.36 1.078-.637 1.652-.277.574-.621 1.152-1.035 1.734-.414.582-.906 1.113-1.48 1.594-.571.48-1.226.867-1.965 1.16-.738.293-1.566.441-2.484.441-.918 0-1.805-.172-2.66-.52a6.297 6.297 0 01-2.187-1.476c-.617-.637-1.106-1.418-1.465-2.344-.359-.926-.539-1.977-.539-3.148 0-1.535.324-3.055.973-4.559.648-1.504 1.594-2.887 2.836-4.148 1.242-1.262 2.77-2.285 4.582-3.074 1.812-.789 3.871-1.184 6.18-1.184 1.473 0 2.762.172 3.863.52 1.102.347 2.023.824 2.766 1.43.742.605 1.3 1.32 1.672 2.148.371.828.558 1.727.558 2.695 0 1.54-.434 3.004-1.3 4.399-.868 1.394-2.087 2.629-3.657 3.707-1.57 1.078-3.457 1.933-5.66 2.566-2.203.633-4.648.953-7.34.953l-.164-.312c2.297-.359 4.363-.91 6.199-1.652 1.836-.742 3.399-1.629 4.691-2.66 1.293-1.031 2.293-2.176 3-3.437.707-1.262 1.059-2.594 1.059-3.996 0-.887-.145-1.691-.434-2.414-.289-.723-.7-1.344-1.234-1.867a5.517 5.517 0 00-1.93-1.227 6.765 6.765 0 00-2.519-.441z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">SQL</span>
  </div>
);

const PowerBIIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <rect x="16" y="24" width="20" height="80" rx="4" fill="#F2C811" />
      <rect x="42" y="36" width="20" height="68" rx="4" fill="#E8A000" />
      <rect x="68" y="48" width="20" height="56" rx="4" fill="#F2C811" />
      <rect x="94" y="16" width="20" height="88" rx="4" fill="#E8A000" />
      {/* Chart line */}
      <path d="M26 44 L52 56 L78 48 L104 28" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <circle cx="26" cy="44" r="3" fill="#fff" opacity="0.8" />
      <circle cx="52" cy="56" r="3" fill="#fff" opacity="0.8" />
      <circle cx="78" cy="48" r="3" fill="#fff" opacity="0.8" />
      <circle cx="104" cy="28" r="3" fill="#fff" opacity="0.8" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Power BI</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={heroImage} 
                  alt={`${personalInfo.name} — ${personalInfo.title}`} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SQLIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PowerBIIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;

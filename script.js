// Destructure your hooks and icons directly from the global window objects
const { useState, useEffect, useRef } = React;
const { 
  Play, Pause, ChevronDown, Heart, Youtube, Instagram,
  Twitter, Music2, ArrowRight, Sparkles, Globe, Users,
  Zap, Headphones, Radio, Star, Menu, X, Volume2,
  TrendingUp, Coffee, Moon, Sun 
} = Lucide;

/* ─────────────────────────────────────────────
   REAL videos from SummerWaveSounds channel
───────────────────────────────────────────── */
const VIDEOS = [
  { id: "GnmG5FX2M2E", title: "Feel-Good City Vibes Mix", genre: "Deep House", tag: "🏙️ City Nights", duration: "1 HR", mood: "City Vibes" },
  { id: "v5SLMXc6d8Q", title: "Summer Wave Sounds – Feel Good EDM", genre: "EDM / Feel Good", tag: "☀️ Summer", duration: "1 HR", mood: "Feel Good" },
  { id: "KwBARVeSJM0", title: "Deep House Summer Mix 2025 | Chill • Tropical Vibes", genre: "Deep House", tag: "🍹 Tropical", duration: "1 HR", mood: "Chill" },
  { id: "ZZjKsakgbgw", title: "Summer Deep House Mix 2026 | Luxury Poolside Lounge", genre: "Deep House", tag: "🌅 Sunset", duration: "1 HR", mood: "Sunset" },
  { id: "jjX6AGi6v5g", title: "Summer Music Mix 2026 – Night Vibes / Stress Relief", genre: "Chill EDM", tag: "🌙 Night", duration: "1 HR", mood: "Night" },
  { id: "WhqEGF5LoDk", title: "Summer Relaxing Vibes 4K UHD 2026 | Chill Tropical Mix", genre: "Tropical House", tag: "🌴 Tropical", duration: "1 HR", mood: "Chill" }
];

const GENRES = ["All", "Deep House", "EDM / Feel Good", "Chill EDM", "Tropical House", "UK Garage"];
const STATS = [
  { val: "540+", label: "Subscribers" },
  { val: "50K+", label: "Total Views" },
  { val: "1HR", label: "No-Ad Mixes" },
  { val: "100%", label: "To Good Causes" }
];

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 30%, #2d1200 55%, #1a0800 80%, #0a0a0a 100%)" }} />
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", top: "40%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(234,179,8,0.15) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(251,146,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute bottom-0 left-0 right-0 h-[200px]" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
    </div>
  );
}

function SoundBars({ active, count = 24, color = "#fb923c" }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 40 }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{
          width: 3, borderRadius: 9999, background: color, minHeight: 4,
          height: active ? `${18 + Math.abs(Math.sin(i * 0.7)) * 22}px` : "6px",
          opacity: active ? 0.85 : 0.25, transition: `height ${0.4 + (i % 5) * 0.08}s ease-in-out`
        }} />
      ))}
    </div>
  );
}

function VideoCard({ video }) {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="rounded-[18px] overflow-hidden bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40"
    >
      <div className="relative pb-[56.25%] bg-[#111]">
        {playing ? (
          <iframe src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`} allow="autoplay; encrypted-media" allowFullScreen className="absolute inset-0 w-full h-full border-none" />
        ) : (
          <>
            <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute top-3 right-3 bg-black/75 border border-orange-400/40 rounded-lg px-[10px] py-[3px] text-[11px] font-bold text-[#fb923c]">{video.duration}</div>
            <div className="absolute top-3 left-3 bg-orange-400/20 backdrop-blur-md border border-orange-400/30 rounded-lg px-[10px] py-[3px] text-[11px] font-semibold text-yellow-200">{video.tag}</div>
            <div onClick={() => setPlaying(true)} className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/40 transition-all">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
                <Play size={22} fill="white" color="white" className="ml-1" />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-4">
        <div className="text-[11px] text-orange-400 font-bold tracking-wider uppercase mb-1">{video.genre}</div>
        <h3 className="text-sm font-semibold text-stone-100 line-clamp-2 mb-3">{video.title}</h3>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-stone-500">SummerWaveSounds</span>
          <a href={`https://youtube.com/watch?v=${video.id}`} target="_blank" className="text-orange-400 font-semibold flex items-center gap-1"><Youtube size={12} /> Watch</a>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-orange-400/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center shadow-md shadow-orange-500/30">
            <Headphones size={18} color="white" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-stone-100 tracking-tight leading-none">SummerWave</div>
            <div className="text-[10px] text-orange-400 tracking-widest font-semibold">SOUNDS</div>
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center text-xs text-stone-400 font-medium">
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#mission" className="hover:text-orange-400 transition-colors">Mission</a>
          <a href="#listen" className="hover:text-orange-400 transition-colors">Listen</a>
        </div>
        <a href="https://youtube.com/@summerwavesounds" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold shadow-md shadow-orange-500/20 hover:scale-105 transition-transform">
          <Youtube size={14} /> Subscribe
        </a>
      </div>
    </nav>
  );
}

function App() {
  const [activeGenre, setActiveGenre] = useState("All");
  const filtered = activeGenre === "All" ? VIDEOS : VIDEOS.filter(v => v.genre === activeGenre);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100 selection:bg-orange-500/30">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        <HeroBackground />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6 text-xs font-bold text-orange-400 tracking-widest uppercase">
            <Radio size={12} /> Feel-Good Music — EDM · Deep House
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase leading-none mb-6 font-['Bebas_Neue'] bg-gradient-to-r from-white via-yellow-200 to-orange-500 bg-clip-text text-transparent">
            FEEL THE<br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">GOOD VIBES</span>
          </h1>
          <p className="text-base md:text-lg text-stone-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Bespoke feel-good soundtracks that evolve with the city lights. <span className="text-orange-400 font-semibold">100% of revenue</span> supporting youth sports and global food banks worldwide.
          </p>
          <div className="flex justify-center mb-8">
            <SoundBars active={true} count={28} />
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#listen" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-sm shadow-xl shadow-orange-500/30 hover:opacity-90 transition-opacity">Listen Now</a>
          </div>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section id="listen" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-['Bebas_Neue'] tracking-wider mb-2 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">All Mixes</h2>
          <p className="text-stone-400 text-xs">Click any mix to play it directly in your layout</p>
        </div>

        {/* Genre filters */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {GENRES.map(g => (
            <button key={g} onClick={() => setActiveGenre(g)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeGenre === g ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md' : 'bg-white/5 text-stone-400 border border-white/10 hover:border-orange-400/30'}`}>
              {g}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map(v => <VideoCard key={v.id} video={v} />)}
        </div>
      </section>
    </div>
  );
}

// Render the application directly to the DOM root container
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

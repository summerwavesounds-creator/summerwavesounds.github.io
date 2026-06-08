import { useState, useEffect, useRef } from "react";
import { 
  Play, Pause, ChevronDown, Youtube, Instagram, Music2, ArrowRight, 
  Sparkles, Globe, Users, Radio, Menu, X, Volume2
} from "lucide-react";

// Updated with your 10 requested videos
const VIDEOS = [
  { id: "aRWlJnwGEkw", title: "Summer Wave Sounds – Feel Good Mix", genre: "EDM / Feel Good", tag: "🍹 Tropical", duration: "26:59", mood: "Chill" },
  { id: "Qk4qBu4jWeQ", title: "Summer Wave Sounds – Alternative Rock Mix", genre: "Alternative Rock", tag: "🌙 Night", duration: "21:36", mood: "Sunset Drive" },
  { id: "Aluy6rWdnW0", title: "Summer Wave Sounds – Feel Good Mix", genre: "EDM / Feel Good", tag: "☀️ Summer", duration: "1:00:00", mood: "Feel Good" },
  { id: "flmE6i-wpJ8", title: "Summer Wave Sounds – Night Vibes", genre: "Night Vibes", tag: "🌙 Night", duration: "1:00:00", mood: "Late Night" },
  { id: "uEc-z3seLM4", title: "Summer Wave Sounds – Tropical House", genre: "Deep House", tag: "🍹 Tropical", duration: "1:00:00", mood: "Chill" },
  { id: "53MSJ0_tIlI", title: "POV: It's late at night and you can't sleep", genre: "Night Vibes", tag: "🌙 Night", duration: "21:37", mood: "Late Night" },
  { id: "LnJ_QgHIBdA", title: "Summer Wave Sounds – Summer Anthem", genre: "Summer Anthem", tag: "☀️ Summer", duration: "1:00:00", mood: "Vibes" },
  { id: "jfLPY3LBVmU", title: "Summer Wave Sounds – Feel Good Pop", genre: "Pop", tag: "🌅 Sunset", duration: "2:49", mood: "Chill" },
  { id: "9tQr_M5cVho", title: "Summer Wave Sounds – Chill EDM Mix", genre: "Chill EDM", tag: "🌴 Tropical", duration: "1:00:00", mood: "Vibes" },
  { id: "WivN8WDgjCU", title: "Summer Wave Sounds – Midnight Mix", genre: "Night Vibes", tag: "🌙 Night", duration: "1:00:00", mood: "Late Night" }
  { id: "4m_OelXo9hQ", title: "Summer Wave Sounds – Driving Into The Sunset", genre: "Chill EDM", tag: "🌅 Sunset", duration: "24:02", mood: "Sunset Drive" },
  { id: "3SzARMybdbk", title: "Summer Wave Sounds – Pure Energy Mix", genre: "EDM / Feel Good", tag: "☀️ Summer", duration: "1:00:00", mood: "Feel Good" }
];

const GENRES = ["All", "EDM / Feel Good", "Deep House", "Summer Anthem", "Chill EDM", "Night Vibes", "Alternative Rock", "Pop"];

// Updated Stats perfectly matching your request
const STATS = [
  { val: "700+", label: "Subscribers" },
  { val: "80K+", label: "Total Views" },
  { val: "1HR", label: "No-Ad Mixes" },
  { val: "100%", label: "To Good Causes" }
];

// --- Custom TikTok SVG Icon ---
function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

// --- Custom SoundCloud SVG Icon ---
function SoundCloudIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.56 12.78c0-.58.04-1.14.13-1.68-.44-.31-.96-.49-1.53-.49-.52 0-1 .15-1.41.4-.29-.64-.93-1.09-1.68-1.09-.34 0-.66.09-.94.25c-.27-.88-1.1-1.53-2.07-1.53-.61 0-1.17.26-1.56.68V9.43c0-.13-.11-.24-.24-.24s-.24.11-.24.24v4.99c0 .13.11.24.24.24s-.24-.11.24-.24v-.27c.39.42.94.68 1.56.68.98 0 1.81-.65 2.07-1.53.28.16.6.25.94.25.75 0 1.39-.45 1.68-1.09.41.25.89.4 1.41.4.57 0 1.09-.18 1.53-.49-.09-.55-.13-1.11-.13-1.69zm11.93.99c-.11-.64-.42-1.22-.89-1.66-.46-.44-1.05-.71-1.7-.77-.18-1.37-1.11-2.47-2.38-2.82-.41-.11-.84-.17-1.28-.17-.79 0-1.54.2-2.2.55-.41-.53-.99-.91-1.66-1.06-.31-.07-.63-.11-.96-.11-1.07 0-2.02.48-2.66 1.24.16.53.25 1.09.25 1.67 0 .59-.09 1.15-.25 1.68.64.76 1.59 1.24 2.66 1.24.33 0 .65-.04.96-.11.67-.15 1.25-.53 1.66-1.06.66.35 1.41.55 2.2.55.44 0 .87-.06 1.28-.17 1.27-.35 2.2-1.45 2.38-2.82.65-.06 1.24-.33 1.7-.77.47-.44.78-1.02.89-1.66.06-.35.09-.72.09-1.09 0-.36-.03-.73-.09-1.08z"/>
    </svg>
  );
}

// --- Custom X / Twitter SVG Icon ---
function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f97316]/10 via-transparent to-transparent opacity-70" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f97316]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#eab308]/10 rounded-full blur-[120px] animate-pulse delay-700" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
}

function SoundBars({ active, count = 24, color = "#fb923c" }) {
  return (
    <div className="flex items-end gap-[3px] h-12 px-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full transition-all duration-300"
          style={{
            backgroundColor: color,
            height: active ? `${Math.floor(Math.random() * 80) + 20}%` : "15%",
            animation: active ? `pulse 1s ease-in-out infinite alternate` : "none",
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}
    </div>
  );
}

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative bg-zinc-900/40 border border-zinc-800/80 hover:border-orange-500/40 rounded-2xl overflow-hidden transition-all duration-300">
      <div className="relative aspect-video bg-zinc-950 flex items-center justify-center overflow-hidden">
        {playing ? (
          <iframe
            className="w-full h-full absolute inset-0 border-0"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
            
            <button
              onClick={() => setPlaying(true)}
              className="absolute p-4 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-400 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <Play className="w-6 h-6 fill-current text-white" />
            </button>
            
            <span className="absolute bottom-3 right-3 px-2 py-0.5 text-xs font-mono bg-black/80 rounded border border-zinc-800 text-zinc-300">
              {video.duration}
            </span>
            <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-medium bg-zinc-900/90 rounded-full border border-zinc-800 text-orange-400">
              {video.tag}
            </span>
          </>
        )}
      </div>

      <div className="p-5">
        <div className="text-xs font-medium text-zinc-500 mb-1">{video.genre}</div>
        <h3 className="font-semibold text-zinc-100 line-clamp-1 group-hover:text-orange-400 transition-colors">
          {video.title}
        </h3>
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800/60 pt-3">
          <span>Mood: {video.mood}</span>
          <a
            href={`https://youtu.be/${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline flex items-center gap-1"
          >
            Watch on YT <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeGenre, setActiveGenre] = useState("All");
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mixesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredVideos = activeGenre === "All" 
    ? VIDEOS 
    : VIDEOS.filter(v => v.genre === activeGenre);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-orange-500/30 selection:text-orange-300">
      
      {/* HEADER / NAVIGATION */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-900 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Music2 className="w-5 h-5 text-zinc-950 font-bold" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">SummerWave</span>
              <span className="text-xs block text-orange-400 font-medium tracking-widest uppercase -mt-1">Sounds</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <button onClick={() => mixesRef.current?.scrollIntoView({ behavior: "smooth" })} className="hover:text-zinc-100 transition-colors">Mixes</button>
            <a href="#about" className="hover:text-zinc-100 transition-colors">Our Story</a>
            <a href="#mission" className="hover:text-zinc-100 transition-colors">Our Mission</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://www.youtube.com/@summerwavesounds?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-orange-500 text-zinc-950 font-semibold text-sm hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-200"
            >
              Subscribe Free
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-zinc-400 hover:text-zinc-100">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 px-6 flex flex-col gap-6 md:hidden">
          <button 
            onClick={() => { setMobileMenuOpen(false); mixesRef.current?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-left text-lg font-medium py-2 border-b border-zinc-900"
          >
            Latest Mixes
          </button>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-zinc-900">Our Story</a>
          <a href="#mission" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-zinc-900">Our Mission</a>
          <a 
            href="https://www.youtube.com/@summerwavesounds?sub_confirmation=1"
            className="mt-4 w-full py-3 rounded-xl bg-orange-500 text-center text-zinc-950 font-bold"
          >
            Subscribe on YouTube
          </a>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <HeroBackground />

        <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-orange-400 mb-6 backdrop-blur-sm shadow-inner">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>FEEL-GOOD MUSIC • EDM • DEEP HOUSE • UK GARAGE</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent leading-none uppercase">
            Feel the <br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Good Vibes</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Bespoke feel-good soundtracks that evolve with the city lights. <span className="text-orange-400 font-semibold">100% of revenue</span> supporting youth sports and global food banks worldwide.
          </p>

          {/* Interactive Player Mock */}
          <div className="w-full max-w-md bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 mb-12 backdrop-blur-sm flex items-center justify-between group shadow-2xl">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-zinc-950 hover:bg-orange-400 transition-colors shadow-md shadow-orange-500/10"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>
              <div className="text-left">
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-orange-400 transition-colors">SummerWave Radio Live</div>
                <div className="text-xs text-zinc-500 font-mono">{isPlaying ? "Streaming Joy..." : "Paused"}</div>
              </div>
            </div>
            <SoundBars active={isPlaying} count={16} />
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => mixesRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-zinc-950 font-bold text-base hover:opacity-90 shadow-xl shadow-orange-500/10 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Listen Now <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
            <a 
              href="https://www.youtube.com/@summerwavesounds?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 font-bold text-base text-zinc-200 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Youtube className="w-5 h-5 text-red-500 fill-current" /> Subscribe Free
            </a>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="border-y border-zinc-900 bg-zinc-950/40 backdrop-blur-sm py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-1 font-mono">
                {stat.val}
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED / LATEST MIXES */}
      <section ref={mixesRef} className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold tracking-widest text-orange-400 uppercase mb-2">Curated Collections</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">The Soundtrack Library</h2>
          </div>
          
          {/* Genre Filters */}
          <div className="flex flex-wrap gap-2 max-w-xl">
            {GENRES.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeGenre === genre ? "bg-orange-500 border-orange-500 text-zinc-950 font-semibold shadow-md shadow-orange-500/10" : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"}`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* ABOUT / OUR STORY */}
      <section id="about" className="py-24 border-t border-zinc-900 bg-zinc-950/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-400 mx-auto mb-6 shadow-inner">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">Music with Pure Purpose</h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto font-normal">
            SummerWave Sounds was founded to unite dynamic electronic soundscapes with global humanitarian work. We construct seamless musical mixes meticulously engineered to keep you focused, energized, and inspired, whether you are coding, relaxing, or working out.
          </p>
        </div>
      </section>

      {/* MISSION / IMPACT CARDS */}
      <section id="mission" className="py-24 border-t border-zinc-900 max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-orange-400 uppercase mb-2">Our Commitments</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Where the Revenue Goes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-8 hover:border-orange-500/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-zinc-950 transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">YMCA Youth Sports Programs</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We allocate funds directly into grassroots basketball leagues, soccer clubs, and swim training sponsorships via community centers, enabling children of all financial backgrounds to experience team dynamics, structural health, and active play.
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-8 hover:border-orange-500/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 border border-yellow-500/20 group-hover:bg-yellow-500 group-hover:text-zinc-950 transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">Global Food Banking Networks</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Malnutrition remains a critical obstacle to child development. Every stream on our videos helps fill localized supply chains, securing nutrient-dense provisions for soup kitchens and urgent distribution networks across disadvantaged urban sectors.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-zinc-950 font-bold text-sm">
              S
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-400">© 2026 SummerWave Sounds. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-zinc-500">
            <a href="https://www.youtube.com/@summerwavesounds" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" title="YouTube"><Youtube className="w-5 h-5" /></a>
            <a href="https://tiktok.com/@summerwavesounds" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="TikTok"><TikTokIcon className="w-5 h-5" /></a>
            <a href="https://instagram.com/summerwavesounds" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors" title="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="https://soundcloud.com/summerwavesounds" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" title="SoundCloud"><SoundCloudIcon className="w-5 h-5" /></a>
            <a href="https://x.com/summerwav3" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" title="Twitter / X"><XIcon className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}

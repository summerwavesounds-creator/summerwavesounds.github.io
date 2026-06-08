import React from 'react';
import { 
  SiTiktok, 
  SiInstagram, 
  SiSoundcloud, 
  SiX 
} from 'react-icons/si';

export default function App() {
  // Main featured video layout data
  const mainVideo = {
    id: "k7lLeoEULMI",
    title: "Summer Music 2026 🌊 Feel Good Music ~ Best Deep House & Tropical House Mix",
    url: "https://youtu.be/k7lLeoEULMI?si=gbNJhav-gvlHYnb0"
  };

  // Your requested video list
  const otherVideos = [
    {
      id: "kTPBVNJT0wc",
      title: "Summer House Mix 2026 🏝️ Best of Tropical & Deep House",
      url: "https://youtu.be/kTPBVNJT0wc?si=r_joPAXsvG9cOVWl"
    },
    {
      id: "pw7K1YfizW8",
      title: "Chill Deep House Beats ✨ Sunset Sessions Vol. 1",
      url: "https://youtu.be/pw7K1YfizW8?si=UjUAAsYf8049rQhZ"
    },
    {
      id: "4m_OelXo9hQ",
      title: "Morning Sunshine ☀️ Uplifting Tropical House Mix",
      url: "https://youtu.be/4m_OelXo9hQ?si=OCiZfGi5-VZAaReZ"
    },
    {
      id: "53MSJ0_tIlI",
      title: "Beach Club Groove 🌊 Ultimate Summer Dance Hits",
      url: "https://youtu.be/53MSJ0_tIlI?si=nGjUnvr6IgFiTy0-"
    }
  ];

  // Updated social links array
  const socialLinks = [
    { icon: <SiTiktok className="w-5 h-5" />, label: "TikTok", url: "https://tiktok.com/@summerwavesounds" },
    { icon: <SiInstagram className="w-5 h-5" />, label: "Instagram", url: "https://instagram.com/summerwavesounds" },
    { icon: <SiSoundcloud className="w-5 h-5" />, label: "SoundCloud", url: "https://soundcloud.com/summerwavesounds" },
    { icon: <SiX className="w-5 h-5" />, label: "X / Twitter", url: "https://x.com/summerwav3" }
  ];

  return (
    <div className="min-h-screen text-gray-100 font-sans antialiased bg-[#0a0a0a]">
      {/* Hero Section */}
      <header className="relative py-20 bg-gradient-to-b from-[#1a1c29] to-[#0a0a0a] border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
            SUMMERWAVE SOUNDS
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
            Bringing you the absolute best in feel-good summer frequencies, tropical grooves, and deep house vibes.
          </p>
          
          {/* Channel Stats */}
          <div className="flex justify-center gap-8 text-sm font-semibold tracking-wide text-gray-300">
            <div className="bg-gray-900/60 px-6 py-3 rounded-full border border-gray-800 backdrop-blur-sm">
              ✨ <span className="text-teal-400 font-bold ml-1">700+</span> Subscribers
            </div>
            <div className="bg-gray-900/60 px-6 py-3 rounded-full border border-gray-800 backdrop-blur-sm">
              🔥 <span className="text-blue-400 font-bold ml-1">80K+</span> Total Views
            </div>
          </div>
        </div>
      </header>

      {/* Content Layout */}
      <main className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left/Center columns - Videos */}
        <div className="lg:col-span-2 space-y-12">
          {/* Main Featured Video */}
          <section className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800/80">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Featured Release
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800 mb-4">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${mainVideo.id}`}
                title={mainVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <a 
              href={mainVideo.url} 
              target="_blank" 
              rel="noreferrer"
              className="text-lg font-semibold hover:text-teal-400 transition-colors block line-clamp-2"
            >
              {mainVideo.title}
            </a>
          </section>

          {/* More Videos Grid */}
          <section>
            <h2 className="text-xl font-bold mb-6">Latest DJ Mixes & Tracks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherVideos.map((video, index) => (
                <div key={index} className="bg-gray-900/20 rounded-xl overflow-hidden border border-gray-800/60 hover:border-gray-700/80 transition-all flex flex-col justify-between">
                  <div className="aspect-video w-full bg-gray-950">
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm font-medium text-gray-200 hover:text-teal-400 transition-colors line-clamp-2"
                    >
                      {video.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - Socials & Platforms */}
        <div className="space-y-6">
          <section className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800/80 sticky top-6">
            <h2 className="text-lg font-bold mb-4">Connect With Us</h2>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Follow along for daily playlist updates, track IDs, behind-the-scenes content, and new releases across all audio platforms.
            </p>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 bg-gray-900/60 hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-gray-900 rounded-xl border border-gray-800/50 hover:border-gray-700 text-gray-300 hover:text-white transition-all text-sm font-medium group"
                >
                  <span className="text-gray-400 group-hover:text-teal-400 transition-colors">
                    {social.icon}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </section>
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-900 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Summerwave Sounds. All rights reserved.</p>
      </footer>
    </div>
  );
}

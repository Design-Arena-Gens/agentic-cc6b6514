import AnimeAgent from '@/components/AnimeAgent';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f1a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff6b9d]/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#9d4edd]/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        
        {/* Decorative stars/sparkles */}
        <div className="absolute top-32 right-1/4 text-2xl sparkle" style={{ animationDelay: '0s' }}>✦</div>
        <div className="absolute top-1/4 left-20 text-xl sparkle text-[#ff6b9d]" style={{ animationDelay: '0.5s' }}>★</div>
        <div className="absolute bottom-1/3 right-32 text-lg sparkle text-[#00d4ff]" style={{ animationDelay: '1s' }}>✧</div>
        <div className="absolute top-1/2 left-1/4 text-xl sparkle text-[#9d4edd]" style={{ animationDelay: '1.5s' }}>✦</div>
        <div className="absolute bottom-40 left-16 text-2xl sparkle text-[#ff6b9d]" style={{ animationDelay: '2s' }}>★</div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,157,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,157,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <AnimeAgent />
      </div>
    </main>
  );
}

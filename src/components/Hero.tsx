const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Geometric Background Pattern */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-24 w-[600px] h-[600px] bg-secondary/25 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-light/15 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2.5" fill="hsl(var(--primary))" className="animate-pulse" />
              <circle cx="0" cy="0" r="2" fill="hsl(var(--secondary))" />
              <circle cx="100" cy="0" r="2" fill="hsl(var(--primary))" />
              <circle cx="0" cy="100" r="2" fill="hsl(var(--secondary))" />
              <circle cx="100" cy="100" r="2" fill="hsl(var(--primary))" />
              <line x1="50" y1="50" x2="0" y2="0" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.6" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>

        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-primary/30 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-4 border-secondary/40 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/10 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
              Building a Smarter, Fairer Treasury
            </span>
            <span className="block mt-2 text-foreground">for Communities.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delayed leading-relaxed">
            Svadhan.ai combines <span className="text-primary font-semibold">blockchain transparency</span> with{" "}
            <span className="text-secondary font-semibold">AI-driven financial intelligence</span> 
            {" "}to enable community-owned treasuries that provide real-time emergency support.
          </p>
          
          {/* Animated feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-slide-in-left">
            <div className="px-6 py-3 bg-primary/10 border-2 border-primary/30 rounded-full backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <span className="text-primary font-semibold">🔗 Blockchain Secured</span>
            </div>
            <div className="px-6 py-3 bg-secondary/10 border-2 border-secondary/30 rounded-full backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300 hover:scale-105">
              <span className="text-secondary font-semibold">🤖 AI-Powered</span>
            </div>
            <div className="px-6 py-3 bg-primary-light/10 border-2 border-primary-light/30 rounded-full backdrop-blur-sm hover:bg-primary-light/20 transition-all duration-300 hover:scale-105">
              <span className="text-primary-light font-semibold">🤝 Community-Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

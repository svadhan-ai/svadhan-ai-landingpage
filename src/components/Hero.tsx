const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-lighter rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-fade-in"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-fade-in-delayed"></div>
        
        {/* Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" />
              <circle cx="0" cy="0" r="2" fill="hsl(var(--primary))" />
              <circle cx="100" cy="0" r="2" fill="hsl(var(--primary))" />
              <circle cx="0" cy="100" r="2" fill="hsl(var(--primary))" />
              <circle cx="100" cy="100" r="2" fill="hsl(var(--primary))" />
              <line x1="50" y1="50" x2="0" y2="0" stroke="hsl(var(--primary))" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="hsl(var(--primary))" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Building a Smarter, Fairer Treasury for Communities.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delayed leading-relaxed">
            Svadhan.ai combines blockchain transparency with AI-driven financial intelligence 
            to enable community-owned treasuries that provide real-time emergency support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

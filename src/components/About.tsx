const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Svadhan.ai
            </span>
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed animate-fade-in-delayed">
            <p className="hover:text-foreground transition-colors duration-300">
              Svadhan.ai is an early-stage initiative developing{" "}
              <span className="text-primary font-semibold">blockchain infrastructure</span> 
              {" "}for community finance and mutual aid treasuries. Our platform is built on the 
              principles of trust, transparency, and collective empowerment.
            </p>
            
            <p className="hover:text-foreground transition-colors duration-300">
              By combining the immutability and transparency of blockchain technology with 
              sophisticated{" "}
              <span className="text-secondary font-semibold">AI-driven financial intelligence</span>, 
              we're creating a new model for community-owned financial systems. Our approach enables 
              real-time emergency support mechanisms while maintaining complete accountability and 
              democratic governance.
            </p>
            
            <p className="hover:text-foreground transition-colors duration-300">
              At the core of Svadhan.ai is a commitment to{" "}
              <span className="text-primary font-semibold">data-driven decision systems</span> that 
              serve the community's best interests. We believe that financial support structures 
              should be transparent, accessible, and fair—leveraging technology not as a barrier, 
              but as a bridge to mutual prosperity.
            </p>
            
            <div className="mt-16 pt-8 border-t border-primary/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                  <div className="text-5xl mb-4 animate-float">🔒</div>
                  <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:text-primary-light transition-colors">Trust</h3>
                  <p className="text-muted-foreground">Built on blockchain transparency</p>
                </div>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20" style={{ animationDelay: '0.2s' }}>
                  <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '1s' }}>🧠</div>
                  <h3 className="text-2xl font-semibold text-secondary mb-2 group-hover:text-secondary-light transition-colors">Intelligence</h3>
                  <p className="text-muted-foreground">AI-powered decision systems</p>
                </div>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-xl bg-gradient-to-br from-primary-light/5 to-primary-light/10 border border-primary-light/20" style={{ animationDelay: '0.4s' }}>
                  <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '2s' }}>👥</div>
                  <h3 className="text-2xl font-semibold text-primary-light mb-2 group-hover:text-primary transition-colors">Community</h3>
                  <p className="text-muted-foreground">Democratic governance model</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            About Svadhan.ai
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Svadhan.ai is an early-stage initiative developing blockchain infrastructure 
              for community finance and mutual aid treasuries. Our platform is built on the 
              principles of trust, transparency, and collective empowerment.
            </p>
            
            <p>
              By combining the immutability and transparency of blockchain technology with 
              sophisticated AI-driven financial intelligence, we're creating a new model for 
              community-owned financial systems. Our approach enables real-time emergency 
              support mechanisms while maintaining complete accountability and democratic governance.
            </p>
            
            <p>
              At the core of Svadhan.ai is a commitment to data-driven decision systems that 
              serve the community's best interests. We believe that financial support structures 
              should be transparent, accessible, and fair—leveraging technology not as a barrier, 
              but as a bridge to mutual prosperity.
            </p>
            
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Trust</h3>
                  <p className="text-muted-foreground">Built on blockchain transparency</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Intelligence</h3>
                  <p className="text-muted-foreground">AI-powered decision systems</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Community</h3>
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

import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-primary/10 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -mb-32 -ml-32"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl -mt-32 -mr-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="group">
            <a 
              href="mailto:contactus@svadhan.ai" 
              className="inline-flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 text-lg group-hover:scale-105 transform"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                <Mail size={20} className="text-primary" />
              </div>
              <span className="font-medium">contactus@svadhan.ai</span>
            </a>
          </div>
          
          <div className="pt-6 border-t border-primary/10">
            <p className="text-muted-foreground">
              © 2025 <span className="text-primary font-semibold">Svadhan.ai</span>
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Building transparent, intelligent community finance infrastructure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

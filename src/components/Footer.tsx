import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
            <a href="mailto:contactus@svadhan.ai" className="text-lg">
              contactus@svadhan.ai
            </a>
          </div>
          
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground">
              © 2025 Svadhan.ai. Building transparent, intelligent community finance infrastructure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

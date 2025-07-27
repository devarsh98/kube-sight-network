import { Button } from "@/components/ui/button";
import kubeBurnerLogo from "@/assets/kubeburner-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={kubeBurnerLogo}
                alt="KubeBurner"
                className="h-8 w-8 brightness-0 invert"
              />
              <span className="text-xl font-bold">KubeBurner</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Next-generation Kubernetes observability without the complexity. 
              Monitor, analyze, and optimize your clusters with zero instrumentation.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-background/70 hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">API Reference</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-background/70 hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Community</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-background/20 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-background/70 mb-6">
              Get the latest updates on KubeBurner features and Kubernetes best practices.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="secondary" className="px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © 2024 KubeBurner. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
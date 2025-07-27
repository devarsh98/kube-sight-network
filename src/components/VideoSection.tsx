import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                See KubeBurner in Action
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Watch how KubeBurner automatically discovers service dependencies, 
                monitors network latency, and optimizes your Kubernetes cluster 
                performance in real-time.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Automatic Discovery</h4>
                  <p className="text-muted-foreground">No code changes required to start monitoring your services</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Real-time Analytics</h4>
                  <p className="text-muted-foreground">Get instant insights into performance and communication patterns</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Smart Optimization</h4>
                  <p className="text-muted-foreground">AI-powered recommendations for better resource utilization</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Video Placeholder */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-light to-primary/20 rounded-2xl shadow-elegant overflow-hidden">
              <div className="aspect-video flex items-center justify-center bg-gradient-hero">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Product Demo</h3>
                  <p className="text-white/80">Watch KubeBurner in action</p>
                </div>
              </div>
              
              {/* Overlay for interaction */}
              <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
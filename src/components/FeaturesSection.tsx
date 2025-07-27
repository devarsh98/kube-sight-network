import { Card, CardContent } from "@/components/ui/card";
import { Network, Timer, Package, Database, Eye, Zap } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Service-to-Service Communication",
    description: "Automatically discover and map communication patterns between your Kubernetes services without any code instrumentation.",
    color: "text-blue-500"
  },
  {
    icon: Timer,
    title: "Real-time Latency Monitoring",
    description: "Monitor network latency and performance metrics across your entire service mesh with millisecond precision.",
    color: "text-blue-600"
  },
  {
    icon: Package,
    title: "Intelligent Bin Packing",
    description: "Optimize resource allocation and container placement with AI-powered bin packing algorithms for maximum efficiency.",
    color: "text-blue-500"
  },
  {
    icon: Database,
    title: "Data Collection & Analytics",
    description: "Comprehensive data collection from all nodes and services with advanced analytics and visualization capabilities.",
    color: "text-blue-600"
  },
  {
    icon: Eye,
    title: "Zero-Instrumentation Observability",
    description: "Gain complete visibility into your Kubernetes clusters without modifying application code or adding agents.",
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "Lightning-Fast Insights",
    description: "Get real-time insights and alerts with sub-second query response times across your entire infrastructure.",
    color: "text-blue-600"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-primary-light/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From Kubernetes telemetry to{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              real-time insight
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock the full potential of your Kubernetes infrastructure with comprehensive 
            observability and intelligent optimization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-start space-y-4">
                  <div className={`p-3 rounded-lg bg-primary-light/10 ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
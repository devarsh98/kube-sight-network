import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Target } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Zero Instrumentation",
    description: "Monitor your Kubernetes clusters without modifying a single line of application code."
  },
  {
    icon: Zap,
    title: "Real-time Performance",
    description: "Get instant insights with sub-second query response times across your entire infrastructure."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share insights across teams with intuitive dashboards and automated alerts."
  },
  {
    icon: Target,
    title: "Precision Optimization",
    description: "AI-powered recommendations for optimal resource allocation and performance tuning."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              KubeBurner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for modern DevOps teams who need deep visibility into their Kubernetes 
            infrastructure without the complexity of traditional monitoring solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Observability Without Boundaries
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                KubeBurner revolutionizes Kubernetes monitoring by providing comprehensive 
                observability without requiring code changes or agent installations. Our 
                innovative approach automatically discovers service dependencies and monitors 
                communication patterns in real-time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're running microservices, managing distributed systems, or 
                optimizing resource allocation, KubeBurner gives you the insights you need 
                to make informed decisions.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">&lt;1ms</div>
                <div className="text-sm text-muted-foreground">Query Response</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Companies Trust Us</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary-light/10">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
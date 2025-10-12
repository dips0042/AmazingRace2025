import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Users, 
  Heart, 
  FileText, 
  Phone, 
  Mail, 
  Building, 
  Globe,
  ChevronRight,
  AlertTriangle
} from "lucide-react";
import pandemicImage from "@/assets/pandemic-statistics.jpg";

const GovernmentLanding = () => {
  const [secretClicks, setSecretClicks] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSecretClick = () => {
    const newClicks = secretClicks + 1;
    setSecretClicks(newClicks);
    
    if (newClicks >= 1) {
      toast({
        title: "National Crisis Command Portal",
        description: "Restricted Access. By direct order of the Head of State, selected candidates must verify their ID. You are about to be directed to the researcher page.",
        variant: "destructive",
      });
      navigate("/mission");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Department of Health & Science</h1>
                <p className="text-sm text-muted-foreground">Federal Republic Health Authority</p>
              </div>
            </div>
            <Badge variant="outline" className="hidden md:block">
              Official Government Portal
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Advancing Public Health Through Science
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our mission is to promote and protect the health and safety of citizens through 
            evidence-based research, policy development, and emergency preparedness initiatives.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Our Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Heart className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Public Health Monitoring</CardTitle>
                <CardDescription>
                  Continuous surveillance and analysis of population health indicators
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Emergency Response</CardTitle>
                <CardDescription>
                  Rapid deployment teams for health crises and biological threats
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Building className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Research Facilities</CardTitle>
                <CardDescription>
                  State-of-the-art laboratories for advanced medical research
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pandemic Statistics */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="destructive" className="mb-4">
              <AlertTriangle className="w-4 h-4 mr-2" />
              CRITICAL PANDEMIC ALERT
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Current Health Crisis: Necrotic Tissue Syndrome
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Department is monitoring an unprecedented health crisis. Citizens are advised to remain vigilant and follow all safety protocols.
            </p>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Latest Updates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Health Alert</Badge>
                <CardTitle className="text-lg">Stay Calm: Government Working on Solution</CardTitle>
                <CardDescription>
                  Official statement from the Department of Health & Science
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The government assures all citizens that our top scientists are working around the clock to develop an antidote for the current health crisis. Please remain calm and follow all official guidelines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Research</Badge>
                <CardTitle className="text-lg">Necrotic Tissue Research Publications</CardTitle>
                <CardDescription>
                  Latest scientific findings and preventive measures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access critical research documents on necrotic tissue syndrome, transmission patterns, and current treatment protocols developed by our research teams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Secret Button Area - Hidden in plain sight */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground/50">
            <Globe className="w-4 h-4" />
            <span className="text-xs">Official Government Portal - Authorized Personnel Only</span>
            <button 
              onClick={handleSecretClick}
              className="w-2 h-2 bg-muted-foreground/20 rounded-full hover:bg-destructive/50 transition-colors"
              aria-label="System indicator"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-semibold text-foreground">Department of Health & Science</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Serving the public through evidence-based health policy and emergency preparedness.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@healthscience.gov</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Department of Health & Science - Federal Science Government Authority. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GovernmentLanding;
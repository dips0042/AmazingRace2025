import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-lab-surface to-background flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-destructive/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-lab-warning/5 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 w-full max-w-md animate-fade-in">
        <Card className="bg-lab-elevated/50 border-destructive/30 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-16 h-16 text-destructive animate-glow-pulse" />
            </div>
            <CardTitle className="text-4xl font-bold text-destructive mb-2">
              Access Denied
            </CardTitle>
            <p className="text-muted-foreground">
              The requested laboratory section could not be found
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-lab-surface/30 p-4 rounded-lg border border-destructive/20">
              <p className="text-sm text-muted-foreground font-mono">
                ERROR 404: {location.pathname}
              </p>
            </div>
            <Button 
              onClick={() => navigate("/")} 
              variant="lab" 
              size="lg" 
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Research Portal
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;

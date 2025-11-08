import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Beaker, Dna, Search } from "lucide-react";

const IdInput = () => {
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!id.trim()) {
      toast({
        title: "Invalid ID",
        description: "Please enter a valid research ID",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate validation/lookup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    navigate(`/research/${id.trim()}`);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pharma-surface via-background to-pharma-accent flex items-center justify-center p-4 relative overflow-hidden">
      {/* Simple background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-pharma-primary/5 rounded-full" />
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-pharma-secondary/5 rounded-full" />
        <div className="absolute top-1/2 right-1/2 w-24 h-24 bg-pharma-accent/5 rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-pharma-primary/3 rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] via-[#C4B8A9] to-[#EFE9DD] bg-clip-text text-transparent">
             AMONG THE REMNANTS ⚗️
          </h1>
          <p className="text-white mt-3 text-lg font-medium">
            Save the World, Frontliners!
          </p>
        </div>

        <Card className="bg-pharma-surface-elevated/60 border-pharma-primary/30 shadow-[var(--shadow-card)]">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white">RESEARCH TERMINAL</CardTitle>
            <CardDescription className="text-red-100 italic">
              Enter security ID to access data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label htmlFor="research-id" className="text-sm font-medium text-white tracking-wide">
                  🔐 SECURITY ID
                </label>
                <Input
                  id="research-id"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="●●●●●●●●"
                  className="bg-pharma-accent/70 border-pharma-primary/40 focus:border-pharma-secondary focus:ring-pharma-primary/30 text-center font-mono text-xl tracking-[0.3em] placeholder:text-pharma-primary/30 h-14"
                  disabled={isLoading}
                />
                <div className="h-[2px] bg-gradient-to-r from-transparent via-pharma-primary/50 to-transparent" />
              </div>
              <Button
                type="submit"
                variant="lab"
                size="lg"
                className="w-full h-14 text-lg text-red-100 font-bold tracking-wide"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-pharma-surface border-t-current rounded-full animate-spin mr-3" />
                    ACCESSING VAULT...
                  </div>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    DECRYPT DATABASE
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6 space-y-2">
          <div className="text-xs text-red-500 font-mono">
            ⚠️ LABORATORY - RESTRICTED ACCESS ⚠️
          </div>
          <div className="text-xs text-red-200">
            Will this pandemic come to its end?
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdInput;
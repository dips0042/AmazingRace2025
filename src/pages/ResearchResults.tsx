import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Atom, Dna, FlaskConical } from "lucide-react";

// Mysterious encrypted database - replace with your actual data
const researchData: Record<string, {
  element: string;
  elementSymbol: string;
  codon1: string;
  codon2: string;
  codon3: string;
  classification: string;
}> = {
  "R001": {
    element: "◊ HYDROGEN ◊",
    elementSymbol: "H₁",
    codon1: "AUG",
    codon2: "GCA", 
    codon3: "UAG",
    classification: "OMEGA-7"
  },
  "R002": {
    element: "◊ HELIUM ◊",
    elementSymbol: "He₂",
    codon1: "UUU",
    codon2: "CCC",
    codon3: "GGG",
    classification: "DELTA-3"
  },
  "R003": {
    element: "◊ LITHIUM ◊",
    elementSymbol: "Li₃",
    codon1: "AAA",
    codon2: "UGC",
    codon3: "CGA",
    classification: "SIGMA-9"
  },
  "TEST": {
    element: "◊ URANIUM ◊",
    elementSymbol: "U₉₂",
    codon1: "CGU",
    codon2: "AAC",
    codon3: "UGA",
    classification: "APEX-X"
  },
  "DEMO": {
    element: "◊ PLUTONIUM ◊",
    elementSymbol: "Pu₉₄",
    codon1: "GGU",
    codon2: "CUA",
    codon3: "AUU",
    classification: "VOID-∞"
  }
};

const ResearchResults = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const data = id ? researchData[id.toUpperCase()] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-pharma-surface text-white flex items-center justify-center p-4">
        {/* Simple background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pharma-warning/5 rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-destructive/10 rounded-full" />
        </div>

        <Card className="bg-pharma-surface-elevated/40 border-pharma-warning/40 max-w-md shadow-[var(--shadow-card)]">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-20 h-20 bg-pharma-warning/20 rounded-full" />
                <div className="absolute inset-4 bg-pharma-warning/40 rounded-full" />
                <div className="absolute inset-6 bg-pharma-warning/60 rounded-full" />
                <div className="absolute inset-8 bg-pharma-warning rounded-full" />
              </div>
            </div>
            <CardTitle className="text-pharma-warning text-3xl font-bold">
              ACCESS DENIED!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-pharma-accent/50 p-4 rounded-lg border border-pharma-warning/30">
              <p className="text-pharma-warning font-mono text-sm">
                🔒 ENCRYPTED ID: "{id?.toUpperCase()}"
              </p>
              <p className="text-white/60 text-xs mt-2">
                Access Denied: The Provided ID is Not Authorized
              </p>
            </div>
            <p className="text-white/70 text-sm">
              To ensure the mission's confidentiality and legitimacy, this ID has been restricted.
            </p>
            <Button onClick={() => navigate("/")} variant="outline" size="lg" className="w-full bg-pharma-surface-elevated/60 border-pharma-primary/30 text-white hover:bg-pharma-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Secure Exit
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pharma-surface text-white p-4 relative overflow-hidden">
      {/* Simple atmospheric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-pharma-primary/5 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-pharma-secondary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pharma-accent/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button 
            onClick={() => navigate("/")} 
            variant="outline" 
            size="sm"
            className="text-white/80 hover:text-white bg-pharma-surface-elevated/60 border-pharma-primary/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Exit
          </Button>
          <Badge variant="outline" className="bg-pharma-surface-elevated/50 border-pharma-primary/40 text-white font-mono text-lg px-4 py-2">
            {id?.toUpperCase()}
          </Badge>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="text-center">
              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#FFFFFF] via-[#C4B8A9] to-[#EFE9DD] bg-clip-text text-transparent title-glow tracking-tighter">
                NECROSIS ANTIDOTE
              </h1>
              <p className="text-white text-l font-semibold">
                NATIONAL HEALTH PRIORITY | FRONTLINER INITIATIVE
              </p>
            </div>
          </div>

          <div className="bg-pharma-surface/30 border border-red-700/50 rounded-lg p-1 max-w-4xl mx-auto shadow-xl shadow-red-900/40">
            <p className="text-red-500 font-mono text-lg font-extrabold">
              🚨 THREAT CLASSIFICATION: <span className="font-extrabold">LETHAL</span> 🚨
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {/* AMINO ACID Sequence Card */}
          <Card className="bg-pharma-surface-elevated/40 border-pharma-secondary/30 shadow-[var(--shadow-card)]">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <Dna className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-white">AMINO ACID CODONS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-xs text-grey-400 mb-3 font-mono">
                  In this molecular system, those with the same amino acid subtype follow the same path
                </div>
                <div className="space-y-3">
                  <div className="bg-pharma-accent/60 px-4 py-3 rounded-lg border border-pharma-primary/30">
                    <span className="font-mono text-white text-xl font-bold tracking-widest">
                      {data.codon1}
                    </span>
                  </div>
                  <div className="bg-pharma-accent/60 px-4 py-3 rounded-lg border border-pharma-primary/30">
                    <span className="font-mono text-white text-xl font-bold tracking-widest">
                      {data.codon2}
                    </span>
                  </div>
                  <div className="bg-pharma-accent/60 px-4 py-3 rounded-lg border border-pharma-primary/30">
                    <span className="font-mono text-white text-xl font-bold tracking-widest">
                      {data.codon3}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Element Card */}
          <Card className="bg-pharma-surface-elevated/40 border-pharma-primary/30 shadow-[var(--shadow-card)]">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <FlaskConical className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-white text-xl">ELEMENT</CardTitle>
              <div className="text-xs text-white/60 font-mono">
                Essential compound for synthesis
              </div>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="bg-pharma-accent/50 p-4 rounded-lg border border-pharma-primary/20">
                <div className="text-lg font-bold text-white">
                  {data.element}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-gradient-to-r from-pharma-surface/80 via-pharma-accent/60 to-pharma-surface/80 border-pharma-secondary/40 max-w-4xl mx-auto shadow-[var(--shadow-card)]">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-pharma-warning rounded-full mr-2" />
                  <p className="text-grey-400 font-mono text-lg font-bold">
                    🔐 ENCRYPTED RESEARCH NOTES 🔐
                  </p>
                  <div className="w-3 h-3 bg-pharma-warning rounded-full ml-2" />
                </div>
              </div>
              
              <div className="bg-pharma-surface/60 p-6 rounded-lg border border-pharma-primary/30 font-mono text-sm leading-relaxed">
                <p className="text-grey-400">
                  <span className="text-grey-400">[ENCRYPTED]</span> Subject element  genetic sequence {data.codon1}-{data.codon2}-{data.codon3} reveals a unique molecular resonance — others with matching sequences might be connected
                </p>
                <br />
                <p className="text-grey-400">
                  <span className="text-grey-400">[ENCRYPTED]</span> The full codon remains concealed for safety. The secret unfolds through the initial character of every triplet
                </p>
                <br/>
                <p className="text-grey-400">
                  <span className="text-grey-400">[FINAL LOG]</span> If you're reading this, I may not have survived. The formula is incomplete. Trust no one. Complete the work before it's too late...
                </p>
                <br />
                <div className="text-right">
                  <p className="text-grey-400 text-xs italic">
                    - Adrienne Lin | Status: -
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResearchResults;
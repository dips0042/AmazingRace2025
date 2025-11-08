import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Atom, Dna, FlaskConical } from "lucide-react";

// Mysterious encrypted database - replace with your actual data
const researchData: Record<string, {
  element: string;
  codon1: string;
  codon2: string;
  codon3: string;
}> = {
 "FL-1S01": { element: "◊ BERRYLIUM ◊", codon1: "UUU", codon2: "UGG", codon3: "UAA" },
"FL-2S06": { element: "◊ LUTETIUM ◊", codon1: "UCU", codon2: "UUU", codon3: "UGC" },
"FL-2S29": { element: "◊ EUROPIUM ◊", codon1: "UGU", codon2: "UAA", codon3: "UCG" },
"FL-1S03": { element: "◊ SILLICON ◊", codon1: "UGG", codon2: "UAA", codon3: "UCU" },
"FL-1S14": { element: "◊ HYDROGEN ◊", codon1: "UCA", codon2: "UCC", codon3: "CAU" },
"FL-1S09": { element: "◊ ARGON ◊", codon1: "UCG", codon2: "UAU", codon3: "CCU" },
"FL-2S08": { element: "◊ KRYPTON ◊", codon1: "UCC", codon2: "UUU", codon3: "CGU" },
"FL-1S06": { element: "◊ RHENIUM ◊", codon1: "CUC", codon2: "UCU", codon3: "AGU" },
"FL-2S02": { element: "◊ YTTRIUM ◊", codon1: "CCC", codon2: "UGA", codon3: "AUU" },
"FL-2S09": { element: "◊ ALUMINIUM ◊", codon1: "CAA", codon2: "UGC", codon3: "ACA" },
"FL-1S07": { element: "◊ ERBIUM ◊", codon1: "CGA", codon2: "UUG", codon3: "AUG" },
"FL-2S07": { element: "◊ LANTHANUM ◊", codon1: "CAU", codon2: "UCA", codon3: "UCC" },
"FL-1S24": { element: "◊ PHOSPHORUS ◊", codon1: "CCU", codon2: "UCG", codon3: "UAU" },
"FL-1S26": { element: "◊ NITROGEN ◊", codon1: "CCG", codon2: "UCC", codon3: "UUU" },
"FL-2S14": { element: "◊ ALUMINIUM ◊", codon1: "UUC", codon2: "GCG", codon3: "AGU" },
"FL-1S27": { element: "◊ DYSPROSIUM ◊", codon1: "UUA", codon2: "GAC", codon3: "AAA" },
"FL-1S33": { element: "◊ ERBIUM ◊", codon1: "UCG", codon2: "GAA", codon3: "AGA" },
"FL-1S15": { element: "◊ RHODIUM ◊", codon1: "UCU", codon2: "GGG", codon3: "ACC" },
"FL-1S05": { element: "◊ INDIUM ◊", codon1: "UCC", codon2: "GGC", codon3: "GUC" },
"FL-2S20": { element: "◊ HYDROGEN ◊", codon1: "UAA", codon2: "GCU", codon3: "GCA" },
"FL-2S05": { element: "◊ OXYGEN ◊", codon1: "UGU", codon2: "GAU", codon3: "GCU" },
"FL-2S27": { element: "◊ IRIDIUM ◊", codon1: "ACA", codon2: "AGG", codon3: "UGA" },
"FL-1S25": { element: "◊ ERBIUM ◊", codon1: "ACG", codon2: "ACA", codon3: "UGG" },
"FL-1S31": { element: "◊ YTTRIUM ◊", codon1: "AAG", codon2: "AAC", codon3: "UAA" },
"FL-1S35": { element: "◊ FRANCIUM ◊", codon1: "AGA", codon2: "AGG", codon3: "CUA" },
"FL-1S02": { element: "◊ ALUMINIUM ◊", codon1: "AGA", codon2: "AGC", codon3: "CCG" },
"FL-2S03": { element: "◊ LANTHANUM ◊", codon1: "AGU", codon2: "AUG", codon3: "CCA" },
"FL-2S28": { element: "◊ COPERNICIUM ◊", codon1: "AAC", codon2: "AUC", codon3: "CAC" },
"FL-1S16": { element: "◊ GALLIUM ◊", codon1: "GUU", codon2: "AUC", codon3: "UAG" },
"FL-1S19": { element: "◊ OXYGEN ◊", codon1: "GCC", codon2: "AUG", codon3: "UGC" },
"FL-1S10": { element: "◊ LANTHANUM ◊", codon1: "GCA", codon2: "AGU", codon3: "UGA" },
"FL-1S17": { element: "◊ DYSPROSIUM ◊", codon1: "GCG", codon2: "ACA", codon3: "UGG" },
"FL-2S17": { element: "◊ ERBIUM ◊", codon1: "GGU", codon2: "AGC", codon3: "CGU" },
"FL-2S26": { element: "◊ SILVER ◊", codon1: "GGC", codon2: "ACU", codon3: "CAG" },
"FL-2S30": { element: "◊ LANTHANUM ◊", codon1: "GCG", codon2: "AAA", codon3: "CAA" },
"FL-2S16": { element: "◊ MENDELEVIUM ◊", codon1: "CAU", codon2: "AGG", codon3: "AUC" },
"FL-1S37": { element: "◊ NICKEL ◊", codon1: "CUU", codon2: "AUG", codon3: "ACA" },
"FL-2S13": { element: "◊ GERMANIUM ◊", codon1: "CGG", codon2: "AAA", codon3: "AUC" },
"FL-1S23": { element: "◊ HYDROGEN ◊", codon1: "CGA", codon2: "ACC", codon3: "GUU" },
"FL-1S38": { element: "◊ OXYGEN ◊", codon1: "CUA", codon2: "AGC", codon3: "GCA" },
"FL-2S11": { element: "◊ TUNGSTEN ◊", codon1: "CGC", codon2: "ACU", codon3: "GGG" },
"FL-1S11": { element: "◊ LANTHANUM ◊", codon1: "CCC", codon2: "AAG", codon3: "GUU" },
"FL-2S19": { element: "◊ AMERICIUM ◊", codon1: "GGG", codon2: "UAG", codon3: "UUG" },
"FL-1S21": { element: "◊ BERYLLIUM ◊", codon1: "GCG", codon2: "UCG", codon3: "UCA" },
"FL-1S20": { element: "◊ RHENIUM ◊", codon1: "GAU", codon2: "UUG", codon3: "UCC" },
"FL-1S29": { element: "◊ LEAD ◊", codon1: "GCU", codon2: "UUA", codon3: "UGG" },
"FL-1S22": { element: "◊ NITROGEN ◊", codon1: "GGA", codon2: "UAC", codon3: "CAC" },
"FL-2S25": { element: "◊ THORIUM ◊", codon1: "GGC", codon2: "UUU", codon3: "CAA" },
"FL-2S24": { element: "◊ ERBIUM ◊", codon1: "GUA", codon2: "UGC", codon3: "CAG" },
"FL-2S18": { element: "◊ SULFUR ◊", codon1: "UAU", codon2: "GCG", codon3: "UCA" },
"FL-2S10": { element: "◊ THORIUM ◊", codon1: "UAA", codon2: "GA", codon3: "UGA" },
"FL-1S32": { element: "◊ GADOLINIUM ◊", codon1: "UGA", codon2: "GCU", codon3: "UAA" },
"FL-1S36": { element: "◊ OSMIUM ◊", codon1: "UAG", codon2: "GUC", codon3: "CAU" },
"FL-1S04": { element: "◊ RHENIUM ◊", codon1: "UGC", codon2: "GAA", codon3: "CGG" },
"FL-2S15": { element: "◊ IODINE ◊", codon1: "UCC", codon2: "GGG", codon3: "CUA" },
"FL-1S30": { element: "◊ LANTHANUM ◊", codon1: "UGG", codon2: "GUU", codon3: "CAA" },
"FL-2S23": { element: "◊ SCANDIUM ◊", codon1: "GGU", codon2: "GUC", codon3: "UCA" },
"FL-2S01": { element: "◊ KRYPTON ◊", codon1: "GUU", codon2: "GCU", codon3: "UGU" },
"FL-1S12": { element: "◊ YTTRIUM ◊", codon1: "GAG", codon2: "GAU", codon3: "UAU" },
"FL-1S40": { element: "◊ PHOSPHORUS ◊", codon1: "GAA", codon2: "GCG", codon3: "UGA" },
"FL-2S22": { element: "◊ HELIUM ◊", codon1: "GCU", codon2: "GCA", codon3: "UAG" },
"FL-1S34": { element: "◊ NITROGEN ◊", codon1: "GCA", codon2: "GGA", codon3: "AAA" },
"FL-1S41": { element: "◊ XENON ◊", codon1: "GGG", codon2: "GUA", codon3: "ACC" },
"FL-1S39": { element: "◊ SILICON ◊", codon1: "CAU", codon2: "CAG", codon3: "UCU" },
"FL-1S08": { element: "◊ LIVERMORIUM ◊", codon1: "CCA", codon2: "CAC", codon3: "UCG" },
"FL-1S18": { element: "◊ RUTHENIUM ◊", codon1: "CGG", codon2: "CGC", codon3: "AUG" },
"FL-1S28": { element: "◊ DUBNIUM ◊", codon1: "CCC", codon2: "CGA", codon3: "AGU" },
"FL-2S12": { element: "◊ EINSTEINIUM ◊", codon1: "CGU", codon2: "CGG", codon3: "AGC" },
"FL-2S21": { element: "◊ ERBIUM ◊", codon1: "CAG", codon2: "CUU", codon3: "ACG" },
"FL-2S04": { element: "◊ RADON ◊", codon1: "CAA", codon2: "CUA", codon3: "AGG" }
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
            <CardTitle className="text-red-400 text-3xl font-bold">
              ACCESS DENIED!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-pharma-accent/50 p-4 rounded-lg border border-pharma-warning/30">
              <p className="text-red-100 font-mono text-sm">
                🔒 ENCRYPTED ID: "{id?.toUpperCase()}"
              </p>
              <p className="text-red-100 text-xs mt-2">
                Access Denied: The Provided ID is Not Authorized
              </p>
            </div>
            <p className="text-white/80 text-sm">
              To ensure the mission's confidentiality and legitimacy, this ID has been restricted.
            </p>
            <Button 
              onClick={() => navigate("/")} 
              variant="outline" 
              size="sm"
              className="text-white/80 hover:text-white bg-pharma-surface-elevated/60 border-pharma-primary/30"
            >
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
              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#FFFFFF] via-[#C4B8A9] to-[#EFE9DD] bg-clip-text text-transparent tracking-tighter">
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
                <div className="text-xs text-white/60 mb-3 font-mono">
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
                  I've been mapping fragments of code all night. Three sequences keep showing up, but each of them feels.. incomplete. Curiously, I placed them in a column and read them downwards from the left. Strangely enough, the very first attempt gave me a proper codon which in turn, aligns with an amino acid on the genetic chart.
                </p>
                <br/>
                <p className="text-grey-400">
                  Hmm.. It seems my codon alone means little. Yet, when I compared notes with others, I noticed different codons sometimes pointed to the same amino acid. Could it be that none of us are meant to work alone? Perhaps the real function only emerges when these codons gather in unity.
                </p>
                <br/>
                <p className="text-grey-400">
                  There's another level I can't shake off. Alongside my data lies an element. Not words, not letters - just a chemical name. Its symbol might hide something. If it is placed in the right order, maybe they reveal an identity we haven't seen yet.. a way to recognize ourselves once we gather. And perhaps we should form a small circle - like a Whatsapp group..? 
                </p>
                <br />
                <div className="text-left">
                  <p className="text-grey-400 text-xs italic">
                    P.S.
                  </p>
                <p className="text-grey-400 text-xs italic">
                  I think we'll need the overseers in the group to watch over and validate the research. Just to make sure everything is going well..
                </p> 
                <p className="text-grey-400 text-xs italic">
                  Here is their numbers in advance: 0858-5950-2512 and 0812-9358-7668
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
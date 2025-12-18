import FrontCover from "@/components/FrontCover";
import BackCover from "@/components/BackCover";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Jaysons International Consultancy
        </h1>
        <p className="text-sm text-muted-foreground">
          A5 Notebook Cover Design Preview
        </p>
      </div>
      
      {/* Cover Pages Container */}
      <div className="flex flex-wrap justify-center gap-8 items-start">
        {/* Front Cover */}
        <div className="flex flex-col items-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Front Cover
          </p>
          <FrontCover />
        </div>
        
        {/* Back Cover */}
        <div className="flex flex-col items-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Back Cover
          </p>
          <BackCover />
        </div>
      </div>
      
      {/* Size Note */}
      <div className="text-center mt-8">
        <p className="text-xs text-muted-foreground">
          Dimensions: A5 (148mm × 210mm) — Displayed at approximately 50% scale
        </p>
      </div>
    </div>
  );
};

export default Index;

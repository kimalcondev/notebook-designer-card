import jaysonsLogo from "@/assets/jaysons-logo.jpeg";
import frontCoverBg from "@/assets/front-cover-bg.jpg";

const FrontCover = () => {
  return (
    <div className="relative w-[297px] h-[420px] bg-maroon-dark overflow-hidden shadow-2xl rounded-sm">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${frontCoverBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/70 via-maroon-dark/50 to-maroon-dark/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {/* Logo */}
        <div className="bg-card/95 rounded-lg p-4 shadow-lg">
          <img 
            src={jaysonsLogo} 
            alt="Jaysons International Consultancy" 
            className="w-40 h-auto object-contain"
          />
        </div>
        
        {/* Tagline below logo */}
        <div className="mt-6 text-center">
          <p className="text-primary-foreground/90 text-xs font-medium tracking-wider uppercase">
            Your Gateway to Global Opportunities
          </p>
        </div>
      </div>
      
      {/* Bottom accent stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-secondary" />
    </div>
  );
};

export default FrontCover;

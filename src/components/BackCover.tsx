import jaysonsLogo from "@/assets/jaysons-logo.jpeg";
import womanWithVisas from "@/assets/woman-with-visas.jpeg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const BackCover = () => {
  return (
    <div className="relative w-[297px] h-[420px] bg-card overflow-hidden shadow-2xl rounded-sm flex flex-col">
      {/* Top Maroon Accent Bar */}
      <div className="h-5 bg-primary w-full flex-shrink-0" />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col px-4 pt-2 overflow-hidden">
        {/* Headline */}
        <div className="text-center mb-1">
          <h2 className="text-xl font-extrabold text-foreground leading-tight tracking-tight">
            DREAM VISA?
          </h2>
          <h2 className="text-xl font-extrabold text-foreground leading-tight tracking-tight">
            WE DELIVER!
          </h2>
        </div>
        
        {/* Subheadline */}
        <p className="text-center text-[9px] text-muted-foreground font-medium uppercase tracking-wide mb-1">
          Partner with us today to unlock your
          <br />international dreams
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-2">
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wide inline-flex items-center gap-1 shadow-md">
            <span>Get Started Today</span>
            <span className="text-secondary-foreground">✈</span>
          </div>
        </div>
        
        {/* Woman with Visas Image */}
        <div className="relative flex-1 min-h-[140px] mb-1">
          <div className="absolute inset-0 overflow-hidden rounded-md">
            <img 
              src={womanWithVisas} 
              alt="Happy traveler with visa and passport" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent" />
          </div>
        </div>
        
        {/* 24 Hours Support Badge & Register Call */}
        <div className="flex items-center justify-between mb-1 px-0">
          <div className="flex flex-col">
            <span className="text-[8px] font-semibold text-muted-foreground uppercase">To Register Call</span>
            <span className="text-[11px] font-bold text-primary">0700 000 000</span>
          </div>
          
          <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full border border-border">
            <Clock className="w-3 h-3 text-secondary" />
            <span className="text-[8px] font-bold text-foreground">24/7</span>
            <span className="text-[7px] font-semibold text-secondary uppercase">Support</span>
          </div>
        </div>
        
        {/* Logo */}
        <div className="flex justify-center mb-1">
          <img 
            src={jaysonsLogo} 
            alt="Jaysons International Consultancy" 
            className="h-9 w-auto object-contain"
          />
        </div>
      </div>
      
      {/* Bottom Green Footer */}
      <div className="bg-secondary px-3 py-2 flex-shrink-0">
        <div className="flex gap-3 text-[7px] text-secondary-foreground">
          {/* Address */}
          <div className="flex items-start gap-1 flex-1">
            <MapPin className="w-2.5 h-2.5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Head Office:</p>
              <p className="opacity-90">123 Business Park,</p>
              <p className="opacity-90">Nairobi, Kenya</p>
            </div>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col gap-0.5 flex-1">
            <div className="flex items-center gap-1">
              <Phone className="w-2.5 h-2.5" />
              <span className="font-semibold">+254 700 000 000</span>
            </div>
            <div className="flex items-start gap-1">
              <Mail className="w-2.5 h-2.5 mt-0.5" />
              <div>
                <p className="font-semibold">Enquiries:</p>
                <p className="opacity-90">info@jaysons.co.ke</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackCover;

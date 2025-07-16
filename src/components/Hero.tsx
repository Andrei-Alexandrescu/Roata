
import { ArrowRight } from "lucide-react";
import SpinWheel from "./SpinWheel";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/10 via-gray-50/5 to-orange-100/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-slate-600 to-orange-500 bg-clip-text text-transparent">
            Invarte.ro
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Servicii profesionale de rotație și întoarcere pentru toate nevoile tale. 
            Transformăm și optimizăm cu precizie și eficiență.
          </p>
        </div>

        {/* Roata de noroc */}
        <div className="mb-12">
          <SpinWheel />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:from-slate-800 hover:to-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <span>Descoperă Serviciile</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contactează-ne
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

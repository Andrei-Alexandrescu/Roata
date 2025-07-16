import { RotateCw, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <RotateCw className="w-8 h-8 text-orange-400 animate-spin" style={{
              animationDuration: '3s'
            }} />
              <span className="text-2xl font-bold">Invarte.ro</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Servicii profesionale de rotație și întoarcere pentru toate nevoile tale. 
              Transformăm și optimizăm cu precizie și eficiență.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => <button key={index} className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </button>)}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Rotație Industrială</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Întoarcere Automată</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Cicluri Repetitive</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Conversie Direcție</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300">
              <li>+40 799 872 911</li>
              <li>contact@itotem.ro</li>
              <li>Strada Schitu Darvari 123</li>
              <li>București, România</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-slate-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-900">
            
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
              
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">

            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
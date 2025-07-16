
import { Users, Award, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "10+", label: "Clienți Mulțumiți" },
    { icon: Award, number: "5+", label: "Ani Experiență" },
    { icon: Clock, number: "24/7", label: "Suport Tehnic" },
    { icon: Shield, number: "100%", label: "Garanție Calitate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-500 bg-clip-text text-transparent">
              Ce este "Învarte Roata"?
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Este un serviciu creat special pentru branduri care vor să fidelizeze clienții într-un mod distractiv și memorabil. 
              Creează-ți propria roată digitală a norocului în doar câteva clickuri!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Stocuri programabile, actualizare automată</h3>
                  <p className="text-slate-600">
                    Fiecare premiu poate avea un stoc setat în platformă. Roata se actualizează automat pe măsură 
                    ce stocurile scad — fără bătăi de cap!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🖥️</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Integrare cu display-urile Itotem</h3>
                  <p className="text-slate-600">
                    Perfect pentru locații fizice! Funcționează impecabil pe display-urile touchscreen Itotem 
                    și poate fi controlat complet de la distanță.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">
                    <a 
                      href="https://www.itotem.ro/ro/case-studies/fidelizarea-clienilor-cu-roata-digital-itotem/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 transition-colors duration-200 underline"
                    >
                      Vezi studiul de caz real
                    </a>
                  </h3>
                  <p className="text-slate-600">
                    Descoperă cum alte branduri au folosit cu succes soluțiile noastre pentru a-și crească 
                    engagement-ul cu clienții.
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-orange-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

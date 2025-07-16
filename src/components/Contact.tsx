import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesaj trimis cu succes!",
      description: "Vă vom contacta în cel mai scurt timp posibil."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-500 bg-clip-text text-transparent">
            Contactează-ne
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Suntem aici să răspundem la toate întrebările tale și să oferim soluții personalizate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Telefon</h3>
                  <p className="text-slate-600">+40 799 872 911</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-600">contact@itotem.ro</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Adresa</h3>
                  <p className="text-slate-600">Strada Schitu Darvari 123, București</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nume complet
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" placeholder="Numele tău complet" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Adresa de email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" placeholder="exemplu@email.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mesaj
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Descrie proiectul tău sau întrebarea..." />
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-slate-700 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-slate-800 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Trimite Mesajul</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
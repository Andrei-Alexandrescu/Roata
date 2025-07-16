
import { useState, useEffect } from "react";
import { Menu, X, RotateCw } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <RotateCw className="w-8 h-8 text-orange-500 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-orange-500 bg-clip-text text-transparent">
              Invarte.ro
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {["Acasă", "Servicii", "Despre Noi", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["hero", "services", "about", "contact"][index])}
                className="text-slate-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 p-4">
              {["Acasă", "Servicii", "Despre Noi", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(["hero", "services", "about", "contact"][index])}
                  className="text-slate-700 hover:text-orange-500 transition-colors duration-200 font-medium text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

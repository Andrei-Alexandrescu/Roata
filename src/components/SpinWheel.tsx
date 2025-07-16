
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Prize {
  id: number;
  text: string;
  color: string;
  probability: number;
}

const prizes: Prize[] = [
  { id: 1, text: "Consultație GRATUITĂ", color: "#0f172a", probability: 20 },
  { id: 2, text: "Reducere 20%", color: "#ea580c", probability: 20 },
  { id: 3, text: "Serviciu Premium", color: "#0f172a", probability: 20 },
  { id: 4, text: "Reducere 10%", color: "#ea580c", probability: 20 },
  { id: 5, text: "Încercare din nou", color: "#0f172a", probability: 20 }
];

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winningPrize, setWinningPrize] = useState<Prize | null>(null);
  const { toast } = useToast();

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWinningPrize(null);
    
    // Calculează rotația finală (multiple complete + poziția finală)
    const randomRotation = Math.random() * 360;
    const spins = 5 + Math.random() * 5; // 5-10 rotații complete
    const finalRotation = rotation + (spins * 360) + randomRotation;
    
    setRotation(finalRotation);

    // Determină premiul câștigat
    const normalizedRotation = (360 - (finalRotation % 360)) % 360;
    const segmentSize = 360 / prizes.length;
    const winningIndex = Math.floor(normalizedRotation / segmentSize);
    const prize = prizes[winningIndex];

    // Oprește animația și afișează rezultatul
    setTimeout(() => {
      setIsSpinning(false);
      setWinningPrize(prize);
      toast({
        title: "🎉 Felicitări!",
        description: `Ai câștigat: ${prize.text}`,
        duration: 5000,
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="relative">
        {/* Roata */}
        <div 
          className="w-[32rem] h-[32rem] rounded-full relative overflow-hidden shadow-2xl border-8 border-white"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 3s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 200 200">
            {prizes.map((prize, index) => {
              const angle = (360 / prizes.length) * index;
              const nextAngle = (360 / prizes.length) * (index + 1);
              
              // Calculează coordonatele pentru segment
              const startAngleRad = (angle * Math.PI) / 180;
              const endAngleRad = (nextAngle * Math.PI) / 180;
              
              const x1 = 100 + 90 * Math.cos(startAngleRad);
              const y1 = 100 + 90 * Math.sin(startAngleRad);
              const x2 = 100 + 90 * Math.cos(endAngleRad);
              const y2 = 100 + 90 * Math.sin(endAngleRad);
              
              const largeArc = (nextAngle - angle) > 180 ? 1 : 0;
              
              const pathData = [
                `M 100 100`,
                `L ${x1} ${y1}`,
                `A 90 90 0 ${largeArc} 1 ${x2} ${y2}`,
                `Z`
              ].join(' ');
              
              // Calculează poziția textului
              const textAngle = (angle + nextAngle) / 2;
              const textAngleRad = (textAngle * Math.PI) / 180;
              const textX = 100 + 60 * Math.cos(textAngleRad);
              const textY = 100 + 60 * Math.sin(textAngleRad);
              
              // Alternează culorile
              const segmentColor = index % 2 === 0 ? "#0f172a" : "#ea580c";
              
              return (
                <g key={prize.id}>
                  <path
                    d={pathData}
                    fill={segmentColor}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={textX}
                    y={textY}
                    fill="white"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                  >
                    <tspan x={textX} dy="-5">{prize.text.split(' ')[0]}</tspan>
                    <tspan x={textX} dy="12">{prize.text.split(' ').slice(1).join(' ')}</tspan>
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Săgeata indicatoare principală */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
          <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-orange-500 shadow-lg"></div>
        </div>

        {/* Săgeata care arată câștigul */}
        {winningPrize && !isSpinning && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-white rounded-lg shadow-xl border-4 border-orange-500 p-4 text-center animate-scale-in">
              <div className="text-2xl font-bold text-slate-800 mb-2">🎉 Ai câștigat!</div>
              <div className="text-lg font-semibold text-orange-600">{winningPrize.text}</div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-orange-500"></div>
              </div>
            </div>
          </div>
        )}

        {/* Centrul roții */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-gray-200">
          <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
        </div>
      </div>

      {/* Butonul de învârtire */}
      <Button
        onClick={spinWheel}
        disabled={isSpinning}
        className="bg-gradient-to-r from-slate-700 to-orange-500 hover:from-slate-800 hover:to-orange-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        {isSpinning ? "Se învârte..." : "🎯 Învârte Roata!"}
      </Button>
    </div>
  );
};

export default SpinWheel;

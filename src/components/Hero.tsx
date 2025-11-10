import { Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560185008-b033106af5c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yfGVufDF8fHx8MTc2Mjc2ODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="mb-6">
          Bodentechnik Nord
          <br />
          Ihr Bodenexperte in Hamburg
        </h1>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Von edlem Parkett über warmen Kork, vielseitiges Vinyl, kuscheligen Teppich und langlebiges Linoleum bis hin zu modernem PVC, elegantem Laminat und widerstandsfähigem Kautschuk – ich verwandle Ihre Räumlichkeiten in eine Bühne für Ihren individuellen Geschmack.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white"
            onClick={() => window.location.href = 'tel:+4915901837464'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Jetzt anrufen
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Kontaktanfrage von ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\n\nNachricht:\n${formData.message}`
    );
    
    window.location.href = `mailto:Emil.Khamoo@bodentechnik-nord.de?subject=${subject}&body=${body}`;
    
    toast.success('E-Mail-Programm wird geöffnet...');
  };

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Kontaktieren Sie uns</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Sie haben Fragen oder möchten ein unverbindliches Angebot? Rufen Sie mich an oder 
            schreiben Sie mir eine Nachricht – ich berate Sie gerne!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 border-amber-100">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="mb-2">Telefon</h4>
              <a 
                href="tel:+4915901837464" 
                className="text-amber-600 hover:text-amber-700 transition-colors"
              >
                0159 01837464
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-100">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="mb-2">E-Mail</h4>
              <a 
                href="mailto:Emil.Khamoo@bodentechnik-nord.de" 
                className="text-amber-600 hover:text-amber-700 transition-colors break-all text-sm"
              >
                Emil.Khamoo@bodentechnik-nord.de
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-100">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="mb-2">Standort</h4>
              <p className="text-gray-600">
                Bürgerweide 78<br />
                20535 Hamburg
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-100">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="mb-2">Öffnungszeiten</h4>
              <p className="text-gray-600">
                Mo-Fr: 7:00 - 18:00<br />
                Sa: 9:00 - 14:00
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-amber-50 rounded-lg p-8">
            <h3 className="mb-4">Kostenlose Beratung vereinbaren</h3>
            <p className="mb-6 text-gray-600">
              Vereinbaren Sie jetzt einen Termin für ein kostenloses Beratungsgespräch und 
              unverbindliches Angebot. Ich freue mich auf Ihr Projekt!
            </p>
            <Button 
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white w-full"
              onClick={() => window.location.href = 'tel:+4915901837464'}
            >
              <Phone className="mr-2 h-5 w-5" />
              0159 01837464
            </Button>
            <div className="mt-6 pt-6 border-t border-amber-200">
              <p className="text-sm">
                <strong>Emil Khamoozadeh</strong><br />
                Inhaber Bodentechnik Nord
              </p>
            </div>
          </div>

          <Card className="border-2 border-gray-200">
            <CardContent className="pt-6">
              <h3 className="mb-6">Kontaktformular</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 123 456 789"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Beschreiben Sie Ihr Projekt..."
                    rows={5}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

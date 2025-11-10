import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white">BN</span>
              </div>
              <span className="text-white">Bodentechnik Nord</span>
            </div>
            <p className="text-sm mb-3">
              Ihr zuverlässiger Partner für professionelle Bodenverlegung in Hamburg. 
              Qualität und Kundenzufriedenheit sind meine Priorität.
            </p>
            <p className="text-sm">
              <strong>Inhaber:</strong> Emil Khamoozadeh
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a 
                href="tel:+4915901837464" 
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                0159 01837464
              </a>
              <a 
                href="mailto:Emil.Khamoo@bodentechnik-nord.de" 
                className="flex items-start gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Emil.Khamoo@bodentechnik-nord.de</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Bürgerweide 78<br />20535 Hamburg</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Öffnungszeiten</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Montag - Freitag:</span>
                <span>7:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Samstag:</span>
                <span>9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sonntag:</span>
                <span>Geschlossen</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Bodentechnik Nord - Emil Khamoozadeh. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

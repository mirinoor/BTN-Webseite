import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Ausgebildeter Experte',
    description: 'Parkett- und Bodenleger seit 2004'
  },
  {
    icon: Clock,
    title: '20+ Jahre Erfahrung',
    description: 'Über zwei Jahrzehnte Hingabe für mein Handwerk'
  },
  {
    icon: Users,
    title: 'Kundenzufriedenheit',
    description: 'Persönlicher Service und individuelle Beratung'
  },
  {
    icon: CheckCircle,
    title: 'Faire Preise',
    description: 'Transparente Kalkulation ohne versteckte Kosten'
  }
];

export function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Über mich – Emil Khamoozadeh</h2>
            <p className="mb-6 text-gray-600">
              Ich bin Emil – ein erfahrener Bodenleger mit über zwei Jahrzehnten Hingabe für mein Handwerk. 
              Seit mehr als 20 Jahren übe ich meine Leidenschaft als ausgebildeter Experte in diesem 
              Fachbereich aus.
            </p>
            <p className="mb-6 text-gray-600">
              Im Jahr 2004 habe ich meine Lehre als Parkett- und Bodenleger erfolgreich in Wiesbaden 
              abgeschlossen und seitdem habe ich kontinuierlich meine Fähigkeiten und Kenntnisse erweitert. 
              Mit jedem Projekt, das ich in Angriff nehme, spiegelt sich meine tiefe Verbundenheit zu 
              hochwertigen Böden wider.
            </p>
            <p className="mb-8 text-gray-600">
              Mein Service umfasst persönliche Vor-Ort-Beratungen, bei denen ich gemeinsam mit meinen 
              Kunden ihre Vorstellungen einfühlsam erkunde. Gemeinsam erarbeiten wir eine maßgeschneiderte 
              Lösung für die Ausrichtung der Verlegung, die Art der Verlegung sowie die Wahl des gewünschten Materials.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1760976354141-1b4428e1ac18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmbG9vciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjI2OTQ4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bodenverlegung in Aktion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

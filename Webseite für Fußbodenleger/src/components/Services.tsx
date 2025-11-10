import { Hammer, Square, Layers, Sparkles, Trees, Package } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const services = [
  {
    icon: Hammer,
    title: 'Parkett',
    description: 'Edle Parkettböden für zeitlose Eleganz und natürliche Wärme in Ihren Räumen'
  },
  {
    icon: Trees,
    title: 'Kork & Linoleum',
    description: 'Warme Korkböden und langlebiges Linoleum für nachhaltiges Wohnen'
  },
  {
    icon: Layers,
    title: 'Vinyl & PVC',
    description: 'Vielseitige Vinyl- und moderne PVC-Böden für pflegeleichte Lösungen'
  },
  {
    icon: Square,
    title: 'Laminat',
    description: 'Elegante Laminatböden in vielen Designs für stilvolle Wohnräume'
  },
  {
    icon: Package,
    title: 'Teppich',
    description: 'Kuschelige Teppichböden für behagliche und wohnliche Atmosphäre'
  },
  {
    icon: Sparkles,
    title: 'Kautschuk',
    description: 'Widerstandsfähige Kautschukböden für höchste Beanspruchung'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Unsere Bodenbeläge</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ein umfassendes Spektrum an hochwertigen Bodenbelägen für jeden Geschmack und Anspruch. 
            Jedes Material wird fachgerecht und mit höchster Präzision verlegt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

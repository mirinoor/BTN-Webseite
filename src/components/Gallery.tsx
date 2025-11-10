import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1760976354141-1b4428e1ac18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmbG9vciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjI2OTQ4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Parkettverlegung'
  },
  {
    url: 'https://images.unsplash.com/photo-1626551039948-ddd7e595fe06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1pbmF0ZSUyMGZsb29yaW5nfGVufDF8fHx8MTc2Mjc2ODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Laminatboden'
  },
  {
    url: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yfGVufDF8fHx8MTc2Mjc2ODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Holzboden im Wohnzimmer'
  },
  {
    url: 'https://images.unsplash.com/photo-1675475280175-8a3e756d3186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwZmxvb3IlMjBwYXR0ZXJufGVufDF8fHx8MTc2MjczOTk5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Fliesenmuster'
  },
  {
    url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMGZsb29yaW5nfGVufDF8fHx8MTc2Mjc2ODUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Vinylboden'
  },
  {
    url: 'https://images.unsplash.com/photo-1759299983467-5276cb6ac2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGZsb29yfGVufDF8fHx8MTc2Mjc2ODUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Moderner Innenraum'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Unsere Arbeiten</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Überzeugen Sie sich von der Qualität unserer Arbeit. Jedes Projekt wird mit Leidenschaft und Präzision umgesetzt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <ImageWithFallback
            src={galleryImages[selectedImage].url}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}

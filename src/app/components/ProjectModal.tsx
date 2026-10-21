import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    location: string;
    images: string[];
    description?: string;
    fullDescription?: string;
    client?: string;
    year?: string;
    usage?: string;
    services?: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto" onClick={onClose}>
      <button
        onClick={onClose}
        className="fixed top-8 right-8 text-white hover:text-[#c4b5a3] transition-colors z-[101]"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-7xl mx-auto px-8 py-16" onClick={(e) => e.stopPropagation()}>
        {/* Image Gallery */}
        <div className="relative mb-12">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - ${currentImageIndex + 1}`}
            className="w-full h-[70vh] object-contain"
          />

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <p className="text-white/50 text-xs text-center mt-4">
            {currentImageIndex + 1} / {project.images.length}
          </p>
        </div>

        {/* Thumbnail Navigation */}
        {project.images.length > 1 && (
          <div className="flex gap-2 justify-center mb-12 overflow-x-auto pb-4">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 overflow-hidden transition-all ${
                  index === currentImageIndex ? 'ring-2 ring-[#c4b5a3] opacity-100' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Project Info */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-normal text-white mb-3">{project.title}</h2>
          <p className="text-[#c4b5a3] text-sm tracking-[0.05em] mb-8">{project.location}</p>

          {project.fullDescription && (
            <div className="mb-12">
              <p className="text-white/80 text-base leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>
          )}

          {/* ECKDATEN Section */}
          {(project.client || project.year || project.usage || project.services) && (
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-[11px] tracking-[0.15em] text-white/60 uppercase mb-6">Eckdaten</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {project.client && (
                  <div>
                    <p className="text-[10px] tracking-[0.15em] text-white/60 uppercase mb-2">Bauherrschaft</p>
                    <p className="text-white/90 text-sm">{project.client}</p>
                  </div>
                )}
                {project.year && (
                  <div>
                    <p className="text-[10px] tracking-[0.15em] text-white/60 uppercase mb-2">Realisiert</p>
                    <p className="text-white/90 text-sm">{project.year}</p>
                  </div>
                )}
                {project.usage && (
                  <div>
                    <p className="text-[10px] tracking-[0.15em] text-white/60 uppercase mb-2">Nutzung</p>
                    <p className="text-white/90 text-sm">{project.usage}</p>
                  </div>
                )}
                {project.services && project.services.length > 0 && (
                  <div>
                    <p className="text-[10px] tracking-[0.15em] text-white/60 uppercase mb-2">Leistung</p>
                    <div className="text-white/90 text-sm">
                      {project.services.map((service, index) => (
                        <p key={index}>{service}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

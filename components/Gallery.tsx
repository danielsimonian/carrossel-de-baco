'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { FiImage, FiX } from 'react-icons/fi';

const galleryImages = [
  { src: '/images/IMG_1465.JPG', alt: 'Carrossel de Baco - Show 1' },
  { src: '/images/IMG_1457.JPG', alt: 'Carrossel de Baco - Show 2' },
  { src: '/images/IMG_1448.JPG', alt: 'Carrossel de Baco - Show 3' },
  { src: '/images/IMG_1443.JPG', alt: 'Carrossel de Baco - Show 4' },
  { src: '/images/IMG_1433.JPG', alt: 'Carrossel de Baco - Show 5' },
  { src: '/images/IMG_1425.JPG', alt: 'Carrossel de Baco - Show 6' },
  { src: '/images/_MLF0003_2.jpg', alt: 'Carrossel de Baco - Apresentação 1' },
  { src: '/images/_MLF0389.jpg', alt: 'Carrossel de Baco - Apresentação 2' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section id="galeria" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-black via-primary-950/10 to-black">
        {/* Background */}
        <div className="absolute inset-0 noise-texture opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <FiImage className="text-primary-500 text-5xl" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white">
              GALERIA
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-red rounded-full mx-auto mt-6" />
            <p className="text-gray-400 mt-4 text-lg">
              Momentos inesquecíveis dos nossos shows
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-xl group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary-500 transition-colors z-50"
          >
            <FiX />
          </button>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-6xl max-h-[90vh] w-full h-full"
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
            />
          </motion.div>

          {/* Navigation */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-primary-500 transition-colors"
            >
              ‹
            </button>
          )}
          {selectedImage < galleryImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage + 1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-primary-500 transition-colors"
            >
              ›
            </button>
          )}
        </motion.div>
      )}
    </>
  );
}

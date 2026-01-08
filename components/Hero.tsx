'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  const scrollToShows = () => {
    const element = document.querySelector('#shows');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_1443.JPG"
          alt="Carrossel de Baco"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 via-transparent to-accent-red/40" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-texture z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <Image
                src="/images/Logo.png"
                alt="Carrossel de Baco Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display text-white leading-none"
          >
            CARROSSEL DE BACO
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-3xl mx-auto"
          >
            Santos - SP | Rock • MPB • Fandango
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-primary-300 max-w-2xl mx-auto font-medium"
          >
            Teatro, Dança, Poesia e Cultura Caiçara
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToShows}
            className="mt-8 px-8 py-4 bg-primary-500 text-white text-lg md:text-xl font-display rounded-full hover:bg-primary-600 transition-all shadow-lg"
          >
            VER PRÓXIMOS SHOWS
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToShows}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiChevronDown size={40} />
        </motion.div>
      </motion.button>
    </section>
  );
}

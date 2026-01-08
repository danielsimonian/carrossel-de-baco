'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-black via-primary-950/20 to-black">
      {/* Noise Texture */}
      <div className="absolute inset-0 noise-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/_MLF0389.jpg"
                alt="Carrossel de Baco - Banda"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Decorative Element */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-tight"
            >
              SOBRE A BANDA
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-red rounded-full"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 text-gray-300 text-lg leading-relaxed"
            >
              <p>
                O <span className="text-primary-400 font-semibold">Carrossel de Baco</span>, liderado pelo santista Danilo Nunes, 
                traz uma fusão explosiva de teatro, dança, poesia e cultura caiçara.
              </p>
              
              <p>
                Com sonoridade que mistura batuques e eletricidade, o projeto conecta o tradicional ao contemporâneo, 
                reverenciando as festas populares e o manifesto antropofágico.
              </p>
              
              <p>
                A Carrossel gira em torno da <span className="text-accent-yellow font-semibold">festa e da coletividade</span>, 
                com influências da Tropicália e do Manguebeat, criando uma experiência única que celebra a brasilidade 
                em sua forma mais viva e autêntica.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-4xl font-display text-primary-500">20+</div>
                <div className="text-sm text-gray-400 mt-1">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-accent-yellow">100+</div>
                <div className="text-sm text-gray-400 mt-1">Shows</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display text-accent-green">SP</div>
                <div className="text-sm text-gray-400 mt-1">Santos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

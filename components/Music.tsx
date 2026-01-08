'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMusic } from 'react-icons/fi';
import { SiSpotify, SiYoutube, SiInstagram } from 'react-icons/si';

export default function Music() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="musica" ref={ref} className="relative py-20 md:py-32 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FiMusic className="text-primary-500 text-5xl" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white">
            NOSSA MÚSICA
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-red rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Spotify Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-primary-950/40 to-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-primary-900/20"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-display text-white">
                Ouça no Spotify
              </h3>
              <SiSpotify className="text-4xl text-green-500" />
            </div>
            
            <div className="aspect-[16/9] md:aspect-[16/6] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://open.spotify.com/embed/artist/3R3MheQLEZxV6Pv7SRDMxP?utm_source=generator&theme=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Spotify */}
            <a
              href="https://open.spotify.com/intl-pt/artist/3R3MheQLEZxV6Pv7SRDMxP"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              <SiSpotify className="text-5xl text-white mb-4" />
              <h4 className="text-xl font-display text-white mb-2">Spotify</h4>
              <p className="text-white/80">Ouça todas as músicas</p>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/channel/UC32Ka46fW1lTIKzsEXKRNfw"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              <SiYoutube className="text-5xl text-white mb-4" />
              <h4 className="text-xl font-display text-white mb-2">YouTube</h4>
              <p className="text-white/80">Veja nossos vídeos</p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/carrosseldebaco"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-pink-600 to-purple-800 p-6 rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              <SiInstagram className="text-5xl text-white mb-4" />
              <h4 className="text-xl font-display text-white mb-2">Instagram</h4>
              <p className="text-white/80">Acompanhe a gente</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

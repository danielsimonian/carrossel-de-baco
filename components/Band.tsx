'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUsers } from 'react-icons/fi';

interface BandMember {
  name: string;
  role: string;
  placeholder: string;
}

const members: BandMember[] = [
  { name: 'Danilo Nunes', role: 'Vocal e Liderança', placeholder: '1' },
  { name: 'Integrante 2', role: 'Instrumento', placeholder: '2' },
  { name: 'Integrante 3', role: 'Instrumento', placeholder: '3' },
  { name: 'Integrante 4', role: 'Instrumento', placeholder: '4' },
  { name: 'Integrante 5', role: 'Instrumento', placeholder: '5' },
  { name: 'Integrante 6', role: 'Instrumento', placeholder: '6' },
];

function MemberCard({ member, index }: { member: BandMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative"
    >
      {/* Placeholder Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-900/40 to-primary-950/40 border border-primary-800/30 shadow-xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl font-display text-primary-500/30 mb-4">
              {member.placeholder}
            </div>
            <div className="text-gray-400 text-sm">Foto em breve</div>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Member Info */}
      <div className="mt-4 text-center">
        <h3 className="text-xl md:text-2xl font-display text-white">
          {member.name}
        </h3>
        <p className="text-primary-400 mt-1">{member.role}</p>
      </div>
    </motion.div>
  );
}

export default function Band() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="banda" ref={ref} className="relative py-20 md:py-32 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #f97316 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
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
            <FiUsers className="text-primary-500 text-5xl" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white">
            A BANDA
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-red rounded-full mx-auto mt-6" />
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Conheça os músicos que fazem o Carrossel girar
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 italic">
            * Fotos e informações dos integrantes serão atualizadas em breve
          </p>
        </motion.div>
      </div>
    </section>
  );
}

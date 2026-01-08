'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';
import { getUpcomingShows, type Show } from '@/data/shows';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function ShowCard({ show, index }: { show: Show; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-primary-950/40 to-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-primary-900/20 hover:border-primary-700/40 transition-all"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Date Badge */}
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-primary-500 to-accent-red text-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-4xl font-display leading-none">
              {new Date(show.date).getDate()}
            </div>
            <div className="text-sm uppercase mt-1">
              {new Date(show.date).toLocaleDateString('pt-BR', { month: 'short' })}
            </div>
          </div>
        </div>

        {/* Show Info */}
        <div className="flex-grow space-y-3">
          <h3 className="text-2xl md:text-3xl font-display text-white leading-tight">
            {show.venue}
          </h3>

          <div className="space-y-2 text-gray-300">
            <div className="flex items-start gap-3">
              <FiMapPin className="text-primary-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <div className="font-semibold text-white">{show.city}</div>
                <div className="text-sm text-gray-400">{show.address}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiClock className="text-primary-400 flex-shrink-0" size={20} />
              <span>{show.time}</span>
            </div>

            <div className="flex items-center gap-3">
              <FiCalendar className="text-primary-400 flex-shrink-0" size={20} />
              <span>{formatDate(show.date)}</span>
            </div>
          </div>

          {show.ticketLink && (
            <a
              href={show.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-primary-500 text-white font-display rounded-full hover:bg-primary-600 transition-colors shadow-lg hover:shadow-primary-500/50"
            >
              INFORMAÇÕES
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Shows() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const upcomingShows = getUpcomingShows();

  return (
    <section id="shows" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-black via-primary-950/10 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 noise-texture opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FiCalendar className="text-primary-500 text-5xl" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white">
            PRÓXIMOS SHOWS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-red rounded-full mx-auto mt-6" />
          <p className="text-gray-400 mt-4 text-lg">
            Confira nossa agenda e venha girar com a gente!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingShows.length > 0 ? (
            upcomingShows.map((show, index) => (
              <ShowCard key={show.id} show={show} index={index} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400 font-display">
                Em breve novos shows! Fique ligado nas redes sociais.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiInstagram, SiYoutube, SiSpotify, SiFacebook } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: SiInstagram,
      href: 'https://instagram.com/carrosseldebaco',
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
    {
      icon: SiYoutube,
      href: 'https://youtube.com/channel/UC32Ka46fW1lTIKzsEXKRNfw',
      label: 'YouTube',
      color: 'hover:text-red-500',
    },
    {
      icon: SiSpotify,
      href: 'https://open.spotify.com/intl-pt/artist/3R3MheQLEZxV6Pv7SRDMxP',
      label: 'Spotify',
      color: 'hover:text-green-500',
    },
    {
      icon: SiFacebook,
      href: 'https://www.facebook.com/carrosseldebacooficial',
      label: 'Facebook',
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-primary-950 pt-20 pb-8">
      <div className="absolute inset-0 noise-texture opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative w-32 h-32">
              <Image
                src="/images/Logo.png"
                alt="Carrossel de Baco"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Fusão explosiva de teatro, dança, poesia e cultura caiçara. Santos - SP
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Sobre', 'Música', 'Shows', 'Banda', 'Galeria', 'Contato'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display text-white">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p>Produtora Vilarejo</p>
              <p>(12) 99730-1445</p>
              <a
                href="mailto:producaocarrosseldebaco@gmail.com"
                className="hover:text-primary-400 transition-colors block break-all"
              >
                producaocarrosseldebaco@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6 py-8 border-t border-primary-900/30"
        >
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-3xl text-gray-400 transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <IconComponent />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm pt-8 border-t border-primary-900/30"
        >
          <p>© {currentYear} Carrossel de Baco. Todos os direitos reservados.</p>
          <p className="mt-2">Santos, São Paulo - Brasil</p>
        </motion.div>
      </div>
    </footer>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simular envio (você pode integrar com um serviço de email aqui)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" ref={ref} className="relative py-20 md:py-32 bg-black">
      {/* Background */}
      <div className="absolute inset-0 noise-texture opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FiMail className="text-primary-500 text-5xl" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white">
            CONTATO
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-red rounded-full mx-auto mt-6" />
          <p className="text-gray-400 mt-4 text-lg">
            Entre em contato para shows e parcerias
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display text-white mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Estamos prontos para fazer parte do seu evento! Entre em contato para shows, 
                parcerias e oportunidades.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-primary-950/30 p-4 rounded-lg">
                <FiMail className="text-primary-400 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <a
                    href="mailto:producaocarrosseldebaco@gmail.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors break-all"
                  >
                    producaocarrosseldebaco@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-primary-950/30 p-4 rounded-lg">
                <FiUser className="text-primary-400 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">Produção</div>
                  <div className="text-gray-300">Produtora Vilarejo</div>
                  <a
                    href="tel:+5512997301445"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    (12) 99730-1445
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2 font-medium">
                Nome
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-primary-950/30 border border-primary-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2 font-medium">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-primary-950/30 border border-primary-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2 font-medium">
                Mensagem
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-3 bg-primary-950/30 border border-primary-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-red text-white font-display text-lg rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>Enviando...</>
              ) : status === 'success' ? (
                <>✓ Enviado com sucesso!</>
              ) : (
                <>
                  <FiSend />
                  Enviar Mensagem
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center"
              >
                Mensagem enviada! Responderemos em breve.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

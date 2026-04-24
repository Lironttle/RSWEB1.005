import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Check, ArrowRight, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  subServices: string[];
  image: string;
};

type ServiceModalProps = {
  service: Service | null;
  onClose: () => void;
};

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (!service) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [service, onClose]);

  return createPortal(
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="absolute inset-0 bg-dark/70 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-white dark:bg-surface shadow-2xl grid md:grid-cols-[1.1fr_1fr]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-surface-dark/90 text-dark dark:text-white hover:bg-primary hover:text-white transition-colors shadow-md"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="relative h-56 md:h-auto md:min-h-[500px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark/80 via-dark/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2
                  id="service-modal-title"
                  className="text-3xl md:text-4xl font-serif text-white leading-tight"
                >
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="p-8 md:p-10 overflow-y-auto max-h-[90vh] md:max-h-none">
              <p className="text-muted dark:text-gray-400 text-base leading-relaxed mb-8">
                {service.longDescription}
              </p>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                What We Offer
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.subServices.map((sub) => (
                  <li key={sub} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-dark dark:text-gray-200 text-sm">{sub}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/estimates"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 group"
                >
                  Get Free Estimate
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:02074732842"
                  className="inline-flex items-center justify-center gap-2 border-2 border-dark dark:border-white text-dark dark:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-dark dark:hover:bg-white hover:text-white dark:hover:text-dark"
                >
                  <Phone size={16} />
                  020 7473 2842
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

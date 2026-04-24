import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import ClientLogos from '../components/ui/ClientLogos';
import CertificateLogos from '../components/ui/CertificateLogos';
import ServiceModal, { type Service } from '../components/ui/ServiceModal';
import {
  Building2,
  Droplets,
  Flame,
  Shovel,
  Zap,
  ShieldCheck,
  Award,
  Users,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
  Plus,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const trustIndicators = [
  {
    icon: Clock,
    value: '16+',
    label: 'Years',
    description: 'Of trusted construction excellence',
  },
  {
    icon: Star,
    value: '90%',
    label: 'Referrals',
    description: 'Client referral rate',
  },
  {
    icon: Users,
    value: '70+',
    label: 'Years',
    description: 'Combined team experience',
  },
];

const services: Service[] = [
  {
    id: 'new-build',
    icon: Building2,
    title: 'New Build',
    description: 'Commercial and residential development with innovative design solutions.',
    longDescription:
      'From concept to completion, our new build specialists deliver commercial and residential projects with an uncompromising focus on quality, programme and budget. We partner with clients and consultants to turn plans into standout finished buildings.',
    subServices: ['Project Management', 'Design & Build', 'Extensions', 'Loft Conversions'],
    image: '/images/SERVICES%20PHOTOS/newbuild.jpg',
  },
  {
    id: 'plumbing',
    icon: Droplets,
    title: 'Plumbing & Drainage',
    description: 'Complete plumbing services from repairs to full installations.',
    longDescription:
      'From leak detection and drain surveys to full bathroom installations and emergency call-outs, our qualified plumbers deliver reliable, code-compliant workmanship for domestic and commercial properties.',
    subServices: ['Drain Unblocking', 'CCTV Surveys', 'Bathroom Fitting', 'Leak Repairs'],
    image: '/images/SERVICES%20PHOTOS/plumbinganddraineage.jpg',
  },
  {
    id: 'gas',
    icon: Flame,
    title: 'Gas Services',
    description: 'Gas Safe registered for all domestic and commercial needs.',
    longDescription:
      'Our Gas Safe registered engineers deliver boiler installations, central heating upgrades, safety certifications and repairs — keeping your property warm, efficient and fully compliant.',
    subServices: ['Boiler Installation', 'Gas Safety Certificates', 'Central Heating', 'Repairs'],
    image: '/images/SERVICES%20PHOTOS/gasservices.png',
  },
  {
    id: 'groundworks',
    icon: Shovel,
    title: 'Groundworks',
    description: 'Foundation work, drainage, and landscaping services.',
    longDescription:
      'Solid foundations make great builds. Our groundworks teams handle everything from excavation and foundations to drainage, driveways and landscaping for projects of any scale.',
    subServices: ['Foundations', 'Drainage', 'Driveways', 'Landscaping'],
    image: '/images/SERVICES%20PHOTOS/groundworks.jpg',
  },
  {
    id: 'electrical',
    icon: Zap,
    title: 'Electrical Works',
    description: 'NICEIC registered electricians for safe installations.',
    longDescription:
      'Our NICEIC registered electricians deliver safe, compliant electrical installations, rewiring, testing and inspection — supported by certified documentation for every job.',
    subServices: ['Rewiring', 'Consumer Units', 'Lighting', 'Testing & Inspection'],
    image: '/images/SERVICES%20PHOTOS/electricalworks.jpg',
  },
  {
    id: 'fire-stopping',
    icon: ShieldCheck,
    title: 'Fire Stopping',
    description: 'Certified fire protection and compliance solutions.',
    longDescription:
      'Certified passive fire protection installers delivering fire doors, intumescent sealing, compartmentation and surveys — protecting buildings and occupants while meeting the latest regulatory standards.',
    subServices: ['Fire Doors', 'Intumescent Seals', 'Compartmentation', 'Surveys'],
    image: '/images/SERVICES%20PHOTOS/firestopping.jpg',
  },
];

const testimonials = [
  {
    quote: 'RS Construction have consistently provided excellent workmanship with a proven track record of completing projects to high standards, on time and within budget.',
    client: 'London Borough of Newham',
    role: 'Local Authority Partner',
  },
  {
    quote: 'Outstanding quality of workmanship throughout their projects. Their attention to detail and health & safety standards are exceptional.',
    client: 'Wates',
    role: 'Construction Partner',
  },
];

const reasons = [
  'Over 16 years of industry experience',
  'Fully accredited and certified',
  'Dedicated project management',
  'Competitive pricing without compromise',
  'On-time, on-budget delivery',
  'Health & Safety excellence',
];

export default function Home() {
  usePageTitle();
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(/images/photos/rs%20team.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
        </div>

        <div className="relative container-custom text-center pt-24 pb-20 sm:pt-32 sm:pb-48">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-5 py-2.5 bg-primary text-white font-medium text-sm tracking-wider uppercase rounded-full shadow-lg">
                Trusted Since 2010
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 sm:mb-8"
            >
              Building Excellence,
              <br />
              <span className="text-white/90">Delivering Results</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              RS Construction and Property Services Ltd provides innovative
              construction solutions with 16 years of industry excellence and 70+
              years of combined expertise.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/estimates"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
              >
                Get Free Estimate
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-dark"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </section>

      <div className="relative z-10 mt-8 md:-mt-24 lg:-mt-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white/90 dark:bg-surface/90 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-surface-border">
              {trustIndicators.map((item) => (
                <div
                  key={item.description}
                  className="p-8 lg:p-10 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl lg:text-5xl font-serif text-dark dark:text-white">
                      {item.value}
                    </span>
                    <span className="text-lg text-muted dark:text-gray-400 font-medium">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-muted dark:text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-white dark:bg-dark pt-16 sm:pt-20 md:pt-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4 flex items-center justify-center gap-3">
              <span className="inline-block w-10 h-0.5 bg-primary rounded-full" />
              <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                What We Do
              </span>
              <span className="inline-block w-10 h-0.5 bg-primary rounded-full" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-dark dark:text-white leading-tight mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted dark:text-gray-400 text-lg leading-relaxed">
              Comprehensive construction solutions for every project — tap any tile to explore the detail.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {services.map((service) => {
              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveService(service)}
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl text-left h-[280px] sm:h-[320px] shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/10 transition-opacity duration-500 group-hover:from-dark group-hover:via-dark/80" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:to-transparent transition-colors duration-500" />

                  <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:rotate-90">
                    <Plus className="w-4 h-4 text-white transition-colors duration-500 group-hover:text-dark" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <h3 className="text-2xl sm:text-[26px] font-serif text-white leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white text-sm font-medium border-t border-white/20 pt-4 transition-colors duration-300 group-hover:text-primary-300">
                      View Details
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />

      <ClientLogos />

      <section className="section-padding bg-gray-50 dark:bg-surface-dark">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-block w-12 h-1 bg-primary rounded-full" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif text-dark dark:text-white mb-6"
            >
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.client}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-surface rounded-2xl p-8 lg:p-10 shadow-lg"
              >
                <Quote className="w-10 h-10 text-primary mb-6" />
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-dark dark:text-white text-lg">
                    {testimonial.client}
                  </p>
                  <p className="text-muted dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CertificateLogos />

      <section className="section-padding bg-light dark:bg-surface-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-dark dark:text-white mb-6">
                Why Choose RS Construction?
              </h2>
              <p className="text-muted dark:text-gray-400 text-lg mb-8 leading-relaxed">
                With over 16 years of experience in the construction industry, RS
                Construction and Property Services Ltd has established itself as a
                trusted partner for residential and commercial projects across the UK.
              </p>

              <ul className="space-y-4 mb-8">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-dark dark:text-gray-200">{reason}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Learn More About Us
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Construction site"
                  className="w-full h-auto shadow-2xl rounded-lg"
                />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-primary text-white p-4 sm:p-8 shadow-xl">
                  <div className="text-3xl sm:text-5xl font-serif mb-1 sm:mb-2">16+</div>
                  <div className="text-sm uppercase tracking-wider">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center p-8">
              <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Fully Accredited</h3>
              <p className="text-gray-400">
                CHAS, Constructionline, SafeContractor, and SSIP certified for your
                peace of mind.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center p-8">
              <Award className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Quality Guaranteed</h3>
              <p className="text-gray-400">
                We deliver exceptional craftsmanship on every project, backed by
                comprehensive warranties.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Expert Team</h3>
              <p className="text-gray-400">
                Our skilled professionals bring decades of combined experience to
                every project.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        className="relative py-20 sm:py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Get in touch with our team today for a free, no-obligation estimate
              on your construction project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/estimates"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl group"
              >
                Request Free Estimate
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:02074732842"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-dark"
              >
                Call 020 7473 2842
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

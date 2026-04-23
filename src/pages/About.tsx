import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { cn } from '../lib/utils';
import {
  Shield,
  Settings,
  ClipboardCheck,
  PoundSterling,
  Users,
  Layers,
  ChevronRight,
  ArrowRight,
  MapPin,
  UserRound,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const values = [
  {
    icon: Shield,
    title: 'Certified',
    description: 'Fully insured, Federation of Master Builders and TrustMark members',
  },
  {
    icon: Settings,
    title: 'Flexible',
    description: 'Adaptable solutions for every unique project requirement',
  },
  {
    icon: ClipboardCheck,
    title: 'Thorough',
    description: 'Detailed estimates, documentation, and aftercare service',
  },
  {
    icon: PoundSterling,
    title: 'Value',
    description: 'Transparent pricing with no hidden costs',
  },
  {
    icon: Users,
    title: 'Professional',
    description: 'Experienced, reliable team dedicated to excellence',
  },
  {
    icon: Layers,
    title: 'Comprehensive',
    description: 'Full range of building services under one roof',
  },
];

const timelineEvents = [
  {
    year: '2010',
    title: 'RS Construction Founded',
    description: 'Family-owned business established in East London with a commitment to quality craftsmanship.',
  },
  {
    year: '2015',
    title: 'Will fill in later',
    description: 'Will fill in later.',
  },
  {
    year: '2020',
    title: 'Will fill in later',
    description: 'Will fill in later.',
  },
  {
    year: '2026',
    title: 'Working with L&Q Housing',
    description: 'Proudly partnering with L&Q Housing, delivering trusted construction and property services across London.',
  },
];

const teamMembers = [
  { name: 'Raimundas Zibuda', role: 'Director' },
  { name: 'Povilas Zibuda', role: 'Manager' },
  { name: 'Jethro van Biljon', role: 'Contracts Manager' },
  { name: 'Pawel Golebiowski', role: 'Electrical Quantity Surveyor' },
  { name: 'Ausra Budenaite', role: 'Accounts Clerk' },
  { name: 'Kasparas Zibuda', role: 'Assistant Manager' },
  { name: 'Armantas Padriezas', role: 'Assistant Manager' },
  { name: 'Aironas Mazutis', role: 'Assistant Manager' },
];

const coverageAreas = [
  { name: 'East London', primary: true },
  { name: 'North London', primary: false },
  { name: 'Central London', primary: false },
  { name: 'South London', primary: false },
  { name: 'West London', primary: false },
];

export default function About() {
  usePageTitle('About Us');

  return (
    <main>
      <section
        className="relative min-h-[50vh] flex items-center"
        style={{
          backgroundImage: 'url(/images/photos/rs%20team.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark via-white/95 dark:via-dark/95 to-white/70 dark:to-dark/70" />

        <div className="relative container-custom py-20 sm:py-32">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted dark:text-gray-400 mb-4 sm:mb-6"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={16} />
            <span className="text-dark dark:text-white font-medium">About Us</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-dark dark:text-white mb-6"
          >
            About RS Construction
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            Established 2010
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="/images/photos/director.png"
                  alt="RS Construction Director"
                  className="rounded-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-white p-4 sm:p-6 rounded-xl">
                  <div className="text-4xl font-bold">16+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif text-dark dark:text-white mt-3 mb-6">
                Building Trust Since 2010
              </h2>
              <p className="text-muted dark:text-gray-400 text-lg leading-relaxed mb-6">
                RS Construction and Property Services Ltd is a family-owned business established in 2010.
                We've grown into a specialist contracting group with an ever-expanding client base built
                on trust and quality.
              </p>
              <p className="text-muted dark:text-gray-400 text-lg leading-relaxed mb-6">
                Our journey began with a simple commitment: deliver exceptional craftsmanship and genuine
                care for every project. Today, we're proud to be one of London's most trusted construction
                and property services providers.
              </p>
              <p className="text-muted dark:text-gray-400 text-lg leading-relaxed">
                From residential renovations to commercial developments, our experienced team brings
                dedication, expertise, and attention to detail to every job we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-dark">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif text-dark dark:text-white mt-3">
              Milestones Through the Years
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto py-4 px-4">
            <div className="absolute left-[18px] top-0 h-full w-[2px] bg-gradient-to-b from-primary/60 to-primary-900/60 dark:from-primary/50 dark:to-primary-800/50" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {timelineEvents.map((event) => (
                <motion.div
                  key={event.year}
                  variants={fadeInUp}
                  className="relative flex gap-6 items-start"
                >
                  <div className="relative z-10">
                    <div
                      className={cn(
                        'h-4 w-4 rounded-full border-2 border-white dark:border-dark',
                        'bg-gradient-to-r from-primary-400 to-primary-700',
                        'shadow-[0_0_12px_rgba(220,38,38,0.6)]',
                        'transition-transform duration-200 hover:scale-110'
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      'flex-1 rounded-lg p-4 backdrop-blur-xl',
                      'bg-white/70 dark:bg-surface/70',
                      'border border-gray-200/60 dark:border-white/10',
                      'shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
                      'hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] transition-all duration-300'
                    )}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary dark:text-primary-400">
                      {event.year}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light dark:bg-surface-dark">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif text-dark dark:text-white mt-3">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-white dark:bg-surface p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-3 uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="text-muted dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-dark">
        <svg
          className="absolute right-0 bottom-0 text-primary/10 dark:text-primary/15 pointer-events-none"
          fill="none"
          height="154"
          viewBox="0 0 460 154"
          width="460"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
          />
        </svg>

        <div className="relative z-10 container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Meet the Team</span>
            <h2 className="text-3xl md:text-4xl font-serif text-dark dark:text-white mt-3">
              The People Behind RS Construction
            </h2>
          </motion.div>

          <div className="marquee-pause relative w-full overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-white to-transparent dark:from-dark" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-white to-transparent dark:from-dark" />

            <div className="flex w-max gap-6 animate-marquee">
              {[...teamMembers, ...teamMembers].map((member, idx) => (
                <div
                  key={`${member.name}-${idx}`}
                  className="group flex w-56 sm:w-64 shrink-0 flex-col"
                >
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-light dark:from-surface dark:to-surface-dark border border-gray-200/70 dark:border-surface-border">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <UserRound
                        className="w-24 h-24 text-primary/30 dark:text-primary/40 transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.25}
                      />
                    </div>
                    <div className="absolute bottom-0 w-full bg-white/85 dark:bg-surface/85 backdrop-blur-sm p-3">
                      <h3 className="font-semibold text-dark dark:text-white text-sm sm:text-base truncate">
                        {member.name}
                      </h3>
                      <p className="text-muted dark:text-gray-400 text-xs sm:text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Service Area</span>
              <h2 className="text-3xl md:text-4xl font-serif text-dark dark:text-white mt-3 mb-6">
                Serving London & Beyond
              </h2>
              <p className="text-muted dark:text-gray-400 text-lg leading-relaxed mb-8">
                Based in East London, our services cover East, North, and Central London.
                We've successfully completed projects across the greater London area and
                continue to expand our reach to serve more communities.
              </p>

              <div className="space-y-4">
                {coverageAreas.map((area) => (
                  <div key={area.name} className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${area.primary ? 'text-primary' : 'text-muted dark:text-gray-400'}`} />
                    <span className={`${area.primary ? 'text-dark dark:text-white font-medium' : 'text-muted dark:text-gray-400'}`}>
                      {area.name}
                      {area.primary && <span className="text-primary ml-2">(Headquarters)</span>}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/photos/london.view.webp"
                alt="London view"
                className="rounded-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6">
              Get in Touch for a No-Obligation Quote
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Ready to discuss your project? Our team is here to help with expert
              advice and competitive pricing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

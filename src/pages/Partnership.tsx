import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import {
  Handshake,
  TrendingUp,
  PoundSterling,
  Users,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronRight,
  Send,
  FileText,
  UserCheck,
  CheckCircle,
  Phone,
  Mail,
  Loader2,
  Briefcase,
  Star,
  Target,
  Network,
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

const whyPartnerWithUs = [
  {
    icon: TrendingUp,
    title: 'Consistent Pipeline',
    description: 'A steady flow of projects across London means reliable, ongoing work for our trusted partners',
  },
  {
    icon: PoundSterling,
    title: 'Prompt Payments',
    description: 'Transparent terms and reliable, on-time payments that keep your business moving',
  },
  {
    icon: Handshake,
    title: 'Long-Term Relationships',
    description: 'We invest in our partners for the long haul, not one-off jobs or transactional engagements',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Standards',
    description: 'Collaborate with a trusted main contractor committed to safety, compliance and craftsmanship',
  },
  {
    icon: Network,
    title: 'Collaborative Approach',
    description: 'Clear communication, shared planning and respect for every specialist in our network',
  },
  {
    icon: Target,
    title: 'London-Wide Projects',
    description: 'Residential, commercial and new-build projects across Greater London and surrounding areas',
  },
];

const partnershipSteps = [
  {
    icon: Send,
    title: 'Submit Enquiry',
    description: 'Tell us about your company, services and capabilities through our short form',
  },
  {
    icon: FileText,
    title: 'Review',
    description: 'Our team reviews your details, accreditations and insurance within 5 working days',
  },
  {
    icon: UserCheck,
    title: 'Introductory Meeting',
    description: 'We arrange a conversation to understand your strengths and discuss potential projects',
  },
  {
    icon: Handshake,
    title: 'Partnership Begins',
    description: 'Once approved, you join our trusted network and we start matching you to opportunities',
  },
];

const whatWeLookFor = [
  { icon: ShieldCheck, text: 'Valid public liability insurance' },
  { icon: Briefcase, text: 'Proven track record in your trade' },
  { icon: Star, text: 'Relevant trade accreditations' },
  { icon: Users, text: 'Professional, reliable team' },
  { icon: CheckCircle, text: 'Commitment to health & safety' },
  { icon: Target, text: 'Quality-first approach' },
];

const tradeOptions = [
  'Electrical Contractor',
  'Decoration & Painting',
  'Flooring Specialist',
  'Heating & Ventilation (HVAC)',
  'Carpentry & Joinery',
  'Tiling Specialist',
  'Scaffolding',
  'Fire Protection',
  'Steel & Metalwork',
  'Roofing',
  'Other',
];

const teamSizeOptions = [
  '1 - 5',
  '6 - 15',
  '16 - 50',
  '51 - 100',
  '100+',
];

const hearAboutOptions = [
  'Search Engine',
  'LinkedIn',
  'Referral',
  'Industry Event',
  'Website',
  'Other',
];

export default function Partnership() {
  usePageTitle('Partnership');
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    trade: '',
    yearsInBusiness: '',
    teamSize: '',
    serviceArea: '',
    accreditations: '',
    companyOverview: '',
    hearAboutUs: '',
    hasInsurance: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        trade: '',
        yearsInBusiness: '',
        teamSize: '',
        serviceArea: '',
        accreditations: '',
        companyOverview: '',
        hearAboutUs: '',
        hasInsurance: false,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 border border-gray-200 dark:border-surface-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white dark:bg-surface-dark dark:text-white';

  const selectClasses =
    'w-full px-4 py-3 border border-gray-200 dark:border-surface-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white dark:bg-surface-dark dark:text-white';

  return (
    <main>
      <section
        className="relative min-h-[60vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark via-white/95 dark:via-dark/95 to-white/80 dark:to-dark/80" />

        <div className="relative container-custom py-20 sm:py-32">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted dark:text-gray-400 mb-4 sm:mb-6"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={16} />
            <span className="text-dark dark:text-white font-medium">Partnership</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-dark dark:text-white mb-4 sm:mb-6"
          >
            Partner With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted dark:text-gray-400 max-w-2xl mb-8 sm:mb-10"
          >
            We're always looking to collaborate with specialist businesses that share our
            commitment to quality. Let's build something great together across London.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <div className="inline-flex items-center gap-3 bg-white dark:bg-surface shadow-lg px-6 py-4 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-serif text-dark dark:text-white">16+</div>
                <div className="text-sm text-muted dark:text-gray-400">Years in Business</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 bg-white dark:bg-surface shadow-lg px-6 py-4 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Network className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-serif text-dark dark:text-white">Trusted</div>
                <div className="text-sm text-muted dark:text-gray-400">Specialist Network</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark">
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
              Why Partner With Us?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted dark:text-gray-400 text-lg">
              Join a network of specialist businesses delivering high-quality projects across London
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyPartnerWithUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-surface-dark p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-muted dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-light dark:bg-surface-dark">
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
              What We Look For
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted dark:text-gray-400 text-lg">
              Our partners share our commitment to quality, safety and professionalism
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {whatWeLookFor.map((item) => (
              <motion.div
                key={item.text}
                variants={fadeInUp}
                className="bg-white dark:bg-surface p-5 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-dark dark:text-gray-200 text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark">
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
              How It Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted dark:text-gray-400 text-lg">
              A simple, straightforward process to start working together
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="relative"
          >
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 dark:bg-surface-border z-0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {partnershipSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-white dark:bg-surface border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted dark:text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="apply" className="section-padding bg-light dark:bg-surface-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="inline-block w-12 h-1 bg-primary rounded-full" />
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-dark dark:text-white mb-6"
              >
                Submit Your Enquiry
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted dark:text-gray-400 text-lg">
                Tell us about your business and let's explore how we can work together
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-surface rounded-2xl shadow-xl p-5 sm:p-8 md:p-12"
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-dark dark:text-white mb-4">Enquiry Submitted!</h3>
                  <p className="text-muted dark:text-gray-400 mb-8">
                    Thank you for your interest in partnering with RS Construction. Our team will review your details and be in touch within 5 working days.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    Submit another enquiry
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                        Company Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                        Contact Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="contact@yourcompany.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="020 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                        Website <span className="text-muted dark:text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="trade" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                        Trade / Specialism <span className="text-primary">*</span>
                      </label>
                      <select
                        id="trade"
                        name="trade"
                        required
                        value={formData.trade}
                        onChange={handleInputChange}
                        className={selectClasses}
                      >
                        <option value="">Select your trade</option>
                        {tradeOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                        Years in Business <span className="text-primary">*</span>
                      </label>
                      <input
                        type="number"
                        id="yearsInBusiness"
                        name="yearsInBusiness"
                        required
                        min="0"
                        value={formData.yearsInBusiness}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="5"
                      />
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                        Team Size <span className="text-primary">*</span>
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        required
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className={selectClasses}
                      >
                        <option value="">Select size</option>
                        {teamSizeOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="serviceArea" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                        Service Area <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="serviceArea"
                        name="serviceArea"
                        required
                        value={formData.serviceArea}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="Greater London"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="accreditations" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                      Accreditations & Certifications <span className="text-muted dark:text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="accreditations"
                      name="accreditations"
                      value={formData.accreditations}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="e.g. NICEIC, Gas Safe, CHAS, Constructionline"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyOverview" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                      Company Overview <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="companyOverview"
                      name="companyOverview"
                      rows={5}
                      required
                      value={formData.companyOverview}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-surface-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none bg-white dark:bg-surface-dark dark:text-white"
                      placeholder="Tell us about your company, services and notable projects..."
                    />
                  </div>

                  <div>
                    <label htmlFor="hearAboutUs" className="block text-sm font-medium text-dark dark:text-gray-200 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className={selectClasses}
                    >
                      <option value="">Select an option</option>
                      {hearAboutOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="hasInsurance"
                      name="hasInsurance"
                      required
                      checked={formData.hasInsurance}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary mt-0.5"
                    />
                    <label htmlFor="hasInsurance" className="text-muted dark:text-gray-400">
                      I confirm that our company holds valid public liability insurance <span className="text-primary">*</span>
                    </label>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
                      There was an error submitting your enquiry. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Prefer to talk it through first?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss partnership opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-gray-100 group"
              >
                <Mail size={18} />
                Contact Us
              </Link>
              <a
                href="tel:02074732842"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-primary"
              >
                <Phone size={18} />
                020 7473 2842
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import PageWrapper from '../components/animations/PageWrapper';
import ScrollReveal from '../components/animations/ScrollReveal';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'princegohel.dev@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // Simulate frontend form dispatch
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <PageWrapper className="space-y-12 sm:space-y-16">
      {/* 1. PAGE HEADER */}
      <section className="space-y-4">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-mono text-accent-600 dark:text-accent-400">
            <span>Communication &bull; Direct</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Start a Conversation
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Whether you have a technical question, an open internship role, or an interesting engineering problem to solve, feel free to reach out.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. SPLIT-SCREEN CONTACT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info & Social Connections */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal delay={0.1}>
            <Card className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  Based in India, available for on-site or remote engineering roles, technical internships, and open-source contributions.
                </p>
              </div>

              {/* Status Badge */}
              <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-medium flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Status: Actively open to developer internships & projects</span>
              </div>

              {/* Direct Links */}
              <div className="space-y-3 pt-2">
                {/* Email row with copy */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-accent-600/10 text-accent-600 dark:text-accent-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-gray-500 block">
                        Email
                      </span>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-accent-600 transition-colors"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                  <div className="w-8 h-8 rounded-md bg-accent-600/10 text-accent-600 dark:text-accent-400 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-gray-500 block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      Gujarat, India &bull; IST (UTC+5:30)
                    </span>
                  </div>
                </div>

                {/* Availability Response Time */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                  <div className="w-8 h-8 rounded-md bg-accent-600/10 text-accent-600 dark:text-accent-400 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-gray-500 block">
                      Typical Response Time
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      Within 12 business hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 space-y-2">
                <span className="text-xs font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider block">
                  Profiles & Repositories
                </span>
                <div className="flex gap-2.5">
                  <a
                    href="https://github.com/princegohel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-800 dark:text-gray-200 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/prince-gohel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-800 dark:text-gray-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Right Column: Sleek Frontend Message Form */}
        <div className="lg:col-span-7">
          <ScrollReveal delay={0.2}>
            <Card className="p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                  Fill out the form below. Messages are validated in real-time.
                </p>
              </div>

              {/* Status Alerts */}
              {status === 'success' && (
                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Message received!</span>
                    <span>Thank you for reaching out, Prince will review and respond shortly.</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 text-rose-800 dark:text-rose-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Missing required fields</span>
                    <span>Please ensure your name, email, and message are all filled out.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry / Internship Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your note, project requirements, or question here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 transition-colors resize-y"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-gray-400 font-mono">
                    Frontend validation enabled
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-semibold text-sm transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}

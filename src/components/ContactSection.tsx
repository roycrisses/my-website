import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ConstructableBlock } from './ConstructableBlock';

interface Props {
  progress: number;
  isCompleted: boolean;
}

export const ContactSection: React.FC<Props> = ({ progress, isCompleted }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'AI Training',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-zinc-900/10">
      <ConstructableBlock
        builderId="build-contact-card"
        progress={progress}
        isCompleted={isCompleted}
      >
        {/* Top Banner Smiley Graphic */}
        <div className="flex flex-col items-center mb-10 text-center">
          {/* Retro Yellow Smiley Face Sticker */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-300 border-3 border-zinc-900 brutal-shadow flex items-center justify-center mb-4 select-none hover:rotate-6 transition-transform">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="15" cy="18" r="3.5" fill="#18181B" />
              <circle cx="29" cy="18" r="3.5" fill="#18181B" />
              <path
                d="M13 26C15 31 29 31 31 26"
                stroke="#18181B"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zinc-950 uppercase tracking-tight">
            LET'S TALK
          </h2>
          <p className="mt-2 text-sm sm:text-base font-medium text-zinc-700 max-w-md">
            Got a project, a marketing campaign, an AI training program, or just want to say hi? Send it over.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card */}
            <div className="bg-white border-2 border-zinc-900 rounded-lg p-5 brutal-shadow-sm flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-yellow-200 border border-zinc-900 rounded-md">
                  <Mail className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">Email Address</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono font-bold text-sm text-zinc-900 hover:text-blue-600 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 hover:bg-zinc-100 rounded border border-zinc-300 text-zinc-600 transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-white border-2 border-zinc-900 rounded-lg p-5 brutal-shadow-sm flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-200 border border-zinc-900 rounded-md">
                  <Phone className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">Phone / WhatsApp</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="font-mono font-bold text-sm text-zinc-900 hover:text-emerald-700 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 hover:bg-zinc-100 rounded border border-zinc-300 text-zinc-600 transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Web Card */}
            <div className="bg-white border-2 border-zinc-900 rounded-lg p-5 brutal-shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-rose-500" />
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">Location</span>
                  <p className="font-medium text-xs text-zinc-800">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-zinc-100">
                <Globe className="w-4 h-4 text-blue-500" />
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">Official Domain</span>
                  <a
                    href={`https://${PERSONAL_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold text-blue-600 hover:underline"
                  >
                    {PERSONAL_INFO.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF5] border-2 border-zinc-900 rounded-lg p-6 sm:p-8 brutal-shadow relative">
            <div className="absolute -top-3.5 right-12 w-28 h-6 bg-pink-200/90 border-x border-dashed border-rose-600/40 rotate-[2deg] pointer-events-none" />

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 border-2 border-emerald-600 rounded-md space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-200 flex items-center justify-center border border-emerald-700">
                  <Check className="w-6 h-6 text-emerald-800" />
                </div>
                <h3 className="font-display font-bold text-xl text-emerald-950">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-emerald-800 max-w-sm mx-auto font-medium">
                  Thank you, {formData.name}. Krishna will review your inquiry regarding {formData.topic} shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'AI Training', message: '' });
                  }}
                  className="mt-3 px-4 py-1.5 text-xs font-mono font-bold uppercase bg-white border border-emerald-700 rounded text-emerald-900 hover:bg-emerald-100"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-800 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Sharma"
                      className="w-full px-3 py-2 text-sm border-2 border-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-800 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 text-sm border-2 border-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-800 uppercase mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3 py-2 text-sm border-2 border-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white font-mono"
                  >
                    <option value="AI Training">AI Training & Corporate Workshops</option>
                    <option value="Meta Ads & Growth">Meta Ads & Performance Marketing</option>
                    <option value="Backend Development">Backend Engineering (Node.js)</option>
                    <option value="Consulting">General Strategic Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-800 uppercase mb-1">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share a brief overview of your team, timeline, and goals..."
                    className="w-full px-3 py-2 text-sm border-2 border-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-mono font-bold text-sm uppercase tracking-wider rounded-md border-2 border-zinc-900 brutal-shadow brutal-shadow-hover transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-yellow-300" />
                  <span>Transmit Message to Krishna</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </ConstructableBlock>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-zinc-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
        <p>
          © {new Date().getFullYear()} Krishna Karki &middot; Bhimdutta, Nepal. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 underline underline-offset-2"
          >
            Download CV Document
          </a>
          <span>&middot;</span>
          <span>Krishnakarki.info.np</span>
        </div>
      </footer>
    </section>
  );
};

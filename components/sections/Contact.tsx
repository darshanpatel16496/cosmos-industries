"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onSelectCompany = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          subject: prev.subject || `Inquiry — ${customEvent.detail}`,
        }));
      }
    };

    window.addEventListener("select-group-company", onSelectCompany);
    return () =>
      window.removeEventListener("select-group-company", onSelectCompany);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[calc(100dvh-76px)] w-full scroll-mt-[76px] flex-col bg-[#f4f7fb] text-slate-900 lg:h-[calc(100dvh-76px)] lg:overflow-hidden"
    >
      {/* Header Bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-y border-slate-200 bg-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12">
        <div className="flex flex-col items-start gap-1">
          <div className="mb-0.5 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#0284c7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              Let&apos;s Build Something Great Together
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#0b192c] sm:text-3xl">
            Contact <span className="text-[#0284c7]">Cosmos Industries</span>
          </h2>
        </div>

        <span className="hidden rounded-md border border-slate-200 bg-[#f4f7fb] px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 sm:block">
          Vitthal Udyognagar · Gujarat
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid min-h-0 w-full flex-1 grid-cols-1 lg:grid-cols-12">
        {/* LEFT: Contact Form Panel (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="flex min-h-0 flex-col justify-between bg-white p-6 sm:p-8 lg:col-span-7 lg:border-r lg:border-slate-200 lg:px-12 lg:py-6"
        >
          <div className="mb-3.5 flex shrink-0 items-center justify-between border-b border-slate-200 pb-2.5">
            <h3 className="text-base font-extrabold tracking-tight text-[#0b192c] sm:text-lg">
              Send us a Message
            </h3>
            <span className="rounded border border-sky-200 bg-sky-50 px-2.5 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#0284c7]">
              RFQ &amp; Inquiries
            </span>
          </div>

          {submitted && (
            <div
              role="status"
              className="mb-3 flex items-center justify-between gap-3 rounded-md border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-900"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                Your inquiry has been recorded. Our engineering team will follow
                up shortly.
              </span>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="cursor-pointer font-mono text-[11px] uppercase underline hover:text-emerald-700"
              >
                Dismiss
              </button>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex min-h-0 flex-1 flex-col justify-between gap-3"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full rounded-md border border-slate-300 bg-[#f4f7fb] px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#0284c7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20"
                  placeholder="Kiran Patel"
                  value={formData.name}
                  onChange={(e) => {
                    setSubmitted(false);
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-md border border-slate-300 bg-[#f4f7fb] px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#0284c7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20"
                  placeholder="procurement@company.com"
                  value={formData.email}
                  onChange={(e) => {
                    setSubmitted(false);
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full rounded-md border border-slate-300 bg-[#f4f7fb] px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#0284c7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20"
                placeholder="Heavy Fabrication / CNC Machining / OEM RFQ"
                value={formData.subject}
                onChange={(e) => {
                  setSubmitted(false);
                  setFormData({ ...formData, subject: e.target.value });
                }}
              />
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              <label
                htmlFor="message"
                className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-600"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="min-h-[84px] w-full flex-1 resize-none rounded-md border border-slate-300 bg-[#f4f7fb] px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#0284c7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20"
                placeholder="Share drawings, tolerances, material grades, quantities, or delivery timelines..."
                value={formData.message}
                onChange={(e) => {
                  setSubmitted(false);
                  setFormData({ ...formData, message: e.target.value });
                }}
              />
            </div>

            <button
              type="submit"
              className="group flex w-full shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-[#0284c7] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#0b192c] sm:text-sm"
            >
              <span>Send Message</span>
              <Send
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </form>
        </motion.div>

        {/* RIGHT: Steel-Navy Contact Info & Map Panel (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex min-h-0 flex-col divide-y divide-white/10 bg-[#0b192c] text-white lg:col-span-5"
        >
          {/* Contact Details */}
          <div className="shrink-0 p-6 sm:p-8 lg:px-10 lg:py-5">
            <h3 className="mb-3 text-base font-extrabold tracking-tight text-white sm:text-lg">
              Get In Touch
            </h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-2.5">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#42b4ff]/30 bg-[#42b4ff]/10">
                  <MapPin size={16} className="text-[#42b4ff]" />
                </div>
                <div>
                  <p className="mb-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#42b4ff]">
                    Facility Address
                  </p>
                  <p className="text-xs leading-relaxed text-slate-200">
                    Plot No. A2/440/1, Road No. B-18, Opp. Ritul Engineering
                    Company, G.I.D.C, Vitthal Udyognagar - 388 121, Dist. Anand,
                    Gujarat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#42b4ff]/30 bg-[#42b4ff]/10">
                  <Phone size={16} className="text-[#42b4ff]" />
                </div>
                <div>
                  <p className="mb-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#42b4ff]">
                    Direct Contact
                  </p>
                  <p className="text-xs font-semibold text-white sm:text-sm">
                    Kiran Patel
                  </p>
                  <a
                    href="tel:+919825750158"
                    className="text-xs text-slate-200 transition hover:text-[#42b4ff]"
                  >
                    +91 98257 50158
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#42b4ff]/30 bg-[#42b4ff]/10">
                  <Mail size={16} className="text-[#42b4ff]" />
                </div>
                <div>
                  <p className="mb-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#42b4ff]">
                    Email
                  </p>
                  <a
                    href="mailto:cosmosind2015@gmail.com"
                    className="text-xs text-slate-200 transition hover:text-[#42b4ff]"
                  >
                    cosmosind2015@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="relative min-h-[200px] w-full flex-1 bg-[#081322] lg:min-h-[120px]">
            <iframe
              title="Cosmos Industries Location Map"
              src="https://maps.google.com/maps?q=COSMOS%20INDUSTRIES,%20G.I.D.C,%20Vitthal%20Udyognagar,%20Gujarat%20388121&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[25%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
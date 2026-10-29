"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#06101d] py-16 lg:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(9,142,237,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-10">
        
        {/* Header - LEFT ALIGNED WITH BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex w-full flex-col items-start justify-start gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          {/* Badge */}
          <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#42b4ff]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              Contact Us
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:whitespace-nowrap lg:text-[42px] xl:text-5xl">
            Let's Build Something <span className="text-[#42b4ff]">Great Together</span>
          </h2>
        </motion.div>

        {/* Main Contact Grid - Equal Heights */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
          
          {/* LEFT: Contact Info */}
          <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-[#07111f]/80 p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#098eed]/10">
                  <MapPin size={24} className="text-[#42b4ff]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Address</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Plot No. A2/440/1, Road No. B-18, Opp. Ritul Engineering Company, G.I.D.C, Vitthal Udyognagar - 388 121, Dist. Anand, Gujarat.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#098eed]/10">
                  <Phone size={24} className="text-[#42b4ff]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone</p>
                  <p className="text-lg font-semibold text-white">Kiran Patel: +91 98257 50158</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#098eed]/10">
                  <Mail size={24} className="text-[#42b4ff]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email</p>
                  <p className="text-base text-slate-300">cosmosind2015@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Map Card */}
          <div className="relative min-h-[400px] w-full overflow-hidden rounded-3xl border border-white/10 lg:min-h-full">
            <iframe
              src="https://maps.google.com/maps?q=COSMOS%20INDUSTRIES,%20G.I.D.C,%20Vitthal%20Udyognagar,%20Gujarat%20388121&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 opacity-80 transition-opacity hover:opacity-100"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
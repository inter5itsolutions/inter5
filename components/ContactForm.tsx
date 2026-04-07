"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES_OPTIONS = [
  "Managed IT Services",
  "CyberShield (Cybersecurity)",
  "BizShield (Disaster Recovery)",
  "SecureLearn (Security Training)",
  "NDPA Compliance Advisory",
  "General Enquiry",
];

export default function ContactForm() {
  const [status, setStatus]   = useState<"idle" | "sending" | "sent">("idle");
  const [form,   setForm]     = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your actual API endpoint / email service
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-dark p-10 text-center"
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display font-bold text-white text-2xl mb-2">Message Received</h3>
        <p className="text-slate-400 text-sm">We will get back to you within one business day.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-dark p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name *"    name="name"    type="text"  value={form.name}    onChange={handleChange} required />
        <Field label="Email Address *" name="email"  type="email" value={form.email}   onChange={handleChange} required />
        <Field label="Phone Number"   name="phone"   type="tel"   value={form.phone}   onChange={handleChange} />
        <Field label="Company Name"   name="company" type="text"  value={form.company} onChange={handleChange} />
      </div>

      <div>
        <label className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">Service of Interest</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full bg-navy-700 border border-navy-600 focus:border-gold-500 text-slate-200 px-4 py-3 text-sm outline-none transition-colors appearance-none"
        >
          <option value="">Select a service…</option>
          {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell us about your business and what you need…"
          className="w-full bg-navy-700 border border-navy-600 focus:border-gold-500 text-slate-200 px-4 py-3 text-sm outline-none transition-colors resize-none placeholder:text-slate-600"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center"
      >
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>
      <p className="text-xs text-slate-500 text-center">We typically respond within one business day.</p>
    </form>
  );
}

function Field({ label, name, type, value, onChange, required }: {
  label: string; name: string; type: string;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-navy-700 border border-navy-600 focus:border-gold-500 text-slate-200 px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-600"
      />
    </div>
  );
}
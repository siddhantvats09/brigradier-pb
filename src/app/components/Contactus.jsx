/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight, Send, CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contactus() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("success");

  const [form, setForm] = useState({
    name: "", phone: "", email: "", company: "",
    companySize: "", planPurpose: "", businessType: "", message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setModalOpen(true);
        setForm({
          name: "", phone: "", email: "", company: "",
          companySize: "", planPurpose: "", businessType: "", message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] selection:bg-[#5C66F5]/10">
      <div className="max-w-6xl mx-auto px-6 py-14 lg:py-22">
        
        {/* HEADER SECTION - Simplified and Centered on Mobile */}
        <div className="mb-20 space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-[#5C66F5] font-medium text-xs tracking-[0.2em] uppercase">
            <span className="w-8 h-[1px] bg-[#5C66F5]"></span>
            Get in touch
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Experience <span className="text-[#5C66F5]">LeadsHandle</span>.
          </h1>
          <p className="text-[#6E6E73] text-xl font-light leading-relaxed">
            A smarter way to manage calls. Tell us your needs and we&apos;ll handle the rest.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-20">
          
          {/* LEFT: MINIMAL INFO */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#A1A1A6]">Why us?</h3>
              <ul className="space-y-4">
                {[
                  "15-minute rapid setup",
                  "Zero commitment trial",
                  "Personal onboarding",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-[#424245]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#5C66F5]" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Unique Minimal Image Treatment */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#F9F9FF] rounded-[2rem] -z-10 group-hover:bg-[#F0F0FF] transition-colors" />
              <img
                src="/images/contact-img.jpg"
                className="rounded-2xl transition-all duration-700 opacity-80"
                alt="CRM"
              />
            </div>
          </div>

          {/* RIGHT: THE FORM (LIGHTWEIGHT) */}
          <div className="lg:col-span-3">
            <form onSubmit={submitForm} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="group relative">
                  <input name="name" required value={form.name} onChange={handleChange} className="peer minimal-input" placeholder=" " />
                  <label className="minimal-label">Full Name</label>
                </div>
                <div className="group relative">
                  <input name="phone" required value={form.phone} onChange={handleChange} className="peer minimal-input" placeholder=" " />
                  <label className="minimal-label">Mobile Number</label>
                </div>
                <div className="group relative md:col-span-2">
                  <input name="email" type="email" required value={form.email} onChange={handleChange} className="peer minimal-input" placeholder=" " />
                  <label className="minimal-label">Email Address</label>
                </div>
                <div className="group relative md:col-span-2">
                  <select name="companySize" value={form.companySize} onChange={handleChange} className="peer minimal-input appearance-none bg-transparent">
                    <option value="" disabled></option>
                    <option>1 - 4 Employees</option>
                    <option>5 - 10 Employees</option>
                    <option>10 - 25 Employees</option>
                    <option>25 - 50 Employees</option>
                    <option>50+ Employees</option>
                  </select>
                  <label className="minimal-label">Company Size</label>
                </div>
                <div className="group relative md:col-span-2">
                  <textarea name="message" rows="2" value={form.message} onChange={handleChange} className="peer minimal-input resize-none" placeholder=" " />
                  <label className="minimal-label">How can we help?</label>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center gap-4 text-[#1D1D1F] font-bold text-lg hover:text-[#5C66F5] transition-colors"
                >
                  {loading ? "Sending..." : "Request a Demo"}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1D1D1F] group-hover:border-[#5C66F5] transition-all">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL (MINIMAL) */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-md">
          <div className="text-center space-y-6 max-w-sm px-6">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#5C66F5]/10">
              <CheckCircle className="text-[#5C66F5] w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight">Got it!</h3>
            <p className="text-[#6E6E73] leading-relaxed">Our experts will reach out to you within 24 hours.</p>
            <Button variant="outline" className="rounded-full px-8 border-[#EDEDF2]" onClick={() => setModalOpen(false)}>Close</Button>
          </div>
        </div>
      )}

      <style jsx>{`
        .minimal-input {
          width: 100%;
          padding: 8px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid #EDEDF2;
          font-size: 1.1rem;
          color: #1D1D1F;
          transition: border-color 0.3s ease;
        }
        .minimal-input:focus {
          outline: none;
          border-bottom-color: #5C66F5;
        }
        .minimal-label {
          position: absolute;
          top: 8px;
          left: 0;
          color: #A1A1A6;
          font-size: 1.1rem;
          pointer-events: none;
          transition: all 0.3s ease;
        }
        .minimal-input:focus ~ .minimal-label,
        .minimal-input:not(:placeholder-shown) ~ .minimal-label {
          top: -20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #5C66F5;
        }
      `}</style>
    </div>
  );
}
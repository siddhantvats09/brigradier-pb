"use client";

import { useState } from "react";

export default function SSBSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    entry: "",
    center: "",
  });

  const [loading, setLoading] = useState(false);

  // 🇮🇳 Indian mobile regex (10 digits, starts with 6-9)
  const mobileRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid Indian mobile number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          entry: "",
          center: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Error submitting form");
    }

    setLoading(false);
  };

  return (
    <section id="contactssb" className="w-full bg-[#d7e6eb] py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D2B4D] leading-tight">
            Crack Your <span className="text-yellow-500">SSB</span> with the{" "}
            Best SSB Coaching in Dehradun
          </h2>

          <ul className="mt-8 space-y-4 text-gray-700">
            {[
              "96% Selection Ratio in SSB Screening",
              "Training by ex-SSB assessors",
              "Small Batch Size for personal attention",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#0D2B4D] text-white flex items-center justify-center rounded-full text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#0D2B4D] p-8 rounded-2xl shadow-lg">
          <h3 className="text-white text-xl font-semibold mb-6">
            Start Your SSB Preparation Today
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-200 outline-none"
            />

            {/* MOBILE */}
            <input
              type="tel"
              name="mobile"
              placeholder="Your Phone Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              maxLength={10}
              className="w-full p-3 rounded-lg bg-gray-200 outline-none"
            />

            {/* ENTRY */}
            <select
              name="entry"
              value={formData.entry}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-200 outline-none"
            >
              <option value="">SSB Entry</option>
              <option value="NDA">NDA</option>
              <option value="CDS">CDS</option>
              <option value="AFCAT">AFCAT</option>
              <option value="SPL">SPL</option>
              <option value="NCC">NCC</option>
              <option value="Other">Other</option>
            </select>

            {/* CENTER */}
            <select
              name="center"
              value={formData.center}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-200 outline-none"
            >
              <option value="">SSB Center</option>

              <option value="11 SSB Prayagraj">11 SSB – Prayagraj</option>
              <option value="12 SSB Bengaluru">12 SSB – Bengaluru</option>
              <option value="14 SSB Prayagraj">14 SSB – Prayagraj</option>
              <option value="17 SSB Bengaluru">17 SSB – Bengaluru</option>
              <option value="18 SSB Prayagraj">18 SSB – Prayagraj</option>
              <option value="19 SSB Prayagraj">19 SSB – Prayagraj</option>

              <option value="20 SSB Bhopal">20 SSB – Bhopal</option>
              <option value="21 SSB Bhopal">21 SSB – Bhopal</option>
              <option value="22 SSB Bhopal">22 SSB – Bhopal</option>

              <option value="24 SSB Bengaluru">24 SSB – Bengaluru</option>
              <option value="31 SSB Kapurthala">31 SSB – Kapurthala</option>
              <option value="34 SSB Prayagraj">34 SSB – Prayagraj</option>

              <option value="1 AFSB Dehradun">1 AFSB – Dehradun</option>
              <option value="2 AFSB Mysuru">2 AFSB – Mysuru</option>
              <option value="3 AFSB Gandhinagar">3 AFSB – Gandhinagar</option>
              <option value="4 AFSB Varanasi">4 AFSB – Varanasi</option>
              <option value="5 AFSB Guwahati">5 AFSB – Guwahati</option>

              <option value="NSB Coimbatore">NSB – Coimbatore</option>
              <option value="NSB Visakhapatnam">NSB – Visakhapatnam</option>
              <option value="NSB Kolkata">NSB – Kolkata</option>
              <option value="NSB Bengaluru">NSB – Bengaluru</option>
              <option value="NSB Bhopal">NSB – Bhopal</option>
              <option value="Other">Other</option>
            </select>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition
                ${
                  loading
                    ? "bg-yellow-400 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-400 hover:-translate-y-1"
                }`}
            >
              {loading ? (
                <>
                  {/* SPINNER */}
                  <svg
                    className="w-5 h-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="black"
                      strokeWidth="4"
                      opacity="0.2"
                    />
                    <path
                      d="M22 12a10 10 0 00-10-10"
                      stroke="black"
                      strokeWidth="4"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Talk To Our Admission Team"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

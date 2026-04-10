"use client";

import { useState } from "react";

export default function SSBSection() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        entry: "",
        center: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
    };

    return (
        <section className="w-full bg-[#d7e6eb] py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D2B4D] leading-tight">
                        Crack Your <span className="text-yellow-500">SSB</span> with the <span className="text-bold">Best
                            SSB Coaching in Dehradun</span>
                    </h2>

                    <ul className="mt-8 space-y-4 text-gray-700">
                        {[
                            "96% Selection Ratio in SSB Screening",
                            "Training by ex-SSB assessors from Bhopal & Allahabad boards",
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

                    {/* CTA BUTTONS */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href="tel:+919286011916"
                            className="bg-[#0D2B4D] text-white px-6 py-3 rounded-xl font-medium"
                        >
                            📞 +91 92860 11916
                        </a>

                        <a
                            href="#"
                            className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="bg-[#0D2B4D] p-8 rounded-2xl shadow-lg">
                    <h3 className="text-white text-xl font-semibold mb-6">
                        Start Your SSB Preparation Today
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-gray-200 outline-none"
                        />

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Your Phone Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-gray-200 outline-none"
                        />

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
                        </select>

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
                        </select>

                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
                        >
                            Talk To Our Admission Team
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
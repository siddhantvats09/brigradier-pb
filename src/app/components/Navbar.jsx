"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT - LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png" // replace with your logo path
              alt="Brigadier Defence Academy"
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-lg font-bold text-gray-800">
                BRIGADIER
              </h1>
              <p className="text-sm text-gray-600 -mt-1">
                DEFENCE ACADEMY
              </p>
            </div>
          </Link>

          {/* RIGHT SECTION */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* PHONE */}
            <a
              href="tel:+919286011916"
              className="text-gray-800 font-medium text-sm hover:text-blue-900 transition"
            >
              +91 92860 11916
            </a>

            {/* CTA BUTTON */}
            <Link
              href="#"
              className="bg-[#0D2B4D] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0a223d] transition"
            >
              Get Admission
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <a
            href="tel:+919286011916"
            className="block py-3 text-gray-800 font-medium"
          >
            +91 92860 11916
          </a>

          <Link
            href="#"
            className="block text-center bg-[#0D2B4D] text-white py-3 rounded-xl font-medium"
          >
            Get Admission
          </Link>
        </div>
      )}
    </nav>
  );
}
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-[#EDEDF2] py-16 text-[#6E6E73] bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#5C66F5] text-white font-bold text-xs italic">
              LH
            </div>
            <h3 className="text-[#1D1D1F] text-lg font-bold">
              LeadsHandle CRM
            </h3>
          </div>

          <p className="text-sm leading-relaxed">
            A modern Cold Calling CRM designed to help businesses manage
            telecalling teams, track leads, and improve outbound sales
            performance from a single platform.
          </p>
        </div>

        {/* Product Highlights */}
        <div>
          <h3 className="text-[#1D1D1F] text-lg font-bold mb-5">
            Platform Highlights
          </h3>

          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-start gap-2">
              <span className="text-[#5C66F5]">•</span> Track sales calls and lead interactions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5C66F5]">•</span> Assign contacts to telecallers easily
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5C66F5]">•</span> Monitor team performance in real time
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5C66F5]">•</span> Powerful CRM dashboard for managers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5C66F5]">•</span> Mobile-friendly lead tracking
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[#1D1D1F] text-lg font-bold mb-5">Contact Us</h3>

          <div className="space-y-4 text-sm font-medium">
            <div className="flex flex-col gap-1">
              <span className="text-[#1D1D1F] text-xs uppercase tracking-wider opacity-60">Email</span>
              <a
                href="mailto:siddhantvats840@gmail.com"
                className="text-[#5C66F5] hover:text-[#4a54e1] transition-colors"
              >
                siddhantvats840@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[#1D1D1F] text-xs uppercase tracking-wider opacity-60">Location</span>
              <p className="text-[#1D1D1F]">Gurgaon, Haryana, India</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[#1D1D1F] text-xs uppercase tracking-wider opacity-60">Company</span>
              <p className="text-[#1D1D1F]">LeadsHandle</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#EDEDF2] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#A1A1A6]">
          <p>© {new Date().getFullYear()} LeadsHandle CRM. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
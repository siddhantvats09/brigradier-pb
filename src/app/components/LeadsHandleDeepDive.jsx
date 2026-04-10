import React from 'react';

const LeadsHandleDeepDive = () => {
  return (
    <section className="py-16 lg:py-22 lg:px-4 bg-white overflow-hidden font-sans">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-[#5C66F5] font-bold text-[10px] tracking-[0.3em] uppercase mb-4">
            Platform Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] max-w-3xl">
            Designed for <span className="text-[#5C66F5]">High Scalability</span> and Absolute Control.
          </h2>
          <p className="mt-6 text-[#6E6E73] text-lg font-light max-w-2xl">
            LeadsHandle operates on a Multi-Tenant SaaS Architecture, ensuring secure data handling while your team grows without limits.
          </p>
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. Large Feature: Visual Intelligence & Analytics */}
          <div className="md:col-span-8 group relative rounded-3xl bg-[#F9F9FF] p-8 border border-[#EDEDF2] overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#5C66F5]/5">
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-[#1D1D1F]">Visual Intelligence</h3>
              <p className="mt-2 text-[#6E6E73] text-sm font-light max-w-md">
                Easy-to-read charts showing performance, lead origins, and top callers in real-time.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-xs font-bold text-[#1D1D1F] uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5C66F5]"></span> Source ROI Tracking
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-[#1D1D1F] uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5C66F5]"></span> Custom Status Pipelines
                </li>
              </ul>
              
              {/* Mockup Dashboard UI */}
              <div className="mt-12 -mr-20 transform group-hover:-translate-y-2 transition-transform duration-700 bg-[#1D1D1F] rounded-tl-2xl p-4 border border-[#EDEDF2] shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-[#FF5F56]"></div>
                  <div className="h-2 w-2 rounded-full bg-[#FFBD2E]"></div>
                  <div className="h-2 w-2 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-white/5 rounded-lg border border-white/10 p-3">
                    <div className="h-1 w-8 bg-[#5C66F5] mb-2"></div>
                    <div className="h-4 w-12 bg-white/20"></div>
                  </div>
                  <div className="h-20 bg-white/5 rounded-lg border border-white/10 p-3">
                    <div className="h-1 w-8 bg-[#27C93F] mb-2"></div>
                    <div className="h-4 w-12 bg-white/20"></div>
                  </div>
                  <div className="h-20 bg-white/5 rounded-lg border border-white/10 p-3">
                    <div className="h-1 w-8 bg-[#FFBD2E] mb-2"></div>
                    <div className="h-4 w-12 bg-white/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Small Feature: RBAC & Security */}
          <div className="md:col-span-4 rounded-3xl bg-white p-8 border border-[#EDEDF2] flex flex-col justify-between hover:border-[#5C66F5]/40 transition-colors">
            <div>
              <svg className="w-10 h-10 text-[#5C66F5] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-bold text-[#1D1D1F]">Granular Permissions</h3>
              <p className="mt-3 text-[#6E6E73] text-sm font-light leading-relaxed">
                Highly granular permission sets and custom roles like &quot;Junior Caller&quot;.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#EDEDF2]">
              <div className="flex flex-wrap gap-2">
                {['Super Admin', 'Team Lead', 'Caller'].map((role, i) => (
                  <div key={i} className="px-3 py-1 bg-[#F9F9FF] border border-[#EDEDF2] rounded-full text-[9px] font-bold text-[#1D1D1F] uppercase tracking-tighter">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Small Feature: Auto-Distribution */}
          <div className="md:col-span-4 rounded-3xl bg-[#1D1D1F] p-8 text-white flex flex-col justify-between">
            <div>
              <svg className="w-10 h-10 text-[#5C66F5] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl font-bold">Auto-Distribution</h3>
              <p className="mt-3 text-gray-400 text-sm font-light">
                Smart routing assigns leads based on availability and workload capacity limits.
              </p>
            </div>
            <div className="mt-8 text-[10px] font-mono text-[#5C66F5] opacity-80">
              {`{ capacity_limit: true, routing: "smart" }`}
            </div>
          </div>

          {/* 4. Large Feature: Projects & Client Portals */}
          <div className="md:col-span-8 group relative rounded-3xl bg-white p-8 border border-[#EDEDF2] overflow-hidden hover:border-[#5C66F5]/40 transition-all">
            <div className="flex flex-col md:flex-row gap-10 h-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#1D1D1F]">Interactive Touchpoints</h3>
                <p className="mt-4 text-[#6E6E73] text-sm font-light leading-relaxed">
                  Share project details instantly via a dedicated client-side webpage.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-[#F9F9FF] rounded-xl border border-[#EDEDF2]">
                     <svg className="w-5 h-5 text-[#5C66F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                     <span className="text-xs font-bold text-[#1D1D1F]">Custom Data Forms</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-[#F9F9FF] rounded-xl border border-[#EDEDF2]">
                     <svg className="w-5 h-5 text-[#5C66F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                     <span className="text-xs font-bold text-[#1D1D1F]">Project Showcase URL</span>
                  </div>
                </div>
              </div>
              
              {/* Form UI Mockup */}
              <div className="flex-1 bg-[#F9F9FF] rounded-2xl p-6 border border-[#EDEDF2] group-hover:bg-[#5C66F5]/5 transition-colors">
                <div className="space-y-3">
                  <div className="h-2 w-20 bg-[#EDEDF2] rounded"></div>
                  <div className="h-8 w-full bg-white rounded border border-[#EDEDF2] shadow-sm"></div>
                  <div className="h-2 w-24 bg-[#EDEDF2] rounded"></div>
                  <div className="h-20 w-full bg-white rounded border border-[#EDEDF2] shadow-sm"></div>
                  <div className="h-8 w-full bg-[#5C66F5] rounded shadow-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Banner */}
        {/* <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#5C66F5] to-[#4A54E1] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Next Gen Road Map</span>
            <h4 className="text-xl font-bold mt-1">Coming Soon Features</h4>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Click-to-Call', 'Ad Integration', 'Automated SMS', 'Mobile App'].map((feature, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/20 uppercase">
                {feature}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default LeadsHandleDeepDive;
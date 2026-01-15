
import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  MapPin, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Database, 
  MessageSquare,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  // Added missing icons used in the component
  Globe,
  Building2,
  Umbrella
} from 'lucide-react';
import { Language } from './types';
import { TRANSLATIONS, PROBLEMS, SOLUTIONS, PRICING, ROADMAP } from './constants';
import Layout from './components/Layout';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');
  const t = TRANSLATIONS[lang];

  return (
    <Layout lang={lang} setLang={setLang}>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden gradient-bg text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-6 backdrop-blur-sm border border-white/30">
                <Globe className="w-3 h-3 mr-2" />
                {t.countries}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                {t.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium opacity-90 leading-relaxed">
                {t.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-emerald-900/20 flex items-center justify-center transition-all transform hover:scale-105">
                  {t.heroCTA1}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#solution" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center transition-all">
                  {t.heroCTA2}
                </a>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 grayscale opacity-60">
                <span className="text-xs uppercase tracking-widest font-bold">Trusted by</span>
                <div className="flex space-x-4 items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative z-10 bg-white/10 backdrop-blur-2xl rounded-3xl p-4 border border-white/20 shadow-2xl overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/fintech/800/600" 
                  alt="Financial Agent" 
                  className="rounded-2xl shadow-inner w-full h-[400px] object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/40 cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 text-slate-800 animate-bounce duration-[3s]">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Float Recharged</p>
                  <p className="text-sm font-bold">KES 50,000</p>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 bg-indigo-900 p-4 rounded-2xl shadow-xl flex items-center space-x-3 text-white">
                <div className="bg-white/20 p-2 rounded-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/50 uppercase">Fraud Protection</p>
                  <p className="text-sm font-bold">Active Shield</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4">The Challenge</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">{t.problemTitle}</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Agents are the unsung heroes of financial inclusion in East Africa, but they face systemic risks that stall growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEMS.map((prob, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all hover:shadow-xl group">
                <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                  {prob.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{prob.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">{prob.desc}</p>
                <div className="flex items-center text-slate-400 font-bold">
                  <span className="text-3xl mr-2 text-slate-900">{prob.stat}</span>
                  <span className="text-xs uppercase tracking-widest leading-tight">Average<br/>Impact</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4">Nexus Link</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">{t.solutionTitle}</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We provide the critical infrastructure that empowers agents to work safely, scale their business, and access institutional capital.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SOLUTIONS.map((sol, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4">
                      {sol.icon}
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">{sol.title}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{sol.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex items-center p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <Smartphone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h6 className="font-bold text-slate-900">Universal Access</h6>
                  <p className="text-sm text-slate-600">Works on all phones via <strong>*123#</strong> (USSD) or our Android/iOS app.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-indigo-600 rounded-3xl p-1 shadow-2xl overflow-hidden transform lg:rotate-2">
                <img src="https://picsum.photos/seed/app/600/1000" alt="Mobile App UI" className="rounded-[2.5rem] w-full" />
              </div>
              {/* Overlay Elements */}
              <div className="absolute -left-10 top-1/4 bg-white p-6 rounded-2xl shadow-2xl max-w-[200px] border border-slate-100 hidden md:block">
                <p className="text-xs font-bold text-indigo-600 mb-2">Real-time Alert</p>
                <div className="flex items-center text-red-500 mb-3">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span className="text-xs font-bold">Suspicious Activity</span>
                </div>
                <button className="w-full py-2 bg-indigo-600 text-white text-[10px] font-bold rounded-lg uppercase">Block Transaction</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Ecosystem Visual */}
      <section id="how-it-works" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4">Our Ecosystem</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Simple Step-by-Step Flow</h3>
          </div>
          
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-100 via-indigo-600 to-indigo-100 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Agent', desc: 'Agent initiates request via App or USSD code.', icon: <Users className="w-6 h-6" /> },
                { step: '02', title: 'Nexus Link', desc: 'Our engine validates identity and analyzes risk.', icon: <CheckCircle2 className="w-6 h-6" /> },
                { step: '03', title: 'Bank', desc: 'Partner banks provide instant e-float liquidity.', icon: <Building2 className="w-6 h-6" /> },
                { step: '04', title: 'Insurance', desc: 'Verified transactions are insured against fraud.', icon: <Umbrella className="w-6 h-6" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center text-indigo-600 mb-6 shadow-xl relative">
                    {item.icon}
                    <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 max-w-[200px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section id="pricing" className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 font-bold uppercase tracking-wider text-sm mb-4">Pricing</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">{t.pricingTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((plan, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border ${idx === 1 ? 'bg-indigo-900/50 border-emerald-500/50 scale-105' : 'bg-white/5 border-white/10'} relative overflow-hidden transition-all hover:bg-white/10`}>
                {idx === 1 && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-indigo-950 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Most Popular</div>
                )}
                <h4 className="text-2xl font-bold mb-1">{plan.title}</h4>
                <p className="text-indigo-300 text-xs uppercase font-bold tracking-widest mb-6">{plan.subtitle}</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-extrabold text-emerald-400">{plan.price}</span>
                  <span className="ml-2 text-indigo-300 text-sm">/ {plan.feature}</span>
                </div>
                <hr className="border-white/10 my-8" />
                <ul className="space-y-4 mb-10">
                  {plan.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center text-indigo-100 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${idx === 1 ? 'bg-emerald-500 text-indigo-950 hover:bg-emerald-400' : 'bg-white/10 hover:bg-white/20'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4">
            <div>
              <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4">The Future</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">{t.roadmapTitle}</h3>
            </div>
            <div className="bg-slate-100 p-2 rounded-xl inline-flex">
              <button className="px-4 py-2 rounded-lg bg-white shadow-sm text-sm font-bold text-slate-900">Quarterly View</button>
              <button className="px-4 py-2 text-sm font-bold text-slate-500">Annual</button>
            </div>
          </div>
          
          <div className="space-y-6">
            {ROADMAP.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-indigo-200 transition-all">
                <div className="md:w-32 mb-4 md:mb-0">
                  <span className="text-indigo-600 font-extrabold text-lg">{item.period}</span>
                </div>
                <div className="flex-grow md:ml-8 md:mr-12">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : item.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/5 -skew-x-12 transform origin-top translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">{t.contactTitle}</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Whether you are an agent looking for protection or a bank looking for SME growth, we are ready to connect.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">I am a...</label>
                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all appearance-none cursor-pointer">
                      <option>Mobile Money Agent</option>
                      <option>Bank Representative</option>
                      <option>Insurance Partner</option>
                      <option>Investor</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all resize-none" placeholder="Tell us about your needs..."></textarea>
                </div>
                <button className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center">
                  Submit Interest
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
            
            <div className="bg-indigo-900 p-8 md:p-16 text-white flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-8">Why Nexus Link?</h4>
              <ul className="space-y-10">
                <li className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-2xl mr-6">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Proven Security</h5>
                    <p className="text-sm text-indigo-200 leading-relaxed">Our multi-layered fraud detection engine is trained on millions of real-world African transaction patterns.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-2xl mr-6">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Local Expertise</h5>
                    <p className="text-sm text-indigo-200 leading-relaxed">Built by engineers and financial experts based in Kigali, Nairobi, and Dar es Salaam.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-2xl mr-6">
                    <Database className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Regulatory Compliant</h5>
                    <p className="text-sm text-indigo-200 leading-relaxed">Working closely with Central Banks to ensure stability and trust in the digital ecosystem.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-16 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <img src="https://picsum.photos/seed/ceo/100/100" className="w-12 h-12 rounded-full border-2 border-emerald-500" alt="CEO" />
                  <div>
                    <p className="font-bold text-sm">Samuel Ngoga</p>
                    <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Founder, Nexus Inc</p>
                  </div>
                </div>
                <p className="text-sm italic text-indigo-100 font-medium">
                  "Our mission is to ensure that no agent in East Africa has to close their shop because of fraud or lack of liquidity ever again."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;

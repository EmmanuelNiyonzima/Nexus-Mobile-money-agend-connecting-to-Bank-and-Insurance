
import React from 'react';
import { 
  ShieldAlert, 
  Zap, 
  BarChart3, 
  PhoneCall, 
  TrendingUp, 
  Users, 
  Building2, 
  Umbrella,
  Globe,
  Activity,
  ArrowRight
} from 'lucide-react';
import { Language } from './types.ts';

export const TRANSLATIONS: Record<Language, any> = {
  EN: {
    navHome: 'Home',
    navSolution: 'Solution',
    navHowItWorks: 'How it Works',
    navImpact: 'Markets & Impact',
    heroTitle: 'Empowering Mobile Money Agents, Connecting Banks & Insurance',
    heroSub: 'Nexus Link is the trusted financial infrastructure platform for East Africa, providing fraud protection, instant e-float, and business growth tools.',
    heroCTA1: 'Join as an Agent',
    heroCTA2: 'Partner with Us',
    problemTitle: 'The Challenges of Mobile Money',
    solutionTitle: 'The Nexus Link Solution',
    benefitsTitle: 'Benefits for Everyone',
    pricingTitle: 'Simple & Transparent Revenue Model',
    impactTitle: 'Impacting East Africa',
    roadmapTitle: 'Our Strategic Roadmap',
    aboutTitle: 'About Nexus Inc',
    contactTitle: 'Get Started Today',
    countries: 'Rwanda, Kenya, Uganda, Tanzania'
  },
  SW: {
    navHome: 'Mwanzo',
    navSolution: 'Suluhisho',
    navHowItWorks: 'Jinsi Inavyofanya Kazi',
    navImpact: 'Masoko na Athari',
    heroTitle: 'Kuwezesha Mawakala wa Pesa, Kuunganisha Benki na Bima',
    heroSub: 'Nexus Link ni miundombinu ya kifedha inayominika Afrika Mashariki, ikitoa ulinzi dhidi ya ulaghai na float ya papo hapo.',
    heroCTA1: 'Jiunge kama Wakala',
    heroCTA2: 'Shirikiana nasi',
    problemTitle: 'Changamoto za Pesa kwa Njia ya Simu',
    solutionTitle: 'Suluhisho la Nexus Link',
    benefitsTitle: 'Faida kwa Kila Mtu',
    pricingTitle: 'Mfumo wa Mapato ulio Wazi',
    impactTitle: 'Kuathiri Afrika Mashariki',
    roadmapTitle: 'Mpango Kazi Wetu',
    aboutTitle: 'Kuhusu Nexus Inc',
    contactTitle: 'Anza Leo',
    countries: 'Rwanda, Kenya, Uganda, Tanzania'
  },
  RW: {
    navHome: 'Ahabanza',
    navSolution: 'Igisubizo',
    navHowItWorks: 'Uko Bikora',
    navImpact: 'Amasoko',
    heroTitle: 'Guha imbaraga abakozi, Guhuza Amabanki n\'Ubwishingizi',
    heroSub: 'Nexus Link ni urubuga rwizewe muri Afurika y\'Iburasirazuba rwashyiriweho kurinda ubujura no gufasha mawakala kubona e-float.',
    heroCTA1: 'Iyandikishe nka Agent',
    heroCTA2: 'Fatanya natwe',
    problemTitle: 'Ibikomeye mawakala bahura nabyo',
    solutionTitle: 'Igisubizo cya Nexus Link',
    benefitsTitle: 'Inyungu kuri bose',
    pricingTitle: 'Uburyo bugaragara bw\'inyungu',
    impactTitle: 'Gufasha Afurika y\'Iburasirazuba',
    roadmapTitle: 'Icyerekezo Cyacu',
    aboutTitle: 'Kuhusu Nexus Inc',
    contactTitle: 'Tangira Uyu Munsi',
    countries: 'Rwanda, Kenya, Uganda, Tanzania'
  },
  LG: {
    navHome: 'Waka',
    navSolution: 'Ekiggwaamu',
    navHowItWorks: 'Engeri gye bikolamu',
    navImpact: 'Obutale',
    heroTitle: 'Okusobozesa aba-agent, okugatta Baanka n\'Inshuwolansi',
    heroSub: 'Nexus Link ye ngeri ey\'ekika ekya waggulu mu Buvanjuba bwa Afirika okulwanyisa abafere n\'okuwa aba-agent e-float.',
    heroCTA1: 'Gattako nga Agent',
    heroCTA2: 'Gatta naffe',
    problemTitle: 'Ebizibu aba-agent bye bayitamu',
    solutionTitle: 'Ekiggwaamu kya Nexus Link',
    benefitsTitle: 'Miganyulo eri buli omu',
    pricingTitle: 'Enfuna nfuuzi',
    impactTitle: 'Okukula kw\'Obuvanjuba bwa Afirika',
    roadmapTitle: 'Enteekateeka yaffe',
    aboutTitle: 'Kuhusu Nexus Inc',
    contactTitle: 'Tandika leero',
    countries: 'Rwanda, Kenya, Uganda, Tanzania'
  }
};

export const PROBLEMS = [
  {
    icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
    title: 'Widespread Fraud',
    desc: 'Agents lose millions annually to sophisticated scams and transaction spoofing.',
    stat: '45%'
  },
  {
    icon: <Activity className="w-8 h-8 text-orange-500" />,
    title: 'Float Shortages',
    desc: 'Business stalls when agents run out of liquidity (e-float) during peak hours.',
    stat: 'Daily'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
    title: 'Shrinking Margins',
    desc: 'High operational costs and low commissions squeeze agent profitability.',
    stat: '-12%'
  }
];

export const SOLUTIONS = [
  {
    icon: <ShieldAlert className="w-6 h-6 text-indigo-600" />,
    title: 'Fraud Prevention',
    desc: 'Real-time transaction monitoring and instant insurance coverage for verified losses.'
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
    title: 'Instant E-Float',
    desc: 'Access working capital and liquidity instantly through our network of partner banks.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
    title: 'Business Insights',
    desc: 'Detailed dashboards and analytics to help agents track performance and trends.'
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-indigo-600" />,
    title: 'Omnichannel Access',
    desc: 'Reliable access via USSD for feature phones and a sleek mobile app for smartphones.'
  }
];

export const PRICING = [
  {
    title: 'Agents',
    subtitle: 'Growth & Safety',
    price: '1-2%',
    feature: 'Float facilitation fee',
    benefits: ['Fraud protection', 'Instant credit', 'Revenue tracking']
  },
  {
    title: 'Insurers',
    subtitle: 'Risk Management',
    price: '10-15%',
    feature: 'Insurance margins',
    benefits: ['Verified claims', 'Real-time data', 'Lower overheads']
  },
  {
    title: 'Banks/Partners',
    subtitle: 'Ecosystem Access',
    price: 'SaaS',
    feature: 'Custom Subscriptions',
    benefits: ['SME lending API', 'KYC integration', 'Verified agent base']
  }
];

export const ROADMAP = [
  { period: 'Phase 1', status: 'Active', title: 'Rwanda Rollout', desc: 'Full infrastructure launch with 1,000+ pilot agents.' },
  { period: 'Phase 2', status: 'Upcoming', title: 'Kenya Expansion', desc: 'Focusing on M-Pesa ecosystem integration and insurance.' },
  { period: 'Phase 3', status: 'Scheduled', title: 'UG & TZ Entry', desc: 'Unified cross-border agent liquidity network.' },
  { period: 'Phase 4', status: 'Future', title: 'AI Insights', desc: 'Predictive fraud detection and automated credit scoring.' }
];

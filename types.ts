
export type Language = 'EN' | 'SW' | 'RW' | 'LG';

export interface Translation {
  navHome: string;
  navSolution: string;
  navHowItWorks: string;
  navImpact: string;
  heroTitle: string;
  heroSub: string;
  heroCTA1: string;
  heroCTA2: string;
  problemTitle: string;
  solutionTitle: string;
  benefitsTitle: string;
  pricingTitle: string;
}

export interface CardData {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
}

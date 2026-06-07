export type ActiveTab = 'home' | 'services' | 'portfolio' | 'sectors' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: 'all' | 'corporate' | 'retail' | 'hospitality' | 'education';
  sector: string;
  image: string;
  location: string;
  description: string;
  specifications: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
  iconName: 'Building' | 'Signpost' | 'Zap' | 'Maximize2' | 'Compass' | 'Truck';
  image?: string;
}

export interface SubServiceItem {
  icon: string;
  title: string;
  desc: string;
  image?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  breadcrumb: string;
  desc: string;
  icon: string;
  image?: string;
  items: SubServiceItem[];
  gallery?: string[];
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  highlightIcon: string;
  image: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  emailAddress: string;
  serviceSelected: string;
  details: string;
  timestamp: string;
  status: 'In Review' | 'Drafting Blueprint' | 'Project Manager Assigned' | 'In Production';
}

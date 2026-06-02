import { Project, ServiceItem, SectorItem } from './types';

// Import local service images
import serviceIndoor from '../assets/service-indoor.jpeg';
import serviceOutdoor from '../assets/service-outdoor.jpeg';
import serviceLed from '../assets/service-led.jpeg';
import service3dLetters from '../assets/service-3d-letters.jpeg';
import serviceWayfinding from '../assets/service-wayfinding.jpeg';
import serviceVehicle from '../assets/service-vehicle.jpeg';

// Import local project images
import projectAldar from '../assets/project-aldar.jpeg';
import projectGalleria from '../assets/project-galleria.jpeg';
import projectCleveland from '../assets/project-cleveland.jpeg';
import projectYas from '../assets/project-yas.jpeg';
import projectUaeu from '../assets/project-uaeu.jpeg';

// Import local sector images
import sectorCorporate from '../assets/sector-corporate.jpeg';
import sectorRetail from '../assets/sector-retail.jpeg';

export const STATIC_SERVICES: ServiceItem[] = [
  {
    id: 'indoor',
    title: 'Indoor Signage',
    description: 'Premium directional, informational, and branding solutions tailored for corporate interiors and retail spaces.',
    bulletPoints: [
      'Reception & Lobby branding',
      'Architectural Wayfinding & directories',
      'Safety, ADA & Regulatory plaques',
      'Custom acrylic & metallic dimensional plates'
    ],
    iconName: 'Building',
    image: serviceIndoor
  },
  {
    id: 'outdoor',
    title: 'Outdoor Signage',
    description: 'Durable, high-impact exterior signage designed to withstand extreme UAE desert conditions while commanding attention.',
    bulletPoints: [
      'Monolithic Pylons & Totems',
      'Structural Facade systems',
      'Architectural Roof branding',
      'Engineered metal backboards & frames'
    ],
    iconName: 'Signpost',
    image: serviceOutdoor
  },
  {
    id: 'led',
    title: 'LED Sign Boards',
    description: 'Energy-efficient, ultra-vibrant illuminated signage engineered for maximum visual contrast day and night.',
    bulletPoints: [
      'Edge-lit and backlit acrylic logos',
      'Dynamic RGB control systems',
      'Abu Dhabi Municipality standards compliant',
      'Zero-emission low-voltage energy profiles'
    ],
    iconName: 'Zap',
    image: serviceLed
  },
  {
    id: '3d-letters',
    title: '3D Letter Signage',
    description: 'Precision CNC-cut dimensional architectural lettering in brushed stainless steel, mirror gold, brass, or acrylic.',
    bulletPoints: [
      'High-grade AISI 316 steel finishes',
      'Push-through acrylic illumination',
      'Surgical precision stud mount designs',
      'Internal neon-effect high-efficiency lamps'
    ],
    iconName: 'Maximize2',
    image: service3dLetters
  },
  {
    id: 'wayfinding',
    title: 'Wayfinding Signs',
    description: 'Intuitive, cohesive navigational systems engineered specifically for complex corporate campuses, healthcare, and public spaces.',
    bulletPoints: [
      'Comprehensive human traffic blueprints',
      'Modular easily-upgraded slat systems',
      'Compliant bilingual typography (Arabic & English)',
      'Underground parking color routing codes'
    ],
    iconName: 'Compass',
    image: serviceWayfinding
  },
  {
    id: 'vehicle',
    title: 'Vehicle Branding',
    description: 'Premium high-fidelity cast wraps and precise graphics designed to transform commercial fleets into mobile billboards.',
    bulletPoints: [
      'Avery Dennison & 3M certified wraps',
      'Heat-resistant UV protective laminate coat',
      'Symmetric alignment over complex vehicle curves',
      'Adopts RTA regulatory guidelines perfectly'
    ],
    iconName: 'Truck',
    image: serviceVehicle
  }
];

export const STATIC_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Aldar Headquarters',
    category: 'corporate',
    sector: 'Corporate Real Estate',
    location: 'Al Raha, Abu Dhabi',
    image: projectAldar,
    description: 'High-end structural entrance directory, external architectural facade branding, and dynamic elevator core signages.',
    specifications: '316L Marine Stainless Steel • Integrated Halo LEDs • Structural Glass Panels'
  },
  {
    id: 'proj-2',
    title: 'The Galleria Mall Mall',
    category: 'retail',
    sector: 'High-End Retail & Leisure',
    location: 'Al Maryah Island, Abu Dhabi',
    image: projectGalleria,
    description: 'Master architectural retail wing directories, premium custom tenant lettering in structural white marble, and public wayfinding.',
    specifications: 'Pristine White Volakas Marble • Mirror Gold Metal Filaments • Integrated Diffused LEDs'
  },
  {
    id: 'proj-3',
    title: 'Cleveland Clinic Wayfinding',
    category: 'hospitality',
    sector: 'Healthcare & Hospitality',
    location: 'Al Maryah Island, Abu Dhabi',
    image: projectCleveland,
    description: 'Anti-microbial modular indoor wayfinding columns and luminous emergency direction headers mapping complex clinical wings.',
    specifications: 'Powder-coated Silver Aluminum • Anti-bacterial Shell • Contrast Laser Cut Graphics'
  },
  {
    id: 'proj-4',
    title: 'Yas Viceroy Hospitality Suite',
    category: 'hospitality',
    sector: 'Premium Leisure & Hospitality',
    location: 'Yas Island, Abu Dhabi',
    image: projectYas,
    description: 'Dynamic electronic LED backlit entrance markers, exclusive presidential ballroom branding, and customized room indicators.',
    specifications: 'Bronze Architectural Frame • Hidden warm light conduits • Laser Embossed Mahogany'
  },
  {
    id: 'proj-5',
    title: 'UAE University Campus Signage',
    category: 'education',
    sector: 'Education & Institutional',
    location: 'Al Ain, Abu Dhabi District',
    image: projectUaeu,
    description: 'External campus monoliths, campus maps pylon systems, block directories, and lecture hall numeric markers.',
    specifications: 'Corrosion-proof Extruded Slat System • Polycarbonate Screen Protectors • Fluorescent Night-Strip'
  }
];

export const STATIC_SECTORS: SectorItem[] = [
  {
    id: 'sec-corporate',
    title: 'Corporate Enterprises',
    description: 'Enhance your workplace atmosphere with prestigious signage configurations that radiate professionalism, clarity, and authority.',
    challenge: 'Large multi-floor office wings with high traffic require durable, professional fixtures that align exactly with brand visual manuals.',
    solution: 'Engineered modular aluminum slat directory columns, luxury 3D reception metal logos, and satin-finish glass board separators.',
    highlightIcon: 'Building',
    image: sectorCorporate
  },
  {
    id: 'sec-retail',
    title: 'Luxury Retail Developments',
    description: 'High-contrast, high-finish storefront installations that convert casual shopping mall footfall into visual brand disciples.',
    challenge: 'Retail spaces demand immediate, breathtaking sensory impact while remaining fully compliant with strict master-developer covenants.',
    solution: 'Fitted mirror-polished gold letters, precision laser-etched edge-mounted lighting panels, and flawless marble integration frameworks.',
    highlightIcon: 'Sparkles',
    image: sectorRetail
  },
  {
    id: 'sec-hospitality',
    title: 'Hospitality & Leisure',
    description: 'Prestige hotel signage that aligns naturally with high-end interior decorations and establishes unmatched elegant spaces.',
    challenge: 'Complex guest flow requirements need visible but beautifully subtle signage solutions that enhance the structural luxury.',
    solution: 'Handcrafted premium brushed bronze door panels, hidden warm LED cove illumination, and modular parking path indicators.',
    highlightIcon: 'Hotel',
    image: projectYas
  }
];

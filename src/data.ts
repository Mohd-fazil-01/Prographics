import { Project, ServiceItem, SectorItem } from './types';

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
    iconName: 'Building'
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
    iconName: 'Signpost'
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
    iconName: 'Zap'
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
    iconName: 'Maximize2'
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
    iconName: 'Compass'
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
    iconName: 'Truck'
  }
];

export const STATIC_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Aldar Headquarters',
    category: 'corporate',
    sector: 'Corporate Real Estate',
    location: 'Al Raha, Abu Dhabi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl58bJa2rM2tYVnx9OzaD9w4aRL_f-7-4GTKoUje1LpdMhaWo5iMXOox3vUN6YjbJ857l9sMdXTPXbQejSGuMR8cp06e3S8c9ZzwAtA2vmwxWLbknkW1it6sueKMNI8zUsZIj_Pqw1uvYmI-OX8XP2dmqSeDQie_0PlVv_IaQ2mUalWI1c_NkCft3VAqewmpx1-KggXuvgMiYIz_K-PJavoeMdYV04FFoXsyb4lLvxtgpJA0OxO8KPUrrbUwIJsoMNJ2Uw4wqtlh8',
    description: 'High-end structural entrance directory, external architectural facade branding, and dynamic elevator core signages.',
    specifications: '316L Marine Stainless Steel • Integrated Halo LEDs • Structural Glass Panels'
  },
  {
    id: 'proj-2',
    title: 'The Galleria Mall Mall',
    category: 'retail',
    sector: 'High-End Retail & Leisure',
    location: 'Al Maryah Island, Abu Dhabi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3LXUeJHPM6UUvPsNXU4iu41GaSc2fPmrif7_-IGSg6dzDzIs4W2Fc93rTQbHeRKplS-YytgCdRsUwp1QQ7o2NzIeWvFWS7KpEXU298psCfDshivOr7qSFJjnBMtuY2GBov-FGI_X63rcPych9tXcc0DdVQpUHVh_lhSBSlBoX2XUpNyhGJXY2Snzjujwp01JlgFepH6qQWkn-2FqlWBrZXIgriw4vweXoL_wrZzxp651qylCS7nL7JIZI0LD9Tj8JS7fldF3nYr0',
    description: 'Master architectural retail wing directories, premium custom tenant lettering in structural white marble, and public wayfinding.',
    specifications: 'Pristine White Volakas Marble • Mirror Gold Metal Filaments • Integrated Diffused LEDs'
  },
  {
    id: 'proj-3',
    title: 'Cleveland Clinic Wayfinding',
    category: 'hospitality',
    sector: 'Healthcare & Hospitality',
    location: 'Al Maryah Island, Abu Dhabi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuoi8AOMfmlvVmulhBNptYEYvwwW6qjTwtJPItwIiUkEmW7FzBtr0GLqqLtHRFGeNpfO2hLhMjjHebn6n074HLfFUXiBW9lZ4XOnC9aK38FQeEwWmy-PeBWgzvYr2WRsoQ1uQQN2HtMVUAKKtM5TuZBEPhNrhemv9lelu4sVOjINU0RjsvId2WMQvlw4rRc27nOmw5brSKoRRnLtl0N5JXeKhbz3NcMg3PSGIFPhMHJsNvsfXdwUHmDA3B_Bdc0mTsCoX6VGALFWQ',
    description: 'Anti-microbial modular indoor wayfinding columns and luminous emergency direction headers mapping complex clinical wings.',
    specifications: 'Powder-coated Silver Aluminum • Anti-bacterial Shell • Contrast Laser Cut Graphics'
  },
  {
    id: 'proj-4',
    title: 'Yas Viceroy Hospitality Suite',
    category: 'hospitality',
    sector: 'Premium Leisure & Hospitality',
    location: 'Yas Island, Abu Dhabi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl58bJa2rM2tYVnx9OzaD9w4aRL_f-7-4GTKoUje1LpdMhaWo5iMXOox3vUN6YjbJ857l9sMdXTPXbQejSGuMR8cp06e3S8c9ZzwAtA2vmwxWLbknkW1it6sueKMNI8zUsZIj_Pqw1uvYmI-OX8XP2dmqSeDQie_0PlVv_IaQ2mUalWI1c_NkCft3VAqewmpx1-KggXuvgMiYIz_K-PJavoeMdYV04FFoXsyb4lLvxtgpJA0OxO8KPUrrbUwIJsoMNJ2Uw4wqtlh8',
    description: 'Dynamic electronic LED backlit entrance markers, exclusive presidential ballroom branding, and customized room indicators.',
    specifications: 'Bronze Architectural Frame • Hidden warm light conduits • Laser Embossed Mahogany'
  },
  {
    id: 'proj-5',
    title: 'UAE University Campus Signage',
    category: 'education',
    sector: 'Education & Institutional',
    location: 'Al Ain, Abu Dhabi District',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuoi8AOMfmlvVmulhBNptYEYvwwW6qjTwtJPItwIiUkEmW7FzBtr0GLqqLtHRFGeNpfO2hLhMjjHebn6n074HLfFUXiBW9lZ4XOnC9aK38FQeEwWmy-PeBWgzvYr2WRsoQ1uQQN2HtMVUAKKtM5TuZBEPhNrhemv9lelu4sVOjINU0RjsvId2WMQvlw4rRc27nOmw5brSKoRRnLtl0N5JXeKhbz3NcMg3PSGIFPhMHJsNvsfXdwUHmDA3B_Bdc0mTsCoX6VGALFWQ',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl58bJa2rM2tYVnx9OzaD9w4aRL_f-7-4GTKoUje1LpdMhaWo5iMXOox3vUN6YjbJ857l9sMdXTPXbQejSGuMR8cp06e3S8c9ZzwAtA2vmwxWLbknkW1it6sueKMNI8zUsZIj_Pqw1uvYmI-OX8XP2dmqSeDQie_0PlVv_IaQ2mUalWI1c_NkCft3VAqewmpx1-KggXuvgMiYIz_K-PJavoeMdYV04FFoXsyb4lLvxtgpJA0OxO8KPUrrbUwIJsoMNJ2Uw4wqtlh8'
  },
  {
    id: 'sec-retail',
    title: 'Luxury Retail Developments',
    description: 'High-contrast, high-finish storefront installations that convert casual shopping mall footfall into visual brand disciples.',
    challenge: 'Retail spaces demand immediate, breathtaking sensory impact while remaining fully compliant with strict master-developer covenants.',
    solution: 'Fitted mirror-polished gold letters, precision laser-etched edge-mounted lighting panels, and flawless marble integration frameworks.',
    highlightIcon: 'Sparkles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3LXUeJHPM6UUvPsNXU4iu41GaSc2fPmrif7_-IGSg6dzDzIs4W2Fc93rTQbHeRKplS-YytgCdRsUwp1QQ7o2NzIeWvFWS7KpEXU298psCfDshivOr7qSFJjnBMtuY2GBov-FGI_X63rcPych9tXcc0DdVQpUHVh_lhSBSlBoX2XUpNyhGJXY2Snzjujwp01JlgFepH6qQWkn-2FqlWBrZXIgriw4vweXoL_wrZzxp651qylCS7nL7JIZI0LD9Tj8JS7fldF3nYr0'
  },
  {
    id: 'sec-hospitality',
    title: 'Hospitality & Leisure',
    description: 'Prestige hotel signage that aligns naturally with high-end interior decorations and establishes unmatched elegant spaces.',
    challenge: 'Complex guest flow requirements need visible but beautifully subtle signage solutions that enhance the structural luxury.',
    solution: 'Handcrafted premium brushed bronze door panels, hidden warm LED cove illumination, and modular parking path indicators.',
    highlightIcon: 'Hotel',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBHS_vlWYH-YXRwsAyHugPlQYqQlgq_g2Qn3yhfxwVN99oLcKSffse9iMA3pjvSO4fvL3o5Fjm71svhlJWF2_l77LMCWE-hTqSCDWgSwKLuUszbB15OgulkXMZSmpKxuMNY2Nk27J3kGbVgTw9UvIs01k_ocXIFAeNjXJyly7A-Kly1d_OgaBf-4qa9oPGRvTpIQcc9YtLVEakCX6-u9OGVc655FAJJ2iNtLO5Wtx6Z_c2c85hZHCzAxudkwAeuXWaQfMt5ohBxWs'
  }
];

import { Project, ServiceItem, SectorItem, ServiceCategory } from './types';

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

// Import sub-service images from "pro graphics service image"
import img3dSignage from '../assets/pro graphics service image/signage 3d.jpg';
import img3dLightBox from '../assets/pro graphics service image/3D Light Box.jpg';
import img2dSignageBoards from '../assets/pro graphics service image/2D Signage Boards.jpg';
import imgPlotterCuttingLetters from '../assets/pro graphics service image/Plotter Cutting Letters.jpg';
import imgLedLetters from '../assets/pro graphics service image/LED Letters.jpg';
import imgAluminumLetters from '../assets/pro graphics service image/Aluminum Letters.jpg';
import imgSsLetters from '../assets/pro graphics service image/SS Letters (Stainless Steel).jpeg';
import imgAcrylicLetters from '../assets/pro graphics service image/Acrylic Letters.jpg';
import imgLedSignBoards from '../assets/pro graphics service image/LED Sign Boards.jpg';
import imgNormalPaintedLetters from '../assets/pro graphics service image/Normal Painted Letters.jpg';
import imgPowderCoatedLetters from '../assets/pro graphics service image/Powder Coated Letters.jpg';
import imgCustomFabrication from '../assets/pro graphics service image/Custom Fabrication.jpg';

import imgUvFlatbedPrinting from '../assets/pro graphics service image/UV Flatbed Printing.jpg';
import imgAcrylicUvPrints from '../assets/pro graphics service image/Acrylic UV Prints.jpg';
import imgAluminumCompositePrints from '../assets/pro graphics service image/Aluminum Composite Prints.jpg';
import imgFoamBoardUvPrints from '../assets/pro graphics service image/Foam Board UV Prints.jpg';
import imgBacklitUvFilmPrints from '../assets/pro graphics service image/Backlit UV Film Prints.jpg';
import imgCustomUvSubstratePrinting from '../assets/pro graphics service image/Custom UV Substrate Printing.jpg';

import imgPushPullSigns from '../assets/pro graphics service image/Push & Pull Signs.jpg';
import imgExitSigns from '../assets/pro graphics service image/Exit Signs.jpg';
import imgSsSignage from '../assets/pro graphics service image/SS Signage.jpg';
import imgFireSafetySigns from '../assets/pro graphics service image/Fire Safety Signs.jpg';
import imgHazardWarningSigns from '../assets/pro graphics service image/Hazard Warning Signs.jpg';
import imgNoSmokingSigns from '../assets/pro graphics service image/No Smoking Signs.png';
import imgBuildingFloorPlans from '../assets/pro graphics service image/Building Floor Plans.png';
import imgRestrictedAreaSigns from '../assets/pro graphics service image/Restricted Area Signs.png';

import imgBuildingFasciaSigns from '../assets/pro graphics service image/Building Fascia Signs.jpg';
import imgPylonTotemSigns from '../assets/pro graphics service image/PylonTotem Signs.jpg';
import imgHoardingBoards from '../assets/pro graphics service image/Hoarding Boards.jpg';
import imgBacklitOutdoorSigns from '../assets/pro graphics service image/Backlit Outdoor Signs.jpg';
import imgRoadsideSignage from '../assets/pro graphics service image/Roadside Signage.jpg';
import imgGateEntranceSigns from '../assets/pro graphics service image/Gate & Entrance Signs.jpg';

import imgDirectionalArrowSigns from '../assets/pro graphics service image/Directional Arrow Signs.jpg';
import imgSiteBuildingMaps from '../assets/pro graphics service image/Site & Building Maps.jpg';
import imgSpeedLimitSigns from '../assets/pro graphics service image/Speed Limit Signs.jpg';
import imgNoSmokingRegulatorySigns from '../assets/pro graphics service image/No Smoking Regulatory Signs.jpg';
import imgParkingSignage from '../assets/pro graphics service image/Parking Signage.jpg';
import imgZoneFloorIdentification from '../assets/pro graphics service image/Zone & Floor Identification.jpg';
import imgYouAreHereMaps from '../assets/pro graphics service image/You Are Here Maps.png';
import imgLiftStaircaseSigns from '../assets/pro graphics service image/Lift & Staircase Signs.jpg';

import imgRetailKiosks from '../assets/pro graphics service image/Retail Kiosks.jpg';
import imgDigitalDisplayKiosks from '../assets/pro graphics service image/Digital Display Kiosks.jpg';
import imgExhibitionKiosks from '../assets/pro graphics service image/Exhibition Kiosks.jpg';
import imgReceptionInformationKiosks from '../assets/pro graphics service image/Reception Information Kiosks.jpg';

import imgVehicleFleetWrapping from '../assets/pro graphics service image/Vehicle Fleet Wrapping.jpg';
import imgStickerBrandingSolutions from '../assets/pro graphics service image/Sticker Branding Solutions.jpg';
import imgVehiclePartialWraps from '../assets/pro graphics service image/Vehicle Partial Wraps.jpg';
import imgWindowGraphicsFrosting from '../assets/pro graphics service image/Window Graphics & Frosting.jpg';
import imgPackagingLabelBranding from '../assets/pro graphics service image/Packaging & Label Branding.jpg';
import imgWallMuralsGraphics from '../assets/pro graphics service image/Wall Murals & Graphics.jpg';

export const STATIC_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'signage',
    title: 'Signage Solutions',
    breadcrumb: 'Signage Solutions',
    desc: 'Complete custom signage manufacturing — from 3D illuminated letters to flat-cut boards. We fabricate all types of indoor and outdoor signage with premium materials and precision installation.',
    icon: '🪧',
    image: service3dLetters,
    items: [
      { icon: '🔴', title: '3D Signage', desc: 'Three-dimensional raised letters and logos for maximum visual impact. Custom-built to exact dimensions for any surface.', image: img3dSignage },
      { icon: '💡', title: '3D Light Box', desc: 'Illuminated 3D light boxes with internal LED lighting — vibrant visibility day and night, energy-efficient design.', image: img3dLightBox },
      { icon: '🪧', title: '2D Signage Boards', desc: 'Flat-format signage boards in all sizes and materials — perfect for storefronts, offices, and directories.', image: img2dSignageBoards },
      { icon: '✂️', title: 'Plotter Cutting Letters', desc: 'Precision plotter-cut vinyl letters and shapes for windows, walls, and vehicles. Any font, any color.', image: imgPlotterCuttingLetters },
      { icon: '💡', title: 'LED Letters', desc: 'Individually illuminated LED channel letters — the gold standard for storefront and building identification signage.', image: imgLedLetters },
      { icon: '🔩', title: 'Aluminum Letters', desc: 'Durable brushed or coated aluminum fabricated letters — premium look for corporate and architectural applications.', image: imgAluminumLetters },
      { icon: '✨', title: 'SS Letters (Stainless Steel)', desc: 'High-gloss or satin-finish stainless steel letters — ideal for luxury brands, hotels, and premium corporate identity.', image: imgSsLetters },
      { icon: '🔷', title: 'Acrylic Letters', desc: 'Cut and polished acrylic letters in any color or finish — lightweight, durable, and versatile for indoor/outdoor use.', image: imgAcrylicLetters },
      { icon: '🟥', title: 'LED Sign Boards', desc: 'Full LED illuminated sign boards — static or scrolling — for shops, offices, restaurants, and events.', image: imgLedSignBoards },
      { icon: '🖊️', title: 'Normal Painted Letters', desc: 'Hand-painted or spray-painted letters for budget-friendly, custom signage with a crafted finish.', image: imgNormalPaintedLetters },
      { icon: '🎨', title: 'Powder Coated Letters', desc: 'Powder-coated metal letters with a tough, weather-resistant finish available in hundreds of RAL colors.', image: imgPowderCoatedLetters },
      { icon: '🌟', title: 'Custom Fabrication', desc: 'Bespoke sign fabrication combining multiple materials and techniques — fully customized to your brand guidelines.', image: imgCustomFabrication }
    ]
  },
  {
    id: 'uv',
    title: 'UV Printing Signage',
    breadcrumb: 'UV Printing',
    desc: 'State-of-the-art UV flatbed printing technology that prints directly onto virtually any surface. High-resolution, scratch-resistant, and weather-proof — ideal for retail, exhibitions, and exterior use.',
    icon: '🖨️',
    image: serviceLed,
    items: [
      { icon: '🖨️', title: 'UV Flatbed Printing', desc: 'Direct UV printing on rigid substrates up to 3m wide — acrylic, aluminum, wood, glass, foam board, and more.', image: imgUvFlatbedPrinting },
      { icon: '🪟', title: 'Acrylic UV Prints', desc: 'Crystal-clear or frosted acrylic panels with UV-cured full-color graphics — perfect for reception areas and retail.', image: imgAcrylicUvPrints },
      { icon: '🔲', title: 'Aluminum Composite Prints', desc: 'UV printing on aluminum composite (ACM) panels — lightweight, rigid, and weather-resistant for outdoor fascias.', image: imgAluminumCompositePrints },
      { icon: '🔳', title: 'Foam Board UV Prints', desc: 'High-quality UV prints on PVC foam board — lightweight and cost-effective for displays and temporary signage.', image: imgFoamBoardUvPrints },
      { icon: '🌈', title: 'Backlit UV Film Prints', desc: 'UV-printed translucent films for light boxes and illuminated displays with vibrant color output.', image: imgBacklitUvFilmPrints },
      { icon: '🏷️', title: 'Custom UV Substrate Printing', desc: 'UV printing on unique materials including leather, fabric, canvas, tiles, and specialty surfaces.', image: imgCustomUvSubstratePrinting }
    ]
  },
  {
    id: 'safety',
    title: 'Safety & Compliance Signs',
    breadcrumb: 'Safety Signs',
    desc: 'Mandatory and regulatory signage for buildings — from simple push/pull door signs to full fire safety and evacuation signage systems compliant with UAE civil defense requirements.',
    icon: '🚪',
    image: serviceIndoor,
    items: [
      { icon: '🚪', title: 'Push & Pull Signs', desc: 'Standard and custom push/pull door signs in acrylic, SS, or vinyl — clear, professional, and durable.', image: imgPushPullSigns },
      { icon: '🚪', title: 'Exit Signs', desc: 'Illuminated and non-illuminated exit signs meeting UAE civil defense and building code requirements.', image: imgExitSigns },
      { icon: '✨', title: 'SS Signage', desc: 'Stainless steel mandatory compliance signs — door numbers, room labels, floor plates, and corporate directory signs.', image: imgSsSignage },
      { icon: '🔥', title: 'Fire Safety Signs', desc: 'Fire exit routes, fire extinguisher location signs, fire assembly point boards — complete fire safety signage packages.', image: imgFireSafetySigns },
      { icon: '⚠️', title: 'Hazard Warning Signs', desc: 'OSHA and ISO-compliant hazard, caution, and warning signs for industrial, commercial, and public buildings.', image: imgHazardWarningSigns },
      { icon: '🚭', title: 'No Smoking Signs', desc: 'Mandatory no-smoking signage for all building zones — standard and custom formats in multiple materials.', image: imgNoSmokingSigns },
      { icon: '🏢', title: 'Building Floor Plans', desc: 'Emergency evacuation floor plans and posted building layout maps — required for all commercial buildings.', image: imgBuildingFloorPlans },
      { icon: '🔒', title: 'Restricted Area Signs', desc: 'Authorized personnel only, restricted access, and security area signs in standard and customized formats.', image: imgRestrictedAreaSigns }
    ]
  },
  {
    id: 'outdoor',
    title: 'Outdoor Signage',
    breadcrumb: 'Outdoor Signage',
    desc: 'Large-scale outdoor signage solutions built to withstand the UAE climate — from building fascias and pylons to hoardings and roadside displays. All weather-sealed and UV-stable.',
    icon: '🏙️',
    image: serviceOutdoor,
    items: [
      { icon: '🏗️', title: 'Building Fascia Signs', desc: 'Large-format building identification signs mounted on facades — illuminated or non-illuminated, all materials.', image: imgBuildingFasciaSigns },
      { icon: '🗼', title: 'Pylon / Totem Signs', desc: 'Freestanding pylon and totem poles for car parks, malls, and roadside visibility — single or multi-tenant.', image: imgPylonTotemSigns },
      { icon: '📢', title: 'Hoarding Boards', desc: 'Construction site hoardings, project announcement boards, and large outdoor advertising panels.', image: imgHoardingBoards },
      { icon: '🔦', title: 'Backlit Outdoor Signs', desc: 'Outdoor illuminated signs with energy-efficient LED backlighting — maximum visibility night and day.', image: imgBacklitOutdoorSigns },
      { icon: '🚗', title: 'Roadside Signage', desc: 'Roadside advertising boards, display panels, and directional signboards for maximum passing traffic exposure.', image: imgRoadsideSignage },
      { icon: '🏛️', title: 'Gate & Entrance Signs', desc: 'Monumental entrance signage for residential compounds, commercial parks, and corporate campuses.', image: imgGateEntranceSigns }
    ]
  },
  {
    id: 'wayfinding',
    title: 'Wayfinding & Direction Signs',
    breadcrumb: 'Wayfinding Signs',
    desc: 'Comprehensive wayfinding systems that guide people efficiently through buildings, campuses, and public spaces. From simple directional arrows to full color-coded navigation systems.',
    icon: '🗺️',
    image: serviceWayfinding,
    items: [
      { icon: '➡️', title: 'Directional Arrow Signs', desc: 'Wall-mounted and suspended directional arrow signs — clear typography and color coding for intuitive navigation.', image: imgDirectionalArrowSigns },
      { icon: '🗺️', title: 'Site & Building Maps', desc: 'Printed and digitally-produced site maps, floor directories, and interactive kiosk maps for large facilities.', image: imgSiteBuildingMaps },
      { icon: '🚦', title: 'Speed Limit Signs', desc: 'Internal and external speed limit signs for car parks, warehouses, and private roads — standard and custom formats.', image: imgSpeedLimitSigns },
      { icon: '🚭', title: 'No Smoking / Regulatory Signs', desc: 'Complete regulatory signage including no smoking, no entry, no parking — UAE-standard formats and materials.', image: imgNoSmokingRegulatorySigns },
      { icon: '🅿️', title: 'Parking Signage', desc: 'Parking direction, bay numbering, reserved parking, and car park entry/exit signs — full parking signage systems.', image: imgParkingSignage },
      { icon: '🏥', title: 'Zone & Floor Identification', desc: 'Zone markers, floor level indicators, and department identification signs for hospitals, malls, and offices.', image: imgZoneFloorIdentification },
      { icon: '📍', title: 'You Are Here Maps', desc: 'Illustrated \'You Are Here\' location maps for lobbies, lift landings, and public spaces.', image: imgYouAreHereMaps },
      { icon: '🛗', title: 'Lift & Staircase Signs', desc: 'Lift lobby directional signs, staircase identification, and floor-level indicator boards.', image: imgLiftStaircaseSigns }
    ]
  },
  {
    id: 'kiosk',
    title: 'Kiosk Solutions',
    breadcrumb: 'Kiosk Solutions',
    desc: 'Custom-designed and fabricated kiosk units for retail, exhibitions, corporate lobbies, and public spaces. Built to your exact specifications with integrated branding and optional digital displays.',
    icon: '📺',
    image: serviceIndoor,
    items: [
      { icon: '🏪', title: 'Retail Kiosks', desc: 'Branded retail kiosks for malls and shopping centers — custom design, fabrication, and branding included.', image: imgRetailKiosks },
      { icon: '🖥️', title: 'Digital Display Kiosks', desc: 'Kiosk units with integrated digital screens for interactive directories, product displays, and self-service portals.', image: imgDigitalDisplayKiosks },
      { icon: '🎪', title: 'Exhibition Kiosks', desc: 'Lightweight modular exhibition kiosks and display stands — quick setup and dismantle for events and trade shows.', image: imgExhibitionKiosks },
      { icon: '🏢', title: 'Reception Information Kiosks', desc: 'Corporate reception area kiosks for visitor registration, information display, and brand presence.', image: imgReceptionInformationKiosks }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Wrapping Solutions',
    breadcrumb: 'Branding Solutions',
    desc: 'End-to-end branding solutions — from vehicle fleet wraps and banner stands to full environmental branding and sticker campaigns. We bring your brand to life across every surface.',
    icon: '🎨',
    image: serviceVehicle,
    items: [
      { icon: '🚌', title: 'Vehicle Fleet Wrapping', desc: 'Full and partial vehicle wraps for cars, vans, buses, and trucks — vibrant, durable, and precision-fitted.', image: imgVehicleFleetWrapping },
      { icon: '🏷️', title: 'Sticker Branding Solutions', desc: 'Custom die-cut stickers, label stickers, and large-format sticker installations for branding and promotions.', image: imgStickerBrandingSolutions },
      { icon: '🚗', title: 'Vehicle Partial Wraps', desc: 'Cost-effective partial vehicle wraps covering doors, bonnets, or rear panels — maximum impact, minimum spend.', image: imgVehiclePartialWraps },
      { icon: '🪟', title: 'Window Graphics & Frosting', desc: 'Decorative window frosting, one-way vision film, full-color window graphics, and corporate privacy films.', image: imgWindowGraphicsFrosting },
      { icon: '📦', title: 'Packaging & Label Branding', desc: 'Custom branded packaging labels, product stickers, and promotional material printing and finishing.', image: imgPackagingLabelBranding },
      { icon: '🎨', title: 'Wall Murals & Graphics', desc: 'Large-format wall murals, printed wallpapers, and hand-painted wall graphics for offices and retail spaces.', image: imgWallMuralsGraphics }
    ]
  }
];

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

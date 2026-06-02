const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../assets');

const filesToRename = [
  { old: 'Logo.jpeg', new: 'logo.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.38 AM.jpeg', new: 'hero-bg.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.39 AM.jpeg', new: 'about-precision.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.41 AM.jpeg', new: 'service-indoor.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.42 AM.jpeg', new: 'service-outdoor.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.43 AM.jpeg', new: 'service-led.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.43 AM (1).jpeg', new: 'service-3d-letters.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.44 AM.jpeg', new: 'service-wayfinding.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.45 AM.jpeg', new: 'service-vehicle.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.46 AM.jpeg', new: 'project-aldar.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.46 AM (1).jpeg', new: 'project-galleria.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.48 AM.jpeg', new: 'project-cleveland.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.52 AM.jpeg', new: 'project-yas.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.02.55 AM.jpeg', new: 'project-uaeu.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.03.01 AM.jpeg', new: 'sector-corporate.jpeg' },
  { old: 'WhatsApp Image 2026-06-01 at 10.03.06 AM.jpeg', new: 'sector-retail.jpeg' }
];

console.log('Renaming assets inside:', assetsDir);

filesToRename.forEach(item => {
  const oldPath = path.join(assetsDir, item.old);
  const newPath = path.join(assetsDir, item.new);

  if (fs.existsSync(oldPath)) {
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`Successfully renamed "${item.old}" -> "${item.new}"`);
    } catch (err) {
      console.error(`Error renaming "${item.old}":`, err.message);
    }
  } else {
    console.warn(`File not found: "${item.old}"`);
  }
});

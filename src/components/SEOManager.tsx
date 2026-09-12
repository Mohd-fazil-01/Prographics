import { useEffect } from 'react';

interface SEOManagerProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
  schema?: object;
  ogImage?: string;
}

const BASE_URL = 'https://prographicsbuildings.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/hero-bg.jpeg`;

export default function SEOManager({ title, description, keywords, path, schema, ogImage }: SEOManagerProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper: update or create a meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        // Determine which attribute to use for the selector key
        if (attr === 'property') {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        } else {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // 2. Update Description
    setMeta('meta[name="description"]', 'name', description);

    // 3. Update Keywords
    setMeta('meta[name="keywords"]', 'name', keywords);

    // 4. Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${BASE_URL}${path}`);

    // 5. Update Open Graph tags
    const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `${BASE_URL}${path}`);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', resolvedOgImage);
    const ogImgAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImgAlt) ogImgAlt.setAttribute('content', title);
    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:site_name');
      el.setAttribute('content', 'Pro Graphics Buildings Maintenance');
      document.head.appendChild(el);
    }

    // 6. Update Twitter Card tags
    const twUrl = document.querySelector('meta[name="twitter:url"]');
    if (twUrl) twUrl.setAttribute('content', `${BASE_URL}${path}`);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);
    const twImg = document.querySelector('meta[name="twitter:image"]');
    if (twImg) twImg.setAttribute('content', resolvedOgImage);

    // 7. Inject Page-Specific JSON-LD Schema
    let scriptBlock = document.getElementById('seo-dynamic-schema');
    if (scriptBlock) {
      scriptBlock.remove();
    }

    if (schema) {
      scriptBlock = document.createElement('script');
      scriptBlock.id = 'seo-dynamic-schema';
      scriptBlock.setAttribute('type', 'application/ld+json');
      scriptBlock.innerHTML = JSON.stringify(schema);
      document.head.appendChild(scriptBlock);
    }

    return () => {
      // Cleanup dynamically added script block on component update/unmount
      const block = document.getElementById('seo-dynamic-schema');
      if (block) {
        block.remove();
      }
    };
  }, [title, description, keywords, path, schema, ogImage]);

  return null; // Side-effect only component
}

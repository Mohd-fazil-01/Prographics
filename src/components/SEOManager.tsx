import { useEffect } from 'react';

interface SEOManagerProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
  schema?: object;
}

export default function SEOManager({ title, description, keywords, path, schema }: SEOManagerProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Keywords
    let metaKey = document.querySelector('meta[name="keywords"]');
    if (!metaKey) {
      metaKey = document.createElement('meta');
      metaKey.setAttribute('name', 'keywords');
      document.head.appendChild(metaKey);
    }
    metaKey.setAttribute('content', keywords);

    // 4. Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://prographics.onrender.com${path}`);

    // 5. Update Open Graph tags
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://prographics.onrender.com${path}`);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // 6. Update Twitter Card tags
    const twUrl = document.querySelector('meta[name="twitter:url"]');
    if (twUrl) {
      twUrl.setAttribute('content', `https://prographics.onrender.com${path}`);
    }
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', title);
    }
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', description);
    }

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
  }, [title, description, keywords, path, schema]);

  return null; // Side-effect only component
}

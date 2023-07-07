import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.shofeur.com/',
      lastModified: new Date()
    },
    {
      url: 'https://www.shofeur.com/locations',
      lastModified: new Date()
    }
  ];
}

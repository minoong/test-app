import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Stackflow PWA App',
    short_name: 'StackApp',
    description: 'A mobile-first web app using Stackflow and Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // In a real app, you would add 192x192 and 512x512 PNG icons here
    ],
  };
}

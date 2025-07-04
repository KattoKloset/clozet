import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '',
    short_name: '',
    description: '',
    start_url: '/',
    display: 'standalone',
    background_color: '',
    theme_color: '',
    icons: [
      // ...icons should go in the /public folder
    ],
  }
}

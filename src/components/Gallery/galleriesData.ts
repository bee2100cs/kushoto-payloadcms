import type { Gallery } from './GalleryClient'

export const galleries: Gallery[] = [
  {
    id: 'gallery01',
    title: 'People',
    category: 'People',
    coverImage:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/kushoto%20old%20man-6gJvF4MHEIKsHeg5toQH1aomHEf1BX.webp',
    images: [
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/kushoto%20old%20man-6gJvF4MHEIKsHeg5toQH1aomHEf1BX.webp',
        alt: 'Kushoto people',
      },
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/kushoto_ads-e2IYGzJvxNxIN6frxEgeBftAHukZZN.webp',
        alt: 'Kushoto people',
      },
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/kushoto_coporate_branding-W4S7KBXyI44iFUaYkFtJNSeMx9HCAd.webp',
        alt: 'Kushoto people',
      },
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/kushoto_training-QpU6PgBcPXZQA0jx9MUkzYyLQIShAv.webp',
        alt: 'Women sitting down',
      },
    ],
  },
  {
    id: 'gallery02',
    title: 'Weight Of Our Water',
    category: 'Climate',
    coverImage:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/Woman-fetching-water-from-a-watering-hole-in-Tangulbei-baringo-county-1200x630.webp',
    images: [
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/Woman-fetching-water-from-a-watering-hole-in-Tangulbei-baringo-county-1200x630.webp',
        alt: 'Woman fetching water in a hole',
      },
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/Woman-fetching-water-from-a-watering-hole-in-Tangulbei-baringo-county-1200x630.webp',
        alt: 'weight of our water',
      },
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/Woman-fetching-water-from-a-watering-hole-in-Tangulbei-baringo-county-1200x630.webp',
        alt: 'weight of our water',
      },
    ],
  },
  {
    id: 'gallery03',
    title: 'Kushoto Nairobi To SA',
    category: 'Travel',
    coverImage:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_in_namibia-1920x1080.webp',
    images: [
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_in_namibia-1920x1080.webp',
        alt: 'Kushoto with Himba people of Namibia',
      },
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_in_namibia-1920x1080.webp',
        alt: 'Kushoto with Himba people of Namibia',
      },
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_in_namibia-1920x1080.webp',
        alt: 'Kushoto with Himba people of Namibia',
      },
    ],
  },
  {
    id: 'gallery04',
    title: 'Wedding Moments',
    category: 'Wedding',
    coverImage:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/KushotoAgency_img1-PtQcdrzYilrzqinkB3in4lX9WWyVXb.webp',
    images: [
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/KushotoAgency_img1-PtQcdrzYilrzqinkB3in4lX9WWyVXb.webp',
        alt: 'Bride',
      },
      {
        src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/services-image1-5Rv73t9LOY4Ys4yXF60rZqIAZPKlvS.webp',
        alt: 'Kushoto Bride',
      },
    ],
  },
]

export const galleryCategories = [...new Set(galleries.map((g) => g.category))]

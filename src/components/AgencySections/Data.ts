import { Service } from './ServiceList'

export const AgencyData = {
  title: 'Kushoto Services',
  checklistItems: [
    'Documentaries & Storytelling',
    'Event Photography',
    'Event Videography',
    'Corporate & Branding Photography',
    'Product Photography',
    'Fashion & Lifestyle Photography',
    'Commercial & TV Ads',
    'Real Estate & Architecture Photography',
    'Training & Educational Videos',
    'Graphics Design',
  ],
  description:
    'We are a full-service creative agency dedicated to \
  transforming your ideas into powerful visual narratives. \
  From impactful documentaries to stunning brand photography,\
   we blend artistry with strategy to create content that connects and inspires.',
  image1: {
    src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/KushotoAgency_img1-PtQcdrzYilrzqinkB3in4lX9WWyVXb.webp',
    alt: 'Kushoto Wedding Photography services',
  },
  image2: {
    src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/services-image2-J06MwoCH8ZlKEImee7RgLgvPG6igmb.webp',
    alt: 'Kushoto Wedding Photography services',
  },
  services: [
    {
      title: 'Documentaries &Storytelling',
      description:
        'We create impactful documentaries that amplify real stories. \
        Trusted by organizations like Amref and ActionAid, we capture \
        powerful narratives that inspire awareness, empathy, and meaningful change.',
      icon: 'clapperboard',
      gradient: 1,
    },
    {
      title: 'Wedding Photography',
      description:
        'We love capturing weddings with heart. \
      From candid emotions to timeless portraits, we’re \
      honored to document your love story and celebrate every beautiful, \
      unforgettable moment of your special day.',
      icon: 'gem',
      gradient: 2,
    },
    {
      title: 'Event Videography',
      description:
        'We film events with precision and energy, \
      capturing every key moment and emotion. From corporate functions \
      to vibrant celebrations, our videos turn experiences into lasting, \
      shareable stories.',
      icon: 'video',
      gradient: 2,
    },
    {
      title: 'Graphics Design',
      description:
        'We craft visually striking designs that communicate your \
      brand’s message with clarity and creativity. From logos to campaigns, \
      we bring ideas to life through thoughtful, purpose-driven visual storytelling.',
      icon: 'palette',
      gradient: 1,
    },
    {
      title: 'Web Design',
      description: '',
      icon: '',
      gradient: 1,
    },
    {
      title: '',
      description: '',
      icon: '',
      gradient: 1,
    },
  ],
  serviceProcess: {
    title: 'The Kushoto Process',
    image: {
      src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/brainstorming-ZTVu8NvEDZoaV2XnadwtmNzvlETx3A.svg',
      alt: 'Kushoto services process',
    },
    process: [
      {
        title: 'Strategic Planning & Discovery',
        description:
          'We begin by understanding your goals, audience, and vision. \
        Through in-depth consultations and research, we define the project scope and \
        create a roadmap tailored to your needs.',
      },
      {
        title: 'Creative Concept Development',
        description:
          'Once we understand the objectives, our team brainstorms and \
          designs concepts that align with your brand identity. We refine \
          ideas through collaborative feedback to ensure your message is clear and impactful.',
      },
      {
        title: 'Execution & Production',
        description:
          "With concepts approved, we move into production, whether it's designing assets,\
         shooting video, or developing content. Our team ensures attention to detail, quality, and \
         consistency throughout the process.",
      },
      {
        title: 'Review, Delivery & Support',
        description:
          'In this final stage, we review the completed work with you, \
          ensuring it meets your expectations. We provide any necessary revisions, \
          followed by the final delivery, along with ongoing support if needed.',
      },
    ],
  },
}

export const callToActionData = {
  backgroundImage:
    'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/kushoto%20old%20man-6gJvF4MHEIKsHeg5toQH1aomHEf1BX.webp',
  title: "We're Ready To Get Started",
  button: {
    text: 'Hit Us Up',
    link: '/get-involved',
  },
}

export const services: Service[] = [
  {
    title: 'Documentaries & Storytelling',
    description:
      'We create impactful documentaries that amplify real stories, trusted by organizations like Amref and ActionAid to inspire meaningful change.',
    imageUrl:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/kushoto%20old%20man-6gJvF4MHEIKsHeg5toQH1aomHEf1BX.webp',

    slug: 'documentaries-and-storytelling',
    learnMoreLink: '/services/documentaries-and-storytelling',
    fullExplanation:
      'Our documentary service goes beyond simple recording. We dive deep into the heart of the subject, conducting thorough research and interviews to craft a narrative that is both authentic and compelling. We aim to create films that not only inform but also move audiences to think, feel, and act.',
    whyWorkWithUs:
      'Our team has a proven track record of handling sensitive subjects with respect and professionalism. Trusted by leading NGOs, we understand how to translate complex issues into powerful human stories that resonate globally and drive campaign objectives.',
  },
  {
    title: 'Event Photography & Videography',
    description:
      'Capturing the energy and key moments of your corporate functions, conferences, and celebrations with professional photography and videography.',
    imageUrl:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/services-image2-J06MwoCH8ZlKEImee7RgLgvPG6igmb.webp',

    slug: 'event-coverage',
    learnMoreLink: '/services/event-coverage',
    fullExplanation:
      'From large-scale conferences to intimate gatherings, our event coverage is comprehensive and unobtrusive. We focus on capturing the planned proceedings, candid interactions, and the unique atmosphere of your event. Our video service produces dynamic highlight reels and full-session recordings that serve as powerful promotional tools.',
    whyWorkWithUs:
      'We are experienced professionals who know how to navigate any event environment. We arrive prepared, work efficiently to cover every angle, and deliver a polished gallery of images and videos that perfectly encapsulates the experience for your marketing and archival needs.',
  },
  {
    title: 'Corporate & Branding Photography',
    description:
      "Elevate your brand's identity with professional headshots, team photos, and on-site imagery that reflects your company culture and values.",
    imageUrl:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/KushotoAgency_img1-PtQcdrzYilrzqinkB3in4lX9WWyVXb.webp',
    slug: 'corporate-branding-photography',
    learnMoreLink: '/services/corporate-branding-photography',
    fullExplanation:
      'Your visual identity is a critical asset. Our branding photography service provides you with a comprehensive library of custom images—from polished executive portraits to authentic in-office lifestyle shots—that you can use across your website, social media, and marketing materials to build a consistent and trustworthy brand image.',
    whyWorkWithUs:
      "We take a strategic approach, working with you to understand your brand's core message. The result is a curated set of images that not only look great but also serve a clear business purpose, helping you connect with your target audience.",
  },
  {
    title: 'Commercial & TV Ads',
    description:
      'Producing high-quality commercials and TV ads that capture attention, communicate your message, and drive results.',
    imageUrl:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/services-image2-J06MwoCH8ZlKEImee7RgLgvPG6igmb.webp',

    slug: 'commercial-production',
    learnMoreLink: '/services/commercial-production',
    fullExplanation:
      'We manage the entire production process, from creative concept development and scriptwriting to casting, shooting, and post-production. Whether for broadcast television or digital platforms, we create ads that are visually stunning and strategically effective.',
    whyWorkWithUs:
      "Our team combines cinematic storytelling with marketing expertise. We understand how to create content that not only entertains but also persuades, helping you achieve your campaign's advertising goals and maximize your return on investment.",
  },
  {
    title: 'Graphics Design',
    description:
      'Crafting visually striking designs that communicate your brand’s message with clarity, from logos and brochures to digital campaigns.',
    imageUrl:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/kushoto%20old%20man-6gJvF4MHEIKsHeg5toQH1aomHEf1BX.webp',

    slug: 'graphics-design',
    learnMoreLink: '/services/graphics-design',
    fullExplanation:
      "Our graphic design services provide a foundation for your brand's visual identity. We create everything from foundational logos and brand guidelines to marketing collateral like brochures, annual reports, and social media assets. We ensure every piece is cohesive and purpose-driven.",
    whyWorkWithUs:
      'Design at Kushoto is a blend of art and strategy. We create visuals that are not only beautiful but also functional, ensuring your message is clear, memorable, and effectively communicates your value proposition to your target audience.',
  },
  {
    title: 'Training & Educational Videos',
    description:
      'Developing clear, engaging, and professional training videos that make complex information easy to understand and retain.',
    imageUrl:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/KushotoAgency_img1-PtQcdrzYilrzqinkB3in4lX9WWyVXb.webp',

    slug: 'training-educational-videos',
    learnMoreLink: '/services/training-educational-videos',
    fullExplanation:
      'We create a wide range of educational content, including corporate training modules, product tutorials, and public service announcements. By using a mix of live-action, animation, and clear graphics, we make learning an engaging experience for your audience.',
    whyWorkWithUs:
      'We excel at simplifying complexity. Our team works with your subject matter experts to structure content logically and present it in a visually appealing format that enhances learner comprehension and retention, ensuring your training investment pays off.',
  },
]

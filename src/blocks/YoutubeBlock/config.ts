import { Block } from 'payload'

export const YoutubeBlock: Block = {
  slug: 'youtubeVideo',
  labels: {
    singular: 'YouTube Video',
    plural: 'YouTube Videos',
  },
  fields: [
    {
      name: 'url',
      label: 'YouTube Video URL',
      type: 'text',
      required: true,
    },
  ],
}

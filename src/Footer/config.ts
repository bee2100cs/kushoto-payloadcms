import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'
import { link } from '@/fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      maxRows: 4, // Allow up to 4 columns
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        // We use the `link` field for our nav items
        {
          name: 'navItems',
          type: 'array',
          fields: [link({ appearances: false })],
          admin: {
            components: {
              RowLabel: '@/Footer/RowLabel#RowLabel',
            },
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'socialLinks',
      label: 'Social Media Links',
      type: 'group',
      fields: [
        { name: 'facebook', type: 'text', label: 'Facebook URL' },
        { name: 'twitter', type: 'text', label: 'Twitter (X) URL' },
        { name: 'instagram', type: 'text', label: 'Instagram URL' },
        { name: 'linkedin', type: 'text', label: 'LinkedIn URL' },
      ],
    },
    {
      name: 'bottomBar',
      label: 'Bottom Bar Content',
      type: 'group',
      fields: [
        {
          name: 'copyright',
          type: 'text',
          admin: {
            description:
              "The copyright notice. The year will be added automatically. E.g., 'Kushoto.org. All Rights Reserved.'",
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}

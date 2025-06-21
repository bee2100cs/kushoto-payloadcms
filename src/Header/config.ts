import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'blocks', // Change from 'array' to 'blocks'
      maxRows: 6,
      blocks: [
        {
          slug: 'link', // A simple top-level link
          labels: {
            singular: 'Link',
            plural: 'Links',
          },
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
        {
          slug: 'dropdown', // A dropdown group
          labels: {
            singular: 'Dropdown Menu',
            plural: 'Dropdown Menus',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'subNavItems',
              type: 'array',
              maxRows: 10,
              fields: [
                link({
                  appearances: false,
                }),
              ],
            },
          ],
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}

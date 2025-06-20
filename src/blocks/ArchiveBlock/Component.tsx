import type { Post, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  let posts: Post[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    posts = fetchedPosts.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Post[]

      posts = filteredSelectedPosts
    }
  }

  return (
    // Use standard section padding for consistency
    <section className="py-16 sm:py-24" id={`block-${id}`}>
      <div className="container mx-auto px-4">
        {/* 1. Added a consistent heading section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold font-heading text-kushoto-neutralDark sm:text-4xl">
            From our Blog
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-kushoto-neutralDark/80">
            Explore our latest articles, stories, and insights from the frontlines of our work.
          </p>

          {/* 2. Render introContent from the CMS as an optional subheading */}
          {introContent && (
            <div className="prose prose-lg mx-auto mt-6 text-kushoto-neutralDark/70">
              <RichText data={introContent} enableGutter={false} />
            </div>
          )}
        </div>

        {/* 3. Render the collection of posts */}
        <CollectionArchive posts={posts} />
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg" className="rounded-full">
          <Link href="/blog">
            View All Posts
            <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

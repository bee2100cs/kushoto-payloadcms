import PortfolioClient from '@/components/Portfolio/PortfolioClient'

// This tells Next.js to render this page as a static HTML file at build time.
export const dynamic = 'force-static'

const PortfolioPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="animate-fade-in-up space-y-12 py-8 md:py-16">
        {/* Static content rendered on the server */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-kushoto-primary">
            Our Portfolio
          </h1>
          <p className="text-xl text-kushoto-neutralDark/80 max-w-3xl mx-auto">
            Showcasing the impactful projects and initiatives undertaken by Kushoto.org.
          </p>
        </section>

        {/* Render the interactive client component inside the server component */}
        {/* Next.js will pre-render its initial HTML on the server */}
        <PortfolioClient />

        <p className="text-center text-lg text-kushoto-neutralDark/70 pt-8">
          More projects will be added soon. Stay tuned for updates on our work!
        </p>
      </div>
    </div>
  )
}

export default PortfolioPage

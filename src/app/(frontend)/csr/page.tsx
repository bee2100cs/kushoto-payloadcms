import Link from 'next/link'
import DonateSection from '@/components/GetInvolved/DonateSection'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

const CSRPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="animate-fade-in-up space-y-12 py-8 md:py-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-kushoto-primary">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl text-kushoto-neutralDark/80 max-w-3xl mx-auto">
            Partnering for a better future. Learn about Kushoto&apos;s CSR initiatives and
            collaborations.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold font-heading mb-6 text-kushoto-secondary">
            Our Approach to CSR
          </h2>
          <p className="text-lg text-kushoto-neutralDark/90 leading-relaxed mb-4">
            At Kushoto.org, we believe that corporate social responsibility is integral to creating
            sustainable and widespread positive impact. We actively seek partnerships with
            businesses and corporations that share our commitment to community development,
            environmental stewardship, and social equity.
          </p>
          <p className="text-lg text-kushoto-neutralDark/90 leading-relaxed">
            Our CSR programs are designed to be mutually beneficial, offering partners meaningful
            engagement opportunities while channeling resources and expertise towards our core
            mission areas. We focus on transparency, accountability, and measurable outcomes in all
            our collaborations.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold font-heading mb-8 text-center text-kushoto-secondary">
            Partnership Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Partnership Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <h3 className="text-2xl font-semibold font-heading mb-3 text-kushoto-neutralDark">
                Employee Volunteering
              </h3>
              <p className="text-kushoto-neutralDark/70 mb-4 flex-grow">
                Engage your team in hands-on community projects. We offer tailored volunteering
                opportunities that align with your company&apos;s values and our community&apos;s
                needs.
              </p>
              <Link
                href="/get-involved#contact"
                className="text-kushoto-primary hover:text-kushoto-primaryDark font-semibold mt-auto"
              >
                Partner With Us →
              </Link>
            </div>
            {/* ... other partnership cards structured the same way ... */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <h3 className="text-2xl font-semibold font-heading mb-3 text-kushoto-neutralDark">
                Program Sponsorship
              </h3>
              <p className="text-kushoto-neutralDark/70 mb-4 flex-grow">
                Support specific Kushoto.org programs in areas like education, health, or
                environmental conservation. Gain visibility and demonstrate your commitment to
                social good.
              </p>
              <Link
                href="/get-involved#contact"
                className="text-kushoto-primary hover:text-kushoto-primaryDark font-semibold mt-auto"
              >
                Sponsor a Program →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <h3 className="text-2xl font-semibold font-heading mb-3 text-kushoto-neutralDark">
                In-Kind Donations & Expertise
              </h3>
              <p className="text-kushoto-neutralDark/70 mb-4 flex-grow">
                Contribute resources, technology, or professional expertise to enhance our
                operational capacity and program delivery.
              </p>
              <Link
                href="/get-involved#contact"
                className="text-kushoto-primary hover:text-kushoto-primaryDark font-semibold mt-auto"
              >
                Offer Support →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <h3 className="text-2xl font-semibold font-heading mb-3 text-kushoto-neutralDark">
                Cause-Related Marketing
              </h3>
              <p className="text-kushoto-neutralDark/70 mb-4 flex-grow">
                Collaborate on campaigns that raise awareness and funds for Kushoto.org while
                aligning with your brand&apos;s marketing objectives.
              </p>
              <Link
                href="/get-involved#contact"
                className="text-kushoto-primary hover:text-kushoto-primaryDark font-semibold mt-auto"
              >
                Explore Campaigns →
              </Link>
            </div>
          </div>
        </section>

        <DonateSection />

        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold font-heading mb-4 text-kushoto-neutralDark">
            Become a Kushoto Partner
          </h2>
          <p className="text-lg text-kushoto-neutralDark/80 max-w-2xl mx-auto mb-6">
            Join us in building a brighter future. Contact us today to discuss how your organization
            can make a difference with Kushoto.org.
          </p>
          {/* Using Button and Link for consistency */}
          <Button
            asChild
            size="lg"
            className="bg-kushoto-primary hover:bg-kushoto-primaryDark text-white rounded-full shadow-md"
          >
            <Link href="/get-involved#contact">Contact Our Partnerships Team</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

export default CSRPage

import { AgencyData } from './Data' // Assuming Data.ts is in the same directory
import Image from 'next/image'

// Data can be destructured for cleaner access
const { title, image, process } = AgencyData.serviceProcess

const AgencyProcess = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      {/* Optional: Add a subtle top border for separation if StyledDivider is removed */}
      <hr className="border-t border-border/60 w-1/2 mx-auto mb-16 md:mb-24" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16 items-center">
          {/* Right Side: Image Column */}
          <div className="w-full lg:w-6/12 lg:order-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={700}
              height={467}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Left Side: Content Column */}
          <div className="w-full lg:w-6/12 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-kushoto-secondary mb-10 text-center lg:text-left">
              {title}
            </h2>

            {/* Process Steps List */}
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start gap-4 md:gap-6">
                  {/* Numbered Circle */}
                  <div
                    className={`
                      flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full font-heading font-bold text-lg
                      transition-colors duration-300
                      ${
                        index === 0
                          ? 'bg-kushoto-primary text-white' // Active/first state
                          : 'bg-kushoto-neutral-light border-2 border-kushoto-primary/30 text-kushoto-primary' // Inactive state
                      }
                    `}
                  >
                    {index + 1}
                  </div>

                  {/* Step Title and Description */}
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-base text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgencyProcess

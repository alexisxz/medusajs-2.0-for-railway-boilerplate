import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Carousel } from "components/Carousel"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <div className="text-white bg-black ">
      {/* <FeaturedProducts collections={collections} region={region} /> */}

      {/* HERO */}
      <div className="md:min-h-[calc(100vh-63px)]">
        <div
          className="relative flex flex-col md:min-h-[calc(100vh-63px)] bg-top bg-contain repeat-infinite gap-6"
          style={{ backgroundImage: "url('/images/content/bg-stars.png')" }}
        >
          {/* ROBOT */}
          <div className="md:absolute bottom-0 md:h-[80vh] flex flex-col justify-end items-end order-last">
            <Image
              src="/images/content/home-hero_bot.png"
              width={2880}
              height={1500}
              alt="Living room with gray armchair and two-seater sofa"
              className="object-contain mt-auto md:max-h-[90vh]"
            />
          </div>

          {/* HEADING */}
          <section className="pt-12 content-container">
            <div>
              <div className="max-w-xl">
                <h1 className="text-xl text-center md:text-left md:text-5xl">
                  FURNITURES FROM ANOTHER UNIVERSE
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        {/* TOGETHER SECTION */}
        <section
          className="py-12 bg-center bg-no-repeat bg-cover content-container"
          style={{ backgroundImage: "url('/images/content/bg-blue-ball.png')" }}
        >
          <div>
            <div className="max-w-3xl mx-auto">
              <p className="text-center">
                Together with my friends, I have landed on your planet - in a
                small country called Luxembourg, to be precise.
                <br />
                <br />
                {
                  "Unfortunately, our home planet, Mechanet, doesn't have enough room for all of us. That's why some of my friends are looking for a new home here on your beautiful Earth. We don't need much space, and in return, we brighten your home with warm light."
                }
                <br />
                <br />I would be very happy if I could find a new home with you.
                Thank you for your help!
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section
          className="py-12 bg-top bg-contain repeat-infinite"
          style={{ backgroundImage: "url('/images/content/bg-stars.png')" }}
        >
          {/* BACKGROUND IMAGE */}

          <div
            className="bg-top bg-contain  repeat-infinite"
            style={{ backgroundImage: "url('/images/content/bg-stars.png')" }}
          >
            <Carousel
              heading={
                <h2 className="text-xl uppercase md:text-5xl">PRODUCTS</h2>
              }
              button={
                <>
                  <LocalizedClientLink
                    href="/store"
                    size="md"
                    className="p-2 flex-1 h-full max-md:hidden md:h-auto border-[#77C091] text-[#77C091] border rounded-lg uppercase"
                    variant="outline"
                  >
                    Shop
                  </LocalizedClientLink>
                  <LocalizedClientLink
                    href="/store"
                    size="sm"
                    className="md:hidden border-[#77C091] text-[#77C091] rounded-lg uppercase border p-2"
                    variant="outline"
                  >
                    Shop
                  </LocalizedClientLink>
                </>
              }
            >
              {impressumImages.map((img, index) => (
                <div
                  key={index}
                  className="w-[70%] sm:w-[60%] lg:w-full max-w-[496px] flex-shrink-0"
                >
                  <div className="relative mb-4 md:mb-10 w-full aspect-[3/4]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* CHRISTIAN SECTION */}
        <section
          className="py-12"
          style={{
            backgroundImage: `url('/images/content/bg-blue-ball_top.png'), url('/images/content/bg-stars.png')`,
            backgroundRepeat: "no-repeat, repeat", // or 'no-repeat, no-repeat'
            backgroundPosition: "bottom, top", // optional custom position
            backgroundSize: "cover, contain", // or 'cover, cover'
          }}
        >
          <div className="max-w-6xl px-6 mx-auto">
            <div className="col-span-full">
              <div className="flex flex-col gap-8 text-center md:text-left md:items-center md:flex-row">
                <Image
                  alt="Christian with the bot"
                  src={"/images/content/christian-and-bot.png"}
                  width={1200}
                  height={900}
                  className="object-contain object-center w-full max-w-md"
                />
                <div>
                  <p className="whitespace-pre-line ">{`Hey, I'm Christian!
                  
                  I've been fascinated by robots since childhood—their shapes, their technology, their stories, just everything! As a trained metalworker, I love creating something unique with my own hands. My passion for design, furniture, and fashion led me to build my first lamp robot in November 2022. 
                  
                  All that was missing was a name that truly reflected this vision. "From Another Universe", or simply "F A U". These are more than just furniture pieces—they are extraordinary designs with character, handcrafted with great attention to detail.`}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HANDFACTURED SECTION */}
        <section
          className="py-12 text-center content-container"
          style={{
            backgroundImage: `url('/images/content/bg-blue-ball_top.png')`,
            backgroundRepeat: "no-repeat", // or 'no-repeat, no-repeat'
            backgroundPosition: "top", // optional custom position
            backgroundSize: "cover", // or 'cover, cover'
          }}
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl uppercase md:text-5xl">Handfactured</h2>
              <p>
                {`Handcrafted with passion - this is how Mecha-Nick and his
                friends are made in a small garage in Luxembourg.`}
              </p>
            </div>

            <div>
              <Image
                src={"/images/content/handfactured-image.png"}
                alt="Handfactured Bot"
                width={1920}
                height={1080}
                className="object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* IMPRESSIONS SECTION */}
        <div
          className="py-12 bg-top bg-contain repeat-infinite"
          style={{ backgroundImage: "url('/images/content/bg-stars.png')" }}
        >
          <Carousel
            heading={
              <h2 className="text-xl uppercase md:text-5xl">IMPRESSIONS</h2>
            }
            button={
              <>
                <LocalizedClientLink
                  href="/store"
                  size="md"
                  className="p-2 flex-1 h-full max-md:hidden md:h-auto border-[#77C091] text-[#77C091] border rounded-lg uppercase"
                  variant="outline"
                >
                  Shop
                </LocalizedClientLink>
                <LocalizedClientLink
                  href="/store"
                  size="sm"
                  className="md:hidden border-[#77C091] text-[#77C091] rounded-lg uppercase border p-2"
                  variant="outline"
                >
                  Shop
                </LocalizedClientLink>
              </>
            }
          >
            {impressumImages.map((img, index) => (
              <div
                key={index}
                className="w-[70%] sm:w-[60%] lg:w-full max-w-[496px] flex-shrink-0"
              >
                <div className="relative mb-4 md:mb-10 w-full aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

const impressumImages = [
  {
    src: "/images/content/impression_image-1.png",
    alt: "Impression Image 1",
  },
  {
    src: "/images/content/impression_image-2.png",
    alt: "Impression Image 2",
  },
  {
    src: "/images/content/impression_image-3.png",
    alt: "Impression Image 3",
  },
]

"use client"

import { Icon } from "components/Icon"
import { IconCircle } from "components/IconCircle"
import { EmblaCarouselType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import * as React from "react"
import { twJoin, twMerge } from "tailwind-merge"

export type CarouselProps = {
  heading?: React.ReactNode
  button?: React.ReactNode
  arrows?: boolean
} & React.ComponentPropsWithRef<"div">

export const Carousel: React.FC<CarouselProps> = ({
  heading,
  button,
  arrows = true,
  children,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    skipSnaps: true,
    active: true,
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={twMerge("overflow-hidden", className)}>
      <section className="content-container">
        <div className="relative">
          <div className="flex justify-between mb-8 md:mb-15 max-sm:flex-col sm:items-center gap-x-10 gap-y-6">
            {heading}
            {(arrows || button) && (
              <div className="flex md:gap-6 shrink-0">
                {button}
                {arrows && (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={scrollPrev}
                      disabled={prevBtnDisabled}
                      className={twJoin(
                        "max-md:hidden transition-opacity",
                        prevBtnDisabled && "opacity-50"
                      )}
                      aria-label="Previous"
                    >
                      <IconCircle>
                        <Icon
                          name="arrow-left"
                          className="w-6 h-6 text-black"
                        />
                      </IconCircle>
                    </button>
                    <button
                      type="button"
                      onClick={scrollNext}
                      disabled={nextBtnDisabled}
                      className={twJoin(
                        "max-md:hidden transition-opacity",
                        nextBtnDisabled && "opacity-50"
                      )}
                      aria-label="Next"
                    >
                      <IconCircle>
                        <Icon
                          name="arrow-right"
                          className="w-6 h-6 text-black"
                        />
                      </IconCircle>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div ref={emblaRef}>
            <div className="flex gap-4 touch-pan-y md:gap-10">{children}</div>
          </div>
        </div>
      </section>
    </div>
  )
}

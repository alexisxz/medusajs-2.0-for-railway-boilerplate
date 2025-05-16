"use client"
import { Suspense, useEffect, useState } from "react"

import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { LogoSVG } from "components/LogoSVG"

export default function Nav1({ regions }: { regions: StoreRegion[] }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (y > 20 && !scrolled) {
        setScrolled(y > 20)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  console.log("bla")

  return (
    <div className="fixed inset-x-0 top-0 z-50 group">
      <header
        className={`relative h-16 mx-auto duration-300 transition-all ${
          scrolled
            ? "bg-white text-black border-b border-gray-200"
            : "bg-transparent text-white border-white"
        }`}
      >
        <nav className="flex items-center justify-between w-full h-full border-b border-white content-container txt-xsmall-plus text-small-regular">
          <div className="flex items-center flex-1 h-full basis-0 ">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="uppercase txt-compact-xlarge-plus"
              data-testid="nav-store-link"
            >
              <div className="w-[150px] text-current hover:opacity-80">
                <LogoSVG />
              </div>
            </LocalizedClientLink>
          </div>

          <div className="flex items-center justify-end flex-1 h-full gap-x-6 basis-0">
            <div className="items-center hidden h-full small:flex gap-x-6">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:opacity-80"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:opacity-80"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex gap-2 hover:opacity-80"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}

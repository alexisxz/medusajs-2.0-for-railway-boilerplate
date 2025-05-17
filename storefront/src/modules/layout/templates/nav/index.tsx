import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { LogoSVG } from "components/LogoSVG"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div
      className="sticky inset-x-0 top-0 z-50 text-white bg-black group"
      style={{
        backgroundImage: `url('/images/content/bg-stars.png')`,
        backgroundRepeat: "repeat", // or 'no-repeat, no-repeat'
        backgroundPosition: "top", // optional custom position
        backgroundSize: "cover", // or 'cover, cover'
      }}
    >
      <header className="relative h-16 mx-auto duration-200 content-container">
        <nav className="flex items-center justify-between w-full h-full text-white border-b border-ui-border-base txt-xsmall-plus text-small-regular">
          <div className="flex items-center flex-1 h-full basis-0">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="uppercase txt-compact-xlarge-plus hover:opactiy-80"
              data-testid="nav-store-link"
            >
              <div className="text-white hover:opacity-80 w-[150px]">
                <LogoSVG />
              </div>
            </LocalizedClientLink>
          </div>

          <div className="flex items-center justify-end flex-1 h-full gap-x-6 basis-0">
            <div className="items-center hidden h-full small:flex gap-x-6">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:opactiy-80"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:opactiy-80"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex gap-2 hover:opactiy-80"
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

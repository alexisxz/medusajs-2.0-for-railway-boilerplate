// components/NavSwitcher.tsx
"use client"

import { StoreRegion } from "@medusajs/types"
import { usePathname } from "next/navigation"
import Nav1 from "./Nav1"
import Nav2 from "./Nav2"

export default function NavSwitcher({ regions }: { regions: StoreRegion[] }) {
  const pathname = usePathname()

  // Match only the root-level country path: "/us", "/fr", etc.
  const isHome = /^\/[a-z]{2}\/?$/.test(pathname)

  return isHome ? <Nav1 regions={regions} /> : <Nav2 regions={regions} />
}

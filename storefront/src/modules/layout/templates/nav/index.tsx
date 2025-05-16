// src/components/Nav.tsx
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import NavSwitcher from "./NavSwitcher"

export default async function Nav() {
  const regions: StoreRegion[] = await listRegions()

  return <NavSwitcher regions={regions} />
}

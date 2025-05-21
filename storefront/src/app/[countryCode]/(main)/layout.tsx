import { Metadata } from "next"

import { getBaseURL } from "@lib/util/env"
import Nav from "@modules/layout/templates/nav"
import { NewFooter } from "components/NewFooter"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      {props.children}
      <div className="mt-auto">
        <NewFooter />
      </div>
    </div>
  )
}

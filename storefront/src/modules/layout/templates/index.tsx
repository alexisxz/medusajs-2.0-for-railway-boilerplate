import React from "react"

import Nav from "@modules/layout/templates/nav"
import { NewFooter } from "components/NewFooter"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <NewFooter />
    </div>
  )
}

export default Layout

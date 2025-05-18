import React from "react"

import { HttpTypes } from "@medusajs/types"
import AccountNav from "../components/account-nav"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12" data-testid="account-page">
      <div className="flex flex-col flex-1 h-full max-w-5xl mx-auto bg-white content-container">
        <div className="grid grid-cols-1  small:grid-cols-[240px_1fr] py-12">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div>
        {/* <div className="flex flex-col items-end justify-between gap-8 py-12 border-gray-200 small:flex-row small:border-t">
          <div>
            <h3 className="mb-4 text-xl-semi">Got questions?</h3>
            <span className="txt-medium">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default AccountLayout

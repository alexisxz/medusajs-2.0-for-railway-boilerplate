import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import localFont from "next/font/local"
import "styles/globals.css"

const blauerNue = localFont({
  src: "../../public/fonts/BlauerNue-Regular.woff2",
  display: "swap",
  variable: "--font-blauer",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${blauerNue.variable} !font-blauer antialiased`}
      data-mode="light"
    >
      <body>
        <main className="relative max-w-[2560px] mx-auto">
          {props.children}
        </main>
      </body>
    </html>
  )
}

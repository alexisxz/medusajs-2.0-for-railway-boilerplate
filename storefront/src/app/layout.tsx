import { getBaseURL } from "@lib/util/env"
import { GoogleTagManager } from "@next/third-parties/google"
import { Metadata } from "next"
import localFont from "next/font/local"
import Script from "next/script"
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8XV30RBN3D"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8XV30RBN3D');
          `}
        </Script>
      </head>
      <GoogleTagManager gtmId="GTM-NPTPCXB9" />

      <body>
        <main className="relative max-w-[2560px] mx-auto">
          {props.children}
        </main>
      </body>
    </html>
  )
}

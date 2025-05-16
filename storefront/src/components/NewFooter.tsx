"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useParams, usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { LogoSVG } from "./LogoSVG"

export const NewFooter: React.FC = () => {
  const pathName = usePathname()
  const { countryCode } = useParams()
  const currentPath = pathName.split(`/${countryCode}`)[1]

  const isAuthPage = currentPath === "/register" || currentPath === "/login"

  return (
    <div
      className={twMerge("py-12 bg-black text-white", isAuthPage && "hidden")}
      style={{
        backgroundImage: `url('/images/content/bg-blue-ball_bottom.png'), url('/images/content/bg-stars.png')`,
        backgroundRepeat: "no-repeat, repeat", // or 'no-repeat, no-repeat'
        backgroundPosition: "bottom, top", // optional custom position
        backgroundSize: "cover, cover", // or 'cover, cover'
      }}
    >
      <div className="content-container">
        <div>
          <div className="flex flex-col gap-16">
            {/* FOOTER TOP */}
            <div className="flex flex-col items-center gap-4">
              <div className="max-w-sm">
                <LogoSVG />
              </div>
              <a
                className="text-xl md:text-2xl"
                href={"mailto:signal@fau.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                signal@fau.com
              </a>
              <div className="flex items-center gap-2">
                <a className="w-10 h-10">
                  <FacebookSVG />
                </a>
                <a className="w-10 h-10">
                  <InstagramSVG />
                </a>
              </div>
            </div>
            {/* FOOTER BOTTOM */}
            <div className="flex flex-col items-center justify-between gap-8 pt-2 text-xs border-t md:flex-row border-t-white">
              <div>© {new Date().getFullYear()} All Rights Reserved</div>
              <div className="order-last md:order-2">
                <span>made with love by</span>{" "}
                <a
                  href="https://www.stirner-stirner.com"
                  className="inline font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  stirner/stirner
                </a>
              </div>
              <div className="flex items-center gap-2 md:order-3">
                <LocalizedClientLink href="/cookie-policy">
                  Cookie Policy
                </LocalizedClientLink>
                <div className="h-[10px] bg-white w-[1px]" />
                <LocalizedClientLink href="/privacy-policy">
                  Privacy Policy
                </LocalizedClientLink>
                <div className="h-[10px] bg-white w-[1px]" />
                <LocalizedClientLink href="/terms-of-use">
                  Terms of Use
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FacebookSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.6383 0.20459C11.9228 0.20459 0 12.1191 0 26.8244C0 40.1098 9.74136 51.1236 22.476 53.1224V34.5187H15.7086V26.8234H22.476V20.9572C22.476 14.2863 26.4506 10.6012 32.5373 10.6012C35.4527 10.6012 38.5014 11.1224 38.5014 11.1224V17.6697H35.1423C31.8322 17.6697 30.8007 19.7207 30.8007 21.8271V26.8234H38.1878L37.0059 34.5187H30.8007V53.1224C43.5364 51.1236 53.2766 40.1098 53.2766 26.8244C53.2777 12.1191 41.3549 0.20459 26.6383 0.20459Z"
      fill="#77C091"
    />
  </svg>
)

const InstagramSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.9728 21.0356C23.8761 21.0356 21.3564 23.5535 21.3564 26.6491C21.3564 29.7448 23.8825 32.2648 26.9728 32.2648C30.0631 32.2648 32.5923 29.7469 32.5923 26.6491C32.5923 23.5514 30.0727 21.0356 26.9728 21.0356Z"
      fill="#77C091"
    />
    <path
      d="M40.1133 16.7192C39.5213 15.2396 38.3831 14.1044 36.9099 13.5181C34.6975 12.6461 29.4258 12.8412 26.9723 12.8412C24.5188 12.8412 19.2566 12.6376 17.0378 13.5181C15.5551 14.1118 14.4212 15.2471 13.8345 16.7192C12.9598 18.9301 13.1571 24.1982 13.1571 26.6489C13.1571 29.0996 12.9534 34.3613 13.8345 36.5786C14.4265 38.0603 15.5647 39.1934 17.0378 39.7808C19.2502 40.6528 24.522 40.4577 26.9723 40.4577C29.4226 40.4577 34.6911 40.6592 36.9099 39.7808C38.3927 39.1871 39.5266 38.0518 40.1133 36.5786C40.9944 34.3688 40.7907 29.0996 40.7907 26.6489C40.7907 24.1982 40.9944 18.9365 40.1133 16.7192ZM26.9723 35.2845C22.1901 35.2845 18.3318 31.4288 18.3318 26.6489C18.3318 21.869 22.1901 18.0133 26.9723 18.0133C31.7544 18.0133 35.616 21.869 35.616 26.6489C35.616 31.4288 31.7576 35.2845 26.9723 35.2845ZM35.9701 19.6741C34.8479 19.6741 33.9551 18.7723 33.9551 17.6584C33.9551 16.5444 34.8575 15.6447 35.9701 15.6447C37.0827 15.6447 37.9852 16.5465 37.9852 17.6584C37.9852 18.7702 37.0827 19.6741 35.9701 19.6741Z"
      fill="#77C091"
    />
    <path
      d="M26.97 0C12.2416 0 0.301758 11.9316 0.301758 26.6497C0.301758 41.3678 12.2416 53.2994 26.97 53.2994C41.6983 53.2994 53.6381 41.3678 53.6381 26.6497C53.6381 11.9316 41.6993 0 26.97 0ZM43.708 33.5946C43.5736 36.2948 42.9559 38.6836 40.9878 40.6536C39.0165 42.6299 36.6249 43.2471 33.924 43.374C31.1409 43.5318 22.798 43.5318 20.0149 43.374C17.3161 43.2397 14.9319 42.6225 12.9542 40.6536C10.9765 38.6836 10.3589 36.2937 10.2309 33.5946C10.0741 30.8134 10.0741 22.4785 10.2309 19.6973C10.3653 16.9993 10.9765 14.6094 12.9542 12.6394C14.9319 10.6695 17.3235 10.0544 20.0149 9.92541C22.798 9.76765 31.1409 9.76765 33.924 9.92541C36.626 10.0619 39.0165 10.6769 40.9878 12.6469C42.9655 14.6158 43.5832 17.0068 43.708 19.7048C43.868 22.486 43.868 30.8134 43.708 33.5946Z"
      fill="#77C091"
    />
  </svg>
)

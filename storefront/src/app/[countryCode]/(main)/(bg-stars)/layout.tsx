export default function BgStarsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="flex-1 text-white bg-black"
      style={{
        backgroundImage: `url('/images/content/bg-stars.png')`,
        backgroundRepeat: "repeat", // or 'no-repeat, no-repeat'
        backgroundPosition: "top", // optional custom position
        backgroundSize: "cover", // or 'cover, cover'
      }}
    >
      {children}
    </div>
  )
}

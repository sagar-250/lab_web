interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHeader({ title, subtitle, backgroundImage = "/forest-nature-hero.jpg" }: PageHeaderProps) {
  return (
    <section className="relative w-full min-h-[500px] text-white overflow-hidden pt-24 pb-16 flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance leading-tight text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-balance max-w-2xl mx-auto text-white drop-shadow-md">{subtitle}</p>
        )}
      </div>
    </section>
  )
}

export default function ResearchSection() {
  const researchAreas = [
    {
      title: "Hydrologic Modelling",
      description:
        "Development of process-based hydrologic models for water resources management and flood prediction.",
      icon: "💧",
    },
    {
      title: "Geospatial Data Science",
      description: "Analysis of satellite and geospatial data for climate monitoring and environmental assessment.",
      icon: "🛰️",
    },
    {
      title: "Climate Studies & Extremes",
      description: "Understanding and predicting extreme weather events and climate change impacts.",
      icon: "🌍",
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Research Focus Areas</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We conduct cutting-edge research across multiple domains of hydro-climatology and geospatial science
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((area, idx) => (
            <div key={idx} className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

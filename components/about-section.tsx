export default function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="bg-muted rounded-lg overflow-hidden shadow-lg aspect-square flex items-center justify-center">
            <img
              src="/research-laboratory-hydro-climate.jpg"
              alt="HGC Lab Research"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">Learn About Us</h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-border">
              <button className="pb-4 px-2 font-semibold text-white bg-white/10 backdrop-blur-sm border-b-2 border-white/40 rounded-t-lg transition">
                About
              </button>
              <button className="pb-4 px-2 font-semibold opacity-50 hover:opacity-100 transition">Vision</button>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our HGC Lab at IIT Madras specializes in Hydro-climatology and Geospatial data science. Our primary
                focus is on addressing the underlying physical mechanisms driving various hydro-climatic processes.
              </p>
              <p>
                We develop innovative, process-based and data-driven modelling framework for accurate monitoring and
                prediction of extreme weather events and for effective water resources management.
              </p>
              <p>
                We integrate the process level understanding of water and climate science with state-of-the-art
                statistic, machine learning (ML), and deep learning (DL) and data assimilation techniques.
              </p>
              <p>
                We harness the advantages of big data such as Remote Sensing, Hydrologic and Climatic Model simulation,
                and ground observation products to address critical water-related challenges in changing climate.
              </p>
            </div>

            <button className="mt-8 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

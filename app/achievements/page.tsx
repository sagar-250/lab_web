import PageHeader from "@/components/page-header"
import AchievementCard from "@/components/achievement-card"

export default function AchievementsPage() {
  const publications = [
    { title: "Applications of sentinel-5p tropomi satellite sensor: A review", year: 2024, venue: "IEEE Sensors Journal", cited: 47 },
    { title: "Development of a method to identify change in the pattern of extreme streamflow events in future climate: Application on the Bhadra reservoir inflow in India", year: 2017, venue: "Journal of Hydrology: Regional Studies", cited: 38 },
    { title: "Analyzing spatio-temporal variability of aquatic productive components in Northern Bay of Bengal using advanced machine learning models", year: 2024, venue: "Ocean & Coastal Management", cited: 32 },
    { title: "Spatio-temporal downscaling of projected precipitation in the 21st century: indication of a wetter monsoon over the Upper Mahanadi Basin, India", year: 2017, venue: "Hydrological Sciences Journal", cited: 31 },
    { title: "Development of a time-varying downscaling model considering non-stationarity using a Bayesian approach", year: 2018, venue: "International Journal of Climatology", cited: 20 },
    { title: "Assessment of extreme precipitation in future through time-invariant and time-varying downscaling approaches", year: 2020, venue: "Water Resources Management", cited: 10 },
    { title: "Benefit of time-varying downscaling model for the assessment of urban temperature rise", year: 2022, venue: "Modeling Earth Systems and Environment", cited: 6 },
    { title: "Assessing the effects of extreme rainfall patterns and their impact on dam safety: a case study on Indian dam failures", year: 2024, venue: "Natural Hazards", cited: 5 },
    { title: "Assessment of climate change impacts on the precipitation and temperature: A case study on Krishna River Basin, India", year: 2024, venue: "Russian Meteorology and Hydrology", cited: 4 },
    { title: "Dams and their safety under the extreme climate conditions: study of dams on Godavari River", year: 2024, venue: "Sustainable Water Resources Management", cited: 3 },
    { title: "How far the CORDEX high-resolution data represents observed precipitation: an analysis across Indian mainland", year: 2020, venue: "Theoretical and Applied Climatology", cited: 3 },
    { title: "Hydrological performance of ERA5 land in the data-scarce Himalayan region of the Langtang catchment", year: 2026, venue: "Theoretical and Applied Climatology", cited: 1 },
  ]

  const awards = [
    { title: "Research on Extreme Rainfall & Dam Safety", organization: "EGU General Assembly Conference 2025", year: 2025 },
    { title: "Climate Change Impacts on Godavari River Basin", organization: "International Conference on Climate Change 2023", year: 2023 },
    { title: "Time-Varying Downscaling Model Research", organization: "Climate Change Impacts on Water Resources 2021", year: 2021 },
  ]

  const collaborations = [
    {
      name: "IIT Kharagpur",
      description: "Doctoral research on downscaling approaches for climate change impact assessment",
    },
    {
      name: "International Conference on Hydraulics, Water Resources and Coastal Engineering",
      description: "Application of TVDM in modeling precipitation over Godavari River Basin",
    },
    {
      name: "AGU Fall Meeting",
      description: "Research on downscaling of soil moisture using time-varying models",
    },
    {
      name: "EGU General Assembly",
      description: "Studies on extreme temperatures and downscaling approaches for 21st century",
    },
  ]

  return (
    <>
      <PageHeader
        title="Achievements & Recognition"
        subtitle="Our contributions to science and research excellence"
        backgroundImage="/forest-nature-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Publications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Featured Publications</h2>
            <div className="space-y-4">
              {publications.map((pub, idx) => (
                <AchievementCard key={idx} type="publication" {...pub} />
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Awards & Recognition</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, idx) => (
                <AchievementCard key={idx} type="award" {...award} />
              ))}
            </div>
          </div>

          {/* Collaborations */}
          <div>
            <h2 className="text-3xl font-bold mb-12">International Collaborations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {collaborations.map((collab, idx) => (
                <AchievementCard key={idx} type="collaboration" {...collab} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

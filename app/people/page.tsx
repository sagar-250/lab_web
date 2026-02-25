import PageHeader from "@/components/page-header"
import ProfessorProfile from "@/components/professor-profile"
import PhDStudentCard from "@/components/phd-student-card"
import MtechStudentCard from "@/components/mtech-student-card"

export default function PeoplePage() {
  const phdStudents = [
    {
      name: "Srijita Ghosh",
      thesisTitle: "Surface Water–Groundwater Interaction and Climate Change Impact",
      dateOfJoining: "01-07-2024",
      email: "srijitaghosh284@gmail.com",
      linkedin: "linkedin.com/in/srijita-ghosh-4b6614248",
      googleScholar: "https://scholar.google.com/citations?user=U2xFo5QAAAAJ",
      orcid: "0000-0002-9912-3961",
      introduction:
        "Full-time PhD scholar in Hydraulics and Water Resources Engineering at IIT Madras. Research focuses on groundwater dynamics under climate change and abstraction stress, linking SDG 6, 11, and 13. DST INSPIRE Fellow with strong expertise in hydrogeology, groundwater geochemistry, and geophysical surveys.",
    },
    {
      name: "Roulo Dinesh",
      thesisTitle: "Integrating Forecasts with Risk Indices for Enhanced Dam Safety under Successive Extreme Rainfall",
      dateOfJoining: "03-08-2022",
      email: "ce22d058@smail.iitm.ac.in",
      introduction:
        "PhD scholar working in Comprehensive Dam Safety, integrating hydrological and seismic safety, dam-break analysis, EAPs, climate change adaptation, and structure–water interaction. Research emphasizes risks from successive extreme rainfall using forecast data. Actively involved in mentoring UG and PG students.",
    },
    {
      name: "Nagesh Mishra",
      thesisTitle: "AI-Powered Resilience: Big Data Solutions for River Basin Management Under Climate Change",
      dateOfJoining: "06-08-2024",
      email: "ce24d901@smail.iitm.ac.in",
      introduction:
        "Research Fellow jointly affiliated with Deakin University and IIT Madras. Research lies at the intersection of hydrology, remote sensing, Bayesian statistics, and machine learning for hydro-climatic modeling and climate change mitigation, with extensive experience in large-scale hydrological modeling and satellite data analysis.",
    },
  ]

  const mtechStudents = [
    {
      name: "Saniya Singh",
      thesisTitle: "Multi-event Based Hydrological Modelling for Krishnagiri Sub-basin",
      dateOfJoining: "31-07-2023",
      email: "saniyasingh1999@gmail.com",
    },
    {
      name: "Eslavath Mohan",
      thesisTitle:
        "Flood Risk Assessment of Hyderabad City through Hydrological Modelling and LULC Change Analysis (2017–2024)",
      dateOfJoining: "19-07-2023",
      email: "ce23m048@smail.iitm.ac.in",
    },
    {
      name: "Nayana R",
      thesisTitle: "Assessing Rainfall Recharge using SWAT and MODFLOW",
      dateOfJoining: "28-07-2023",
      email: "ce23m089@smail.iitm.ac.in",
      linkedin: "linkedin.com/in/nayana-r-ce23m089",
    },
    {
      name: "Gabriel Emmanuel Lwesha",
      thesisTitle: "Dam Breach Flood Modelling using HEC–RAS 2D: A Case Study of Annamayya Dam",
      dateOfJoining: "02-08-2024",
      email: "ce24m825@smail.iitm.ac.in",
    },
  ]

  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet the researchers and faculty driving innovation at HGC Lab"
        backgroundImage="/forest-nature-hero.jpg"
      />

      <ProfessorProfile />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12">PhD Students</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {phdStudents.map((student, idx) => (
                <PhDStudentCard key={idx} {...student} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-12">MTech Students</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {mtechStudents.map((student, idx) => (
                <MtechStudentCard key={idx} {...student} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

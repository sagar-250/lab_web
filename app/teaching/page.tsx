import PageHeader from "@/components/page-header"
import CourseCard from "@/components/course-card"

export default function TeachingPage() {
  const courses = [
    {
      code: "CE5470",
      title: "Surface Water Hydrology",
      level: "Postgraduate",
      semester: "1st Semester",
      description:
        "Advanced study of surface water processes, rainfall-runoff modeling, streamflow analysis, and hydrological system design for water resources planning and management.",
      instructor: "Dr. Subbarao Pichuka",
      credits: 12,
    },
    {
      code: "CE5480",
      title: "Water Resources Planning and Management",
      level: "Postgraduate",
      semester: "2nd Semester",
      description:
        "Comprehensive coverage of water resources systems, reservoir operation, demand forecasting, allocation strategies, and sustainable water management practices.",
      instructor: "Dr. Subbarao Pichuka",
      credits: 12,
    },
    {
      code: "CV2030",
      title: "Measurement and Sensing",
      level: "Undergraduate",
      semester: "1st Semester",
      description:
        "Fundamentals of measurement techniques, sensing technologies, data acquisition systems, and instrumentation in civil engineering applications including hydrology and environmental monitoring.",
      instructor: "Dr. Subbarao Pichuka",
      credits: 12,
    },
  ]

  return (
    <>
      <PageHeader
        title="Teaching & Learning"
        subtitle="Courses and educational initiatives"
        backgroundImage="/forest-nature-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Offered Courses */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Offered Courses</h2>

            {/* Postgraduate Courses */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-primary">Postgraduate Courses</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {courses
                  .filter((c) => c.level === "Postgraduate")
                  .map((course, idx) => (
                    <CourseCard key={idx} {...course} />
                  ))}
              </div>
            </div>

            {/* Undergraduate Courses */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary">Undergraduate Courses</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {courses
                  .filter((c) => c.level === "Undergraduate")
                  .map((course, idx) => (
                    <CourseCard key={idx} {...course} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

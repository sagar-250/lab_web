import PageHeader from "@/components/page-header"
import NewsCard from "@/components/news-card"

export default function UpdatesPage() {
  const updates = [
    {
      date: "Dec 15, 2024",
      title: "New Research Grant Awarded",
      description:
        "HGC Lab has been awarded a major research grant for advancing geospatial data science in climate prediction.",
      category: "Grant",
    },
    {
      date: "Dec 10, 2024",
      title: "Publication in Nature Climate Change",
      description:
        "Our latest paper on extreme weather prediction using deep learning has been published in a top-tier journal.",
      category: "Publication",
    },
    {
      date: "Dec 5, 2024",
      title: "Seminar: Future of Water Resources",
      description:
        "Dr. Placeholder will be giving a talk on sustainable water management in changing climate scenarios.",
      category: "Event",
    },
    {
      date: "Nov 28, 2024",
      title: "New Lab Website Launched",
      description: "Welcome to the new HGC Lab website! We're excited to share our research and updates with you.",
      category: "Announcement",
    },
    {
      date: "Nov 20, 2024",
      title: "Collaboration with USGS",
      description:
        "HGC Lab partners with the United States Geological Survey for joint research on hydrological modeling.",
      category: "Collaboration",
    },
    {
      date: "Nov 15, 2024",
      title: "PhD Student Wins Best Paper Award",
      description:
        "Congratulations to our research scholar for winning the best paper award at the International Conference.",
      category: "Achievement",
    },
  ]

  return (
    <>
      <PageHeader
        title="Updates & News"
        subtitle="Stay informed about the latest developments at HGC Lab"
        backgroundImage="/forest-nature-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {updates.map((update, idx) => (
              <NewsCard key={idx} {...update} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

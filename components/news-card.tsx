interface NewsCardProps {
  date: string
  title: string
  description: string
  category: string
}

export default function NewsCard({ date, title, description, category }: NewsCardProps) {
  const categoryColors: Record<string, { bg: string; text: string }> = {
    Grant: { bg: "bg-blue-100", text: "text-blue-700" },
    Publication: { bg: "bg-purple-100", text: "text-purple-700" },
    Event: { bg: "bg-cyan-100", text: "text-cyan-700" },
    Announcement: { bg: "bg-yellow-100", text: "text-yellow-700" },
    Collaboration: { bg: "bg-pink-100", text: "text-pink-700" },
    Achievement: { bg: "bg-orange-100", text: "text-orange-700" },
  }

  const colors = categoryColors[category] || { bg: "bg-gray-100", text: "text-gray-700" }

  return (
    <article className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Timeline dot and line */}
        <div className="flex flex-col items-center sm:mr-4 flex-shrink-0">
          <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
          <div className="w-1 h-12 bg-border hidden sm:block"></div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <time className="text-sm text-muted-foreground">{date}</time>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} w-fit`}>
              {category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </article>
  )
}

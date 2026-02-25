interface AchievementCardProps {
  type: "publication" | "award" | "collaboration"
  [key: string]: any
}

export default function AchievementCard(props: AchievementCardProps) {
  const { type, ...data } = props

  if (type === "publication") {
    return (
      <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition flex gap-4">
        <div className="text-2xl">📄</div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{data.title}</h3>
          <p className="text-sm text-muted-foreground">{data.venue}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-accent">{data.year}</p>
            <p className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Cited {data.cited} times</p>
          </div>
        </div>
      </div>
    )
  }

  if (type === "award") {
    return (
      <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition">
        <div className="flex items-start gap-3 mb-3">
          <div className="text-3xl">🏆</div>
          <div>
            <h3 className="font-bold text-lg">{data.title}</h3>
            <p className="text-sm text-muted-foreground">{data.organization}</p>
            <p className="text-xs text-accent mt-1">{data.year}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <div className="text-3xl">🤝</div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">{data.name}</h3>
          <p className="text-sm text-muted-foreground">{data.description}</p>
        </div>
      </div>
    </div>
  )
}

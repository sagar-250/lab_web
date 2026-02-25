interface CourseCardProps {
  code: string
  title: string
  level: string
  semester: string
  description: string
  instructor: string
  credits: number
}

export default function CourseCard(props: CourseCardProps) {
  const { code, title, semester, description, instructor, credits } = props

  return (
    <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition">
      <div className="flex gap-3 mb-3">
        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded">{code}</span>
        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded">{semester} Semester</span>
      </div>

      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>

      <div className="pt-4 border-t border-border flex flex-col gap-2 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Instructor</span>
          <span className="font-semibold">{instructor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Credits</span>
          <span className="font-semibold">{credits}</span>
        </div>
      </div>
    </div>
  )
}

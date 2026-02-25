interface TeamCardProps {
  name: string
  role: string
  specialty: string
  email: string
}

export default function TeamCard({ name, role, specialty, email }: TeamCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-border">
      {/* Placeholder Avatar */}
      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/40 flex items-center justify-center text-4xl font-bold text-primary">
          {name.charAt(0)}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-accent font-semibold mb-2">{role}</p>
        <p className="text-sm text-muted-foreground mb-4">{specialty}</p>
        <a href={`mailto:${email}`} className="text-sm text-accent hover:opacity-75 transition">
          {email}
        </a>
      </div>
    </div>
  )
}

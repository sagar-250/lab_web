import { Calendar } from "lucide-react"
import Image from "next/image"

interface MtechStudentCardProps {
  name: string
  thesisTitle: string
  dateOfJoining: string
  email: string
  linkedin?: string
}

// Helper function to get image path from name
function getImagePath(name: string): string {
  const firstNameMap: { [key: string]: string } = {
    saniya: "/Saniya.jpeg",
    srijita: "/Srijita.jpeg",
    roulo: "/Dinesh.jpeg",
    gabriel: "/Gabriel.jpeg",
    nagesh: "/mishra.jpeg",
    eslavath: "/Mohan.jpeg",
  }

  const firstName = name.split(" ")[0].toLowerCase()
  return firstNameMap[firstName] || "/placeholder-user.jpg"
}

export default function MtechStudentCard({ name, thesisTitle, dateOfJoining, email, linkedin }: MtechStudentCardProps) {
  const imagePath = getImagePath(name)

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-border">
      <div className="w-full aspect-[3/4] bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center overflow-hidden relative">
        <Image
          src={imagePath}
          alt={name}
          width={300}
          height={400}
          className="w-full h-full object-cover"
          priority={false}
        />
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{thesisTitle}</p>

        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Calendar className="w-3 h-3" />
          <span>Joined: {dateOfJoining}</span>
        </div>

        <div className="space-y-2">
          <a href={`mailto:${email}`} className="text-xs text-green-600 hover:opacity-75 transition block">
            {email}
          </a>
          {linkedin && (
            <a
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-green-600 hover:opacity-75 transition block"
            >
              LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

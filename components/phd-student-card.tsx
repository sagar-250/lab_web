"use client"

import { useState } from "react"
import { Mail, Calendar, ExternalLink, Linkedin, X } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

interface PhDStudentCardProps {
  name: string
  thesisTitle: string
  dateOfJoining: string
  email: string
  linkedin?: string
  googleScholar?: string
  orcid?: string
  introduction: string
}

// Helper function to get image path from name
function getImagePath(name: string): string {
  const firstNameMap: { [key: string]: string } = {
    saniya: "/Saniya.jpeg",
    srijita: "/Srijita.jpeg",
    roulo: "/Dinesh.jpeg",
    gabriel: "/Gabriel.jpeg",
    nagesh: "/mishra.jpeg",
  }

  const firstName = name.split(" ")[0].toLowerCase()
  return firstNameMap[firstName] || "/placeholder-user.jpg"
}

export default function PhDStudentCard({
  name,
  thesisTitle,
  dateOfJoining,
  email,
  linkedin,
  googleScholar,
  orcid,
  introduction,
}: PhDStudentCardProps) {
  const [showModal, setShowModal] = useState(false)
  const imagePath = getImagePath(name)

  return (
    <>
      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-border">
        <div className="w-full aspect-[3/4] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden relative">
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

          <a href={`mailto:${email}`} className="text-xs text-accent hover:opacity-75 transition block mb-4">
            {email}
          </a>

          <Button
            onClick={() => setShowModal(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
          >
            Know More
          </Button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-border mx-4">
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{name}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-[300px_1fr] gap-8 p-8">
              {/* Left: Image */}
              <div>
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg overflow-hidden flex items-center justify-center mb-4 relative">
                  <Image
                    src={imagePath}
                    alt={name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contact Links */}
                <div className="space-y-2">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-sm text-primary hover:opacity-75 transition"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  {linkedin && (
                    <a
                      href={`https://${linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:opacity-75 transition"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                  {googleScholar && (
                    <a
                      href={googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:opacity-75 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Google Scholar
                    </a>
                  )}
                  {orcid && (
                    <a
                      href={`https://orcid.org/${orcid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:opacity-75 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      ORCID
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Details */}
              <div>
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Thesis Title</h3>
                  <p className="text-lg font-semibold mb-4">{thesisTitle}</p>
                  <p className="text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Joined: {dateOfJoining}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Introduction</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{introduction}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

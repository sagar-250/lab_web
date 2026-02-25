"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 3)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 3) % 3)

  return (
    <section className="relative w-full h-screen min-h-[700px] text-white overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/forest-nature-hero.jpg)",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-white drop-shadow-lg">
          Geo Hydro Climatology
          <br />
          (GHC) Lab
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl mb-12 text-balance max-w-3xl text-white drop-shadow-md">
          Advancing Hydro-Climatology and Geospatial Data Science for Sustainable Future
        </p>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-4 sm:px-8">
          <button
            onClick={prevSlide}
            className="bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-lg transition text-white border border-white/20"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-lg transition text-white border border-white/20"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ProfessorProfile() {
  const [activeTab, setActiveTab] = useState("research")
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl shadow-xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-[540px_1fr] gap-0">
              {/* Left: Photo - Full height */}
              <div className="bg-white flex items-stretch">
                <div className="w-full overflow-hidden">
                  <img
                    src="/pichuka.jpeg"
                    alt="Dr. Subbarao Pichuka"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right: Info */}
              <div className="p-8 lg:p-12 flex flex-col">
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">Team Lead</h3>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Dr. Subbarao Pichuka</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Assistant Professor, Department of Civil Engineering
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <a
                        href="mailto:srp@iitm.ac.in"
                        className="flex items-center gap-2 text-sm text-green-600 hover:opacity-75 transition"
                      >
                        <Mail className="w-4 h-4" />
                        srp@iitm.ac.in
                      </a>
                      <a
                        href="tel:+917585965850"
                        className="flex items-center gap-2 text-sm text-green-600 hover:opacity-75 transition"
                      >
                        <Phone className="w-4 h-4" />
                        +91 7585965850
                      </a>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 mb-6 border-b border-border">
                      <button
                        onClick={() => setActiveTab("research")}
                        className={`pb-3 px-4 font-semibold transition ${
                          activeTab === "research"
                            ? "text-green-600 border-b-2 border-green-600"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Research
                      </button>
                      <button
                        onClick={() => setActiveTab("education")}
                        className={`pb-3 px-4 font-semibold transition ${
                          activeTab === "education"
                            ? "text-green-600 border-b-2 border-green-600"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Education
                      </button>
                    </div>

                    {/* Tab Content */}
                    <div className="text-sm leading-relaxed text-muted-foreground">
                      {activeTab === "research" && (
                        <div className="space-y-4">
                          <p>
                            Dr. Subbarao Pichuka specializes in Hydraulics and Water Resources Engineering. His research
                            focuses on climate change impacts on hydroclimatic variables, considering non-stationarity
                            in hydrological modeling.
                          </p>
                          <p>
                            His work involves development of time-varying downscaling approaches for assessment of
                            climate change impacts, extreme precipitation and temperature analysis, and dam safety under
                            extreme climate conditions.
                          </p>
                          <p className="font-semibold text-foreground">Research Interests:</p>
                          <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>Climate Change Impact Assessment</li>
                            <li>Hydrological Modeling & Downscaling</li>
                            <li>Dam Safety & Risk Assessment</li>
                            <li>Machine Learning in Hydrology</li>
                            <li>Extreme Weather Events</li>
                          </ul>
                        </div>
                      )}
                      {activeTab === "education" && (
                        <div className="space-y-4">
                          <div>
                            <p className="font-semibold text-foreground">Ph.D. in Civil Engineering</p>
                            <p>Indian Institute of Technology Kharagpur, 2019</p>
                            <p className="text-xs mt-1">
                              Thesis: Time-varying Downscaling Approach for Assessment of Climate Change Impacts on
                              Hydroclimatic Variables Considering Non-stationarity
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">M.Tech in Civil Engineering</p>
                            <p>Indian Institute of Technology Guwahati, 2012</p>
                          </div>
                          <div className="mt-6">
                            <p className="font-semibold text-foreground mb-2">Awards & Recognition:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                              <li>Young Researcher Award by Venus International Foundation (2021)</li>
                              <li>DST International Travel Support for AGU 2018</li>
                              <li>MHRD Research Scholarship (2014-2019)</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Dr. Subbarao Pichuka - Complete Profile</DialogTitle>
          </DialogHeader>

          <div className="grid md:grid-cols-[350px_1fr] gap-8 mt-4">
            {/* Left: Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src="/pichuka.jpg"
                alt="Dr. Subbarao Pichuka"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right: Full Introduction */}
            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Position</h3>
                <p>Assistant Professor, Department of Civil Engineering, IIT Madras</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">About</h3>
                <p className="mb-3">
                  Dr. Sreeparvathy Vijay is an Assistant Professor in the Department of Civil Engineering at the Indian
                  Institute of Technology Madras, specializing in Hydraulics and Water Resources Engineering (HWRE). She
                  works at the intersection of hydrology, remote sensing, and artificial intelligence/data science, with
                  a focus on addressing some of the most critical challenges in water resources management and climate
                  resilience.
                </p>
                <p className="mb-3">
                  Her research spans hydroclimatic extremes, design of hydrometeorological monitoring networks, climate
                  change impact assessment, climate regionalization and attribution analysis, and the non-stationarity
                  of hydrometeorological variables. She integrates multi-source datasets, remote sensing products, and
                  advanced machine learning/deep learning methods to improve prediction, monitoring, and assessment of
                  natural disasters (e.g., floods and droughts).
                </p>
                <p>
                  Driven by the vision of creating data-informed, climate-resilient water systems, she actively works on
                  bridging the gap between physical process understanding and data-driven innovations in hydrology.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Research Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Climate Change Impact Assessment on Water Resources</li>
                  <li>Hydrological Modeling under Non-stationary Conditions</li>
                  <li>Statistical Downscaling of Climate Variables</li>
                  <li>Extreme Precipitation and Temperature Analysis</li>
                  <li>Dam Safety and Risk Assessment under Climate Change</li>
                  <li>Machine Learning and Deep Learning in Hydrology</li>
                  <li>Remote Sensing Applications in Water Resources</li>
                  <li>Flood and Drought Prediction and Monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Ph.D. in Civil Engineering</p>
                    <p>Indian Institute of Technology Kharagpur, 2019</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Thesis: Time-varying Downscaling Approach for Assessment of Climate Change Impacts on
                      Hydroclimatic Variables Considering Non-stationarity
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">M.Tech in Civil Engineering (Water Resources Engineering)</p>
                    <p>Indian Institute of Technology Guwahati, 2012</p>
                  </div>
                  <div>
                    <p className="font-semibold">B.Tech in Civil Engineering</p>
                    <p>Jawaharlal Nehru Technological University, 2010</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Selected Publications</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    • Pichuka, S., & Maity, R. (2021). A novel approach for time-varying reliability analysis
                    considering non-stationary climate trends. Journal of Hydrology, 598, 126247.
                  </li>
                  <li>
                    • Pichuka, S., & Maity, R. (2020). Assessment of climate change impact on design storm
                    characteristics of a reservoir. Water Resources Management, 34(3), 1047-1062.
                  </li>
                  <li>
                    • Pichuka, S., Maity, R., & Dhanya, C. T. (2019). Incorporating GCM-based monthly precipitation
                    scenarios in daily stochastic rainfall model. Stochastic Environmental Research and Risk Assessment,
                    33(4-6), 991-1007.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Contact</h3>
                <p>Email: srp@iitm.ac.in</p>
                <p>Phone: +91 7585965850</p>
                <p>Office: Department of Civil Engineering, IIT Madras, Chennai 600036</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

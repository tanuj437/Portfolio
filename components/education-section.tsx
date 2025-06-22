"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Sharda University",
      location: "Greater Noida, India",
      period: "2022 – 2026",
      description:
        "Specializing in Artificial Intelligence, Machine Learning, and Software Engineering with focus on GenAI applications.",
      highlights: [
        "AI & ML Specialization",
        "Software Engineering",
        "Data Structures & Algorithms",
        "Research Projects",
      ],
    },
    {
      degree: "Senior Secondary Education (Science Stream)",
      institution: "St. Peter's Sr. Sec. School",
      location: "India",
      period: "2020 – 2022",
      description: "Completed with Science stream focusing on Mathematics, Physics, and Computer Science.",
      highlights: ["Mathematics", "Physics", "Computer Science", "Strong Foundation"],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-300">Building a strong foundation in computer science and AI</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-2">{edu.degree}</CardTitle>
                    <h3 className="text-lg text-orange-400 font-semibold mb-3">{edu.institution}</h3>
                    <div className="flex flex-col md:flex-row gap-4 text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{edu.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-700/30 border border-orange-500/30 rounded-lg p-3 text-center backdrop-blur-sm"
                    >
                      <span className="text-orange-400 text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Business Analytics Intern",
      company: "Cvent, India",
      period: "Jun 2025 – Present",
      location: "India",
      description: [
        "Assisting in automation of data preparation workflows and prompt-based analytics in enterprise event management settings.",
        "Supporting internal tools and reporting solutions to improve insight delivery and operational efficiency.",
      ],
      skills: ["Data Analytics", "Automation", "Enterprise Solutions", "Reporting"],
    },
    {
      title: "GenAI & LLMOps Intern",
      company: "The AIZoned, India",
      period: "Jan 2025 – June 2025",
      location: "India",
      description: [
        "Developed and deployed scalable APIs using FastAPI for LLM-based services with 99.5% uptime.",
        "Improved GenAI output quality by designing analytics pipelines for multimodal evaluation and benchmarking.",
        "Led the design of LangGraph-based agentic workflows and A2A communication flows for multi-agent research assistants.",
        "Developed a virtual try-on system combining DensePose, TPS, and UNet, optimizing multimodal generation pipelines.",
      ],
      skills: ["FastAPI", "LLMOps", "LangGraph", "Computer Vision", "Multi-agent Systems", "GenAI"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300">Building the future with AI and data-driven solutions</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-white mb-2">{exp.title}</CardTitle>
                    <h3 className="text-xl text-green-400 font-semibold">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2 mt-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {skill}
                    </Badge>
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

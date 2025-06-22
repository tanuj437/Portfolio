"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, Cloud } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Expert in TensorFlow, PyTorch, and cutting-edge LLM technologies",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in Python, and modern web frameworks",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced skills in data visualization and business intelligence",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Experience with AWS, Azure, Docker, and CI/CD pipelines",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a GenAI enthusiast and AI Engineer currently pursuing B.Tech in Computer Science at Sharda University.
            I’ve built NLP toolkits, virtual try-on systems, and LangGraph-powered multi-agent workflows — combining
            deep learning with real-world problem solving. I thrive at the intersection of data, intelligence, and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <item.icon className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gray-800/30 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Current Focus</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Working on advanced GenAI applications, multimodal AI systems, and scalable MLOps pipelines. Passionate
                about Sanskrit NLP, computer vision, and building intelligent systems that make a difference.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Cloud, Wrench, BarChart } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "SQL", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "Hugging Face", "LangChain", "Diffusers", "LLMs"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Data Analytics",
      icon: BarChart,
      skills: ["Pandas", "NumPy", "Power BI", "Tableau", "Excel", "Matplotlib", "Seaborn"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Web Development",
      icon: Code,
      skills: ["FastAPI", "Flask", "REST APIs", "JSON", "HTML", "CSS"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      skills: ["AWS (S3, EC2, Lambda)", "Azure", "MongoDB", "MySQL", "PostgreSQL", "DynamoDB"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Docker", "Git", "GitHub", "CI/CD", "Containerization", "Postman"],
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300">Comprehensive expertise across the AI and data science stack</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gray-800/30 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Specializations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">GenAI & LLMOps</h4>
                  <p className="text-gray-400 text-sm">Large Language Models, Prompt Engineering, Model Deployment</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Computer Vision</h4>
                  <p className="text-gray-400 text-sm">Image Processing, Object Detection, Multimodal AI</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">NLP Research</h4>
                  <p className="text-gray-400 text-sm">Sanskrit Processing, Linguistic Analysis, Text Mining</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

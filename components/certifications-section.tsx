"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CertificationsSection() {
  const certificationCategories = [
    {
      category: "Machine Learning & AI",
      certifications: [
        {
          title: "Neural Networks and Deep Learning",
          issuer: "Deeplearning.AI",
          description:
            "Comprehensive course on neural networks, deep learning fundamentals, and practical implementations.",
          skills: ["Neural Networks", "Deep Learning", "Python", "TensorFlow"],
        },
        {
          title: "Machine Learning Specialization",
          issuer: "Stanford University",
          description:
            "Complete specialization covering supervised learning, unsupervised learning, and best practices.",
          skills: ["Supervised Learning", "Unsupervised Learning", "ML Algorithms", "Python"],
        },
        {
          title: "Machine Learning",
          issuer: "IIT Kharagpur",
          description: "Advanced machine learning concepts and applications from premier Indian institute.",
          skills: ["Advanced ML", "Statistical Learning", "Pattern Recognition"],
        },
      ],
    },
    {
      category: "Data Analytics",
      certifications: [
        {
          title: "Data Analytics Essentials",
          issuer: "Cisco",
          description: "Fundamental concepts of data analytics, visualization, and business intelligence.",
          skills: ["Data Analysis", "Visualization", "Business Intelligence", "Statistics"],
        },
        {
          title: "Python for Data Science",
          issuer: "IBM",
          description: "Comprehensive Python programming for data science applications and analysis.",
          skills: ["Python", "Pandas", "NumPy", "Data Science", "Jupyter"],
        },
      ],
    },
    {
      category: "Project Management",
      certifications: [
        {
          title: "Project Management Fundamentals",
          issuer: "IIT Kharagpur",
          description: "Essential project management principles, methodologies, and best practices.",
          skills: ["Project Planning", "Risk Management", "Team Leadership", "Agile"],
        },
      ],
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Certifications & Training
          </h2>
          <p className="text-xl text-gray-300">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="space-y-12">
          {certificationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-yellow-400" />
                {category.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.certifications.map((cert, certIndex) => (
                  <Card
                    key={certIndex}
                    className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-white mb-2">{cert.title}</CardTitle>
                          <p className="text-yellow-400 font-semibold">{cert.issuer}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gray-800/30 border-yellow-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Continuous Learning</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Committed to staying at the forefront of AI and technology through continuous education, research, and
                hands-on experimentation with emerging technologies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">6+</div>
                  <div className="text-gray-400">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
                  <div className="text-gray-400">Specializations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">2+</div>
                  <div className="text-gray-400">Years Learning</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

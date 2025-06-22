"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Vedika: Sanskrit NLP Toolkit",
      description:
        "A comprehensive NLP toolkit for Sanskrit text processing with advanced linguistic analysis capabilities.",
      features: [
        "Modular NLP toolkit with Sandhi splitting and metrical analysis",
        "Recursive Sandhi splitter with rule-based processing",
        "BiLSTM-Attention model for Sandhi joining and detokenization",
        "Syllabification and hybrid ML processing",
      ],
      technologies: ["Python", "TensorFlow", "NLP", "BiLSTM", "Sanskrit"],
      githubUrl: "https://github.com/tanuj437/Vedika.git",
      liveUrl: "https://pypi.org/project/vedika/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Virtual Try-On System",
      description:
        "Advanced multimodal GenAI system for realistic garment visualization using computer vision and deep learning.",
      features: [
        "Garment transfer using DensePose and TPS transformation",
        "UNet refinement for human body alignment",
        "Full preprocessing stack with segmentation and keypoint mapping",
        "Diffusion-based inpainting for high-fidelity synthesis",
      ],
      technologies: ["Python", "Computer Vision", "DensePose", "UNet", "Diffusion Models"],
      githubUrl: "https://github.com/tanuj437/Try-On.git",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Adaptive AI Questioning System",
      description: "Intelligent assessment platform using cognitive models for personalized learning experiences.",
      features: [
        "Item Response Theory and Cognitive Diagnostic Models",
        "30% improvement in learning efficiency",
        "12% better retention via dynamic difficulty control",
        "Scalable backend architecture for learning platforms",
      ],
      technologies: ["Python", "Machine Learning", "FastAPI", "Educational AI", "Backend"],
      githubUrl: "https://github.com/tanuj437/Adaptive-AI-Questioning.git",

      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Touchless Tray",
      description:
        "Revolutionary computer vision system enabling contactless food ordering through hand gesture recognition.",
      features: [
        "Real-time hand gesture detection and tracking",
        "Contactless menu navigation and item selection",
        "Multi-gesture command recognition system",
        "Integration with POS systems for seamless ordering",
      ],
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Hand Tracking", "Gesture Recognition"],
      githubUrl: "https://github.com/tanuj437/TouchLess-Tray.git",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Gait Recognition System",
      description:
        "Advanced biometric identification system using 3D gait analysis for person recognition and authentication.",
      features: [
        "3D pose estimation and gait pattern analysis",
        "Biometric authentication based on walking patterns",
        "Real-time person identification from video streams",
        "Robust against clothing and lighting variations",
      ],
      technologies: ["Python", "3D Mapping", "Computer Vision", "Biometrics", "Deep Learning", "Pose Estimation"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
            Key Projects
          </h2>
          <p className="text-xl text-gray-300">
            Innovative solutions at the intersection of AI and real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
            >
              <CardHeader>
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-lg mb-4`}></div>
                <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-gray-400">{project.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/70 hover:text-white transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-purple-500/20 border-purple-500 text-purple-400 hover:bg-purple-500/30"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-green-500/20 border-green-500 text-green-400 hover:bg-green-500/30"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

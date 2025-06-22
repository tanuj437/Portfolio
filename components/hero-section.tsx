"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "GenAI Engineer | LLMOps | Data Analytics"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse leading-tight">
            Tanuj Saxena
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 h-6 sm:h-8 mb-4 sm:mb-6">
            {text}
            <span className="animate-blink">|</span>
          </div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Passionate about building intelligent systems and leveraging cutting-edge AI technologies to solve complex
            problems. Specialized in Large Language Models, MLOps, and Data Analytics.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-green-500/20 border-green-500 text-green-400 hover:bg-green-500/30 text-xs sm:text-sm"
            asChild
          >
            <a href="mailto:tanuj.saxena.rks@gmail.com">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Email
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-blue-500/20 border-blue-500 text-blue-400 hover:bg-blue-500/30 text-xs sm:text-sm"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-purple-500/20 border-purple-500 text-purple-400 hover:bg-purple-500/30 text-xs sm:text-sm"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-orange-500/20 border-orange-500 text-orange-400 hover:bg-orange-500/30 text-xs sm:text-sm"
            asChild
          >
            <a href="tel:+91-8126560686">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Call
            </a>
          </Button>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToNext} className="text-green-400 hover:text-green-300 transition-colors">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

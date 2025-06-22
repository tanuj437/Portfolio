"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tanuj.saxena.rks@gmail.com",
      href: "mailto:tanuj.saxena.rks@gmail.com",
      color: "text-green-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8126560686",
      href: "tel:+91-8126560686",
      color: "text-blue-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Greater Noida, India",
      href: "#",
      color: "text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "#",
      color: "text-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "#",
      color: "text-gray-400",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on exciting AI projects or discuss opportunities? I'm always open to connecting with
            fellow innovators and industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gray-800 ${contact.color}`}>
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{contact.label}</h4>
                        <a href={contact.href} className={`${contact.color} hover:underline transition-colors`}>
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <Card className="bg-gray-800/30 border-green-500/30 h-full backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Ready to Collaborate?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about working on innovative AI projects, contributing to open-source initiatives, and
                  exploring new opportunities in GenAI and LLMOps. Whether you're looking for:
                </p>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">•</span>
                    AI/ML consultation and development
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">•</span>
                    Research collaboration opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">•</span>
                    Full-time or internship positions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">•</span>
                    Open-source project contributions
                  </li>
                </ul>

                <div className="pt-4">
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3"
                    asChild
                  >
                    <a href="mailto:tanuj.saxena.rks@gmail.com">
                      <Send className="w-5 h-5 mr-2" />
                      Send me an email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">© 2025 Tanuj Saxena. Built with passion for AI and innovation.</p>
        </div>
      </div>
    </section>
  )
}

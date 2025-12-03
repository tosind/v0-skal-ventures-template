"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-muted/20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sentient mb-6">
              Ready to <i className="font-light">transform</i> your practice?
            </h2>
            <p className="text-foreground/60 font-mono text-sm md:text-base">
              Schedule a personalized demo with West Work Studio
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 md:p-10 rounded-lg border border-border/50 bg-muted/30 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-foreground/80 mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-foreground/80 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-mono text-foreground/80 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="clinic" className="block text-sm font-mono text-foreground/80 mb-2">
                  Clinic Name *
                </label>
                <Input
                  id="clinic"
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono text-foreground/80 mb-2">
                Tell us about your practice
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-background/50 resize-none"
                placeholder="Number of locations, current booking challenges, monthly call volume, etc."
              />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">
              Schedule Demo Call
            </Button>

            <p className="text-sm text-foreground/50 font-mono">
              By submitting, you agree to be contacted by West Work Studio about MedSpaAI.
            </p>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-border/30 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-foreground/60 font-mono">© 2025 West Work Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

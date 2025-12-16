"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"
import { trackEvent } from "@/lib/facebook-client"
import { trackGAEvent } from "@/lib/google-analytics"

export function Hero() {
  const [hovering, setHovering] = useState(false)

  const handleTryVoiceAgent = () => {
    trackGAEvent("demo_requested", {
      source: "hero_button",
      timestamp: new Date().toISOString(),
    })
    trackEvent("Lead")
  }

  const handleScheduleClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">BY WEST WORK STUDIO</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Never miss a <br />
          <i className="font-light">client</i> again
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[640px] mx-auto">
          See how medspas are automating 80–90 percent of calls using AI that sounds human.
        </p>

        <div className="mt-6 text-foreground/60 font-mono text-sm">
          <p>
            Have questions? Call us at{" "}
            <a href="tel:+18557210499" className="text-foreground hover:underline font-semibold">
              (855) 721-0499
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <Link className="contents max-sm:hidden" href="/#demo" onClick={handleTryVoiceAgent}>
            <Button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              Try the Voice Agent →
            </Button>
          </Link>
          <Link className="contents sm:hidden" href="/#demo" onClick={handleTryVoiceAgent}>
            <Button size="sm" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              Try the Voice Agent →
            </Button>
          </Link>

          <button className="contents max-sm:hidden" onClick={handleScheduleClick}>
            <Button variant="outline">Schedule a Call</Button>
          </button>
          <button className="contents sm:hidden" onClick={handleScheduleClick}>
            <Button variant="outline" size="sm">
              Schedule a Call
            </Button>
          </button>
        </div>
      </div>
    </div>
  )
}

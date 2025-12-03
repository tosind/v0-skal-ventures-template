"use client"

import { Calendar, MessageSquare, Clock, DollarSign, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: CheckCircle,
    title: "Never miss a call again",
    description: "Capture every opportunity with AI that answers instantly, 24/7, even during peak hours.",
  },
  {
    icon: Calendar,
    title: "Instant appointment booking",
    description: "Turn inquiries into confirmed bookings in seconds without staff intervention.",
  },
  {
    icon: MessageSquare,
    title: "Handles FAQs + pricing questions",
    description: "Answer treatment questions, pricing, and package details automatically.",
  },
  {
    icon: Clock,
    title: "Converts after-hours callers",
    description: "Book appointments and qualify leads even when your clinic is closed.",
  },
  {
    icon: DollarSign,
    title: "Saves $3–$5k/month in staffing",
    description: "Reduce front desk costs while improving response times and client satisfaction.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sentient mb-6">
            Transform your <i className="font-light">client experience</i>
          </h2>
          <p className="text-foreground/60 font-mono text-sm md:text-base max-w-2xl mx-auto">
            Stop losing revenue to missed calls and inefficient booking processes. Our AI agents work 24/7 to grow your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-lg border border-border/50 bg-muted/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4">
                <benefit.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-sentient mb-3">{benefit.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Phone, Mic, MicOff } from "lucide-react"

const agents = [
  {
    id: "reception",
    name: "Reception & Booking Agent",
    description:
      "Handles appointment scheduling, treatment inquiries, package information, and general front desk tasks.",
    scenarios: [
      "Book a consultation for Botox",
      "Ask about laser hair removal pricing",
      "Reschedule an existing appointment",
      "Inquire about treatment packages",
    ],
  },
  {
    id: "consultation",
    name: "Consultation & Follow-up Agent",
    description:
      "Manages post-treatment check-ins, answers aftercare questions, and qualifies leads for consultations.",
    scenarios: [
      "Post-treatment care instructions",
      "Schedule a follow-up consultation",
      "Ask about recovery timeline",
      "Report treatment side effects",
    ],
  },
]

export function Demo() {
  const [activeAgent, setActiveAgent] = useState(agents[0].id)
  const [isListening, setIsListening] = useState(false)

  const currentAgent = agents.find((a) => a.id === activeAgent) || agents[0]

  const handleStartCall = () => {
    setIsListening(true)
    // In production, this would initialize the voice call
  }

  const handleEndCall = () => {
    setIsListening(false)
    // In production, this would end the voice call
  }

  return (
    <section id="demo" className="relative py-24 md:py-32 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sentient mb-6">
            Experience it <i className="font-light">live</i>
          </h2>
          <p className="text-foreground/60 font-mono text-sm md:text-base max-w-2xl mx-auto">
            Talk to our AI agents right now. No appointment needed, no waiting in line.
          </p>
        </div>

        {/* Agent Selector */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => setActiveAgent(agent.id)}
              className={`flex-1 p-6 rounded-lg border text-left transition-all duration-300 ${
                activeAgent === agent.id
                  ? "border-primary bg-primary/10"
                  : "border-border/50 bg-muted/30 hover:border-primary/30"
              }`}
            >
              <h3 className="font-sentient text-xl mb-2">{agent.name}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{agent.description}</p>
            </button>
          ))}
        </div>

        {/* Demo Interface */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl border border-border/50 bg-muted/30 backdrop-blur-sm">
            {/* Call Status */}
            <div className="text-center mb-8">
              {isListening ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/50"></div>
                    <div className="relative w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <Mic className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-sentient mb-1">Connected to {currentAgent.name}</p>
                    <p className="text-sm text-foreground/60">Speak naturally, I'm listening...</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-muted border-2 border-border flex items-center justify-center">
                    <Phone className="w-8 h-8 text-foreground/40" />
                  </div>
                  <div>
                    <p className="text-lg font-sentient mb-1">Ready to connect</p>
                    <p className="text-sm text-foreground/60">Click below to start talking</p>
                  </div>
                </div>
              )}
            </div>

            {/* Call Button */}
            <div className="flex justify-center mb-8">
              {isListening ? (
                <Button size="lg" variant="destructive" onClick={handleEndCall} className="gap-2">
                  <MicOff className="w-5 h-5" />
                  End Call
                </Button>
              ) : (
                <Button size="lg" onClick={handleStartCall} className="gap-2">
                  <Phone className="w-5 h-5" />
                  Start Call with AI
                </Button>
              )}
            </div>

            {/* Suggested Scenarios */}
            {!isListening && (
              <div className="border-t border-border/50 pt-6">
                <p className="text-sm font-mono text-foreground/60 mb-4 text-center">TRY ASKING ABOUT:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentAgent.scenarios.map((scenario, index) => (
                    <div
                      key={index}
                      className="text-sm p-3 rounded bg-muted/50 border border-border/30 text-foreground/80"
                    >
                      "{scenario}"
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

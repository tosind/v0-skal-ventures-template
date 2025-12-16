"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Phone, Mic, MicOff, Volume2, VolumeX } from "lucide-react"
import Vapi from "@vapi-ai/web"
import { trackGAEvent } from "@/lib/google-analytics"

const agents = [
  {
    id: "reception",
    name: "Sarah - Reception & Booking Agent",
    description:
      "Handles appointment scheduling, treatment inquiries, package information, and general front desk tasks.",
    vapiAssistantId: "50fa5d3f-51f3-4682-8c8c-17a39090e83d",
    scenarios: [
      "Book a consultation for Botox",
      "Ask about laser hair removal pricing",
      "Reschedule an existing appointment",
      "Inquire about treatment packages",
    ],
  },
  {
    id: "consultation",
    name: "Alex - Consultation & Follow-up Agent",
    description:
      "Manages post-treatment check-ins, answers aftercare questions, and qualifies leads for consultations.",
    vapiAssistantId: "b5289354-c514-41c4-8f55-757509230147",
    scenarios: [
      "Post-treatment care instructions",
      "Schedule a follow-up consultation",
      "Ask about recovery timeline",
      "Report treatment side effects",
    ],
  },
]

const VAPI_PUBLIC_KEY = "aeaa8857-9e6e-4da4-9456-eb0b7c14fd29"

export function Demo() {
  const [activeAgent, setActiveAgent] = useState(agents[0].id)
  const [callStatus, setCallStatus] = useState<"idle" | "connecting" | "connected" | "ended">("idle")
  const [isMuted, setIsMuted] = useState(false)
  const [transcript, setTranscript] = useState<Array<{ role: string; text: string }>>([])
  const vapiRef = useRef<Vapi | null>(null)

  const currentAgent = agents.find((a) => a.id === activeAgent) || agents[0]

  useEffect(() => {
    console.log("[v0] Initializing Vapi SDK")
    const vapi = new Vapi(VAPI_PUBLIC_KEY)
    vapiRef.current = vapi

    // Set up event listeners
    vapi.on("call-start", () => {
      console.log("[v0] Call started")
      setCallStatus("connected")
    })

    vapi.on("call-end", () => {
      console.log("[v0] Call ended")
      setCallStatus("ended")
      setTimeout(() => {
        setCallStatus("idle")
        setTranscript([])
      }, 2000)
    })

    vapi.on("speech-start", () => {
      console.log("[v0] User started speaking")
    })

    vapi.on("speech-end", () => {
      console.log("[v0] User stopped speaking")
    })

    vapi.on("message", (message: any) => {
      console.log("[v0] Message received:", message)

      // Handle transcript messages
      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role,
            text: message.transcript,
          },
        ])
      }
    })

    vapi.on("error", (error: any) => {
      console.error("[v0] Vapi error:", error)
      setCallStatus("idle")
    })

    return () => {
      console.log("[v0] Cleaning up Vapi")
      vapi.stop()
    }
  }, [])

  const handleStartCall = async () => {
    if (!vapiRef.current) {
      console.error("[v0] Vapi not initialized")
      return
    }

    try {
      console.log("[v0] Starting call with assistant:", currentAgent.vapiAssistantId)
      setCallStatus("connecting")
      setTranscript([])

      trackGAEvent("demo_requested", {
        source: "voice_call",
        agent: currentAgent.name,
        timestamp: new Date().toISOString(),
      })

      await vapiRef.current.start(currentAgent.vapiAssistantId)
    } catch (error) {
      console.error("[v0] Error starting call:", error)
      setCallStatus("idle")
    }
  }

  const handleEndCall = () => {
    if (!vapiRef.current) return

    console.log("[v0] Ending call")
    vapiRef.current.stop()
  }

  const handleToggleMute = () => {
    if (!vapiRef.current) return

    const newMutedState = !isMuted
    vapiRef.current.setMuted(newMutedState)
    setIsMuted(newMutedState)
    console.log("[v0] Mute toggled:", newMutedState)
  }

  const handleAgentChange = (agentId: string) => {
    if (callStatus !== "idle") {
      handleEndCall()
    }
    setActiveAgent(agentId)
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
              onClick={() => handleAgentChange(agent.id)}
              disabled={callStatus !== "idle"}
              className={`flex-1 p-6 rounded-lg border text-left transition-all duration-300 ${
                activeAgent === agent.id
                  ? "border-primary bg-primary/10"
                  : "border-border/50 bg-muted/30 hover:border-primary/30"
              } ${callStatus !== "idle" ? "opacity-50 cursor-not-allowed" : ""}`}
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
              {callStatus === "connecting" && (
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/50"></div>
                    <div className="relative w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <Phone className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-sentient mb-1">Connecting...</p>
                    <p className="text-sm text-foreground/60">Please wait while we connect you</p>
                  </div>
                </div>
              )}

              {callStatus === "connected" && (
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
              )}

              {callStatus === "idle" && (
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

              {callStatus === "ended" && (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-muted border-2 border-border flex items-center justify-center">
                    <Phone className="w-8 h-8 text-foreground/40" />
                  </div>
                  <div>
                    <p className="text-lg font-sentient mb-1">Call ended</p>
                    <p className="text-sm text-foreground/60">Thank you for trying our demo</p>
                  </div>
                </div>
              )}
            </div>

            {/* Call Controls */}
            <div className="flex justify-center gap-3 mb-8">
              {callStatus === "connected" && (
                <>
                  <Button size="lg" variant="outline" onClick={handleToggleMute} className="gap-2 bg-transparent">
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    {isMuted ? "Unmute" : "Mute"}
                  </Button>
                  <Button size="lg" variant="destructive" onClick={handleEndCall} className="gap-2">
                    <MicOff className="w-5 h-5" />
                    End Call
                  </Button>
                </>
              )}

              {callStatus === "idle" && (
                <Button size="lg" onClick={handleStartCall} className="gap-2">
                  <Phone className="w-5 h-5" />
                  Start Call with AI
                </Button>
              )}

              {callStatus === "connecting" && (
                <Button size="lg" disabled className="gap-2">
                  <Phone className="w-5 h-5 animate-pulse" />
                  Connecting...
                </Button>
              )}
            </div>

            {/* Transcript Display */}
            {transcript.length > 0 && (
              <div className="border-t border-border/50 pt-6 mb-6">
                <p className="text-sm font-mono text-foreground/60 mb-4 text-center">CONVERSATION:</p>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {transcript.map((message, index) => (
                    <div
                      key={index}
                      className={`text-sm p-3 rounded ${
                        message.role === "assistant"
                          ? "bg-primary/10 border border-primary/20"
                          : "bg-muted/50 border border-border/30"
                      }`}
                    >
                      <span className="font-semibold text-xs uppercase text-foreground/60 mb-1 block">
                        {message.role === "assistant" ? currentAgent.name.split(" - ")[0] : "You"}:
                      </span>
                      <span className="text-foreground/80">{message.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suggested Scenarios */}
            {callStatus === "idle" && (
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

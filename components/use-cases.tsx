"use client"

const useCases = [
  {
    title: "After-Hours Booking",
    scenario: "A potential client browses your Instagram at 11 PM and wants to book a consultation.",
    solution:
      "Your AI agent answers immediately, schedules the appointment, and sends confirmation—all while you sleep.",
    stat: "40% of inquiries happen outside business hours",
  },
  {
    title: "Peak Hour Management",
    scenario: "Multiple clients call during lunch rush when your front desk is overwhelmed.",
    solution:
      "AI agents handle all incoming calls simultaneously, ensuring no client is left waiting or sent to voicemail.",
    stat: "0 missed calls during peak times",
  },
  {
    title: "Post-Treatment Follow-Up",
    scenario: "Client needs aftercare advice 3 days after their filler appointment.",
    solution:
      "AI agent provides personalized aftercare instructions, schedules follow-up if needed, and escalates concerns to staff.",
    stat: "95% client satisfaction on follow-ups",
  },
  {
    title: "Package Upselling",
    scenario: "Client calls to book a single laser session.",
    solution:
      "AI naturally introduces package options, explains savings, and books the best value option that fits their goals.",
    stat: "30% increase in package bookings",
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sentient mb-6">
            Real <i className="font-light">scenarios</i>, real results
          </h2>
          <p className="text-foreground/60 font-mono text-sm md:text-base max-w-2xl mx-auto">
            See how MedSpaAI handles the daily challenges your team faces
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative p-8 md:p-10 rounded-lg border border-border/50 bg-muted/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-sentient">{useCase.title}</h3>
                  <div>
                    <p className="text-sm font-mono text-primary mb-2">THE CHALLENGE</p>
                    <p className="text-foreground/80 leading-relaxed">{useCase.scenario}</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-secondary mb-2">THE SOLUTION</p>
                    <p className="text-foreground/80 leading-relaxed">{useCase.solution}</p>
                  </div>
                </div>
                <div className="lg:w-48 flex items-center justify-center lg:justify-end">
                  <div className="text-center lg:text-right">
                    <p className="text-3xl md:text-4xl font-sentient text-primary mb-2">
                      {useCase.stat.match(/\d+%?/)?.[0] || "✓"}
                    </p>
                    <p className="text-sm text-foreground/60 max-w-[200px]">{useCase.stat.replace(/\d+%?\s*/, "")}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

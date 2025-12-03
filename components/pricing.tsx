"use client"

import { Button } from "./ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small practices testing AI voice",
    features: [
      "1 AI voice agent (Reception OR Consultation)",
      "Up to 200 calls/month",
      "Basic appointment scheduling",
      "Email support",
      "Call analytics dashboard",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Most popular for growing med spas",
    features: [
      "2 AI voice agents (Reception AND Consultation)",
      "Up to 500 calls/month",
      "Advanced scheduling with calendar sync",
      "Treatment package recommendations",
      "Priority phone & email support",
      "Custom voice training",
      "CRM integration",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-location practices",
    features: [
      "Unlimited AI voice agents",
      "Unlimited calls",
      "Multi-location support",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "Advanced analytics & reporting",
      "24/7 priority support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sentient mb-6">
            Simple, <i className="font-light">transparent</i> pricing
          </h2>
          <p className="text-foreground/60 font-mono text-sm md:text-base max-w-2xl mx-auto">
            No setup fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(232,180,240,0.2)] scale-105"
                  : "border-border/50 bg-muted/30 hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-mono rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-sentient mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/60">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-sentient">{plan.price}</span>
                <span className="text-foreground/60 font-mono text-sm">{plan.period}</span>
              </div>

              <Button className="w-full mb-8" variant={plan.highlighted ? "default" : "outline"}>
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-sm text-foreground/80 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60 text-sm font-mono">
            All plans include: SSL security • HIPAA compliance • Regular updates
          </p>
        </div>
      </div>
    </section>
  )
}

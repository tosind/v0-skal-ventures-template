"use client"

const testimonials = [
  {
    quote:
      "We went from missing 15-20 calls per week to zero. Our booking rate increased by 35% in the first month alone.",
    author: "Sarah Chen",
    role: "Owner, Radiance Medical Spa",
    location: "Beverly Hills, CA",
  },
  {
    quote:
      "The AI handles after-hours inquiries better than our old answering service ever did. Clients love the instant responses.",
    author: "Dr. Michael Torres",
    role: "Medical Director",
    location: "Austin Aesthetic Clinic",
  },
  {
    quote:
      "Our front desk team can now focus on in-person clients instead of being tied to the phone all day. Game changer.",
    author: "Jennifer Park",
    role: "Practice Manager",
    location: "Elite Med Spa & Wellness",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sentient mb-6">
            Trusted by <i className="font-light">industry leaders</i>
          </h2>
          <p className="text-foreground/60 font-mono text-sm md:text-base">
            Join medical spas that are growing faster with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg border border-border/50 bg-muted/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-border/30 pt-4">
                <p className="font-sentient text-lg">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
                <p className="text-sm text-foreground/40 font-mono">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

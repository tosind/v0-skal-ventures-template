"use client"

import { Hero } from "@/components/hero"
import { Leva } from "leva"
import { Benefits } from "@/components/benefits"
import { Demo } from "@/components/demo"
import { UseCases } from "@/components/use-cases"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Demo />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Contact />
      <Leva hidden />
    </>
  )
}

import { trackFacebookEvent } from "@/lib/facebook-events"
import { type NextRequest, NextResponse } from "next/server"

interface RequestBody {
  eventName: "Lead" | "Schedule" | "Contact"
  userData?: {
    email?: string
    phone?: string
    firstName?: string
    lastName?: string
    city?: string
    state?: string
    zipCode?: string
    country?: string
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json()

    const { eventName, userData } = body

    if (!eventName) {
      return NextResponse.json({ error: "Event name is required" }, { status: 400 })
    }

    await trackFacebookEvent(eventName, userData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

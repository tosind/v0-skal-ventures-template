// Client-side helper to track Facebook events
export async function trackEvent(
  eventName: "Lead" | "Schedule" | "Contact",
  userData?: {
    email?: string
    phone?: string
    firstName?: string
    lastName?: string
    city?: string
    state?: string
    zipCode?: string
    country?: string
  },
): Promise<void> {
  try {
    const response = await fetch("/api/facebook-events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ eventName, userData }),
    })

    if (!response.ok) {
      console.error("[Facebook] Event tracking failed")
    }
  } catch (error) {
    console.error("[Facebook] Error tracking event:", error)
  }
}

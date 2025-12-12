import crypto from "crypto"

interface UserData {
  email?: string
  phone?: string
  firstName?: string
  lastName?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
}

interface EventPayload {
  data: {
    event_name: string
    event_time: number
    event_source_url: string
    user_data: {
      em?: string
      ph?: string
      fn?: string
      ln?: string
      ct?: string
      st?: string
      zp?: string
      country?: string
    }
    event_id: string
  }[]
  access_token: string
}

// Hash PII fields for Facebook Conversion API
function hashPII(value: string | undefined): string | undefined {
  if (!value) return undefined
  return crypto.createHash("sha256").update(value.toLowerCase().trim()).digest("hex")
}

export async function trackFacebookEvent(
  eventName: "Lead" | "Schedule" | "Contact",
  userData?: UserData,
): Promise<void> {
  try {
    const pixelId = process.env.FACEBOOK_PIXEL_ID
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

    if (!pixelId || !accessToken) {
      console.warn("[Facebook] Missing pixel ID or access token")
      return
    }

    const payload: EventPayload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: typeof window !== "undefined" ? window.location.href : "",
          user_data: {
            em: hashPII(userData?.email),
            ph: hashPII(userData?.phone),
            fn: hashPII(userData?.firstName),
            ln: hashPII(userData?.lastName),
            ct: hashPII(userData?.city),
            st: hashPII(userData?.state),
            zp: hashPII(userData?.zipCode),
            country: hashPII(userData?.country),
          },
          event_id: `${Date.now()}-${Math.random()}`,
        },
      ],
      access_token: accessToken,
    }

    // Remove undefined fields
    Object.keys(payload.data[0].user_data).forEach((key) => {
      if ((payload.data[0].user_data as any)[key] === undefined) {
        delete (payload.data[0].user_data as any)[key]
      }
    })

    const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error("[Facebook] Event tracking failed:", response.statusText)
    }
  } catch (error) {
    console.error("[Facebook] Error tracking event:", error)
  }
}

// Client-side helper to track Google Analytics conversion events
export function trackGAEvent(eventName: string, eventData?: Record<string, any>): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventData || {})
    console.log(`[GA] Event tracked: ${eventName}`, eventData)
  }
}

// Specific conversion event trackers
export function trackDemoRequested(source?: string): void {
  trackGAEvent("demo_requested", {
    source: source || "voice_agent_button",
    timestamp: new Date().toISOString(),
  })
}

export function trackCallScheduled(calLink?: string): void {
  trackGAEvent("call_scheduled", {
    cal_link: calLink || "west-work-studios-k1avnr/voiceagent",
    timestamp: new Date().toISOString(),
  })
}

export function trackFormSubmitted(formType?: string): void {
  trackGAEvent("form_submitted", {
    form_type: formType || "unknown",
    timestamp: new Date().toISOString(),
  })
}

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void
  }
}

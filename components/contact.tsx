"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/facebook-client"

export function Contact() {
  useEffect(() => {
    const handleCalComBooking = () => {
      const observer = new MutationObserver(() => {
        const bookingConfirmation = document.querySelector('[data-testid="booking-confirmation"]')
        if (bookingConfirmation) {
          trackEvent("Schedule")
          observer.disconnect()
        }
      })

      observer.observe(document.body, { subtree: true, childList: true })

      return () => observer.disconnect()
    }

    handleCalComBooking()

    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "voiceagent", {origin:"https://app.cal.com"});
      
      Cal.ns.voiceagent("inline", {
        elementOrSelector:"#my-cal-inline-voiceagent",
        config: {"layout":"month_view"},
        calLink: "west-work-studios-k1avnr/voiceagent",
      });
      
      Cal.ns.voiceagent("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      
      Cal.ns.voiceagent("on", {
        action: "bookingSuccessful",
        callback: function() {
          window.fbq && window.fbq('track', 'Schedule');
          window.gtag && window.gtag('event', 'call_scheduled', {
            cal_link: 'west-work-studios-k1avnr/voiceagent',
            timestamp: new Date().toISOString()
          });
          fetch('/api/facebook-events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ eventName: 'Schedule' })
          });
        }
      });
    `
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-muted/20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sentient mb-6">
              Ready to <i className="font-light">transform</i> your practice?
            </h2>
            <p className="text-foreground/60 font-mono text-sm md:text-base">
              Schedule a personalized demo with West Work Studio
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-lg border border-border/50 bg-muted/30 backdrop-blur-sm">
            <div id="my-cal-inline-voiceagent" style={{ width: "100%", height: "600px", overflow: "scroll" }} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-border/30 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-foreground/60 font-mono">© 2025 West Work Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

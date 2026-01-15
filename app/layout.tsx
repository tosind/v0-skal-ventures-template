import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import Script from "next/script"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "MedSpaAI by West Work Studio | Voice AI for Medical Spas",
  description:
    "Transform your medical spa with AI-powered voice agents. 24/7 appointment booking, consultation follow-ups, and exceptional client experiences.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4E5S9NNQQV" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4E5S9NNQQV');
          `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NNK4TG93');
          `}
        </Script>

        <Script id="ga-event-helpers" strategy="afterInteractive">
          {`
            // Helper function to track and send a GA event before navigating
            function gtagEventWithNavigation(eventName, url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', eventName, {
                'event_callback': callback,
                'event_timeout': 2000,
              });
              return false;
            }

            // Specific event handlers for common actions
            window.gtagScheduleCall = function(url) {
              return gtagEventWithNavigation('call_scheduled', url);
            };

            window.gtagDemoRequested = function(url) {
              return gtagEventWithNavigation('demo_requested', url);
            };
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '898525256193804');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=898525256193804&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  )
}

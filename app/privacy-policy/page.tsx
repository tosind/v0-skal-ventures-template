import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | MedSpaAI by West Work Studio",
  description: "Privacy policy for MedSpaAI voice AI services for medical spas and aesthetic clinics.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container max-w-4xl">
        <div className="mb-12">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-colors text-sm font-mono mb-6 inline-block"
          >
            ← Back to home
          </Link>
          <h1 className="text-5xl md:text-6xl font-sentient mb-4">Privacy Policy</h1>
          <p className="text-foreground/60 font-mono">Last updated: December 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-sentient mb-4">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed">
              West Work Studio ("we," "us," or "our") operates the MedSpaAI website and provides AI-powered voice agent
              solutions for medical spas and aesthetic clinics. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Information You Provide Directly</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We collect information you voluntarily provide when you use our services, including:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-2">
                  <li>Name, email address, and phone number</li>
                  <li>Business information (clinic name, location, specialty)</li>
                  <li>Information provided during voice agent interactions</li>
                  <li>Booking and appointment information</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Information Collected Automatically</h3>
                <p className="text-foreground/80 leading-relaxed">
                  When you visit our website, we automatically collect certain information:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-2">
                  <li>Device information (browser type, IP address, operating system)</li>
                  <li>Usage data and analytics through Facebook Pixel</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Pages visited and time spent on our website</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use the information we collect for various purposes:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>To provide and maintain our voice AI services</li>
              <li>To process your requests and bookings</li>
              <li>To send you marketing and promotional communications</li>
              <li>To improve our website and services</li>
              <li>To analyze user behavior and optimize our platform</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">Information Sharing and Disclosure</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We do not sell your personal information. However, we may share your information:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>With service providers who assist us in operating our website and services</li>
              <li>With third-party analytics providers (Facebook Pixel, Cal.com)</li>
              <li>When required by law or to comply with legal processes</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With your consent for other purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">Data Security</h2>
            <p className="text-foreground/80 leading-relaxed">
              We implement industry-standard security measures to protect your personal information. However, no method
              of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data, but
              we strive to use appropriate safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">HIPAA Compliance</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our voice AI agents are designed with healthcare privacy in mind. For clients subject to HIPAA
              regulations, please ensure that patient information is only shared through secure channels. Contact us for
              more information about our Business Associate Agreement (BAA) options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience. This includes:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>Facebook Pixel for conversion tracking</li>
              <li>Session cookies for website functionality</li>
              <li>Analytical cookies to understand user behavior</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">Your Rights and Choices</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your information</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">Third-Party Links</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of
              those sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">Children's Privacy</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal
              information from children. If we become aware that a child has provided us with personal information, we
              will delete such information immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">Changes to This Privacy Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after
              any changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sentient mb-4">Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-muted/30 border border-border/50 rounded-lg p-6 mt-4">
              <p className="font-mono text-sm text-foreground/80">
                West Work Studio
                <br />
                Email: privacy@westworkstudio.com
                <br />
                Website: www.medspaai.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

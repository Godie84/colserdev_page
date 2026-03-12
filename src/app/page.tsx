import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Projects } from "@/components/sections/Projects"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTA } from "@/components/sections/CTA"
import { ContactForm } from "@/components/sections/ContactForm"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  )
}
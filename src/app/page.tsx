import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Projects } from "@/components/sections/Projects"
import { ContactForm } from "@/components/sections/ContactForm"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
      <Toaster />
    </main>
  )
}
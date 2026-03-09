"use client"

import { Rocket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image")

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6 animate-fade-in">
            <Rocket className="w-4 h-4" />
            Empowering Digital Innovation
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 font-headline">
            Build Your Future <br />
            With <span className="text-primary">ColserDev</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We transform complex challenges into elegant digital solutions. From custom software to innovative web platforms, we help your business reach new heights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="rounded-full px-8 py-7 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg border-primary/20 text-primary hover:bg-primary/5">
              View Our Work
            </Button>
          </div>
        </div>

        <div className="relative z-0 flex justify-center lg:justify-end group">
          <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const mockupData = PlaceHolderImages.find(img => img.id === "hero-mockup")

  return (
    <section className="relative pt-48 pb-16 overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-primary text-xs font-medium mb-12 animate-fade-in cursor-default hover:bg-primary/10 transition-colors">
            Liderando el Futuro Digital
            <ChevronRight className="w-3 h-3" />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-[#1e293b] leading-[1.1] mb-8 font-headline tracking-tight">
            Construimos Software <span className="text-primary">Inteligente</span> para Empresas Modernas
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            ColserDev es tu socio dedicado para el desarrollo web de alto rendimiento, soluciones móviles y computación en la nube. Escalemos tu visión con ingeniería experta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-xl px-8 py-7 text-base bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 group">
              Inicia tu Proyecto
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl px-8 py-7 text-base border-border bg-card hover:bg-muted transition-colors">
              Ver Nuestro Trabajo
            </Button>
          </div>
        </div>

        {/* Software Mockup Visual Optimizado */}
        <div className="relative mt-12 mx-auto max-w-5xl group animate-float">
          <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card aspect-[16/10] sm:aspect-video">
            {mockupData && (
              <Image 
                src={mockupData.imageUrl}
                alt={mockupData.description}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                data-ai-hint={mockupData.imageHint}
                priority
                quality={90}
              />
            )}
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative gradients behind mockup */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/20 blur-[100px] rounded-full opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Subtle reflection border */}
          <div className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />
        </div>
      </div>
    </section>
  )
}

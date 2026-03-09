"use client"

import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
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
    </section>
  )
}

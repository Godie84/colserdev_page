
"use client"

import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-primary py-24 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-headline leading-tight">
          ¿Listo para evolucionar tu presencia digital?
        </h2>
        <p className="text-lg lg:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Únete a docenas de empresas que han escalado sus operaciones con la ingeniería experta de ColserDev.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 rounded-xl px-10 py-7 text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Hablemos de Negocios
        </Button>
      </div>
    </section>
  )
}

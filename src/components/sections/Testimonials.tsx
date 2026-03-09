
"use client"

import * as React from "react"
import Image from "next/image"
import { Quote } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    id: "testimonial-1",
    quote: "ColserDev transformó nuestra visión en una realidad. Su experiencia técnica y compromiso con la calidad no tienen rival en la industria.",
    author: "Sarah Johnson",
    role: "CEO de InnovateX",
    avatarId: "avatar-1"
  },
  {
    id: "testimonial-2",
    quote: "El equipo de ColserDev entregó nuestro proyecto de migración a la nube antes de lo previsto y con cero tiempo de inactividad. Muy recomendable para soluciones empresariales.",
    author: "Michael Chen",
    role: "CTO de CloudBase",
    avatarId: "avatar-2"
  },
  {
    id: "testimonial-3",
    quote: "Trabajar con ColserDev fue un placer. Entendieron perfectamente nuestros complejos requisitos para una plataforma tecnológica sostenible.",
    author: "Elena Rodriguez",
    role: "Fundadora de GreenStep",
    avatarId: "avatar-3"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#1e293b] mb-4 font-headline">
            Historias de Éxito de Clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            No solo tome nuestra palabra, vea lo que dicen nuestros socios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t) => {
            const avatarData = PlaceHolderImages.find(img => img.id === t.avatarId)
            return (
              <Card key={t.id} className="border-none shadow-sm bg-muted/20 rounded-3xl p-4 transition-all duration-300 hover:shadow-md">
                <CardContent className="pt-8 pb-6 px-4">
                  <div className="mb-6 opacity-20">
                    <Quote className="w-10 h-10 text-primary rotate-180" />
                  </div>
                  <p className="text-lg italic text-[#475569] mb-8 leading-relaxed font-medium">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                      {avatarData && (
                        <AvatarImage 
                          src={avatarData.imageUrl} 
                          alt={t.author} 
                          data-ai-hint={avatarData.imageHint}
                        />
                      )}
                      <AvatarFallback>{t.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#1e293b] text-sm">{t.author}</span>
                      <span className="text-primary text-xs font-semibold">{t.role}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

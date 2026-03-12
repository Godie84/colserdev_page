
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
    quote: "El Sistema Médico de ColserDev revolucionó nuestra clínica. La trazabilidad de pacientes y la generación automática de reportes nos ahorran horas de trabajo administrativo cada semana.",
    author: "Dr. Alejandro Rivas",
    role: "Director Médico",
    avatarId: "avatar-1"
  },
  {
    id: "testimonial-2",
    quote: "Nuestra Tienda Virtual construida con .NET es increíblemente robusta. La gestión de inventario y ventas en línea nos ha permitido escalar nuestro negocio a nivel nacional.",
    author: "Carlos Fuentes",
    role: "Gerente de E-commerce",
    avatarId: "avatar-2"
  },
  {
    id: "testimonial-3",
    quote: "Para el Supermercado Antojitos, el sistema de ventas y reportes fue un cambio total. Ahora tenemos control absoluto de nuestros productos y cierres de caja exactos.",
    author: "Martha Lucía",
    role: "Propietaria de Antojitos",
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

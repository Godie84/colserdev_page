
"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "573054223590"
  const message = "Hola ColserDev, me gustaría obtener más información sobre sus servicios de ingeniería de software."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
          <MessageCircle className="w-8 h-8 text-white fill-current" />
        </a>
      </Button>
    </div>
  )
}

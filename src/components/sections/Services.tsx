import Image from "next/image"
import { Globe, Smartphone, Cloud, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const services = [
  {
    id: "service-web",
    title: "Desarrollo Web",
    description: "Sitios web a medida y de alto rendimiento construidos con las últimas tecnologías (Next.js, React, Node.js). Enfocados en escalabilidad, velocidad y una experiencia de usuario excepcional.",
    icon: <Globe className="w-5 h-5 text-white" />,
  },
  {
    id: "service-mobile",
    title: "Soluciones de Apps Móviles",
    description: "Aplicaciones móviles nativas y multiplataforma que cautivan a los usuarios e impulsan el crecimiento empresarial. Construimos para iOS y Android con un enfoque en UI/UX intuitivo.",
    icon: <Smartphone className="w-5 h-5 text-white" />,
  },
  {
    id: "service-cloud",
    title: "Computación en la Nube",
    description: "Transforma tu infraestructura con soluciones nativas de la nube. Nos especializamos en AWS, Azure y Google Cloud para asegurar que tu negocio sea resiliente y escalable.",
    icon: <Cloud className="w-5 h-5 text-white" />,
  },
  {
    id: "service-custom",
    title: "Software a la Medida",
    description: "Creamos soluciones robustas diseñadas exclusivamente para satisfacer las necesidades específicas de tu negocio. Maximizamos la eficiencia mediante ingeniería de software personalizada.",
    icon: <Code className="w-5 h-5 text-white" />,
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 font-headline">
            Nuestra Experiencia
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones integrales adaptadas a los desafíos únicos de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === service.id)
            return (
              <Card 
                key={index} 
                className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-card rounded-2xl"
              >
                <div className="relative aspect-[1.5/1] w-full overflow-hidden">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={imageData.imageHint}
                    />
                  )}
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary p-2.5 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 pt-8">
                  <h4 className="text-xl font-bold mb-4 text-[#1e293b]">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

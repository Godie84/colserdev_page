"use client"

import * as React from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "Todos" },
  { id: "web", name: "Aplicación Web" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "mobile", name: "App Móvil" },
]

const projects = [
  {
    id: "project-medical",
    title: "Sistema Médico",
    category: "web",
    categoryName: "WEB APPLICATION",
    description: "Sistema médico con trazabilidad de pacientes, gestión de usuarios y generación de reportes clínicos detallados.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    images: ["medical-login", "medical-patient", "medical-nursing"]
  },
  {
    id: "project-2",
    title: "LuxeCart E-commerce",
    category: "ecommerce",
    categoryName: "E-COMMERCE",
    description: "Experiencia de compra de alta gama con checkout fluido, gestión de inventario y recomendaciones personalizadas.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    images: ["project-2-1", "project-2-2", "project-2-3"]
  },
  {
    id: "project-3",
    title: "VitalTrack Health Monitor",
    category: "mobile",
    categoryName: "MOBILE APP",
    description: "Aplicación intuitiva de seguimiento de salud que se conecta con dispositivos vestibles para proporcionar información de bienestar.",
    tags: ["React Native", "AWS Amplify", "Redux"],
    images: ["project-3-1", "project-3-2", "project-3-3"]
  }
]

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("all")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-muted-foreground">
              Observa el impacto de nuestras transformaciones digitales a través de múltiples perspectivas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar tecnologías o proyectos..." 
                className="pl-10 bg-muted/30 border-none rounded-full h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "rounded-full px-5 h-10 text-xs font-medium transition-all whitespace-nowrap",
                    activeCategory === cat.id ? "bg-primary text-white" : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  )}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border border-border/40 shadow-sm bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((imgId, index) => {
                      const imageData = PlaceHolderImages.find(img => img.id === imgId)
                      return (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video overflow-hidden">
                            {imageData && (
                              <Image
                                src={imageData.imageUrl}
                                alt={imageData.description}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-ai-hint={imageData.imageHint}
                              />
                            )}
                          </div>
                        </CarouselItem>
                      )
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white text-foreground border-none h-8 w-8" />
                  <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white text-foreground border-none h-8 w-8" />
                </Carousel>
              </div>
              <CardContent className="p-7">
                <div className="text-[10px] font-bold tracking-[0.15em] text-primary mb-3 uppercase">
                  {project.categoryName}
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold text-muted-foreground bg-muted/40 border border-border/50 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No se encontraron proyectos con esos criterios.</p>
          </div>
        )}
      </div>
    </section>
  )
}

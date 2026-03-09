import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: "project-1",
    title: "Nexus Commerce",
    category: "E-Commerce",
    tags: ["Next.js", "Firebase", "Stripe"]
  },
  {
    id: "project-2",
    title: "Zenith Dashboard",
    category: "Fintech",
    tags: ["React", "TypeScript", "D3.js"]
  },
  {
    id: "project-3",
    title: "Stratus Cloud",
    category: "Infrastructure",
    tags: ["AWS", "Terraform", "Go"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-primary uppercase tracking-widest mb-4">Recent Projects</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground font-headline">Our Featured Portfolio</h3>
          </div>
          <p className="text-lg text-muted-foreground md:max-w-xs">
            A glimpse into the successful partnerships and innovative solutions we've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.id)
            return (
              <Card key={project.id} className="group overflow-hidden border-none shadow-lg bg-card cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={imageData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-lg font-semibold border-2 border-white px-6 py-2 rounded-full">
                      View Project
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 font-semibold border-none">
                      {project.category}
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
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
"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { generateContentIdeas, type ContentIdeaGeneratorOutput } from "@/ai/flows/content-idea-generator"
import { generateSeoContent, type SeoContentOptimizerOutput } from "@/ai/flows/seo-content-optimizer-flow"
import { Loader2, Sparkles, Search, FileText, Copy, CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Navbar } from "@/components/layout/Navbar"

const ideaSchema = z.object({
  topic: z.string().min(3, "El tema es demasiado corto"),
  contentType: z.enum(["service description", "blog post"]),
  tone: z.enum(["professional", "innovative", "friendly", "authoritative", "marketing"]),
  targetAudience: z.string().optional(),
})

const seoSchema = z.object({
  pageType: z.enum(["homepage", "service page", "blog post", "other"]),
  existingContent: z.string().optional(),
  keyTopics: z.string().optional().describe("Temas separados por comas"),
})

export default function ContentToolPage() {
  const { toast } = useToast()
  const [ideas, setIdeas] = React.useState<ContentIdeaGeneratorOutput | null>(null)
  const [seo, setSeo] = React.useState<SeoContentOptimizerOutput | null>(null)
  const [loading, setLoading] = React.useState(false)

  const ideaForm = useForm<z.infer<typeof ideaSchema>>({
    resolver: zodResolver(ideaSchema),
    defaultValues: {
      topic: "",
      contentType: "service description",
      tone: "professional",
      targetAudience: "",
    },
  })

  const seoForm = useForm<z.infer<typeof seoSchema>>({
    resolver: zodResolver(seoSchema),
    defaultValues: {
      pageType: "service page",
      existingContent: "",
      keyTopics: "",
    },
  })

  async function onIdeaSubmit(values: z.infer<typeof ideaSchema>) {
    setLoading(true)
    try {
      const result = await generateContentIdeas({
        ...values,
        keywords: values.topic.split(" "),
      })
      setIdeas(result)
      toast({ title: "Ideas Generadas", description: "Se han creado borradores de contenido con éxito." })
    } catch (error) {
      toast({ title: "Error", description: "Error al generar ideas. Inténtalo de nuevo.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  async function onSeoSubmit(values: z.infer<typeof seoSchema>) {
    setLoading(true)
    try {
      const result = await generateSeoContent({
        pageType: values.pageType,
        existingContent: values.existingContent,
        keyTopics: values.keyTopics ? values.keyTopics.split(",").map(t => t.trim()) : undefined,
      })
      setSeo(result)
      toast({ title: "SEO Optimizado", description: "Meta etiquetas generadas con éxito." })
    } catch (error) {
      toast({ title: "Error", description: "Error al optimizar SEO. Revisa tus datos.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({ title: "¡Copiado!", description: "Contenido copiado al portapapeles." })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Sparkles className="text-primary w-8 h-8" />
            Herramientas IA de ColserDev
          </h1>
          <p className="text-muted-foreground text-lg">
            Acelera la creación de contenido y mantén la consistencia de tus mensajes con nuestros flujos de IA personalizados.
          </p>
        </div>

        <Tabs defaultValue="ideas" className="space-y-8">
          <TabsList className="bg-muted p-1">
            <TabsTrigger value="ideas" className="px-8 flex gap-2">
              <FileText className="w-4 h-4" />
              Generador de Contenido
            </TabsTrigger>
            <TabsTrigger value="seo" className="px-8 flex gap-2">
              <Search className="w-4 h-4" />
              Optimizador SEO
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ideas" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Ajustes del Generador</CardTitle>
                  <CardDescription>Configura los parámetros de generación.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...ideaForm}>
                    <form onSubmit={ideaForm.handleSubmit(onIdeaSubmit)} className="space-y-6">
                      <FormField
                        control={ideaForm.control}
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tema Principal</FormLabel>
                            <FormControl>
                              <Input placeholder="ej. Seguridad Cloud en LATAM" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={ideaForm.control}
                        name="contentType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de Contenido</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="service description">Descripción de Servicio</SelectItem>
                                <SelectItem value="blog post">Entrada de Blog</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={ideaForm.control}
                        name="tone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tono</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="professional">Profesional</SelectItem>
                                <SelectItem value="innovative">Innovador</SelectItem>
                                <SelectItem value="marketing">Comercial</SelectItem>
                                <SelectItem value="authoritative">Autoritario</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={loading} className="w-full">
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
                        Generar Ideas
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {!ideas && !loading && (
                <div className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed border-muted rounded-3xl text-muted-foreground bg-muted/20">
                  <FileText className="w-12 h-12 mb-4 opacity-20" />
                  <p>Tu contenido generado aparecerá aquí.</p>
                </div>
              )}
              {loading && (
                <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader><div className="h-6 w-1/3 bg-muted rounded"></div></CardHeader>
                      <CardContent><div className="h-20 bg-muted rounded"></div></CardContent>
                    </Card>
                  ))}
                </div>
              )}
              {ideas && ideas.ideas.map((idea, i) => (
                <Card key={i} className="group hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{idea.title}</CardTitle>
                      <CardDescription>{idea.shortDescription}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(idea.draftText)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap leading-relaxed border border-border">
                      {idea.draftText}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="seo" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Entrada SEO</CardTitle>
                  <CardDescription>Ingresa detalles para generar meta etiquetas.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...seoForm}>
                    <form onSubmit={seoForm.handleSubmit(onSeoSubmit)} className="space-y-6">
                      <FormField
                        control={seoForm.control}
                        name="pageType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de Página</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="homepage">Inicio</SelectItem>
                                <SelectItem value="service page">Servicio</SelectItem>
                                <SelectItem value="blog post">Blog</SelectItem>
                                <SelectItem value="other">Otro</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={seoForm.control}
                        name="keyTopics"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Temas Clave</FormLabel>
                            <FormControl>
                              <Input placeholder="software, latam, azure..." {...field} />
                            </FormControl>
                            <FormDescription>Separados por comas</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={seoForm.control}
                        name="existingContent"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contenido (Opcional)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Pega el borrador aquí..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={loading} className="w-full">
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Search className="w-4 h-4 mr-2" />}
                        Optimizar SEO
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {seo && (
                <div className="space-y-6">
                  <Card className="border-primary/20 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                        Meta Etiquetas Generadas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Meta Title</label>
                          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(seo.metaTitle)} className="h-7">
                            <Copy className="w-3 h-3 mr-1" /> Copiar
                          </Button>
                        </div>
                        <div className="p-4 bg-muted border rounded-lg font-medium">
                          {seo.metaTitle}
                        </div>
                        <p className="text-xs text-muted-foreground text-right">{seo.metaTitle.length} caracteres (Óptimo: 50-60)</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Meta Description</label>
                          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(seo.metaDescription)} className="h-7">
                            <Copy className="w-3 h-3 mr-1" /> Copiar
                          </Button>
                        </div>
                        <div className="p-4 bg-muted border rounded-lg leading-relaxed italic">
                          {seo.metaDescription}
                        </div>
                        <p className="text-xs text-muted-foreground text-right">{seo.metaDescription.length} caracteres (Óptimo: 150-160)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
                    <h5 className="font-bold text-primary mb-2">Vista Previa Google</h5>
                    <div className="space-y-1">
                      <div className="text-[#1a0dab] text-xl hover:underline cursor-pointer truncate">
                        {seo.metaTitle}
                      </div>
                      <div className="text-[#006621] text-sm truncate">
                        https://colserdev.com › ...
                      </div>
                      <div className="text-[#545454] text-sm line-clamp-2">
                        {seo.metaDescription}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {!seo && !loading && (
                <div className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed border-muted rounded-3xl text-muted-foreground bg-muted/20">
                  <Search className="w-12 h-12 mb-4 opacity-20" />
                  <p>Las recomendaciones SEO aparecerán aquí.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

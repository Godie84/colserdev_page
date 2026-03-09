
"use client"

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
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Dirección de correo electrónico no válida"),
  projectType: z.string().min(1, "Por favor selecciona un tipo de proyecto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

export function ContactForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "¡Éxito!",
      description: "Tu consulta ha sido enviada. Nos pondremos en contacto pronto.",
    })
    form.reset()
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-base font-bold text-primary uppercase tracking-widest mb-4">Contáctanos</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-headline">¿Listo para Iniciar tu Proyecto?</h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ¿Tienes una idea visionaria? Estamos aquí para ayudarte a construirla. Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  01
                </div>
                <div>
                  <h5 className="font-bold text-foreground">Llamada de Descubrimiento</h5>
                  <p className="text-muted-foreground">Entendemos tus requisitos y objetivos de negocio.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  02
                </div>
                <div>
                  <h5 className="font-bold text-foreground">Propuesta y Hoja de Ruta</h5>
                  <p className="text-muted-foreground">Proporcionamos un plan detallado y un presupuesto transparente.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  03
                </div>
                <div>
                  <h5 className="font-bold text-foreground">Desarrollo Ágil</h5>
                  <p className="text-muted-foreground">Construcción iterativa con actualizaciones constantes del progreso.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 lg:p-12 rounded-3xl shadow-2xl border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan Pérez" {...field} className="bg-muted/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="juan@ejemplo.com" {...field} className="bg-muted/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Proyecto</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-muted/50">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web">Desarrollo Web</SelectItem>
                          <SelectItem value="mobile">App Móvil</SelectItem>
                          <SelectItem value="software">Software a Medida</SelectItem>
                          <SelectItem value="cloud">Nube / Infraestructura</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cuéntanos sobre tu proyecto</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Objetivos del proyecto, plazos, requisitos específicos..." 
                          className="min-h-[120px] bg-muted/50"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full py-7 text-lg bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 group">
                  Enviar Consulta
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

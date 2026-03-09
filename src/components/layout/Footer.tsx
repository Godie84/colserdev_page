import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Footer() {
  const logoData = PlaceHolderImages.find(img => img.id === "app-logo")

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 bg-primary p-2 rounded-lg">
                {logoData && (
                  <Image 
                    src={logoData.imageUrl} 
                    alt="Logo" 
                    fill 
                    className="object-contain p-1"
                    data-ai-hint={logoData.imageHint}
                  />
                )}
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Colser<span className="text-primary">Dev</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Somos un equipo de desarrolladores y diseñadores apasionados dedicados a crear soluciones digitales de alto impacto para empresas con visión de futuro.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Servicios</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary transition-colors">Desarrollo Web</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Aplicaciones Móviles</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Software a Medida</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Soluciones Cloud</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Diseño UI/UX</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Empresa</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#projects" className="hover:text-primary transition-colors">Proyectos</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary transition-colors">Casos de Éxito</Link></li>
              <li><Link href="/admin/content-tool" className="hover:text-primary transition-colors">Herramientas IA</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contacto</h4>
            <ul className="space-y-6 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Innovation Dr, Parque Tecnológico, LATAM</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>contacto@colserdev.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 000-1111</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ColserDev Pro. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Términos de Servicio</Link>
            <Link href="#" className="hover:text-primary transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
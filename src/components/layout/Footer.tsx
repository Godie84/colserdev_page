import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Footer() {
  const logoData = PlaceHolderImages.find(img => img.id === "app-logo")

  return (
    <footer className="bg-[#1e293b] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 bg-primary p-2 rounded-lg">
                {logoData && (
                  <Image 
                    src={logoData.imageUrl} 
                    alt="Logo ColserDev" 
                    fill 
                    sizes="40px"
                    className="object-contain p-1"
                  />
                )}
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Colser<span className="text-primary">Dev</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              En ColserDev, diseñamos y construimos soluciones digitales de alto impacto que impulsan el crecimiento de empresas visionarias en toda la región.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group">
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#services" className="hover:text-primary transition-colors">Desarrollo Web</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Aplicaciones Móviles</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Software a Medida</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Soluciones Cloud</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#projects" className="hover:text-primary transition-colors">Portafolio</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contacto</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Centro Comercial Santafé, Bogotá</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@colserdev.com" className="hover:text-primary transition-colors">
                  info@colserdev.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+573054223590" className="hover:text-primary transition-colors">
                  +57 305 422 3590
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2024 ColserDev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

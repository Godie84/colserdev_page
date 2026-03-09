import Link from "next/link"
import { Rocket, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Colser<span className="text-primary">Dev</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              We are a team of passionate developers and designers dedicated to creating high-impact digital solutions for forward-thinking businesses.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Mobile Applications</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Custom Software</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-6 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Innovation Dr, Tech Park, LATAM</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@colserdev.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 000-1111</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ColserDev Pro. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
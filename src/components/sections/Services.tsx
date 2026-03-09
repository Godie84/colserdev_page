import { Code2, Smartphone, Cloud, LineChart, ShieldCheck, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to solve your unique business challenges and streamline operations.",
    icon: <Code2 className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Web Development",
    description: "Modern, responsive, and SEO-optimized websites that provide exceptional user experiences and drive growth.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that put your business in the pockets of your customers.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure management and migration services for enhanced performance and security.",
    icon: <Cloud className="w-8 h-8" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our comprehensive BI and analytics platforms.",
    icon: <LineChart className="w-8 h-8" />,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced security audits, monitoring, and compliance services.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-rose-50 text-rose-600"
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-primary uppercase tracking-widest mb-4">Our Services</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-headline">Solutions We Provide</h3>
          <p className="text-lg text-muted-foreground">
            We leverage cutting-edge technology to deliver innovative solutions that empower your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-card"
            >
              <CardContent className="p-8">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
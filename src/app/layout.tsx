import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.colserdev.com'),
  title: {
    default: 'ColserDev | Ingeniería de Software & Desarrollo Web en Bogotá',
    template: '%s | ColserDev'
  },
  description: 'Expertos en desarrollo de software a medida, aplicaciones móviles y soluciones cloud en Bogotá, Colombia. Impulsamos tu negocio con tecnología inteligente y escalable. ¡Inicia tu proyecto hoy!',
  keywords: [
    'Ingeniería de Software Bogotá',
    'Desarrollo Web Colombia',
    'Aplicaciones Móviles a Medida',
    'Soluciones Cloud Azure AWS',
    'Inteligencia Artificial para empresas',
    'Transformación Digital LATAM',
    'ColserDev',
    'Software para clínicas',
    'E-commerce profesional'
  ],
  authors: [{ name: 'ColserDev Team' }],
  creator: 'ColserDev',
  publisher: 'ColserDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.colserdev.com',
    siteName: 'ColserDev',
    title: 'ColserDev | Líderes en Ingeniería de Software Profesional',
    description: 'Diseñamos y construimos el futuro digital de tu empresa con apps móviles y software web de alto impacto.',
    images: [
      {
        url: '/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'ColserDev - Ingeniería de Software de Alto Impacto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ColserDev | Software Inteligente para Empresas Modernas',
    description: 'Desarrollo web y móvil de alto rendimiento en Bogotá. Escalamos tu visión con ingeniería experta.',
    images: ['/images/banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1F8EFC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://www.colserdev.com" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}

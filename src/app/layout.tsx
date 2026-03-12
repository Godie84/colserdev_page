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
  title: 'ColserDev | Ingeniería de Software y Soluciones Digitales de Alto Impacto',
  description: 'En ColserDev diseñamos y construimos software inteligente, aplicaciones móviles y soluciones cloud a medida para empresas visionarias.',
  keywords: ['Desarrollo de Software', 'ColserDev', 'Ingeniería Web', 'Apps Móviles', 'Cloud Computing', 'IA', 'Latinoamérica'],
  authors: [{ name: 'ColserDev' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.colserdev.com',
    title: 'ColserDev | Ingeniería de Software Profesional',
    description: 'Soluciones digitales de alto impacto para empresas visionarias.',
    siteName: 'ColserDev',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1F8EFC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="font-body antialiased selection:bg-primary selection:text-white bg-background text-foreground">
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
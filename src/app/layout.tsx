
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
  title: 'ColserDev | Ingeniería de Software Profesional',
  description: 'Diseñamos y construimos software inteligente y aplicaciones móviles de alto impacto.',
  keywords: ['Desarrollo Web', 'Software', 'Apps Móviles', 'IA', 'ColserDev'],
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
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}

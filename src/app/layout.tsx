import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ColserDev Pro | Soluciones Web Profesionales',
  description: 'ColserDev Pro - Software a medida, Desarrollo Web y Móvil con soluciones innovadoras impulsadas por IA.',
  icons: {
    icon: 'https://picsum.photos/seed/colser-logo-v2/32/32',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}

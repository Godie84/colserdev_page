
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ColserDev | Ingeniería de Software y Soluciones Digitales de Alto Impacto',
  description: 'En ColserDev diseñamos y construimos software inteligente, aplicaciones móviles y soluciones cloud a medida para empresas visionarias. Transformamos tecnología en resultados.',
  keywords: ['Desarrollo de Software', 'ColserDev', 'Ingeniería Web', 'Apps Móviles', 'Cloud Computing', 'IA', 'Latinoamérica'],
  authors: [{ name: 'ColserDev' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-white bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}


# 🚀 Despliegue de ColserDev (Hosting Gratuito)

Este proyecto está configurado para ejecutarse en el **Hosting Gratuito** de Firebase.

## ✅ Lo que funcionará (100%):
- Diseño premium con Tailwind y ShadCN.
- Animaciones e interactividad (Filtros de proyectos).
- Botón de WhatsApp y Formulario de Contacto (UI).
- Optimización SEO y carga ultrarrápida.

## ⚠️ Nota sobre la IA:
Las herramientas de IA (`/admin/content-tool`) requieren un servidor (Plan Blaze). No funcionarán en el hosting gratuito estático.

## 🛠️ Comandos para Desplegar:

1. **Instala las herramientas de Firebase (si no las tienes):**
   ```bash
   npm install -g firebase-tools
   ```

2. **Inicia sesión y prepara el proyecto:**
   ```bash
   firebase login
   firebase use --add
   ```

3. **Construye y sube el sitio:**
   ```bash
   npm run build
   firebase deploy
   ```

---
© 2024 ColserDev. Todos los derechos reservados.

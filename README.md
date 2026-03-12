
# 🚀 Despliegue de ColserDev

Este proyecto está listo para ser desplegado tanto en **Vercel** (recomendado para usar IA) como en **Firebase**.

## ⚡ Despliegue en Vercel (Recomendado)
Al usar Vercel, las herramientas de IA en `/admin/content-tool` **funcionarán correctamente** gracias al soporte de Serverless Functions.

1. **Sube tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Preparado para Vercel"
   git push origin main
   ```
2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com).
   - Haz clic en **"Add New Project"**.
   - Importa tu repositorio de GitHub.
   - En **Environment Variables**, añade tu `GOOGLE_GENAI_API_KEY` si vas a usar las herramientas de IA.
   - Haz clic en **Deploy**.

## 🔥 Despliegue en Firebase (Hosting Estático)
*Nota: En el plan gratuito de Firebase Hosting, las funciones de IA no estarán activas.*

1. **Construye el sitio:**
   ```bash
   npm run build
   ```
2. **Despliega:**
   ```bash
   firebase deploy
   ```

---
© 2024 ColserDev. Todos los derechos reservados.

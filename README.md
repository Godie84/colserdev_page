# 🚀 Despliegue de ColserDev

Este proyecto está optimizado para ser desplegado en **Vercel**, permitiendo el uso completo de Server Actions y herramientas de Inteligencia Artificial.

## ⚡ Despliegue en Vercel (Recomendado)

Al usar Vercel, las herramientas de IA en `/admin/content-tool` funcionarán correctamente gracias al soporte de funciones de servidor.

### Pasos para el despliegue:

1. **Sube tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Preparado para despliegue final en Vercel"
   git push origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com) e inicia sesión.
   - Haz clic en **"Add New Project"**.
   - Importa tu repositorio de GitHub.

3. **Configura las Variables de Entorno:**
   - En la sección **Environment Variables**, añade:
     - `GOOGLE_GENAI_API_KEY`: Tu clave de API de Google Gemini (necesaria para las herramientas de IA).

4. **Despliega:**
   - Haz clic en **Deploy**. Vercel detectará automáticamente la configuración de Next.js.

---

## 🛠️ Desarrollo Local

Si deseas correr el proyecto localmente:

1. Instala las dependencias: `npm install`
2. Crea un archivo `.env` con tu `GOOGLE_GENAI_API_KEY`.
3. Ejecuta el servidor: `npm run dev`

© 2026 ColserDev. Todos los derechos reservados.
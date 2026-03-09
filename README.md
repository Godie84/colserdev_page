# ColserDev - Ingeniería de Software Profesional v1.0.0

Este es el proyecto oficial de **ColserDev**, una plataforma diseñada para mostrar servicios de ingeniería de software de alto impacto.

## 🚀 Pasos para el Despliegue en Firebase App Hosting

Sigue estos pasos para sincronizar este código con tu repositorio y activar el despliegue automático:

### 1. Preparar y Subir el Código a GitHub
Ejecuta estos comandos en tu terminal local (dentro de la carpeta del proyecto):

```bash
# 1. Inicializar el repositorio (si no lo has hecho)
git init

# 2. Agregar el repositorio remoto oficial de ColserDev
git remote add origin https://github.com/Godie84/colserdev_page.git

# 3. Agregar todos los archivos preparados
git add .

# 4. Crear el commit de lanzamiento
git commit -m "Lanzamiento oficial ColserDev v1.0.0"

# 5. Subir a la rama principal
git push -u origin main
```

### 2. Configurar en Firebase Console
1. Ve a [Firebase Console](https://console.firebase.google.com/).
2. Selecciona tu proyecto.
3. Ve a **Build** > **App Hosting**.
4. Haz clic en **Comenzar** (Get Started).
5. Conecta tu cuenta de GitHub y selecciona el repositorio `Godie84/colserdev_page`.
6. Configura los ajustes de despliegue:
   - **Branch:** `main`
   - **Root directory:** `/`
7. Haz clic en **Finalizar y Desplegar**. Firebase detectará automáticamente que es un proyecto de Next.js y configurará el servidor por ti.

### 3. Vincular Dominio Personalizado
Una vez que el despliegue inicial termine:
1. En la pestaña de App Hosting, ve a **Settings** (Configuración) de tu backend.
2. En la sección **Custom Domains**, haz clic en **Add Domain**.
3. Ingresa `www.colserdev.com`.
4. Firebase te proporcionará los registros DNS. Cópialos y pégalos en tu proveedor de dominio.

---

## Características de Producción
- **WhatsApp Business:** Integración total con el número +57 305 422 3590.
- **SEO Ready:** Metadatos configurados para el dominio [www.colserdev.com](https://www.colserdev.com).
- **Rendimiento:** Optimización de imágenes (Next/Image) y Viewport para Next.js 15.

---
© 2024 ColserDev. Todos los derechos reservados.

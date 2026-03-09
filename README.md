# ColserDev - Ingeniería de Software Profesional v1.0.0

Este es el proyecto oficial de **ColserDev**, una plataforma diseñada para mostrar servicios de ingeniería de software de alto impacto.

## 🚀 Pasos para el Despliegue en Firebase App Hosting

Sigue estos pasos desde la **terminal de tu computadora local** (asegúrate de haber descargado el código de Firebase Studio primero):

### 1. Preparar y Subir el Código a GitHub

> **IMPORTANTE:** Primero, ve a [GitHub](https://github.com/new) y crea un nuevo repositorio llamado `colserdev_page`. No lo inicialices con README ni licencia (déjalo vacío).

Luego, en tu terminal local, dentro de la carpeta del proyecto:

```bash
# 1. Inicializar el repositorio git
git init

# 2. Conectar con tu repositorio remoto
git remote add origin https://github.com/Godie84/colserdev_page.git

# 3. Preparar los archivos (el .gitignore omitirá lo innecesario)
git add .

# 4. Crear el commit de lanzamiento
git commit -m "Lanzamiento oficial ColserDev v1.0.0"

# 5. Subir el código a la rama principal
git branch -M main
git push -u origin main
```

### 2. Configurar en Firebase Console (Web)
1. Ve a [Firebase Console](https://console.firebase.google.com/).
2. Selecciona tu proyecto.
3. Ve a **Build** > **App Hosting**.
4. Haz clic en **Comenzar** (Get Started).
5. Conecta tu cuenta de GitHub y selecciona el repositorio `Godie84/colserdev_page`.
6. Configura los ajustes de despliegue:
   - **Branch:** `main`
   - **Root directory:** `/`
7. Haz clic en **Finalizar y Desplegar**. Firebase detectará automáticamente que es un proyecto de Next.js.

### 3. Vincular Dominio Personalizado
Una vez que el despliegue termine:
1. En App Hosting, ve a **Settings** de tu backend.
2. En la sección **Custom Domains**, haz clic en **Add Domain**.
3. Ingresa `www.colserdev.com` y sigue las instrucciones para configurar los registros DNS.

---

## Características de Producción
- **WhatsApp Business:** Integración total con el número +57 305 422 3590.
- **SEO Ready:** Metadatos optimizados para [www.colserdev.com](https://www.colserdev.com).
- **Rendimiento:** Optimización de imágenes (Next/Image) con carga prioritaria.

---
© 2024 ColserDev. Todos los derechos reservados.
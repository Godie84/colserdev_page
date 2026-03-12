# 🚀 Guía de Despliegue ColserDev v1.0.0

Sigue estos pasos para publicar tu sitio en **Firebase App Hosting** usando tu repositorio de GitHub.

## 1. Descarga el Código
Primero, descarga el proyecto desde Firebase Studio a tu computadora y abre la carpeta en tu terminal o VS Code.

## 2. Sube el Código a GitHub
Ejecuta estos comandos en tu terminal local (uno por uno):

```bash
# Inicializar git
git init

# Conectar con tu repositorio
git remote add origin https://github.com/Godie84/colserdev_page.git

# Preparar y subir archivos
git add .
git commit -m "Lanzamiento oficial ColserDev"
git branch -M main
git push -u origin main
```

## 3. Configura Firebase App Hosting (Consola Web)
1. Ve a [Firebase Console](https://console.firebase.google.com/).
2. Selecciona tu proyecto.
3. Ve a **Build** > **App Hosting**.
4. Haz clic en **Comenzar** y conecta tu cuenta de GitHub.
5. Selecciona el repositorio `Godie84/colserdev_page`.
6. Mantén la configuración por defecto (Next.js) y haz clic en **Finalizar y Desplegar**.

## 4. Dominio Personalizado
Una vez desplegado, ve a **Settings** en App Hosting y agrega `www.colserdev.com` en la sección **Custom Domains**.

---
© 2024 ColserDev. Todos los derechos reservados.
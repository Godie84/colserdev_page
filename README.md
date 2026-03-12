
# 🚀 Guía de Despliegue ColserDev (Hosting Gratuito)

Sigue estos pasos para publicar tu sitio en el **Hosting Gratuito (Plan Spark)** de Firebase.

## 1. Descarga el Código
Descarga el proyecto desde Firebase Studio a tu computadora.

## 2. Preparación Local
Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
# Instalar herramientas de Firebase si no las tienes
npm install -g firebase-tools

# Iniciar sesión en Firebase
firebase login

# Inicializar el proyecto (selecciona tu ID de proyecto actual)
firebase use --add
```

## 3. Construcción y Despliegue
Ejecuta el siguiente comando para generar los archivos estáticos y subirlos:

```bash
npm run deploy
```

## 4. Nota sobre funcionalidades
Al ser un **Hosting Gratuito Estático**:
- ✅ La web, el formulario de contacto y el botón de WhatsApp funcionarán al 100%.
- ⚠️ Las herramientas de IA (`/admin/content-tool`) no funcionarán ya que requieren un servidor activo (Plan Blaze).

## 5. Dominio Personalizado
En la consola de Firebase, ve a **Hosting** y agrega `www.colserdev.com`. Sigue los pasos de validación TXT/A que te indiquen.

---
© 2024 ColserDev. Todos los derechos reservados.

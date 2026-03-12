'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Dirección de correo electrónico no válida"),
  projectType: z.string().min(1, "Por favor selecciona un tipo de proyecto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  // Simular un pequeño retraso de red para feedback visual
  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    // Validar los datos en el servidor por seguridad
    const validatedData = formSchema.parse(data);

    // En un entorno real, aquí enviarías un email con Resend o guardarías en base de datos.
    // Como estás en Vercel, esto aparecerá en tus "Function Logs".
    console.log('--- NUEVA CONSULTA RECIBIDA (COLSERDEV) ---');
    console.log('Cliente:', validatedData.name);
    console.log('Email:', validatedData.email);
    console.log('Tipo de Proyecto:', validatedData.projectType);
    console.log('Mensaje:', validatedData.message);
    console.log('-------------------------------------------');

    return { success: true };
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return { success: false, error: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.' };
  }
}

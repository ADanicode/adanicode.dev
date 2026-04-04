export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

export async function submitContact(data: ContactFormData): Promise<ContactResult> {
  // Validate at boundary
  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    return { success: false, message: "Por favor completa todos los campos requeridos." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, message: "El formato del email no es válido." };
  }

  try {
    // Using Formspree as backend-less contact handler
    const response = await fetch("https://formspree.io/f/xwkgpqrj", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company ?? "",
        message: data.message,
      }),
    });

    if (response.ok) {
      return { success: true, message: "¡Mensaje enviado! Te contactaré pronto." };
    }
    return { success: false, message: "No se pudo enviar el mensaje. Intenta de nuevo." };
  } catch {
    return { success: false, message: "Error de red. Verifica tu conexión." };
  }
}

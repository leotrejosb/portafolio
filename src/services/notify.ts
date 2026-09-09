const NOTIFY_EMAIL = "leonardo.trejos@hotmail.com";
const ENDPOINT = `https://formsubmit.co/ajax/${NOTIFY_EMAIL}`;

export async function submitNotifyEmail(email: string): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      message: `Nuevo aviso 3D desde el portafolio: ${email}`,
      _subject: "Portafolio — aviso sección 3D",
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!res.ok) {
    throw new Error(`Notify failed (${res.status})`);
  }
}

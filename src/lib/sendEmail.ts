type SendEmailParams = {
  template: string;
  data: Record<string, any>;
  subject: string;
  recipientEmail: string;
};

export async function sendEmail({
  template,
  data,
  subject,
  recipientEmail,
}: SendEmailParams): Promise<{ message: string }> {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      template,
      data,
      subject,
      recipientEmail,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  return response.json();
}

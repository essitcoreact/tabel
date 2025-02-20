import { sendEmail } from "@/lib/sendEmail";
import React, { useState } from "react";

interface EmailSenderProps {
  template: string;
  data: Record<string, any>;
  subject: string;
  recipientEmail: string;
}

const EmailSender: React.FC<EmailSenderProps> = ({
  template,
  data,
  subject,
  recipientEmail,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSendEmail = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await sendEmail({
        template,
        data,
        subject,
        recipientEmail,
      });
      setSuccess(true);
      console.log(result.message);
    } catch (err) {
      setError("Failed to send email");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleSendEmail} disabled={loading}>
        {loading ? "Sending..." : "Send Email"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Email sent successfully!</p>}
    </div>
  );
};

export default EmailSender;

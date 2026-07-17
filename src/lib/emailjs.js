const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function isEmailJsConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

export async function sendContactEmail(values) {
  const templateParams = {
    from_name: values.name,
    from_email: values.email,
    phone: values.phone || "Not provided",
    company: values.company || "Not provided",
    inquiry_type: values.inquiryType,
    message: values.message,
    reply_to: values.email,
  };

  if (!isEmailJsConfigured()) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { simulated: true };
  }

  const emailjs = (await import("@emailjs/browser")).default;
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
  return { simulated: false };
}

export async function sendCareerApplication(values, jobTitle) {
  return sendContactEmail({
    name: values.name,
    email: values.email,
    phone: values.phone,
    company: values.portfolio || "Not provided",
    inquiryType: "Careers / HR",
    message: values.message || `Application for ${jobTitle}`,
  });
}

export async function sendNewsletterSignup(email) {
  return sendContactEmail({
    name: "Newsletter Subscriber",
    email,
    inquiryType: "General Inquiry",
    message: "Newsletter subscription request from website footer.",
  });
}

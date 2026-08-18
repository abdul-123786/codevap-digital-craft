import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.string().trim().min(1, "Select a project type").max(60),
  budget: z.string().trim().min(1, "Select a budget range").max(60),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Receives a validated project enquiry. Server-side validation is re-run here.
 * No secrets are read; wire an email/CRM provider inside the handler when available.
 */
export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    console.info("[contact] enquiry received", {
      projectType: data.projectType,
      budget: data.budget,
      hasPhone: Boolean(data.phone),
    });
    return { ok: true as const };
  });

import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { budgets, contact, projectTypes } from "@/data/site";
import { contactSchema, type ContactInput } from "@/lib/contact.functions";
import { submitContact } from "@/lib/contact.functions";

type Errors = { [K in keyof ContactInput]?: string | undefined } & { form?: string | undefined };

const empty: ContactInput = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

const field =
  "min-h-12 w-full rounded-sm border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none";

export function Contact() {
  const send = useServerFn(submitContact);
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const set = (key: keyof ContactInput) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined, form: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setState("loading");
    try {
      await send({ data: parsed.data });
      setState("success");
      setValues(empty);
    } catch {
      setState("idle");
      setErrors({ form: "Something went wrong. Please email us instead." });
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-surface/40 py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <Reveal className="eyebrow">09 / Contact</Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] font-bold tracking-tight sm:text-5xl">
              LET&apos;S BUILD
              <br />
              SOMETHING.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-4 text-sm">
            <p className="text-muted-foreground">
              Share a few details about the project. We reply with a scope, timeline and a
              realistic estimate.
            </p>
            <dl className="space-y-3 border-t border-border pt-5">
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contact.email}`} className="hover:text-primary">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Phone</dt>
                <dd className="mt-1 text-muted-foreground">{contact.phone}</dd>
              </div>
              <div>
                <dt className="eyebrow">Location</dt>
                <dd className="mt-1 text-muted-foreground">{contact.location}</dd>
              </div>
            </dl>
            <p className="text-xs text-muted-foreground">
              Contact details are placeholders until final company information is supplied.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          {state === "success" ? (
            <div className="flex min-h-72 flex-col items-start justify-center gap-4 rounded-sm border border-primary/40 bg-background p-8">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary">
                <Check className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight">REQUEST SENT</h3>
              <p className="text-sm text-muted-foreground">
                Thanks — we&apos;ve received your project request and will be in touch shortly.
              </p>
              <button
                type="button"
                onClick={() => setState("idle")}
                className="min-h-11 font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary uppercase"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name} id="name">
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={set("name")}
                  maxLength={100}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  className={field}
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" error={errors.email} id="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={set("email")}
                  maxLength={255}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  className={field}
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="Phone (optional)" error={errors.phone} id="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={set("phone")}
                  maxLength={30}
                  autoComplete="tel"
                  className={field}
                  placeholder="+00 00000 00000"
                />
              </Field>
              <Field label="Company (optional)" error={errors.company} id="company">
                <input
                  id="company"
                  name="company"
                  value={values.company}
                  onChange={set("company")}
                  maxLength={120}
                  autoComplete="organization"
                  className={field}
                  placeholder="Company name"
                />
              </Field>
              <Field label="Project Type" error={errors.projectType} id="projectType">
                <select
                  id="projectType"
                  name="projectType"
                  value={values.projectType}
                  onChange={set("projectType")}
                  aria-invalid={Boolean(errors.projectType)}
                  className={field}
                >
                  <option value="">Select…</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Budget" error={errors.budget} id="budget">
                <select
                  id="budget"
                  name="budget"
                  value={values.budget}
                  onChange={set("budget")}
                  aria-invalid={Boolean(errors.budget)}
                  className={field}
                >
                  <option value="">Select…</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Message" error={errors.message} id="message">
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={set("message")}
                    rows={5}
                    maxLength={1000}
                    aria-invalid={Boolean(errors.message)}
                    className={`${field} resize-none py-3`}
                    placeholder="What are you building?"
                  />
                </Field>
              </div>

              {errors.form && (
                <p role="alert" className="text-sm text-destructive sm:col-span-2">
                  {errors.form}
                </p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="group inline-flex min-h-12 items-center gap-3 rounded-sm bg-primary px-7 font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary-foreground uppercase disabled:opacity-70"
                >
                  {state === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Project Request
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-2 block">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

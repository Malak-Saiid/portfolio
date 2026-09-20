"use client";

import { useCallback, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/social-icons";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import styles from "./contact.module.css";

type ContactField = "name" | "email" | "subject" | "message";
type FieldErrors = Partial<Record<ContactField, string>>;

const fields: ContactField[] = ["name", "email", "subject", "message"];

export function Contact() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formStatus, setFormStatus] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "manual">("idle");
  const selectManualEmail = useCallback((input: HTMLInputElement | null) => {
    if (input) { input.focus(); input.select(); }
  }, []);

  async function copyEmail() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(site.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("manual");
    }
  }

  function clearError(field: ContactField) {
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: undefined }));
    if (formStatus) setFormStatus("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(fields.map((field) => [field, String(data.get(field) ?? "").trim()])) as Record<ContactField, string>;
    const nextErrors: FieldErrors = {};

    for (const field of fields) {
      if (!values[field]) nextErrors[field] = `Please enter your ${field === "name" ? "name" : field === "email" ? "email address" : field === "subject" ? "subject" : "message"}.`;
    }

    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (values.email && emailInput.validity.typeMismatch) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setFormStatus("Please check the highlighted fields before continuing.");
      const firstInvalid = fields.find((field) => nextErrors[field]);
      if (firstInvalid) requestAnimationFrame(() => (form.elements.namedItem(firstInvalid) as HTMLElement).focus());
      return;
    }

    const body = `Hi Malak,\n\n${values.message}\n\n${values.name}\n${values.email}`;
    // Mailto is the default delivery option. Replace this with your email-service
    // integration if needed; never expose private API credentials in this client.
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus("Your email draft is ready to open. Send it from your email app. If nothing opens, use the email address beside this form.");
  }

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-heading">
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <SectionHeading number="07" eyebrow="CONTACT" title="Let's build something great." description="A good conversation is where great software begins." />
        </Reveal>
        <div className={styles.grid}>
          <Reveal className={styles.details}>
            <span className={styles.availability}><span aria-hidden="true" /> Open to opportunities</span>
            <h3 id="contact-heading" className={styles.headline}>Your next idea.<br /><span>Our next conversation.</span></h3>
            <p className={styles.description}>I&apos;m currently open to software engineering and full-stack development opportunities. Feel free to contact me about opportunities, collaborations, or interesting projects.</p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><Mail size={19} aria-hidden="true" /></span>
                <div className={styles.contactValue}>
                  <span className={styles.itemLabel}>EMAIL ME</span>
                  <a className={styles.email} href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={15} aria-hidden="true" /></a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><MapPin size={19} aria-hidden="true" /></span>
                <div className={styles.contactValue}><span className={styles.itemLabel}>BASED IN</span><span>{site.location}</span></div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={`button button-secondary ${styles.copyButton}`} type="button" onClick={copyEmail}>
                {copyStatus === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                {copyStatus === "copied" ? "Email copied" : "Copy email"}
              </button>
              <a className={`icon-button ${styles.social}`} href={site.github} target="_blank" rel="noopener noreferrer" aria-label="Malak Saiid on GitHub (opens in a new tab)"><Github size={19} aria-hidden="true" /></a>
              <a className={`icon-button ${styles.social}`} href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Malak Saiid on LinkedIn (opens in a new tab)"><Linkedin size={19} aria-hidden="true" /></a>
            </div>
            <div className={styles.copyStatus} role="status" aria-live="polite">
              {copyStatus === "copied" && "Email address copied to your clipboard."}
              {copyStatus === "manual" && <><label htmlFor="manual-email">Clipboard access is unavailable. Select and copy this address:</label><input id="manual-email" className={styles.manualCopy} readOnly value={site.email} ref={selectManualEmail} onFocus={(event) => event.currentTarget.select()} /></>}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form className={`glass-card ${styles.form}`} onSubmit={handleSubmit} noValidate aria-labelledby="message-heading">
              <div className={styles.formHeading}><div><span className={styles.itemLabel}>HAVE SOMETHING IN MIND?</span><h3 id="message-heading">Let&apos;s talk.</h3></div><span className={styles.formIcon}><Mail size={22} aria-hidden="true" /></span></div>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength={120} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onChange={() => clearError("name")} />
                  {errors.name && <p id="name-error" className={styles.error}>{errors.name}</p>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} onChange={() => clearError("email")} />
                  {errors.email && <p id="email-error" className={styles.error}>{errors.email}</p>}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-subject">Subject <span aria-hidden="true">*</span></label>
                <input id="contact-subject" name="subject" type="text" placeholder="An opportunity, an idea, a hello…" required maxLength={180} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} onChange={() => clearError("subject")} />
                {errors.subject && <p id="subject-error" className={styles.error}>{errors.subject}</p>}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
                <textarea id="contact-message" name="message" placeholder="Tell me a little about what you have in mind…" rows={5} required maxLength={2000} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} onChange={() => clearError("message")} />
                {errors.message && <p id="message-error" className={styles.error}>{errors.message}</p>}
              </div>
              <button className={`button button-primary ${styles.submit}`} type="submit">Open email draft<ArrowRight size={17} aria-hidden="true" /></button>
              <p className={styles.formHint}>Opens your email app. Your message is sent from there.</p>
              <p className={styles.formStatus} role="status" aria-live="polite">{formStatus}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

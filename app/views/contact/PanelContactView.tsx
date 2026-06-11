"use client"

import type { FormEvent } from "react"
import {
  ExternalLink,
  FileText,
  Mail,
  MessageCircle,
  Send,
  User,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

const privateContactLinks = [
  {
    key: "whatsapp",
    value: "(16) 99973-3423",
    href: "https://api.whatsapp.com/send/?phone=5516999733423",
    icon: MessageCircle,
  },
  {
    key: "email",
    value: "jkaue986@gmail.com",
    href: "mailto:jkaue986@gmail.com",
    icon: Mail,
  },
  {
    key: "linkedin",
    value: "linkedin.com/in/kauê-josé-023220268",
    href: "https://www.linkedin.com/in/kau%C3%AA-jos%C3%A9-023220268/",
    icon: ExternalLink,
  },
] as const

const fieldClassName =
  "min-h-10 w-full rounded-[8px] border border-input bg-background px-3 py-2 text-sm shadow-xs transition outline-none placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50"

export function PanelContactView() {
  const { content } = useLanguage()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const subject = String(formData.get("subject") ?? "").trim()
    const description = String(formData.get("description") ?? "").trim()

    if (!name || !subject || !description) {
      form.reportValidity()
      return
    }

    const body = [
      `${content.contact.project.mailLabels.name}: ${name}`,
      "",
      `${content.contact.project.mailLabels.description}:`,
      description,
    ].join("\n")

    window.location.href = `mailto:jkaue986@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="px-6 py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="max-w-4xl!">
          <h1 className="text-2xl leading-tight font-bold text-primary sm:text-4xl">
            {content.contact.heading}
          </h1>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <section
            aria-labelledby="project-contact-title"
            className="rounded-[8px] border bg-card p-5 shadow-sm md:p-6"
          >
            <div className="space-y-2">
              <h2
                id="project-contact-title"
                className="text-xl leading-tight font-semibold md:text-2xl"
              >
                {content.contact.project.title}
              </h2>
              <p className="text-xs font-medium text-muted-foreground">
                {content.contact.project.requiredNote}
              </p>
            </div>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <User className="size-4 text-primary" />
                  {content.contact.project.fields.name.label}
                  <span aria-hidden="true" className="text-primary">
                    *
                  </span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={content.contact.project.fields.name.placeholder}
                  className={fieldClassName}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <FileText className="size-4 text-primary" />
                  {content.contact.project.fields.subject.label}
                  <span aria-hidden="true" className="text-primary">
                    *
                  </span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder={
                    content.contact.project.fields.subject.placeholder
                  }
                  className={fieldClassName}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-description"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <MessageCircle className="size-4 text-primary" />
                  {content.contact.project.fields.description.label}
                  <span aria-hidden="true" className="text-primary">
                    *
                  </span>
                </label>
                <textarea
                  id="contact-description"
                  name="description"
                  required
                  placeholder={
                    content.contact.project.fields.description.placeholder
                  }
                  className={`${fieldClassName} min-h-40 resize-y leading-6`}
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send />
                {content.contact.project.submit}
              </Button>
            </form>
          </section>

          <section
            aria-labelledby="private-contact-title"
            className="rounded-[8px] border bg-card p-5 shadow-sm md:p-6"
          >
            <div className="space-y-2">
              <h2
                id="private-contact-title"
                className="text-xl leading-tight font-semibold md:text-2xl"
              >
                {content.contact.private.title}
              </h2>
            </div>

            <div className="mt-6 grid gap-3">
              {privateContactLinks.map((item) => {
                const Icon = item.icon
                const method = content.contact.private[item.key]
                const isExternal = item.href.startsWith("http")

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="group rounded-[8px] border bg-background p-4 transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <div className="flex gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-medium">{method.title}</h3>
                          <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                        </div>
                        <p className="mt-1 text-sm font-medium wrap-break-word">
                          {item.value}
                        </p>
                        <span className="mt-3 inline-flex text-sm font-medium text-primary">
                          {method.action}
                        </span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

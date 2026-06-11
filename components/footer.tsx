"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const pageLinks = [
  { labelKey: "home", href: "/" },
  { labelKey: "about", href: "/sobre" },
  { labelKey: "contact", href: "/contato" },
  { labelKey: "projects", href: "/projetos" },
] as const

const contactLinks = [
  {
    label: "(16) 99973-3423",
    href: "https://api.whatsapp.com/send/?phone=5516999733423",
  },
  { label: "jkaue986@gmail.com", href: "mailto:jkaue986@gmail.com" },
]

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kau%C3%AA-jos%C3%A9-023220268/",
    icon: LinkedinIcon,
  },
  { label: "GitHub", href: "https://github.com/Kaue404", icon: GithubIcon },
]

type IconProps = {
  className?: string
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M5 8.8h3.4V20H5V8.8Zm1.7-5.3a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Zm5.4 5.3h3.2v1.5h.1c.4-.9 1.6-1.8 3.2-1.8 3.4 0 4 2.3 4 5.2V20h-3.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-3.4V8.8Z" />
    </svg>
  )
}

function GithubIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.4 6.8 9.7.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.3 1.1 2.9.9.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5.1 0-1.1.4-2.1 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1.8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.8 0 4-2.3 4.8-4.6 5.1.4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5a10.2 10.2 0 0 0 6.8-9.7C22 6.6 17.5 2 12 2Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function Footer() {
  const { content } = useLanguage()

  return (
    <footer className="border-t bg-background/50">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-8 md:px-10">
        <div className="grid w-full gap-8 text-center sm:grid-cols-[1fr_1.25fr_1fr] sm:text-left">
          <section aria-labelledby="footer-pages-title">
            <h2
              id="footer-pages-title"
              className="mb-3 text-xl leading-none font-semibold"
            >
              {content.footer.pagesTitle}
            </h2>
            <nav aria-label={content.footer.aria.pages}>
              <ul className="space-y-1 text-sm leading-tight">
                {pageLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      {content.footer.links[item.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <section aria-labelledby="footer-contact-title">
            <h2
              id="footer-contact-title"
              className="mb-3 text-xl leading-none font-semibold"
            >
              {content.footer.contactTitle}
            </h2>
            <ul className="space-y-2 text-sm leading-tight">
              {contactLinks.map((item) => {
                const isExternal = item.href.startsWith("http")

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="rounded-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>

          <section aria-labelledby="footer-social-title">
            <h2
              id="footer-social-title"
              className="mb-3 text-xl leading-none font-semibold"
            >
              {content.footer.socialTitle}
            </h2>
            <ul className="flex items-center justify-center gap-2 sm:justify-start">
              {socialLinks.map((item) => {
                const Icon = item.icon
                const icon = <Icon className="size-8" />

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="block rounded-sm transition-colors outline-none hover:text-white/75 focus-visible:ring-2 focus-visible:ring-white/70"
                      >
                        {icon}
                      </a>
                    ) : (
                      <span
                        aria-label={item.label}
                        className="block rounded-sm text-white"
                        role="img"
                      >
                        {icon}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>
        </div>

        <p className="mt-8 text-center text-sm leading-none">
          {content.footer.copyright}
        </p>
      </div>
    </footer>
  )
}

"use client"

import Image from "next/image"
import { Code, ExternalLink, Layers, Sparkles, Users } from "lucide-react"
import { ContactButton } from "@/components/contact-button"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

const projectHighlightIcons = [Layers, Users, Sparkles] as const

export function PanelProjectsView() {
  const { content } = useLanguage()

  return (
    <section className="px-6 py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="max-w-4xl space-y-5">
          <h1 className="text-2xl leading-tight font-bold text-primary sm:text-4xl">
            {content.projects.heading}
          </h1>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            {content.projects.intro}
          </p>
        </header>

        <section
          aria-label={content.projects.summaryLabel}
          className="grid gap-4 md:grid-cols-3"
        >
          {content.projects.highlights.map((highlight, index) => {
            const Icon = projectHighlightIcons[index]

            return (
              <div
                key={highlight.title}
                className="rounded-[8px] border bg-card p-5 shadow-sm"
              >
                <Icon className="mb-4 size-6 text-primary" />
                <h2 className="text-lg font-medium">{highlight.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            )
          })}
        </section>

        <section aria-labelledby="project-list-title" className="space-y-6">
          <h2 id="project-list-title" className="sr-only">
            {content.projects.projectListTitle}
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {content.projects.items.map((project) => (
              <Card
                key={project.href}
                className="h-full rounded-[8px] border py-0 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.imageUrl}
                    alt={`${content.projects.projectImageAlt} ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 560px, calc(100vw - 3rem)"
                    className="object-cover transition-transform duration-300 group-hover/card:scale-[1.03]"
                  />
                </div>

                <CardHeader className="gap-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-6">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-5">
                  <div>
                    <h3 className="text-sm font-medium">
                      {content.projects.mainPoints}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[8px] border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 pb-5">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${content.projects.openRepositoryAria} ${project.title}`}
                    >
                      <Code />
                      {content.projects.viewRepository}
                      <ExternalLink />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t py-10 text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            <h2 className="text-2xl leading-tight font-semibold md:text-3xl">
              {content.projects.ctaTitle}
            </h2>
            <ContactButton className="w-full sm:w-auto" />
          </div>
        </section>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function PanelAboutView() {
  const { content } = useLanguage()

  return (
    <section className="px-6 py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-5">
            <h1 className="text-2xl leading-tight font-bold text-primary sm:text-4xl">
              {content.about.heading}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              {content.about.bio}
            </p>
          </div>

          <div className="relative mx-auto aspect-4/5 w-full max-w-xs overflow-hidden rounded-[8px] border bg-muted shadow-sm">
            <Image
              src="/EuMesmo.jpg"
              alt={content.about.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 320px, 80vw"
              className="object-cover"
            />
          </div>
        </div>

        <section aria-labelledby="journey-title" className="space-y-6 pb-6">
          <h2 id="journey-title" className="sr-only">
            {content.about.journeyTitle}
          </h2>
          <ol className="space-y-6">
            {content.about.journeySteps.map((step, index) => (
              <li
                key={step.label}
                className="relative grid grid-cols-[0.75rem_minmax(0,1fr)] gap-5"
              >
                <div className="relative flex justify-center">
                  {index < content.about.journeySteps.length - 1 && (
                    <span className="absolute top-6.5 -bottom-12.5 left-1/2 w-px -translate-x-1/2 bg-primary/35" />
                  )}
                  <span className="relative z-10 mt-5 size-3 rounded-full border-2 border-background bg-primary" />
                </div>
                <div className="rounded-[8px] border bg-card p-5 shadow-sm">
                  <h3 className="text-xl font-medium">{step.label}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground md:text-base">
                    {step.items.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  )
}

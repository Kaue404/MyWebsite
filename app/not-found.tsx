"use client"

import Plasma from "@/components/Plasma"
import { useLanguage } from "@/components/language-provider"

export default function NotFound() {
  const { content } = useLanguage()

  return (
    <section className="fixed inset-0 isolate z-60 flex min-h-svh items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div className="absolute inset-0 z-0">
        <Plasma
          color="#7008e7"
          speed={0.3}
          direction="forward"
          scale={1.5}
          opacity={1}
          mouseInteractive
        />
      </div>
      <div className="absolute inset-0 z-1 bg-background/35 dark:bg-background/25" />
      <h1 className="relative z-10 text-4xl leading-tight font-medium sm:text-5xl md:text-6xl">
        {content.notFound.heading}
      </h1>
    </section>
  )
}

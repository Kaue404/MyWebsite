import Link from "next/link"
import { Download, FolderOpen } from "lucide-react"
import Plasma from "@/components/Plasma"
import { Button } from "@/components/ui/button"

export function PanelHomeView() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh)] overflow-hidden px-6 py-15 md:min-h-[calc(100svh-6rem)] md:px-10">
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
        <div className="relative z-10 flex w-full min-w-0 flex-col justify-center gap-4 text-4xl leading-loose">
          <h1 className="font-medium">
            Olá, bem-vindo ao meu Portfólio Website
          </h1>
        </div>
      </section>
      <section className="flex min-h-[calc(100svh-4rem)] items-center justify-center border-t px-6 py-16 text-center md:min-h-[calc(100svh-6rem)] md:px-10">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-3xl font-medium md:text-4xl">
              Conheça meu trabalho
            </h2>
          </div>

          <div className="flex w-full max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/projetos">
                <FolderOpen />
                Ver projetos
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a href="/curriculos/cv-kaue.pdf" download>
                <Download />
                Baixar currículo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a href="/curriculos/cv-kaue-en.pdf" download>
                <Download />
                English CV
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

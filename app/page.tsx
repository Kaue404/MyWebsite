import Plasma from "../components/Plasma"

export default function Page() {
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
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] overflow-hidden border-t px-6 py-16 md:min-h-[calc(100svh-6rem)] md:px-10">
        <div className="absolute inset-0 z-0">
          <h2 className="text-2xl font-medium">
            Aqui você pode encontrar meus projetos, habilidades e experiências
            profissionais.
          </h2>
        </div>
      </section>
    </>
  )
}

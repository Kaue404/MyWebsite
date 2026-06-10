import Image from "next/image"

const journeySteps = [
  {
    label: "2022",
    items: ["Ensino Médio: PEI Sudário Ferreira"],
  },
  {
    label: "2023",
    items: ["Curso de Inglês: CCBEU, Franca"],
  },
  {
    label: "2024",
    items: [
      "Estágio de Desenvolvedor Full Stack: Lev Negócios",
      "Técnico Eletrônico: Hayabusa Produções",
    ],
  },
  {
    label: "2025",
    items: ["Desenvolvedor Full Stack: Lev Negócios"],
  },
  {
    label: "2026 - Atualmente",
    items: [
      "Desenvolvedor Front End: Âncora Consórcios",
      "Diploma de Tecnólogo e Certificações em DSM: FATEC",
    ],
  },
]

export function PanelAboutView() {
  return (
    <section className="px-6 pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-5">
            <h1 className="text-2xl leading-tight font-bold text-primary sm:text-4xl">
              Kauê José Abdalla Leal
            </h1>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              Sou apaixonado por transformar ideias em realidade por meio do
              código, com o objetivo de participar de projetos com soluções
              impactantes. Sou formado em Desenvolvimento de Software
              Multiplataforma (DSM) na Fatec de Franca, com certificações
              intermediárias e microcertificações da área de programação, tenho
              inglês avançado e conhecimentos em Front-end, Back-end e
              tecnologia em geral. Já trabalhei na área de tecnologia na empresa
              Lev Negócios sendo full-stack e trabalho atualmente na Âncora
              Consórcios sendo front-end, utilizando várias ferramentas e
              frameworks.
            </p>
          </div>

          <div className="relative mx-auto aspect-4/5 w-full max-w-xs overflow-hidden rounded-[8px] border bg-muted shadow-sm">
            <Image
              src="/EuMesmo.jpg"
              alt="Foto de Kauê José Abdalla Leal"
              fill
              priority
              sizes="(min-width: 1024px) 320px, 80vw"
              className="object-cover"
            />
          </div>
        </div>

        <section aria-labelledby="journey-title" className="space-y-6 pb-6">
          <h2 id="journey-title" className="sr-only">
            Minha jornada
          </h2>
          <ol className="space-y-6">
            {journeySteps.map((step, index) => (
              <li
                key={step.label}
                className="relative grid grid-cols-[0.75rem_minmax(0,1fr)] gap-5"
              >
                <div className="relative flex justify-center">
                  {index < journeySteps.length - 1 && (
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

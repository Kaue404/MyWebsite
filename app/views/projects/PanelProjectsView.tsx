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

const projectHighlights = [
  {
    icon: Layers,
    title: "Aplicações completas",
    description:
      "Projetos com interfaces, integrações, organização de dados e fluxo de uso pensado para o usuário final.",
  },
  {
    icon: Users,
    title: "Projetos em equipe",
    description:
      "Experiência em projetos integradores com divisão de tarefas, documentação, entregas por sprint e colaboração no GitHub.",
  },
  {
    icon: Sparkles,
    title: "Aprendizado aplicado",
    description:
      "Cada repositório reúne práticas de front-end, back-end, APIs, visualização de dados e evolução contínua do código.",
  },
]

const projects = [
  {
    imageUrl: "/projetos/pokemon-api.png",
    title: "Site de API Pokémon",
    href: "https://github.com/Kaue404/API-Pokemon",
    description:
      "Interface criada para consultar dados de Pokémon de forma clara, trabalhando consumo de API REST, exibição de imagens, organização de informações e navegação objetiva.",
    highlights: [
      "Consulta e apresentação de dados vindos de uma API externa.",
      "Cards visuais para tornar a exploração dos Pokémon mais simples.",
      "Tratamento de estados da interface para uma experiência mais fluida.",
    ],
    tags: ["API REST", "Front-end", "Responsividade"],
  },
  {
    imageUrl: "/projetos/wonderlust.png",
    title: "Projeto PI: Wonderlust",
    href: "https://github.com/FatecFranca/DSM-G09-PI3-2024-1",
    description:
      "Projeto acadêmico desenvolvido em equipe, com foco em transformar requisitos em uma aplicação navegável, organizada e alinhada a entregas incrementais.",
    highlights: [
      "Participação em fluxo colaborativo com versionamento e organização por tarefas.",
      "Construção de telas e funcionalidades conectadas às necessidades do projeto.",
      "Prática de documentação, planejamento e apresentação de entregas.",
    ],
    tags: ["GitHub", "Equipe", "Produto digital"],
  },
  {
    imageUrl: "/projetos/sample-chart.png",
    title: "Sample de Gráficos",
    href: "https://github.com/Kaue404/Samples",
    description:
      "Conjunto de exemplos voltado à criação de gráficos e leitura visual de informações, explorando formas de apresentar dados com clareza e consistência.",
    highlights: [
      "Exemplos reutilizáveis para diferentes tipos de visualização.",
      "Organização de dados para facilitar comparação e análise.",
      "Atenção à legibilidade, hierarquia visual e composição dos gráficos.",
    ],
    tags: ["Gráficos", "Dados", "Componentes"],
  },
  {
    imageUrl: "/projetos/dome.png",
    title: "Projeto PI: Dome",
    href: "https://github.com/bodelha/dome",
    description:
      "Aplicação criada em contexto acadêmico para consolidar práticas de desenvolvimento, integração de funcionalidades e organização de um projeto com escopo real.",
    highlights: [
      "Desenvolvimento orientado a requisitos e validações do projeto.",
      "Trabalho com estrutura de telas, fluxo de navegação e regras de negócio.",
      "Colaboração em equipe para manter padrão de código e evolução contínua.",
    ],
    tags: ["Aplicação web", "Equipe", "Requisitos"],
  },
  {
    imageUrl: "/projetos/api-web.png",
    title: "Sample de API Web",
    href: "https://github.com/Kaue404/lab-web-2024-2",
    description:
      "Exemplo prático para estudar comunicação back-end, com foco em endpoints, respostas estruturadas e consumo de dados em aplicação web.",
    highlights: [
      "Exploração de rotas, métodos HTTP e contratos de resposta.",
      "Integração entre interface e camada de dados.",
      "Base para evoluir funcionalidades com regras e validações mais completas.",
    ],
    tags: ["API Web", "HTTP", "Integração"],
  },
  {
    imageUrl: "/projetos/game-list.png",
    title: "Projeto PI: Game List",
    href: "https://github.com/cldmatos/DSM-P6-G05-2025-2",
    description:
      "Projeto integrador voltado à organização de jogos em uma experiência de catálogo, reunindo informações, listagens e fluxo de navegação para consulta.",
    highlights: [
      "Estruturação de uma experiência para explorar e organizar itens.",
      "Uso de cards, listagens e detalhes para melhorar a descoberta de conteúdo.",
      "Projeto em equipe com foco em entregas, revisão e evolução do produto.",
    ],
    tags: ["Catálogo", "UX", "Projeto PI"],
  },
  {
    imageUrl: "/projetos/glic-guard.png",
    title: "Projeto PI: GlicGuard",
    href: "https://github.com/FatecFranca/DSM-P5-G05-2025-1",
    description:
      "Projeto integrador com foco em tecnologia aplicada à saúde, pensado para apoiar o registro, acompanhamento e organização de informações relacionadas à glicemia.",
    highlights: [
      "Aplicação de regras de negócio em um domínio com dados sensíveis.",
      "Organização de informações para facilitar acompanhamento e tomada de decisão.",
      "Desenvolvimento colaborativo com atenção à clareza e manutenção do código.",
    ],
    tags: ["Mobile", "Dados", "Saúde"],
  },
]

export function PanelProjectsView() {
  return (
    <section className="px-6 py-10 md:px-10 md:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <header className="max-w-4xl space-y-5">
          <h1 className="text-2xl leading-tight font-bold text-primary sm:text-4xl">
            Meus projetos como desenvolvedor
          </h1>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            Nesta página estão projetos acadêmicos, estudos práticos e samples
            que representam minha experiência com desenvolvimento front-end,
            back-end, integrações com APIs, visualização de dados e trabalho em
            equipe.
          </p>
        </header>

        <section
          aria-label="Resumo dos projetos"
          className="grid gap-4 md:grid-cols-3"
        >
          {projectHighlights.map((highlight) => {
            const Icon = highlight.icon

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
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.href}
                className="h-full rounded-[8px] border py-0 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.imageUrl}
                    alt={`Imagem do projeto ${project.title}`}
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
                    <h3 className="text-sm font-medium">Principais pontos</h3>
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
                      aria-label={`Abrir repositório do projeto ${project.title}`}
                    >
                      <Code />
                      Ver repositório
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
              Vamos conversar sobre um projeto?
            </h2>
            <ContactButton className="w-full sm:w-auto" />
          </div>
        </section>
      </div>
    </section>
  )
}

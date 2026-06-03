import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Começando a V2</h1>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Aperte <kbd>d</kbd> para trocar para o modo escuro.)
        </div>
      </div>
    </div>
  )
}

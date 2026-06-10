"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigationItems = [
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "#contato" },
]

function subscribeToMountStore() {
  return () => {}
}

function getMountedSnapshot() {
  return true
}

function getServerMountedSnapshot() {
  return false
}

function useHasMounted() {
  return React.useSyncExternalStore(
    subscribeToMountStore,
    getMountedSnapshot,
    getServerMountedSnapshot
  )
}

function ThemeToggleButton({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const hasMounted = useHasMounted()

  const isDark = hasMounted && resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(className, "cursor-pointer")}
      aria-label={
        hasMounted
          ? isDark
            ? "Ativar modo claro"
            : "Ativar modo escuro"
          : "Alternar tema"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="grid place-items-center">
        <Sun
          className={cn(
            "col-start-1 row-start-1 transition-all",
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          )}
        />
        <Moon
          className={cn(
            "col-start-1 row-start-1 transition-all",
            hasMounted && !isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-90 opacity-0"
          )}
        />
      </span>
    </Button>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    let frame = 0
    let timeout = 0

    function setScrolledStateFromWindow() {
      const nextIsScrolled = window.scrollY > 16

      setIsScrolled((currentIsScrolled) =>
        currentIsScrolled === nextIsScrolled
          ? currentIsScrolled
          : nextIsScrolled
      )
    }

    function updateScrolledState() {
      cancelAnimationFrame(frame)
      setScrolledStateFromWindow()
      frame = requestAnimationFrame(setScrolledStateFromWindow)
    }

    function updateScrolledStateAfterNavigation() {
      updateScrolledState()
      clearTimeout(timeout)
      timeout = window.setTimeout(updateScrolledState, 120)
    }

    function onPageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        window.location.reload()
        return
      }

      updateScrolledStateAfterNavigation()
    }

    function onRestoreSignal() {
      updateScrolledStateAfterNavigation()
    }

    updateScrolledState()
    const interval = window.setInterval(setScrolledStateFromWindow, 250)
    window.addEventListener("scroll", updateScrolledState, { passive: true })
    window.addEventListener("resize", updateScrolledStateAfterNavigation)
    window.addEventListener("focus", onRestoreSignal)
    window.addEventListener("pageshow", onPageShow)
    window.addEventListener("popstate", updateScrolledStateAfterNavigation)
    window.addEventListener("hashchange", updateScrolledStateAfterNavigation)
    document.addEventListener("visibilitychange", onRestoreSignal)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timeout)
      clearInterval(interval)
      window.removeEventListener("scroll", updateScrolledState)
      window.removeEventListener("resize", updateScrolledStateAfterNavigation)
      window.removeEventListener("focus", onRestoreSignal)
      window.removeEventListener("pageshow", onPageShow)
      window.removeEventListener("popstate", updateScrolledStateAfterNavigation)
      window.removeEventListener(
        "hashchange",
        updateScrolledStateAfterNavigation
      )
      document.removeEventListener("visibilitychange", onRestoreSignal)
    }
  }, [])

  React.useEffect(() => {
    if (!isOpen) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    function onResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("resize", onResize)
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto w-full border-b border-border/40 bg-background/45 px-4 py-3 text-foreground shadow-none backdrop-blur-xl transition-all duration-300 ease-out md:px-8 md:py-5",
          isScrolled &&
            "md:mt-4 md:w-[min(calc(100%-2rem),72rem)] md:rounded-full md:border md:border-border/60 md:bg-background/80 md:px-5 md:py-3 md:shadow-lg md:shadow-black/5 dark:md:bg-background/75"
        )}
      >
        <nav
          className="flex items-center justify-between gap-4"
          aria-label="Navegação principal"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 rounded-md transition-opacity outline-none hover:opacity-85 focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label="Ir para a página inicial"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Logo do site"
              width={48}
              height={48}
              priority
              className={cn(
                "size-10 rounded-full bg-black object-contain p-1 transition-all duration-300 md:size-12 dark:bg-transparent dark:p-0",
                isScrolled && "md:size-10"
              )}
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <Button key={item.href} asChild variant="ghost" size="sm">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <ThemeToggleButton />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggleButton />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={
                isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
              }
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-300 md:hidden",
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mt-3 flex flex-col gap-1 border-t border-border/50 pt-3">
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className="justify-start"
              >
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

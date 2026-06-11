"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { Check, Ellipsis, Languages, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { languageOptions, type Language } from "@/lib/translations"
import { cn } from "@/lib/utils"

const navigationItems = [
  { labelKey: "about", href: "/sobre" },
  { labelKey: "projects", href: "/projetos" },
  { labelKey: "contact", href: "/contato" },
] as const

const themeOptions = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
] as const

type ThemeOption = (typeof themeOptions)[number]["value"]

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

function PreferencesMenuButton({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const { language, setLanguage, content } = useLanguage()
  const hasMounted = useHasMounted()
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  const currentTheme: ThemeOption =
    hasMounted && resolvedTheme === "dark" ? "dark" : "light"
  const preferences = content.header.preferences

  React.useEffect(() => {
    if (!isOpen) {
      return
    }

    function onPointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

  function selectTheme(nextTheme: ThemeOption) {
    setTheme(nextTheme)
    setIsOpen(false)
  }

  function selectLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage)
    setIsOpen(false)
  }

  return (
    <div ref={menuRef} className={cn("relative", className)}>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="cursor-pointer"
        aria-label={preferences.trigger}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <Ellipsis />
      </Button>

      {isOpen && (
        <div
          role="menu"
          aria-label={preferences.title}
          className="absolute top-full right-0 z-50 mt-2 w-64 rounded-[8px] border bg-popover p-2 text-popover-foreground shadow-lg shadow-black/10"
        >
          <div className="px-2 py-1 text-xs font-medium tracking-normal text-muted-foreground uppercase">
            {preferences.theme}
          </div>
          <div className="space-y-1">
            {themeOptions.map((option) => {
              const Icon = option.icon
              const isSelected = currentTheme === option.value
              const label =
                option.value === "light"
                  ? preferences.lightTheme
                  : preferences.darkTheme

              return (
                <button
                  key={option.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isSelected}
                  className="flex h-9 w-full items-center justify-between rounded-[8px] px-2.5 text-sm transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50"
                  onClick={() => selectTheme(option.value)}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="size-4" />
                    {label}
                  </span>
                  {isSelected && <Check className="size-4 text-primary" />}
                </button>
              )
            })}
          </div>

          <div className="mt-2 border-t pt-2">
            <div className="flex items-center gap-2 px-2 py-1 text-xs font-medium tracking-normal text-muted-foreground uppercase">
              <Languages className="size-3.5" />
              {preferences.language}
            </div>
            <div className="space-y-1">
              {languageOptions.map((option) => {
                const isSelected = language === option.value

                return (
                  <button
                    key={option.value}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isSelected}
                    className="flex h-9 w-full items-center justify-between rounded-[8px] px-2.5 text-sm transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50"
                    onClick={() => selectLanguage(option.value)}
                  >
                    <span className="flex items-center gap-2">
                      <Languages className="size-4" />
                      <span>{option.label}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        {option.shortLabel}
                      </span>
                      {isSelected && <Check className="size-4 text-primary" />}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function Header() {
  const { content } = useLanguage()
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
          aria-label={content.header.aria.mainNavigation}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 rounded-md transition-opacity outline-none hover:opacity-85 focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label={content.header.aria.home}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.png"
              alt={content.header.aria.logoAlt}
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
                <Link href={item.href}>
                  {content.header.navigation[item.labelKey]}
                </Link>
              </Button>
            ))}
            <PreferencesMenuButton />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <PreferencesMenuButton />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={
                isOpen
                  ? content.header.aria.closeMobileMenu
                  : content.header.aria.openMobileMenu
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
                  {content.header.navigation[item.labelKey]}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

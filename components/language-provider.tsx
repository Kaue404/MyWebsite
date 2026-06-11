"use client"

import * as React from "react"
import {
  defaultLanguage,
  isLanguage,
  type Language,
  translations,
} from "@/lib/translations"

const languageStorageKey = "portfolio-language"
const languageChangeEvent = "portfolio-language-change"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  content: (typeof translations)[Language]
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey)

  return isLanguage(storedLanguage) ? storedLanguage : defaultLanguage
}

function getServerLanguageSnapshot(): Language {
  return defaultLanguage
}

function subscribeToLanguageStore(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange)
  window.addEventListener(languageChangeEvent, onStoreChange)

  return () => {
    window.removeEventListener("storage", onStoreChange)
    window.removeEventListener(languageChangeEvent, onStoreChange)
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = React.useSyncExternalStore(
    subscribeToLanguageStore,
    getStoredLanguage,
    getServerLanguageSnapshot
  )

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(languageStorageKey, nextLanguage)
    window.dispatchEvent(new Event(languageChangeEvent))
  }, [])

  React.useEffect(() => {
    const content = translations[language]

    document.documentElement.lang = content.meta.lang
    document.title = content.meta.title
  }, [language])

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      content: translations[language],
    }),
    [language, setLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider.")
  }

  return context
}

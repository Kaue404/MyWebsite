"use client"

import type { ComponentProps } from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

type ContactButtonProps = {
  className?: string
  variant?: ComponentProps<typeof Button>["variant"]
  size?: ComponentProps<typeof Button>["size"]
}

export function ContactButton({
  className,
  variant = "default",
  size = "lg",
}: ContactButtonProps) {
  const { content } = useLanguage()

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href="/contato">
        <MessageCircle />
        {content.contactButton.label}
      </Link>
    </Button>
  )
}

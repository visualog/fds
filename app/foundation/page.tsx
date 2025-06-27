'use client'

import { H1, H2, P } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check, AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const colors: { name: string; className: string }[] = [
  { name: "Primary", className: "bg-primary" },
  { name: "Secondary", className: "bg-secondary" },
  { name: "Destructive", className: "bg-destructive" },
  { name: "Muted", className: "bg-muted" },
  { name: "Accent", className: "bg-accent" },
]

const spacings = [1, 2, 3, 4, 6, 8, 12, 16, 24]

export default function FoundationPage() {
  return (
    <div className="container py-10 space-y-12">
      <H1>Foundation</H1>
      <P className="text-muted-foreground">
        디자인 시스템의 기본 토큰(색상, 타이포그래피, 간격, 아이콘, 그림자)을 정의합니다.
      </P>

      {/* Color Section */}
      <section className="space-y-6">
        <H2>색상(Color)</H2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {colors.map((c) => (
            <div key={c.name} className="space-y-2 text-center">
              <div className={cn("h-20 rounded-md border", c.className)} />
              <P className="text-sm">{c.name}</P>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Typography Section */}
      <section className="space-y-4">
        <H2>타이포그래피(Typography)</H2>
        <div className="space-y-2">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <h3 className="text-xl font-semibold">Heading 3</h3>
          <P>본문 텍스트(Paragraph). Lorem ipsum dolor sit amet.</P>
        </div>
      </section>

      <Separator />

      {/* Spacing Section */}
      <section className="space-y-4">
        <H2>간격(Spacing)</H2>
        <div className="flex flex-wrap gap-4">
          {spacings.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded" style={{ width: s * 4, height: s * 4 }} />
              <P className="text-xs">{s * 4}px</P>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Icon Section */}
      <section className="space-y-4">
        <H2>아이콘(Icons)</H2>
        <div className="flex items-center gap-6">
          <Check className="size-6" />
          <AlertCircle className="size-6" />
          <Loader2 className="size-6 animate-spin" />
        </div>
      </section>

      <Separator />

      {/* Shadow Section */}
      <section className="space-y-4">
        <H2>그림자(Shadows)</H2>
        <div className="flex flex-wrap gap-8">
          {["sm", "", "md", "lg", "xl"].map((shadow) => (
            <div key={shadow} className="space-y-2 text-center">
              <div className={cn("w-24 h-16 rounded-md bg-background border", shadow ? `shadow-${shadow}` : "shadow")}></div>
              <P className="text-xs">shadow{shadow ? `-${shadow}` : ""}</P>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

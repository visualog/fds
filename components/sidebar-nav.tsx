"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"

import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Library,
  FileText,
  Settings,
  Palette,
  Component
} from "lucide-react"

interface SidebarNavProps {
  className?: string
}

export function SidebarNav({ className }: SidebarNavProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const mainNavItems = [
    {
      title: "Foundation",
      href: "/foundation",
      icon: <Palette className="h-4 w-4" />,
    },
    {
      title: "Components",
      href: "/components",
      icon: <Component className="h-4 w-4" />,
    },
    {
      title: "Docs",
      href: "/docs",
      icon: <FileText className="h-4 w-4" />,
    },
  ]

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-2">
            {!isCollapsed && (
              <h2 className="text-xl font-semibold tracking-tight">
                Design System
              </h2>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleSidebar}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
        </div>
        <div className="px-3">
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                  pathname.startsWith(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground",
                  isCollapsed && "justify-center px-2"
                )}
              >
                {item.icon}
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

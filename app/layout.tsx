import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ToastProvider, ToastViewport } from "@/components/ui/toast"
import { SidebarNav } from "@/components/sidebar-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shadcn 디자인 시스템",
  description: "shadcn UI와 Tailwind CSS를 이용한 디자인 시스템",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen">
          {/* Sidebar */}
          <aside className="sticky top-0 h-screen w-72 shrink-0 border-r bg-background/60 backdrop-blur-md">
            <div className="h-full py-2">
              <SidebarNav />
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto">
            <ToastProvider>
              <div className="container mx-auto p-6">
                {children}
              </div>
              <ToastViewport />
            </ToastProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
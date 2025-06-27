import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'
import { SiteNav } from '@/components/site-nav'
import { ToastProvider, ToastViewport } from '@/components/ui/toast'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shadcn 디자인 시스템',
  description: 'shadcn UI와 Tailwind CSS를 이용한 디자인 시스템',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ToastProvider>
          {/* duplicate removed */
            {/* Sidebar */}
            <aside className="w-full md:w-60 border-b md:border-b-0 md:border-r bg-background/60 backdrop-blur-md">
              <div className="p-4 sticky top-0">
                <h1 className="text-lg font-semibold mb-4">Design System</h1>
                <SiteNav />
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
              {children}
            </main>
          </div>
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>

        
          {children}
          </main>
        </div>
        <ToastViewport />
        
      </body>
    </html>
  );
}
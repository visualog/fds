import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'
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
          {children}
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}
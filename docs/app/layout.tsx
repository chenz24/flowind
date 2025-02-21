import './global.css';

import { Inter } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider';

import { clx, FlowindProvider, ModalsProvider } from '@flowind/ui';

const inter = Inter({
  subsets: ['latin'],
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <FlowindProvider>
            <ModalsProvider>{children}</ModalsProvider>
          </FlowindProvider>
        </RootProvider>
      </body>
    </html>
  );
}

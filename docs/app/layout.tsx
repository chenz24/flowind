import './global.css';

import { Inter } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider';

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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

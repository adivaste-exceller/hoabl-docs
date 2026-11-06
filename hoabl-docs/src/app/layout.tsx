import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Geist_Mono, Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider search={{ enabled: process.env.STATIC_EXPORT !== 'true' }}>{children}</RootProvider>
      </body>
    </html>
  );
}

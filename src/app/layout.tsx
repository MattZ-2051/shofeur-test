import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import 'tw-elements/dist/css/tw-elements.min.css';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Shofeur',
    template: '%s | Shofeur'
  },
  description: 'Chauffeured reservations made simple',
  metadataBase: new URL('https://www.shofeur.com/'),
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={inter.className}>
        <Header />
        <main className="w-full p-2 sm:!p-20 scroll-smooth">{children}</main>
      </body>
    </html>
  );
}

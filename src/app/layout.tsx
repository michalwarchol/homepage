import './_globals.scss';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Michał Warchoł',
  description: 'Homepage of my work',
  creator: 'Michał Warchoł',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

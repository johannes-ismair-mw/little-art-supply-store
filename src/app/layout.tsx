import type { Metadata } from 'next';
import { Grand_Hotel, Lato } from 'next/font/google';
import './globals.css';

/*
TODO: Improve the following RootLayout component by:
- Using more accessible fonts
- Thinking about the page language
*/

const grandHotel = Grand_Hotel({ weight: '400', subsets: ['latin'] });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const lato = Lato({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Little Art Supply Store',
  description:
    'A cozy haven for creatives, offering a wide range of high-quality art supplies to inspire your next masterpiece.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={grandHotel.className}>{children}</body>
    </html>
  );
}

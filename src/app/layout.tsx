import type { Metadata } from 'next';
import { Rubik_Microbe, Codystar, Megrim, Splash } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

/*
TODO: Improve the following RootLayout component by:
- Using more accessible fonts
- Thinking about the page language
*/

const rubikMicrobe = Rubik_Microbe({ weight: '400', subsets: ['latin'] });
const codystar = Codystar({ weight: '400', subsets: ['latin'] });
const megrim = Megrim({ weight: '400', subsets: ['latin'] });
const splash = Splash({ weight: '400', subsets: ['latin'] });

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
      <body
        className={clsx(
          rubikMicrobe.className,
          codystar.className,
          megrim.className,
          splash.className
        )}
      >
        {children}
      </body>
    </html>
  );
}

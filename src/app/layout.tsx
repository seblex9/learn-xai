import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Learn XAI',
  description: 'A To-learn List for Explainable AI Concepts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-800
      text-slate-100 container mx-auto p-4`}
      >
        <div className='max-w-screen-md mx-auto'>{children}</div>
      </body>
    </html>
  );
}

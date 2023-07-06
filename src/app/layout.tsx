'use client';
import React from 'react';
import Header from '@/components/common/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <div id="wrap">
          <div id="mobile" className="bg-gray-100">
            <Header />
            <RecoilRoot>{children}</RecoilRoot>
          </div>
        </div>
      </body>
    </html>
  );
}

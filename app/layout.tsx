import Link from 'next/link';
import './globals.css';
import { Metadata } from "next"
import styles from './layout.module.css';

export const metadata : Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 곳입니다.',
  icons: {
    // icon: './faviconTest.ico', 13.2 버전부터는 app폴더에 있는 favicon을 자동으로 인식하여 추가된다.
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Counter from '@/components/Counter';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log("main 서버컴포넌트");
  return (
    <>
      <h1>메인</h1>
      <Counter />
    </>
  );
}

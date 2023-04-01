import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css';

// export const revalidate = 0;

export default async function ProductsPage() {
  console.log('products 서버컴포넌트');
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 7 },
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 목록 페이지</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}

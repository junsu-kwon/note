import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';

// export const revalidate = 0;

export default async function ProductsPage() {
  console.log('products 서버컴포넌트');
  const products = await getProducts();
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
      <MeowArticle />
    </>
  );
}

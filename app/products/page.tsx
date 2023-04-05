import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/thirteen.svg';

// export const revalidate = 0;

export default async function ProductsPage() {
  console.log('products 서버컴포넌트');
  const products = await getProducts();
  return (
    <>
      <h1>제품 목록 페이지</h1>
      <Image src={img} alt="nextjs" width={200} height={200} />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={200}
        height={200}
      />
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

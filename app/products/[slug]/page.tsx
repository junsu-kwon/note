import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params: { slug } }: Props) {
  console.log('product 서버컴포넌트');
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }

  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
    </>
  );
}

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(({ id }) => ({
    slug: id,
  }));
}

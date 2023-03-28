import Link from 'next/link';

const products = ['shirt', 'pants', 'skirt', 'shoes'];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 목록 페이지</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index + product}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

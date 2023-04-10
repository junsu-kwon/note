import Counter from '@/components/Counter';

export default function Home() {
  console.log('main 서버컴포넌트');
  return (
    <>
      <h1>메인 테스트입니다. {process.env.TEST}</h1>
      <Counter />
    </>
  );
}

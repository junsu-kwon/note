'use client';

import { useState } from 'react';

export default function Counter() {
  console.log("클라이언트 컴포넌트");
  const [count, setCount] = useState(0);

  return <>
    <p>Count : {count}</p>
    <button type="button" onClick={() => setCount(cnt => cnt + 1)}>Count Up</button>
  </>;
}
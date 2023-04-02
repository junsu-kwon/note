'use client';

import { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css';

export default function MeowArticle() {
  console.log('MeowArticle 클라이언트 컴포넌트');
  const [text, setText] = useState('로딩 중 입니다...');

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}

import styles from '../styles/Home.module.css';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    async function play() {
      const res = await fetch('/api/getAllOperations', { method: 'GET' });
      const result = await res.json();
    }
  });
  return <div></div>;
}

import styles from '../styles/Home.module.css';
import Head from 'next/head';
import React from 'react';
import StartPage from '../components/StartPage';
import AnalylzePage from '../components/AnalylzePage';

export default function Home() {
  const [operations, setOperations] = React.useState([]);
  const [task, setTask] = React.useState();
  const [page, setPage] = React.useState('first');

  return (
    <div className='App' style={{ overflow: 'auto' }}>
      {page === 'first' ? (
        <StartPage
          operations={operations}
          setOperations={setOperations}
          setTask={setTask}
          setPage={setPage}
        />
      ) : (
        <AnalylzePage />
      )}
    </div>
  );
}

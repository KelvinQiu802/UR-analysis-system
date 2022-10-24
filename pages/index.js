import styles from '../styles/Home.module.css';
import Head from 'next/head';
import React from 'react';
import StartPage from '../components/StartPage';

export default function Home() {
  const [operations, setOperations] = React.useState([]);
  const [task, setTask] = React.useState();

  return (
    <div className='App'>
      <StartPage
        operations={operations}
        setOperations={setOperations}
        setTask={setTask}
      />
    </div>
  );
}

// components/LoadingSpinner.tsx
import React from 'react';
import styles from '@/styles/index.module.css';


//This Loading Spinner is useful, it tells the users that the data is being fetched
export default function LoadingSpinner() {
  return (
    <div className={styles.loadingSpinner}>
      <div className={styles.spinner}></div>
      <div style={{margin:'2rem 0'}}>Loading...</div>
    </div>
  );
};



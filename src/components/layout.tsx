import React, { ReactNode } from 'react';
import Heading from "./heading";
import styles from '@/styles/index.module.css';
import bg from '@/assets/background.jpg';
import { Leckerli_One } from 'next/font/google';

//Main Layout 
const leckerli = Leckerli_One({
    weight: '400',
    subsets: ['latin'],
  })

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout} style={{backgroundImage: `url(${bg.src})`, backgroundSize:'cover'}}>
      <Heading />
      <main className={styles.main}>{children}</main>
      <div className={styles.source}><p className={leckerli.className}>www.anh-dev.com</p></div>
    </div>
  );
}

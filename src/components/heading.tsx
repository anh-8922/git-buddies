import styles from '@/styles/components.module.css';
import { Lobster } from 'next/font/google';
import Link from 'next/link';

//Add Lobster font from Google
const lobster = Lobster({
    weight: '400',
    subsets: ['latin'],
  })

export default function Heading() {
    return(
        <div className={styles.heading}>
            
            <h1 className={lobster.className}>Git Buddies</h1>
            <div className={styles.navigator}>
                <Link href="/">Home</Link>
                <Link href="mailto: anh-dev@hotmail.com">Contact me</Link>
            </div>
        </div>
    )
}
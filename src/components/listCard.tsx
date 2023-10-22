import React from 'react';
import styles from '@/styles/components.module.css';


//This listCard component is designed to display information about users on the main page.
//It will be imported and used in a parent component: userList
interface UserCardProps {
  avatarUrl: string;
  username: string;
}

function ListCard({ avatarUrl, username }: UserCardProps) {
  return (
    <div className={styles.listCard}>
      <img className={styles.listImages} src={avatarUrl} alt={`${username}'s avatar`} />
      <p style={{ fontWeight: 'bold' }}>{username}</p>
    </div>
  );
}

export default ListCard;

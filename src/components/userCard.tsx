// components/UserCard.tsx
import React from 'react';
import styles from '@/styles/components.module.css';


//This userCard component is designed to display information about users on the main page.
//It will be imported and used in a parent component: [username]

interface UserCardProps {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  username: string;
  company?: string;
  socialHandles?: string[];
  followers?: number;
  following?: number;
  publicRepos?: number;
}

const UserCard: React.FC<UserCardProps> = ({
  avatarUrl,
  firstName,
  lastName,
  username,
  company,
  socialHandles,
  followers,
  following,
  publicRepos,
}) => {
  return (
    <div className={styles.userCard}>
      <h1 style={{textAlign: 'center'}}>User Details</h1>
      <div className={styles.cardBody}>
        <div style={{textAlign:'center'}}>
          <img className={styles.userImage} src={avatarUrl} alt={`${username}'s avatar`} />
          <p style={{fontSize:'1.3rem', fontWeight:'bold', marginTop:'1rem'}}>{firstName} {lastName}</p>
        </div>
        <div style={{fontSize: '1.3rem', lineHeight:'2'}}>
          <p>Git Account: {username}</p>
          {company && <p>Company: {company}</p>}
          {socialHandles && (
            <p>Social Handles: <a href={socialHandles.join(', ')}>{socialHandles.join(', ')}</a></p>
          )}
          {followers !== undefined && <p>Followers: {followers}</p>}
          {following !== undefined && <p>Following: {following}</p>}
          {publicRepos !== undefined && <p>Public Repositories: {publicRepos}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserCard;

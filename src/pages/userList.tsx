// pages/UserList.tsx
import React from 'react';
import styles from '@/styles/index.module.css';
import Link from 'next/link';
import { useGitHubApi } from './api/gitAPI';
import ListCard from '@/components/listCard';
import LoadingSpinner from '@/components/spinner';

export default function UserList() {
  const perPage = 11;
  const { data: users, isLoading, isError } = useGitHubApi('/users', 100); // Fetch a larger number initially: 100
  
  //Calculate pages
  const totalPages = Math.ceil(users?.length / perPage) || 1;
  const [currentPage, setCurrentPage] = React.useState(1);

  //Add Paginations to the list
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  //Check error

  if (isLoading) return <LoadingSpinner/>;
  if (isError) return <div>Error loading data</div>;

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const usersToShow = users.slice(startIndex, endIndex);
  return (
    <div className={styles.user}>
      
      <div className={styles.allUser}>
      {usersToShow.map((user: any) => (
          <Link key={user.login} href={`/user/${user.login}`}>
            <div className={styles.listUser}>
              <ListCard
                avatarUrl={user.avatar_url}
                
                username={user.login}
              />
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.pagination}>
      <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span className={styles.pageNumber}>{currentPage}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

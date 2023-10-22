// pages/api/gitAPI.ts
import useSWR from 'swr';
import axios from 'axios';

//I choose axios to make HTML requests or fetching Data from APIs.
//It simplifies HTTP requests with a clean API, enabling straightforward asynchronous code with Promises.
//supports interceptors for global request/response handling, automatic JSON parsing, 
//request cancelation, and versatile usage in both client-side and server-side applications, 
//offering a comprehensive and user-friendly solution for making HTTP requests.

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useGitHubApi = (path: string, perPage: number = 100, page: number = 1) => {
  const baseUrl = 'https://api.github.com'; // GitHub API base URL
  const url = `${baseUrl}${path}?per_page=${perPage}&page=${page}`;
  
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

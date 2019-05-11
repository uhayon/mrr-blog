import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const searchPosts = async () => {
  return await axiosClient.get('/posts');
}

export const searchUser = async id => {
  return await axiosClient.get(`/users/${id}`);
}
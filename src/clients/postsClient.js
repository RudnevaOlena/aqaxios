import { apiClient } from '../utils/axiosInstance.js';

export const getAllPosts = () => apiClient.get('/posts');

export const getPostById = (id) => apiClient.get(`/posts/${id}`);

export const createPost = (body) => apiClient.post('/posts', body);

export const updatePost = (id, body) => apiClient.put(`/posts/${id}`, body);

export const patchPost = (id, body) => apiClient.patch(`/posts/${id}`, body);

export const deletePost = (id) => apiClient.delete(`/posts/${id}`);
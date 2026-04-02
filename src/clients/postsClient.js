const { apiClient } = require('../utils/axiosInstance');

const getAllPosts = () => apiClient.get('/posts');
const getPostById = (id) => apiClient.get(`/posts/${id}`);
const createPost = (body) => apiClient.post('/posts', body)
const updatePost = (id, body) => apiClient.put(`/posts/${id}`, body);
const patchPost = (id, body) => apiClient.patch(`/posts/${id}`, body);
const deletePost = (id) => apiClient.delete(`/posts/${id}`);

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  patchPost,
  deletePost
};
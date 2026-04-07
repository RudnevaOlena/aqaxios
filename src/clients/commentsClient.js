import { apiClient } from '../utils/axiosInstance.js';

export const getCommentsByPost = (postId) =>
apiClient.get(`/posts/${postId}/comments`);

export const getCommentsByQuery = (postId) =>
apiClient.get(`/comments?postId=${postId}`);
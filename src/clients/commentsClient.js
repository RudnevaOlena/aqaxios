const {apiClient} = require('../utils/axiosInstance');

const getCommentsByPost = (postId) =>
apiClient.get(`/posts/${postId}/comments`);

const getCommentsByQuery = (postId) =>
apiClient.get(`/comments?postId=${postId}`);

module.exports = {
getCommentsByPost,
getCommentsByQuery
};

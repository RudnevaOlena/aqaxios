const { getCommentsByPost, getCommentsByQuery } = require('../src/clients/commentsClient');
describe('Comments API', () => {
    test('GET .../posts/1/comments returns all comments for post with id 1',
        async () => {
        const id = 1;    
        const response = await getCommentsByPost(id);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);

        //check a structure of the first item of response
        const comment = response.data[0];
        expect(comment).toHaveProperty('postId');
        expect(comment).toHaveProperty('id');
        expect(comment).toHaveProperty('name');
        expect(comment).toHaveProperty('email');
        expect(comment).toHaveProperty('body');

        expect(comment.postId).toBe(1);
    });

    test('GET .../comments?postId=1 returns all comments contains postId = 1',
        async () => {
        const id = 1;    
        const response = await getCommentsByQuery(id);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);

        //check a structure of the first item of response
        const comment = response.data[0];
        expect(comment).toHaveProperty('postId', 1);
        expect(comment).toHaveProperty('id');
        expect(comment).toHaveProperty('name');
        expect(comment).toHaveProperty('email');
        expect(comment).toHaveProperty('body');
    });
});
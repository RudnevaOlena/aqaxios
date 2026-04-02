const { getAllPosts, getPostById, createPost, updatePost, patchPost, deletePost } = require('../src/clients/postsClient');
describe('Posts API', () => {
    const validPostBody = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    const patchBody = {
        title: 'foo'
    };

    const invalidPostBodyType = {
        title: 123,
        body: 'bar',
        userId: 'a'

    };
    const invalidPostBodyMissedField = {
        body: 'bar',
        userId: 'a'
    };

    test('GET .../posts should return all posts', async () => {
        const response = await getAllPosts();
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);

        //check a structure of the first item of response
        const post = response.data[0];
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('userId');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
    });

    test('GET .../posts/id should return the post with id', async () => {
        const response = await getPostById(1);
        expect(response.status).toBe(200);

        //check a structure of the first item of response
        const post = response.data;
        expect(post).toHaveProperty('id', 1);
        expect(post).toHaveProperty('userId', 1);
        expect(post).toHaveProperty('title');

        //check types for response fields/propertie
        expect(typeof post.id).toBe('number');
        expect(typeof post.userId).toBe('number');
        expect(typeof post.title).toBe('string');
        expect(typeof post.body).toBe('string');

        //check that properties contain specified data-string
        expect(post.title).toContain('sunt');
        expect(post.body).toContain('quia');
    });

    test('POST .../posts should create the new post', async () => {
        const response = await createPost(validPostBody);
        expect(response.status).toBe(201);

        const post = response.data;
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
        expect(post).toHaveProperty('userId');

        expect(post.title).toBe(validPostBody.title);
        expect(post.body).toBe(validPostBody.body);
        expect(post.userId).toBe(validPostBody.userId);
    });

    test('PUT .../posts/id should update the post', async () => {
        const id = 1;
        const response = await updatePost(id, validPostBody);
        expect(response.status).toBe(200);

        const post = response.data;
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
        expect(post).toHaveProperty('userId');

        expect(post.title).toBe(validPostBody.title);
        expect(post.body).toBe(validPostBody.body);
        expect(post.userId).toBe(validPostBody.userId);
    });

    test('PATCH .../posts/id should update specified fields of post', async () => {
        const id = 1;
        const response = await patchPost(id, patchBody);
        expect(response.status).toBe(200);

        const post = response.data;
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
        expect(post).toHaveProperty('userId');

        expect(post.title).toBe(patchBody.title);
    });

    test('DELETE .../posts/id should delete the post', async () => {
        const id = 1;
        const response = await deletePost(id);
        expect(response.status).toBe(200);

        const post = response.data;
        expect(post).toEqual({});
    });

    // //negative tests failed because JSONPlaceholder doesn't validate body
    // test('POST .../posts should return correct status code for invalid body',
    //     async () => {
    //     const response = await createPost(invalidPostBodyType);
    //     expect(response.status).toBe(400);
    // });

    // test('POST .../posts should return correct status code for invalid body',
    //     async () => {
    //     const response = await createPost(invalidPostBodyMissedField);
    //     expect(response.status).toBe(400);
    // });

});


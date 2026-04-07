import { faker } from '@faker-js/faker';

export const createPostBody = (overrides = {}) => ({
    title: faker.lorem.words(3),
    body: faker.lorem.sentence(),
    userId: faker.number.int({ min: 1, max: 10 }),
    ...overrides
});

export const createPatchBody = (overrides = {}) => ({
    title: faker.lorem.words(2),
    ...overrides
});

export const invalidPostBodyType = {
    title: 123,
    body: 'bar',
    userId: 'a'

};
export const invalidPostBodyMissedField = {
    body: 'bar',
    userId: 'a'
};


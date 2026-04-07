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
module.exports = {
    validPostBody,
    patchBody,
    invalidPostBodyType,
    invalidPostBodyMissedField
};

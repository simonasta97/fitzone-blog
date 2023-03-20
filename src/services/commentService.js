import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const create = (postId, comment) =>
    request.post(baseUrl, { postId, text: comment });

export const getByPostId = (postId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`postId="${postId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
}
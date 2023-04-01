import { DEL, GET, POST } from "./requester";

export function getAll(offset) {
    const pageSize = 8;
    const sortQuery = encodeURI(`?sortBy=_createdOn desc`);
    const query = encodeURI(`offset=${offset}&pageSize=${pageSize}`);
    return GET(`/data/antiques${sortQuery}&${query}`);
};
export function deleteOne(id, token) {
    return DEL(`/data/antiques/${id}`, '', token)
};
export function getBySearch(query) {
    const searchQuery = encodeURI(`?where=antiqueName LIKE "${query}"`);
    return GET(`/data/antiques${searchQuery}`);
};
export function getCollectionSize() {
    return GET(`/data/antiques?count`)
};
export function getOne(id) {
    return GET(`/data/antiques/${id}`);
};
export function postCreate(body, token) {
    return POST('/data/antiques', body, token);
};
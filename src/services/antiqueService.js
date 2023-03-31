import { DEL, GET, POST } from "./requester";

export function getAll(offset) {
    const pageSize = 8;
    const query = encodeURI(`offset=${offset}&pageSize=${pageSize}`);
    const sortQuery = encodeURI(`?sortBy=_createdOn desc`);
    return GET(`/data/antiques${sortQuery}&${query}`);
};
export function deleteOne(id, token) {
    return DEL(`/data/antiques/${id}`, '', token)
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
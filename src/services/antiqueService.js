import { DEL, GET, POST, PUT} from "./requester";

const pageSize = 8;
export function getAll(offset) {
    const sortQuery = encodeURI(`?sortBy=_createdOn desc`);
    const paginationQuary = encodeURI(`offset=${offset}&pageSize=${pageSize}`);
    return GET(`/data/antiques${sortQuery}&${paginationQuary}`);
};
export function deleteOne(id, token) {
    return DEL(`/data/antiques/${id}`, '', token)
};
export async function getBySearch(query, offset) {
    const sortQuery = encodeURI(`?sortBy=_createdOn desc`);
    const searchQuery = encodeURI(`where=antiqueName LIKE "${query}"`);
    const paginationQuery = encodeURI(`offset=${offset}&pageSize=${pageSize}`);
    return GET(`/data/antiques${sortQuery}&${searchQuery}&${paginationQuery}`)
};
export function getCollectionSize(query) {
    if(query) {
        let searchQuery = encodeURI(`where=antiqueName LIKE "${query}"`)
        return GET(`/data/antiques?${searchQuery}&count`)
    }
    return GET(`/data/antiques?count`)
};
export function getOne(id) {
    return GET(`/data/antiques/${id}`);
};
export function putEdit(id, body, token) {
    return PUT(`/data/antiques/${id}`, body, token)
}
export function postCreate(body, token) {
    return POST('/data/antiques', body, token);
};
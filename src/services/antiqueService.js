import { GET, POST } from "./requester";

export function getAll() {
    return GET('/data/antiques');
};
export function getOne(id) {
    return GET(`/data/antiques/${id}`);
};
export function postCreate(body, token) {
    return POST('/data/antiques', body, token);
};
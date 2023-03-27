import { GET } from "./requester";

export function getAll() {
    return GET('/data/antiques');
};
export function getOne(id) {
    return GET(`/data/antiques/${id}`);
};
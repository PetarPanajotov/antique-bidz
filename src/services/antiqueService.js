import { GET } from "./requester";

export function getAll() {
    return GET('/data/antiques');
};

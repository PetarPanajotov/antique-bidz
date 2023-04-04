import { POST, GET } from "./requester";

export function getAllBids(id) {
    const sortQuery = encodeURIComponent(`_createdOn desc`)
    if (id) {
        const searchQuery = encodeURIComponent(`bidId="${id}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);
        return GET(`/data/bids?where=${searchQuery}&load=${relationQuery}&sortBy=${sortQuery}`);
    }
    return GET(`/data/bids?sortBy=${sortQuery}`)
};
export function postCreateBid(id, body, token) {
    return POST('/data/bids', { bidId: id, bid: body }, token);
};
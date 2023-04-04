export function addBidsToAntiques(antiques, bids) {
    return antiques.map(antique => {
        const antiqueBids = bids.filter(bid => bid.bidId === antique._id);
        if (antiqueBids.length > 0) {
            return ({ ...antique, bidDetails: { ...antique.bidDetails, startBid: antiqueBids[0].bid } })
        } else {
            return antique;
        };
    });
};
export function updateCurrentHighestBid(id, newHigh, antiqueData, setAntiqueData) {
    const updatedAntiques = antiqueData.map((antique) => {
        if (antique._id === id) {
            return {
                ...antique,
                bidDetails: { ...antique.bidDetails, startBid: newHigh },
            };
        }
        return antique;
    });
    return setAntiqueData(updatedAntiques);
};
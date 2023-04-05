import { createContext, useState, useEffect } from "react";
import { getAll, getBySearch, getCollectionSize, putEdit, postCreate } from "../services/antiqueService";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllBids } from "../services/bidService";
import { addBidsToAntiques, updateCurrentHighestBid } from "../utils/antiqueContextUtil";
import { formatDuration } from "../utils/dateUtil";

export const AntiqueContext = createContext();

export function AntiqueProvider({ children }) {
    const [antiqueData, setAntiqueData] = useState([]);
    const [collectionCount, setCollectionCount] = useState(0);
    const [isSearchUndefined, setIsSearchUndefined] = useState(true);
    const [search, setSearch] = useState('');
    const [pagination, setPagination] = useState({ offset: 0, page: 1 });
    const navigate = useNavigate();
    const location = useLocation();

    const resetPaginationState = () => {
        setPagination(state => ({ ...state, offset: 0, page: 1 }));
    };

    useEffect(() => {
        if (location.pathname !== '/catalog') {
            setIsSearchUndefined(true);
            resetPaginationState();
        }
    }, [location.pathname]);

    useEffect(() => {
        if (isSearchUndefined) {
            Promise.all([getAll(pagination.offset), getCollectionSize(), getAllBids()])
                .then(response => {
                    const [data, count, bidsData] = response;
                    const antiques = Object.values(data);
                    const bids = Object.values(bidsData);
                    setAntiqueData(addBidsToAntiques(antiques, bids));
                    setCollectionCount(count);
                });
        } else {
            Promise.all([getBySearch(search, pagination.offset), getAllBids()])
            .then(response => {
                const [{ data, count }, bidsData] = response;
                const antiques = Object.values(data);
                const bids = Object.values(bidsData);
                setAntiqueData(addBidsToAntiques(antiques, bids));
                setCollectionCount(count);
            });
        };
    }, [pagination.offset, isSearchUndefined, search]);

    const onDeleteAntique = (antiqueId) => {
        setAntiqueData(state => state.filter(antique => antique._id !== antiqueId));
        setCollectionCount(state => state--);
    };
    
    const handleUpdateCurrentHighestBid = (id, newHigh) => {
        updateCurrentHighestBid(id, newHigh, antiqueData, setAntiqueData);
    };

    const onSearchSubmit = async (e, searchValue) => {
        e.preventDefault();
        if (!searchValue) {
            return;
        };
        resetPaginationState();
        setIsSearchUndefined(false);
        setSearch(searchValue);
    };

    const onCreateAntiqueSubmit = async (e, formValues, token) => {
        e.preventDefault();
        const duration = formValues.bidDetails.endDate
        formValues.bidDetails.endDate = formatDuration(duration)
        const data = await postCreate(formValues, token);
        setAntiqueData(state => {
            const newState = [...state];
            newState.unshift(data);
            if (collectionCount > 8) {
                newState.pop();
            }
            return newState;
        });
        //fix this
        setCollectionCount(state => state++);
        navigate('/catalogue');
    };
    const onEditAntiqueSubmit = async (e, antiqueId, data, token) => {
        e.preventDefault();
        const editedValues = await putEdit(antiqueId, data, token);
        setAntiqueData(state => state.map(x => x._id === antiqueId ? editedValues : x));
        navigate(`/catalogue/details/${antiqueId}`);
    };

    const ctx = {
        onDeleteAntique,
        antiqueData,
        setAntiqueData,
        collectionCount,
        setCollectionCount,
        pagination,
        handleUpdateCurrentHighestBid,
        setPagination,
        setIsSearchUndefined,
        onSearchSubmit,
        onCreateAntiqueSubmit,
        onEditAntiqueSubmit
    };

    return (
        <AntiqueContext.Provider value={ctx}>
            {children}
        </AntiqueContext.Provider>
    );
};
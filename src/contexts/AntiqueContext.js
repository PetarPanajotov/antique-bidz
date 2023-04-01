import { createContext, useState, useEffect } from "react";
import { getAll, getBySearch, getCollectionSize } from "../services/antiqueService";
import { useLocation } from "react-router-dom";

export const AntiqueContext = createContext();

export function AntiqueProvider({ children }) {
    const [antiqueData, setAntiqueData] = useState([]);
    const [collectionCount, setCollectionCount] = useState(0);
    const [isSearchUndefined, setIsSearchUndefined] = useState(true);
    const [search, setSearch] = useState('');
    const [pagination, setPagination] = useState({ offset: 0, page: 1 });
    

    const location = useLocation();

    const onSearchSubmit = async (e, searchValue) => {
        e.preventDefault();
        if (!searchValue) {
            return;
        };
        setPagination(state => ({...state, offset: 0, page: 1 }))
        setIsSearchUndefined(false);
        setSearch(searchValue);
    };

    useEffect(() => {
        if (location.pathname !== 'catalog')
            setIsSearchUndefined(true);
            setPagination(state => ({...state, offset: 0, page: 1 }))
    }, [location.pathname]);

    useEffect(() => {
        if (isSearchUndefined) {
            Promise.all([getAll(pagination.offset), getCollectionSize()])
            .then(response => {
                const [data, count] = response
                setAntiqueData(Object.values(data));
                setCollectionCount(count)
            })
        } else {
            getBySearch(search, pagination.offset).then(response => {
                const {data, count} = response;
                setAntiqueData(Object.values(data));
                setCollectionCount(count);
            })
        }
    }, [pagination.offset, isSearchUndefined, search]);

    const onDeleteAntique = (antiqueId) => {
        setAntiqueData(state => state.filter(antique => antique._id !== antiqueId));
        setCollectionCount(state => state--);
    };

    const ctx = {
        onDeleteAntique,
        antiqueData,
        setAntiqueData,
        collectionCount,
        setCollectionCount,
        setPagination,
        pagination,
        setIsSearchUndefined,
        onSearchSubmit,
    };

    return (
        <AntiqueContext.Provider value={ctx}>
            {children}
        </AntiqueContext.Provider>
    );
};
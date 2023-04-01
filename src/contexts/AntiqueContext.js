import { createContext, useState, useEffect } from "react";
import { getAll, getBySearch, getCollectionSize } from "../services/antiqueService";
import { useLocation } from "react-router-dom";

export const AntiqueContext = createContext();

export function AntiqueProvider({ children }) {
    const [antiqueData, setAntiqueData] = useState([]);
    const [collectionCount, setCollectionCount] = useState(0);
    const [isSearchUndefined, setIsSearchUndefined] = useState(true);
    const [query, setQuery] = useState({ offset: 0 });

    const location = useLocation();

    const onSearchSubmit = async (e, searchValue) => {
        e.preventDefault();
        if (!searchValue) {
            return
        };
        const data = await getBySearch(searchValue);
        setAntiqueData(Object.values(data));
        setCollectionCount(antiqueData.length);
    };

    useEffect(() => {
        if (location.pathname !== 'catalog')
            setIsSearchUndefined(true);
            setQuery({ offset: 0 });
    }, [location.pathname]);

    useEffect(() => {
        if (isSearchUndefined) {
            getAll(query.offset).then(data => {
                setAntiqueData(Object.values(data));
            })
        }
    }, [query.offset, isSearchUndefined]);


    useEffect(() => {
        if (isSearchUndefined) {
            getCollectionSize().then(num => {
                setCollectionCount(num);
            });
        }
    }, [isSearchUndefined]);

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
        setQuery,
        setIsSearchUndefined,
        onSearchSubmit,
    };

    return (
        <AntiqueContext.Provider value={ctx}>
            {children}
        </AntiqueContext.Provider>
    );
};
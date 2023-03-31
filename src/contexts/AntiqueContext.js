import { createContext, useState, useEffect } from "react";
import { getAll, getCollectionSize } from "../services/antiqueService";
import { useLocation } from "react-router-dom";

export const AntiqueContext = createContext();

export function AntiqueProvider({ children }) {
    const [antiqueData, setAntiqueData] = useState([]);
    const [collectionCount, setCollectionCount] = useState(0);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState({ offset: 0 });
    const location = useLocation();
     
    useEffect(() => {
        if (location.pathname !== 'catalog')
            setQuery({ offset: 0 });
    }, [location.pathname]);

    useEffect(() => {
        getAll(query.offset).then(data => {
            setAntiqueData(Object.values(data));
        })
    }, [query.offset]);
    

    useEffect(() => {
        getCollectionSize().then(num => {
            setCollectionCount(num);
        });
    }, []);

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
        page,
        setPage,
        setQuery
    };

    return (
        <AntiqueContext.Provider value={ctx}>
            {children}
        </AntiqueContext.Provider>
    );
};
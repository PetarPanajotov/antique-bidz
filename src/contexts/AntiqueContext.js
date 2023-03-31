import { createContext, useState, useEffect } from "react";
import { getAll, getCollectionSize } from "../services/antiqueService";

export const AntiqueContext = createContext();

export function AntiqueProvider({ children }) {
    const [antiqueData, setAntiqueData] = useState([]);
    const [collectionCount, setCollectionCount] = useState(0);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState({offset: 0});

    useEffect(() => {
        getAll(query.offset).then(data => {
            setAntiqueData(Object.values(data));
        })
    }, [query.offset, query.pageSize]);

    useEffect(() => {
        getCollectionSize().then(num => {
            setCollectionCount(num);
        });
    },[]);

    const ctx = {
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
}
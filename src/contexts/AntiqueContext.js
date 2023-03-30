import { createContext, useState, useEffect } from "react";
import { getAll } from "../services/antiqueService";

export const AntiqueContext = createContext();

export function AntiqueProvider({ children }) {
    const [antiqueData, setAntiqueData] = useState([]);
    const [antiqueDataPagination, setAntiqueDataPagintation] = useState([])

    useEffect(() => {
        getAll().then(data =>
            setAntiqueData(Object.values(data)))
    }, []);
    useEffect(() => {
            setAntiqueDataPagintation(antiqueData.slice(0, 8))
    }, [antiqueData]);

    function getSome(from, to) {
        return setAntiqueDataPagintation(antiqueData.slice(from, to))
    };

    const ctx = {
        antiqueData,
        setAntiqueData,
        antiqueDataPagination,
        getSome
    };

    return (
        <AntiqueContext.Provider value={ctx}>
            {children}
        </AntiqueContext.Provider>
    );
}
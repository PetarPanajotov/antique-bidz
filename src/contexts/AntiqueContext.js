import { createContext, useState, useEffect } from "react";
import { getAll } from "../services/antiqueService";

export const AntiqueContext = createContext();

export function AntiqueProvider({ children }) {
    const [antiqueData, setAntiqueData] = useState([]);
    useEffect(() => {
        getAll().then(data =>
            setAntiqueData(Object.values(data)))
    }, []);

    const ctx = {
        antiqueData,
        setAntiqueData
    };

    return (
        <AntiqueContext.Provider value={ctx}>
            {children}
        </AntiqueContext.Provider>
    );
}
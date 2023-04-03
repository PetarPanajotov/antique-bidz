import { createContext, useState, useEffect } from "react";
import { getAll, getBySearch, getCollectionSize, putEdit, postCreate } from "../services/antiqueService";
import { useLocation, useNavigate } from "react-router-dom";

export const AntiqueContext = createContext();

export function AntiqueProvider({ children }) {
    const [antiqueData, setAntiqueData] = useState([]);
    const [collectionCount, setCollectionCount] = useState(0);
    const [isSearchUndefined, setIsSearchUndefined] = useState(true);
    const [search, setSearch] = useState('');
    const [pagination, setPagination] = useState({ offset: 0, page: 1 });
    const navigate = useNavigate();

    const resetPaginationState = () => {
        setPagination(state => ({ ...state, offset: 0, page: 1 }));
    };

    const location = useLocation();

    const onSearchSubmit = async (e, searchValue) => {
        e.preventDefault();
        if (!searchValue) {
            return;
        };
        resetPaginationState();
        setIsSearchUndefined(false);
        setSearch(searchValue);
    };

    useEffect(() => {
        if (location.pathname !== '/catalog') {
            setIsSearchUndefined(true);
            resetPaginationState();
        }
    }, [location.pathname]);

    useEffect(() => {
        if (isSearchUndefined) {
            Promise.all([getAll(pagination.offset), getCollectionSize()])
                .then(response => {
                    const [data, count] = response;
                    setAntiqueData(Object.values(data));
                    setCollectionCount(count);
                });
        } else {
            getBySearch(search, pagination.offset).then(response => {
                const { data, count } = response;
                setAntiqueData(Object.values(data));
                setCollectionCount(count);
            });
        }
    }, [pagination.offset, isSearchUndefined, search]);

    const onDeleteAntique = (antiqueId) => {
        setAntiqueData(state => state.filter(antique => antique._id !== antiqueId));
        setCollectionCount(state => state--);
    };

    const onCreateAntiqueSubmit = async (e, formValues, token) => {
        e.preventDefault();
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
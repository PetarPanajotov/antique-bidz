import { createContext, useState, useEffect } from "react";
import { getAll, getBySearch, getCollectionSize, putEdit, postCreate, deleteOne } from "../services/antiqueService";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllBids } from "../services/bidService";
import { addBidsToAntiques, updateCurrentHighestBid } from "../utils/antiqueContextUtil";
import { formatDuration } from "../utils/dateUtil";
import { validateAntique } from "../utils/validator";

export const AntiqueContext = createContext();

export function AntiqueProvider({ children }) {
    const [antiqueData, setAntiqueData] = useState([]);
    const [collectionCount, setCollectionCount] = useState(0);
    const [errors, setErrors] = useState({});
    const [search, setSearch] = useState('');
    const [pagination, setPagination] = useState({ offset: 0, page: 1 });
    const [loading, setLoading] = useState(true);
    const [isAntiqueDataUpdated, setisAntiqueDataUpdated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const resetPaginationState = () => {
        setPagination(state => ({ ...state, offset: 0, page: 1 }));
    };

    //reset pagination, search, errors upon location change.
    useEffect(() => {
        setSearch('')
        resetPaginationState();
        setisAntiqueDataUpdated(false)
        setErrors({})
    }, [location.pathname]);

    useEffect(() => {
        setLoading(true)
        let promise;
        if (!search) {
            promise = Promise.all([getAll(pagination.offset), getCollectionSize(), getAllBids()]);
        } else {
            promise = Promise.all([getBySearch(search, pagination.offset), getCollectionSize(search), getAllBids()]);
        }
        promise
            .then(response => {
                const [data, count, bidsData] = response;
                const antiques = Object.values(data);
                const bids = Object.values(bidsData);
                setAntiqueData(addBidsToAntiques(antiques, bids));
                setCollectionCount(count);
                setLoading(false);
            })
            .catch(error => console.log(error.message));
    }, [pagination.offset, search, isAntiqueDataUpdated]);


    const onBlurErrorMessage = (e) => {
        const errorMessage = validateAntique(e.target);
        setErrors(state => ({ ...state, [e.target.name]: errorMessage }))
    };

    //Upon bid, updates the price to be the highest one
    const handleUpdateCurrentHighestBid = (id, newHigh) => {
        updateCurrentHighestBid(id, newHigh, antiqueData, setAntiqueData);
    };

    function handlePaginationChange(e, value) {
        return setPagination(state => ({ ...state, offset: (value - 1) * 8, page: value }));
    };

    async function onDeleteSubmit(e, antiqueId, token) {
        try {
            await deleteOne(antiqueId, token);
        } catch (err) {
            console.log(err.message)
        }
        setisAntiqueDataUpdated(true);
        navigate('/catalogue');
    };

    const onSearchSubmit = async (e, searchValue) => {
        e.preventDefault();
        if (!searchValue) {
            return;
        };
        if (searchValue === search) {
            return;
        }
        resetPaginationState();
        setLoading(true);
        setSearch(searchValue);
    };

    const onCreateAntiqueSubmit = async (e, formValues, token, showNotification) => {
        e.preventDefault();
        for (const value of Object.values(errors)) {
            if (value) {
                return showNotification(value)
            };
        };
        if (!formValues.subCategory || !formValues.category || !formValues.bidDetails.endDate) {
            return showNotification('Missing fields. Please try again.');
        };
        try {
            setLoading(true);
            const duration = formValues.bidDetails.endDate
            formValues.bidDetails.endDate = formatDuration(duration)
            await postCreate(formValues, token);
        } catch (err) {
            return showNotification(err.message);
        }
        setisAntiqueDataUpdated(true)
        navigate('/catalogue');
    };

    const onEditAntiqueSubmit = async (e, antiqueId, formValues, token, showNotification, initialDate) => {
        e.preventDefault();
        for (const value of Object.values(errors)) {
            if (value) {
                return showNotification(value);
            };
        };
        if (!formValues.subCategory || !formValues.category || !formValues.bidDetails.endDate) {
            return showNotification('Missing fields. Please try again.');
        };
        try {
            setLoading(true);
            //get the duration in hours, adding it to the old one in order to extend the bid duration
            formValues.bidDetails.endDate = formatDuration(formValues.bidDetails.endDate, initialDate);
            const editedValues = await putEdit(antiqueId, formValues, token);
            setAntiqueData(state => state.map(x => x._id === antiqueId ? editedValues : x));
            navigate(`/catalogue/details/${antiqueId}`);
        } catch (err) {
            showNotification(err.message);
        };
    };

    const findAntiqueById = (antiqueId) => {
        return antiqueData.find(antique => antique._id === antiqueId);
    };

    const ctx = {
        antiqueData,
        collectionCount,
        pagination,
        errors,
        loading,
        setLoading,
        setSearch,
        findAntiqueById,
        handlePaginationChange,
        handleUpdateCurrentHighestBid,
        onDeleteSubmit,
        onSearchSubmit,
        onCreateAntiqueSubmit,
        onEditAntiqueSubmit,
        onBlurErrorMessage,
    };

    return (
        <AntiqueContext.Provider value={ctx}>
            {children}
        </AntiqueContext.Provider>
    );
};
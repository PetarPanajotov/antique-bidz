import { useState } from "react";

export function useForm(initialValues) {
    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) => {
        //this is specific case for nested object upon CreateBid.
        if (e.target.name ===  'startBid' || e.target.name === 'endDate') {
            return setFormValues(state => ({ ...state, bidDetails: { ...state.bidDetails, [e.target.name]: e.target.value } }))
        };
        // //This is specific case for remove the sub category, when category is changed;
        // if(e.target.name === 'category') {
        //     return setFormValues(state => ({ ...state, subCategory: '' }))
        // };
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const changeValues = (newValues) => {
        return setFormValues(newValues);
    };
    
    return {
        formValues,
        onChange,
        changeValues
    };
}; 
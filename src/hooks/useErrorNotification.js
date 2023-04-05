import { useState } from "react";

export function useErrorNotification(initialError) {
    const [errorNotification, setErrorNotification] = useState(initialError);

    const showNotification = (errormsg) => {
        setErrorNotification(errormsg)
        setTimeout(() => {
            setErrorNotification('');
        }, 5000);
    }
    return {errorNotification, showNotification};
};
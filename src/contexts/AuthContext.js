import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/authService";
// import { logout } from "../services/authService";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    const user = auth.accessToken? true: false;

    const onSubmitLogin = async (e, formValues, resetFormValues, showNotification) => {
        e.preventDefault();
        try {
            const data = await login({ formValues })
            setAuth(data);
            navigate('/');
        } catch (err) {
            showNotification(err.message)
            resetFormValues();
        };
    };

    const onSubmitRegister = async (e, formValues, resetFormValues, showNotification) => {
        e.preventDefault();
        try {
            const data = await register({ formValues });
            setAuth(data);
            navigate('/')
        } catch (err) {
            showNotification(err.message)
            resetFormValues()
        };
    };

    const onLogout = async() => {
        //because of react strict mode, this is removed for now in development mode.
        // await logout(auth.accessToken);
        setAuth({});
        navigate('/', { replace: true });
    };

    const ctx = {
        auth,
        setAuth,
        user,
        onLogout,
        onSubmitLogin,
        onSubmitRegister,
    };

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    );
};
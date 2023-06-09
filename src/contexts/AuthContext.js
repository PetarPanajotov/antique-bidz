import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { logout } from "../services/authService";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const onSubmitLogin = async (e, formValues, resetFormValues, showNotification) => {
        e.preventDefault();
        if (!formValues.email || !formValues.password) {
            return showNotification('Missing fields!')
        };
        try {
            const data = await login({ formValues })
            setAuth(data);
            navigate('/');
        } catch (err) {
            showNotification(err.message)
            resetFormValues();
        };
    };

    const onSubmitRegister = async (e, formValues, resetFormValues, showNotification, errors) => {
        e.preventDefault();
        for (const value of Object.values(errors)) {
            if (value) {
                return showNotification(value)
            };
        };
        try {
            const data = await register({ formValues });
            setAuth(data);
            navigate('/')
        } catch (err) {
            showNotification(err.message)
            resetFormValues()
        };
    };

    const onLogout = async () => {
        try {
            await logout(auth.accessToken);
        } catch (error) {
            setAuth('auth', {})
            console.log(error)
        }
        setAuth({});
        navigate('/', { replace: true });
    };

    const ctx = {
        auth,
        setAuth,
        user: !!auth.accessToken,
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
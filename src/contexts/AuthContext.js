import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const navigate = useNavigate();

    const [auth, setAuth] = useState({});

    const user = auth.accessToken? true: false;

    const onLogout = () => {
        logout(auth.accessToken);
        setAuth({});
        navigate('/');
    };

    const ctx = {
        auth,
        setAuth,
        user,
        onLogout
    };

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    );
};
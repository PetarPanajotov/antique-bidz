import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const navigate = useNavigate();

    const [auth, setAuth] = useState({});

    const user = auth.accessToken? true: false;

    const logout = () => {
        setAuth({});
        navigate('/')
    };

    const ctx = {
        auth,
        setAuth,
        user,
        logout
    };

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    );
};
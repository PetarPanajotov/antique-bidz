import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export function UserRouteGuard() {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to='/login' />;
    };

    return <Outlet />
};
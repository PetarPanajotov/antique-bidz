import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export function GuestRouteGuard() {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to='/login' />
    };

    return <Outlet />
};
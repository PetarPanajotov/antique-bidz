import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet, useParams} from "react-router-dom";
import { AntiqueContext } from "../../contexts/AntiqueContext";

export function OwnerRouteGuard() {
    const { auth } = useContext(AuthContext);
    const { findAntiqueById } = useContext(AntiqueContext);
    const { id } = useParams();

    const currentAntique = findAntiqueById(id);

    if (currentAntique && currentAntique._ownerId !== auth._id) {
        return <Navigate to={`/catalogue/details/${id}`} replace />
    };

    return <Outlet />
};
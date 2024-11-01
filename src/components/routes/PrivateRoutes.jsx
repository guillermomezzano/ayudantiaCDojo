import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContex";

export const PrivateRoutes = () => {
    const { state } = useContext(AuthContext)

    // si no hay un usuario autenticado manda al login
    if (!state.isAuthenticated) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}

export default PrivateRoutes
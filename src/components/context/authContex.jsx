import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        user: JSON.parse(localStorage.getItem("user")) || null,
        isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify((state.user)))
        localStorage.setItem("isAuthenticated", state.isAuthenticated.toString())
    }, [state])

    return (
        <AuthContext.Provider value={{ state, setState }}>
            {children}
        </AuthContext.Provider>
    )

}


export default AuthProvider
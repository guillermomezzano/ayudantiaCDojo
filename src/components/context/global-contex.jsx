import { createContext, useState } from "react";

//creo un contexto llamado GlobalContex es le objeto que se debe usar para acceder al valor compartido (values)
export const GlobalContex = createContext();

//componente que provee el contexto para los demas componentes hijos esto propociona el valor del contexto
export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    id: "",
    login: false,
  });

  const [negocio, setNegocio] = useState({
    name: "",
    id: "",
    dueño: ""
  });

  const currentUser = {
    user,
    setUser
  }

  const currentNegocio = {
    negocio,
    setNegocio
  }


  return (
    //provee el contexto con el valor actual de user
    <GlobalContex.Provider value={{ currentUser, currentNegocio }}>
      {children}
    </GlobalContex.Provider>
  );
};

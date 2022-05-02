import { useEffect, useReducer } from "react";
import { authReducer } from "./auth/authReducer";
import { authContext } from "./auth/authContext";
import { AppRouters } from "./routers/AppRouters";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroresApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {

    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
    
  }, [user]);

  return (
    <authContext.Provider value={{ user, dispatch }}>
      <AppRouters />
    </authContext.Provider>
  );
};

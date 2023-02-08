import { AuthContext } from "contexts/auth.context";
import { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined)
    throw Error("useAuth must be used within AuthProvider");
  return context;
};

export { useAuth };

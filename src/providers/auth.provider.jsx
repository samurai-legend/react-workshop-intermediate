import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { supabase } from "../lib/supabase";

const initialState = { session: null, user: null };

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  const setSession = async () => {
    const { data } = await supabase.auth.getSession();

    if (data.session) {
      // Why we spread the data here?
      setState({ ...{ session: data.session, user: data.session.user } });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    // setting session when component is mounted
    setSession();
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      switch (_event) {
        case "SIGNED_IN":
          setState({ ...{ session: session, user: session.user } });
          break;
        case "SIGNED_OUT":
          setState({ ...initialState });
          break;
        default:
          setState({ ...{ session: session, user: session.user } });
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

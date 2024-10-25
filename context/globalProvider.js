import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setisLoading(true);
          setUser(res);
        } else {
            setIsLogged(false);
          setUser(null);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);
  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, setIsLogged, user, setUser, isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
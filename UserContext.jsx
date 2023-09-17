import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
const url = "https://64fa6148cb9c00518f79e584.mockapi.io/api/products";
export const UserContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  const [isHambur, setIsHambur] = useState(false);
  const [isHamburCoffee, setIsHamburCoffee] = useState(true);
  const [isHamburCoffeeMaker, setIsHamburCoffeeMaker] = useState(true);
  
  function resetHambur() {
    return (
      setIsHamburCoffee(true),
      setIsHamburCoffee(true),
      setIsHamburCoffeeMaker(true)
    );
  }
  const contextValue = {
    apiData,
    isHambur,
    setIsHambur,
    isHamburCoffee,
    setIsHamburCoffee,
    resetHambur,
    isHamburCoffeeMaker,
    setIsHamburCoffeeMaker,
   
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

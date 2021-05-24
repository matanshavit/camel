import { useState } from "react";

import CoffeeDrinksContext from ".";
import initialCoffeeDrinks from "../../data/initialCoffeeDrinks";
import type CoffeeDrink from "../../types/CoffeeDrink";

interface CoffeeDrinksContextProviderProps {
  children: React.ReactNode;
}
const CoffeeDrinksContextProvider = ({
  children,
}: CoffeeDrinksContextProviderProps) => {
  const [coffeeDrinks] = useState(initialCoffeeDrinks);

  const addCoffeeDrink = (coffeeDrink: CoffeeDrink) => {};
  const editCoffeeDrink = (coffeeDrink: CoffeeDrink) => {};

  return (
    <CoffeeDrinksContext.Provider
      value={{
        coffeeDrinks,
        addCoffeeDrink,
        editCoffeeDrink,
      }}
    >
      {children}
    </CoffeeDrinksContext.Provider>
  );
};

export default CoffeeDrinksContextProvider;

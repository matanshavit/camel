import { useState } from "react";

import CoffeeDrinksContext from ".";
import initialCoffeeDrinks from "../../data/initialCoffeeDrinks";
import type CoffeeDrink from "../../types/CoffeeDrink";
import type CoffeeDrinkParameters from "../../types/CoffeeDrinkParameters";

interface CoffeeDrinksContextProviderProps {
  children: React.ReactNode;
}
const CoffeeDrinksContextProvider = ({
  children,
}: CoffeeDrinksContextProviderProps) => {
  const [coffeeDrinks, setCoffeeDrinks] = useState(initialCoffeeDrinks);

  const addCoffeeDrink = (coffeeDrink: CoffeeDrinkParameters) => {
    const id = coffeeDrinks[coffeeDrinks.length - 1].id + 1;
    setCoffeeDrinks((initial) => [...initial, { id, ...coffeeDrink }]);
  };
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

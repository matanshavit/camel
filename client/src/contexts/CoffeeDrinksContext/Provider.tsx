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
    const id = (
      parseInt(coffeeDrinks[coffeeDrinks.length - 1].id) + 1
    ).toString();
    setCoffeeDrinks((initial) => [...initial, { id, ...coffeeDrink }]);
  };
  const editCoffeeDrink = (coffeeDrink: CoffeeDrink) => {
    const index = coffeeDrinks.findIndex(
      (initialDrink) => initialDrink.id === coffeeDrink.id
    );

    setCoffeeDrinks((initial) => [
      ...initial.slice(0, index),
      coffeeDrink,
      ...initial.slice(index + 1),
    ]);
  };

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

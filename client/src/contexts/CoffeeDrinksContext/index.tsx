import { createContext } from "react";

import type CoffeeDrink from "../../types/CoffeeDrink";
import type CoffeeDrinkParameters from "../../types/CoffeeDrinkParameters";

interface CoffeeDrinksContextProps {
  coffeeDrinks: CoffeeDrink[];
  addCoffeeDrink: (coffeeDrink: CoffeeDrinkParameters) => void;
  editCoffeeDrink: (coffeeDrink: CoffeeDrink) => void;
}

const CoffeeDrinksContext = createContext<CoffeeDrinksContextProps>({
  coffeeDrinks: [],
  addCoffeeDrink: () => {},
  editCoffeeDrink: () => {},
});

export default CoffeeDrinksContext;

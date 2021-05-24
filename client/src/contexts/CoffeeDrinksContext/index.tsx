import { createContext } from "react";

import type CoffeeDrink from "../../types/CoffeeDrink";

interface CoffeeDrinksContextProps {
  coffeeDrinks: CoffeeDrink[];
  addCoffeeDrink: (coffeeDrink: CoffeeDrink) => void;
  editCoffeeDrink: (coffeeDrink: CoffeeDrink) => void;
}

const CoffeeDrinksContext = createContext<CoffeeDrinksContextProps>({
  coffeeDrinks: [],
  addCoffeeDrink: () => {},
  editCoffeeDrink: () => {},
});

export default CoffeeDrinksContext;

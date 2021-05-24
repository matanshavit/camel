import { TextField, Input } from "@material-ui/core";

import type CoffeeDrink from "../types/CoffeeDrink";

interface CoffeeDrinkFormProps {
  initialData?: CoffeeDrink;
}

const CoffeeDrinkForm = ({ initialData }: CoffeeDrinkFormProps) => {
  return (
    <>
      <TextField
        id="name"
        name="name"
        label="Name"
        type="text"
        fullWidth
        margin="dense"
        defaultValue={initialData?.name}
      />
      <TextField
        id="description"
        name="description"
        label="Description"
        type="text"
        fullWidth
        multiline
        margin="dense"
        defaultValue={initialData?.description}
      />
      {initialData?.id && (
        <Input id="id" name="id" type="hidden" defaultValue={initialData?.id} />
      )}
    </>
  );
};

export default CoffeeDrinkForm;

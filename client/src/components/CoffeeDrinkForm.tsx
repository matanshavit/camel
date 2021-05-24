import { TextField, Input } from "@material-ui/core";

import type CoffeeDrink from "../types/CoffeeDrink";

interface CoffeeDrinkFormProps {
  initialData?: CoffeeDrink;
  register: () => void;
}

const CoffeeDrinkForm = ({ initialData, register }: CoffeeDrinkFormProps) => {
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
        inputRef={register}
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
        inputRef={register}
      />
      {initialData?.id && (
        <Input
          id="id"
          name="id"
          type="hidden"
          defaultValue={initialData?.id}
          inputRef={register}
        />
      )}
    </>
  );
};

export default CoffeeDrinkForm;

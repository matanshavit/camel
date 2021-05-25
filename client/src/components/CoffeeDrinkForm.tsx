import { TextField, Input } from "@material-ui/core";
import type { NestDataObject, FieldValues, FieldError } from "react-hook-form";

import type CoffeeDrink from "../types/CoffeeDrink";

interface CoffeeDrinkFormProps {
  initialData?: CoffeeDrink;
  register: () => void;
  errors: NestDataObject<FieldValues, FieldError>;
}

const CoffeeDrinkForm = ({
  initialData,
  register,
  errors,
}: CoffeeDrinkFormProps) => {
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
        error={"name" in errors}
        helperText={errors.name?.message}
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
        error={"description" in errors}
        helperText={errors.description?.message}
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

import { TextField } from "@material-ui/core";

const CoffeeDrinkForm = () => {
  return (
    <>
      <TextField id="name" label="Name" type="text" fullWidth margin="dense" />
      <TextField
        id="description"
        label="Description"
        type="text"
        fullWidth
        multiline
        margin="dense"
      />
    </>
  );
};

export default CoffeeDrinkForm;

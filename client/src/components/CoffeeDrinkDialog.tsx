import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { useForm } from "react-hook-form";

import CoffeeDrinkForm from "./CoffeeDrinkForm";
import CoffeeDrinksContext from "../contexts/CoffeeDrinksContext";
import type CoffeeDrink from "../types/CoffeeDrink";
import type CoffeeDrinkParameters from "../types/CoffeeDrinkParameters";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

interface CoffeeDrinkDialogProps {
  open: boolean;
  handleClose: React.ReactEventHandler;
  title: string;
  saveLabel: string;
  initialData?: CoffeeDrink;
}

const CoffeeDrinkDialog = ({
  open,
  handleClose,
  title,
  saveLabel,
  initialData,
}: CoffeeDrinkDialogProps) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { addCoffeeDrink, editCoffeeDrink } = useContext(CoffeeDrinksContext);

  const submitData = handleSubmit((data) => {
    if ("id" in data) {
      editCoffeeDrink(data as CoffeeDrink);
    } else {
      addCoffeeDrink(data as CoffeeDrinkParameters);
    }
  });

  const onSubmit = (event: React.FormEvent) => {
    submitData(event);
    handleClose(event);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="coffee-drink-dialog-title"
    >
      <DialogTitle id="coffee-drink-dialog-title">
        {title}
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <CoffeeDrinkForm initialData={initialData} register={register} />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            {saveLabel}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CoffeeDrinkDialog;

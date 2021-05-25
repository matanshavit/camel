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
import * as yup from "yup";

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

const CoffeeDrinkSchema = yup.object().shape({
  name: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

interface CoffeeDrinkDialogProps {
  open: boolean;
  handleClose: (event: object) => void;
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
  const { register, handleSubmit, errors } = useForm({
    validationSchema: CoffeeDrinkSchema,
  });
  const { addCoffeeDrink, editCoffeeDrink } = useContext(CoffeeDrinksContext);

  const onSubmit = handleSubmit((data, event) => {
    if ("id" in data) {
      editCoffeeDrink(data as CoffeeDrink);
    } else {
      addCoffeeDrink(data as CoffeeDrinkParameters);
    }
    if (event) {
      handleClose(event);
    }
  });

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
          <CoffeeDrinkForm
            initialData={initialData}
            register={register}
            errors={errors}
          />
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

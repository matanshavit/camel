import { useRef } from "react";
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

import CoffeeDrinkForm from "./CoffeeDrinkForm";
import type CoffeeDrink from "../types/CoffeeDrink";

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
  handleClose: React.MouseEventHandler;
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
  const form = useRef(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(form.current || undefined)
    );
    alert(JSON.stringify(formData));
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
      <form ref={form} onSubmit={handleSubmit}>
        <DialogContent>
          <CoffeeDrinkForm initialData={initialData} />
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

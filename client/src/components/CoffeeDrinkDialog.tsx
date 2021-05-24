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
      <DialogContent>
        <CoffeeDrinkForm initialData={initialData} />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          color="primary"
          disableElevation
        >
          {saveLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CoffeeDrinkDialog;

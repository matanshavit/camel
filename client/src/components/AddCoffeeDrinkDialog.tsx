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

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

interface AddCoffeeDrinkDialogProps {
  open: boolean;
  handleClose: React.MouseEventHandler;
}

const AddCoffeeDrinkDialog = ({
  open,
  handleClose,
}: AddCoffeeDrinkDialogProps) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="add-coffee-drink-dialog-title"
    >
      <DialogTitle id="add-coffee-drink-dialog-title">
        Add Coffee Drink
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <CoffeeDrinkForm />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          color="primary"
          disableElevation
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCoffeeDrinkDialog;

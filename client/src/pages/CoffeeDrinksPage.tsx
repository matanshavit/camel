import { useContext, useState, useCallback } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

import CoffeeDrinksContext from "../contexts/CoffeeDrinksContext";
import PageLayout from "./PageLayout";
import PageGrid from "../components/PageGrid";
import PageGridItem from "../components/PageGridItem";
import AddCoffeeDrinkDialog from "../components/AddCoffeeDrinkDialog";
import type CoffeeDrink from "../types/CoffeeDrink";

const useStyles = makeStyles((theme) => ({
  pageTitleBar: {
    marginTop: theme.spacing(2),
  },
  pageTitle: {
    marginRight: theme.spacing(1),
  },
  fullHeight: {
    height: "100%",
  },
  cardSpacing: {
    marginTop: theme.spacing(1),
  },
}));

interface PageTitleBarProps {
  children: React.ReactNode;
  handleClickAdd: React.MouseEventHandler;
}

const PageTitleBar = ({ children, handleClickAdd }: PageTitleBarProps) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.pageTitleBar}>
      <Grid item>
        <Typography variant="h4" className={classes.pageTitle}>
          {children}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton aria-label="add" onClick={handleClickAdd}>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const ListGridCard = ({ name, description }: CoffeeDrink) => {
  const classes = useStyles();

  return (
    <PageGridItem>
      <Card className={classes.fullHeight}>
        <CardActionArea className={classes.fullHeight}>
          <CardContent className={classes.fullHeight}>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2" className={classes.cardSpacing}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </PageGridItem>
  );
};

const CoffeeDrinksPage = () => {
  const { coffeeDrinks } = useContext(CoffeeDrinksContext);

  const [addDialoglOpen, setAddDialogOpen] = useState(false);

  const openAddDialog = useCallback(() => {
    setAddDialogOpen(true);
  }, [setAddDialogOpen]);

  const closeAddDialog = useCallback(() => {
    setAddDialogOpen(false);
  }, [setAddDialogOpen]);

  return (
    <>
      <PageLayout>
        <PageTitleBar handleClickAdd={openAddDialog}>
          Coffee Drinks
        </PageTitleBar>
        <PageGrid spacing={2}>
          {coffeeDrinks.map((coffeeDrink) => (
            <ListGridCard {...coffeeDrink} />
          ))}
        </PageGrid>
      </PageLayout>

      <AddCoffeeDrinkDialog
        open={addDialoglOpen}
        handleClose={closeAddDialog}
      />
    </>
  );
};

export default CoffeeDrinksPage;

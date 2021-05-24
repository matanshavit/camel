import { useContext } from "react";
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

import PageLayout from "./PageLayout";
import PageGrid from "../components/PageGrid";
import PageGridItem from "../components/PageGridItem";
import CoffeeDrinksContext from "../contexts/CoffeeDrinksContext";
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
}

const PageTitleBar = ({ children }: PageTitleBarProps) => {
  const styles = useStyles();

  return (
    <Grid container alignItems="center" className={styles.pageTitleBar}>
      <Grid item>
        <Typography variant="h4" className={styles.pageTitle}>
          {children}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const ListGridCard = ({ name, description }: CoffeeDrink) => {
  const styles = useStyles();

  return (
    <PageGridItem>
      <Card className={styles.fullHeight}>
        <CardActionArea className={styles.fullHeight}>
          <CardContent className={styles.fullHeight}>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2" className={styles.cardSpacing}>
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
  return (
    <PageLayout>
      <PageTitleBar>Coffee Drinks</PageTitleBar>
      <PageGrid spacing={2}>
        {coffeeDrinks.map((coffeeDrink) => (
          <ListGridCard {...coffeeDrink} />
        ))}
      </PageGrid>
    </PageLayout>
  );
};

export default CoffeeDrinksPage;

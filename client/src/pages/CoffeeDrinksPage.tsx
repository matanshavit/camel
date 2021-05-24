import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

import PageLayout from "./PageLayout";
import PageGrid from "../components/PageGrid";
import PageGridItem from "../components/PageGridItem";
import type CoffeeDrink from "../types/CoffeeDrink";

const useStyles = makeStyles((theme) => ({
  pageTitleBar: {
    marginTop: theme.spacing(2),
  },
  pageTitle: {
    marginRight: theme.spacing(1),
  },
  listCard: {
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
      <Card className={styles.listCard}>
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2" className={styles.cardSpacing}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </PageGridItem>
  );
};

const coffeeDrinks: CoffeeDrink[] = [
  {
    name: "Drip Brew",
    description:
      "Made by pouring hot water onto ground coffee beans, then allowing to brew and filtering.",
  },
  {
    name: "Cold Brew",
    description:
      "Coarse-ground beans are soaked in water for about 12 to 24 hours. The water is normally kept at room temperature, but chilled water can also be used.",
  },
  {
    name: "Espresso",
    description:
      "Method of Italian origin in which a small amount of nearly boiling water is forced under pressure (expressed) through finely-ground coffee beans.",
  },
  {
    name: "Ristretto",
    description:
      "Short shot of a more highly concentrated espresso coffee. Made with the same amount of ground coffee, but extracted with a finer grind using half as much water.",
  },
  {
    name: "Caffè Macchiato",
    description:
      "Espresso coffee drink with a small amount of milk, usually foamed.",
  },
  {
    name: "Cortado",
    description: "Espresso mixed with a roughly equal amount of warm milk.",
  },
  {
    name: "Caffe Latte",
    description: "Espresso and steamed milk.",
  },
  {
    name: "Cappuccino",
    description: "Espresso with with steamed milk foam",
  },
  {
    name: "Café au Lait",
    description: "Coffee with hot milk added",
  },
  {
    name: "Caffè Americano",
    description:
      "Diluted espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.",
  },
  {
    name: "Affogato",
    description:
      "A scoop of vanilla gelato topped with a shot of hot espresso.",
  },
];

const CoffeeDrinksPage = () => {
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

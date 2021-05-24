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

interface ListGridCardProps {
  name: string;
  description: string;
}

const ListGridCard = ({ name, description }: ListGridCardProps) => {
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

const items: ListGridCardProps[] = [
  {
    name: "Cortado",
    description: "Espresso mixed with a roughly equal amount of warm milk.",
  },
];

const CoffeeDrinksPage = () => {
  return (
    <PageLayout>
      <PageTitleBar>Coffee Drinks</PageTitleBar>
      <PageGrid spacing={2}>
        {items.map((item) => (
          <ListGridCard {...item} />
        ))}
      </PageGrid>
    </PageLayout>
  );
};

export default CoffeeDrinksPage;

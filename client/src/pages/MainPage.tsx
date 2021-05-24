import {
  Card,
  CardContent,
  Typography,
  Grid,
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
  cardSpacing: {
    marginTop: theme.spacing(1),
  },
}));

interface ItemGridCardProps {
  name: string;
  description: string;
}

const ItemGridCard = ({ name, description }: ItemGridCardProps) => {
  const styles = useStyles();

  return (
    <PageGridItem>
      <Card>
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

const items: ItemGridCardProps[] = [
  {
    name: "Cortado",
    description: "espresso mixed with a roughly equal amount of warm milk",
  },
];

const MainPage = () => {
  const styles = useStyles();

  return (
    <PageLayout>
      <Grid container alignItems="center" className={styles.pageTitleBar}>
        <Grid item>
          <Typography variant="h4" className={styles.pageTitle}>
            Coffee Drinks
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete">
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      <PageGrid spacing={2}>
        {items.map((item) => (
          <ItemGridCard {...item} />
        ))}
      </PageGrid>
    </PageLayout>
  );
};

export default MainPage;

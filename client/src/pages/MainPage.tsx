import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

import PageLayout from "./PageLayout";
import PageGrid from "../components/PageGrid";
import PageGridItem from "../components/PageGridItem";

const useStyles = makeStyles((theme) => ({
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
  return (
    <PageLayout>
      <PageGrid spacing={2}>
        {items.map((item) => (
          <ItemGridCard {...item} />
        ))}
      </PageGrid>
    </PageLayout>
  );
};

export default MainPage;

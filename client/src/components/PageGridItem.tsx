import { Grid } from "@material-ui/core";

interface PageGridItemProps {
  children: React.ReactNode;
}

const PageGridItem = ({ children }: PageGridItemProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      {children}
    </Grid>
  );
};

export default PageGridItem;

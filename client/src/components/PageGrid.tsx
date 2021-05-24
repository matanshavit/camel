import { useMemo } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import type { GridSpacing } from "@material-ui/core";

interface PageGridProps {
  children: React.ReactNode;
  spacing?: GridSpacing;
}

const PageGrid = ({ children, spacing }: PageGridProps) => {
  const useStyles = useMemo(
    () =>
      makeStyles((theme) => ({
        content: {
          margin: theme.spacing(spacing || 0, 0),
        },
      })),
    [spacing]
  );

  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Grid container spacing={spacing}>
        {children}
      </Grid>
    </div>
  );
};

export default PageGrid;

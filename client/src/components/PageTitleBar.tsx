import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Icon } from "@iconify/react";
import twoHumpCamel from "@iconify-icons/emojione/two-hump-camel";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "2.75rem",
    height: "2.75rem",
    marginRight: "0.75rem",
  },
  title: {
    marginRight: "1.5rem",
  },
  offset: theme.mixins.toolbar,
}));

const PageTitleBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar color="inherit">
        <Toolbar>
          <Icon icon={twoHumpCamel} className={classes.icon} />
          <Typography variant="h4" className={classes.title}>
            Camel
          </Typography>
          <Typography variant="h6">content management</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default PageTitleBar;

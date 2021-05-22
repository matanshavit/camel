import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import twoHumpCamel from "@iconify-icons/emojione/two-hump-camel";

const useStyles = makeStyles({
  icon: {
    width: "2.75rem",
    height: "2.75rem",
    marginRight: "0.75rem",
  },
  title: {
    marginRight: "1.5rem",
  },
});

const MainPage = () => {
  const styles = useStyles();
  return (
    <Container maxWidth={false}>
      <AppBar color={"inherit"}>
        <Toolbar>
          <Icon icon={twoHumpCamel} className={styles.icon} />
          <Typography variant="h4" className={styles.title}>
            Camel
          </Typography>
          <Typography variant="h6">content management system</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default MainPage;

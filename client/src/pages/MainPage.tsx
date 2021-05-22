import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    marginRight: "1rem",
  },
});

const MainPage = () => {
  const styles = useStyles();
  return (
    <Container maxWidth={false}>
      <AppBar color={"inherit"}>
        <Toolbar>
          <Typography variant="h4" className={styles.title}>
            Camel
          </Typography>
          <Typography variant="h6">
            example content management system
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default MainPage;

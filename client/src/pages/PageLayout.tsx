import { Container } from "@material-ui/core";

import PageTitleBar from "../components/PageTitleBar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const MainPage = ({ children }: PageLayoutProps) => {
  return (
    <Container maxWidth={false}>
      <PageTitleBar />
      {children}
    </Container>
  );
};

export default MainPage;

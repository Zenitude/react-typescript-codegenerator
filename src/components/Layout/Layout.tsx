import { LayoutContainer, GlobalStyle } from "./Layout.style";
import Header from "../Header/Header";
import Router from "../Router/Router";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
          <Header />
          <Router />
          <Footer />
      </LayoutContainer>
    </>
  )
}

import { LayoutContainer } from './Layout.style';
import Header from '../Header/Header';
import Router from '../Router/Router';

export default function Layout() {
  return (
    <LayoutContainer>
        <Header />
        <Router />
    </LayoutContainer>
  )
}

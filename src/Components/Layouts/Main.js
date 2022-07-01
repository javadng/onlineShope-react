import { Fragment } from 'react';
import Container from '../UI/Container';
import Footer from './Footer/Footer';
import Header from './Header/Header';

// import classes fr  om './main.module.scss';

const Main = props => {
  return (
    <Fragment>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </Fragment>
  );
};

export default Main;

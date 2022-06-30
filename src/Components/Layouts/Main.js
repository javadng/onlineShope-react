import { Fragment } from 'react';
import Container from '../UI/Container';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import classes from './main.module.scss';

const Main = props => {
  return (
    <Fragment>
      <Header />
      <Container className={classes.main}>{props.children}</Container>
      <Footer />
    </Fragment>
  );
};

export default Main;

import { Fragment } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Main = props => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Main;

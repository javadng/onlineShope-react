import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Banner from './Header/Banner';

const Main = props => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Main;

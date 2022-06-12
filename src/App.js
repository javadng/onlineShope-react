import AboutUs from './Components/AboutUs/AboutUs';
import { Fragment } from 'react';
// import classes from './app.module.scss';
import Header from './Components/Layouts/Header/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <AboutUs />
      </main>
    </Fragment>
  );
};

export default App;

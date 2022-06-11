import classes from './Header.module.scss';
import Banner from './Banner';
import Navbar from './NavBar';

const Header = props => {
  return (
    <header className={classes.header}>
      <Navbar />
      <Banner />
    </header>
  );
};

export default Header;

import { useState } from 'react';

import classes from './Navbar.module.scss';
import ContainerGrid from '../../UI/ContainerGrid';
import NavMenu from './NavMenu';
import navIcon from '../../../assets/img/favicon.png';

const Navbar = props => {
  const [menuIsShown, setMenuIsShowen] = useState(false);

  const menuToggelerHandler = () => {
    setMenuIsShowen(prevState => !prevState);
  };

  const togglerClass = menuIsShown
    ? `${classes['toggel--icon']} ${classes['isActive--toggel']}`
    : classes['toggel--icon'];

  return (
    <ContainerGrid className={classes.nav}>
      <div className={classes.nav__title}>
        <img alt="App icon" src={navIcon} />
        <span>Online Shop</span>
      </div>
      <NavMenu isActive={menuIsShown} onToggleFn={menuToggelerHandler} />
      <div className={classes.nav__icons}>
        <span className={classes['nav__shop--icon']}>Shop</span>
        <div className={classes.nav__toggeler} onClick={menuToggelerHandler}>
          <span className={togglerClass}></span>
        </div>
      </div>
    </ContainerGrid>
  );
};

export default Navbar;

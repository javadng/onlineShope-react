import { Fragment } from 'react';
import Overlay from '../../UI/Modal/Overlay';
import classes from './NavMenu.module.scss';

const NavMenu = props => {
  const navClassActive = props.isActive ? classes.isActive : '';

  return (
    <Fragment>
      {props.isActive && <Overlay onClick={props.onToggleFn} />}
      <ul className={`${classes.nav} ${navClassActive}`}>
        <li className={classes.nav__item}>
          <a href="text" className={classes.nav__link}>
            Home
          </a>
        </li>
        <li className={classes.nav__item}>
          <a href="text" className={classes.nav__link}>
            Products
          </a>
        </li>
        <li className={classes.nav__item}>
          <a href="text" className={classes.nav__link}>
            Demo
          </a>
        </li>
        <li className={classes.nav__item}>
          <a href="text" className={classes.nav__link}>
            Blog
          </a>
        </li>
        <li className={classes.nav__item}>
          <a href="text" className={classes.nav__link}>
            Order
          </a>
        </li>
        <li className={classes.nav__item}>
          <a href="text" className={classes.nav__link}>
            Contact Us
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavMenu;

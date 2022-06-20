import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Overlay from '../../UI/Modal/Overlay';
import classes from './NavMenu.module.scss';

const NavMenu = props => {
  const navClassActive = props.isActive ? classes.isActive : '';

  return (
    <Fragment>
      {props.isActive && <Overlay onClick={props.onToggleFn} />}
      <ul className={`${classes.nav} ${navClassActive}`}>
        {props.isActive && (
          <span className={classes.closeBtn} onClick={props.onToggleFn}>
            X
          </span>
        )}
        <li className={classes.nav__item}>
          <NavLink to="/home" href="text" className={classes.nav__link}>
            Home
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/categories" href="text" className={classes.nav__link}>
            Products
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/" href="text" className={classes.nav__link}>
            Demo
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/blog" href="text" className={classes.nav__link}>
            Blog
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/checkout" href="text" className={classes.nav__link}>
            Order
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/contact-us" href="text" className={classes.nav__link}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavMenu;

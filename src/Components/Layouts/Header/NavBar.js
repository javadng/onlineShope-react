import { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import classes from './Navbar.module.scss';
import ContainerGrid from '../../UI/ContainerGrid';
import NavMenu from './NavMenu';
import navIcon from '../../../assets/img/favicon.png';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal/Modal';
import ProductCartItem from '../../Product/ProducCartItem';
import productImage from '../../../assets/img/photo-1.jpg';

const Navbar = props => {
  const [modalShown, setModalShown] = useState(false);

  const [menuIsShown, setMenuIsShowen] = useState(false);

  const menuToggelerHandler = () => {
    setMenuIsShowen(prevState => !prevState);
  };

  const modalShownHandler = () => {
    setModalShown(prevState => !prevState);
  };

  const togglerClass = menuIsShown
    ? `${classes['toggel--icon']} ${classes['isActive--toggel']}`
    : classes['toggel--icon'];

  return (
    <Fragment>
      {modalShown && (
        <Modal
          shownState={modalShown}
          title="Your Cart"
          className={classes.modal__header}
          toggle={modalShownHandler}
        >
          <ProductCartItem img={productImage} title="T-Shirt" />
          <ProductCartItem img={productImage} title="T-Shirt" />
          <Button className={classes.modal__btn}>Go to Shop</Button>
        </Modal>
      )}
      <ContainerGrid className={classes.nav}>
        <div className={classes.nav__title}>
          <img alt="App icon" src={navIcon} />
          <span>Online Shop</span>
        </div>
        <NavMenu isActive={menuIsShown} onToggleFn={menuToggelerHandler} />
        <div className={classes.nav__icons}>
          <span
            onClick={modalShownHandler}
            className={classes['nav__shop--icon']}
          >
            <FontAwesomeIcon icon={solid('shopping-cart')} size="lg" />
          </span>
          <div className={classes.nav__toggeler} onClick={menuToggelerHandler}>
            <span className={togglerClass}></span>
          </div>
        </div>
      </ContainerGrid>
    </Fragment>
  );
};

export default Navbar;

import classes from './Cart.module.scss';

import { useSelector } from 'react-redux';
import Button from '../UI/Button';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import imageP from '../../assets/img/photo-1.jpg';

const Cart = props => {
  const items = useSelector(state => state.cart.items);

  const modalContent = items.map(item => (
    <CartItem
      key={item.id}
      quantity={item.quantity}
      totalPrice={item.totalPrice}
      id={item.id}
      price={item.price}
      img={imageP}
      name={item.name}
    />
  ));

  return (
    <Modal
      shownState={props.modalState}
      title="Your Cart"
      className={classes.modal}
      toggle={props.togglerFn}
    >
      {modalContent || (
        <p className="center-text fs-2 warning-color">No Item Add some..</p>
      )}
      <Button className={classes.modal__btn}>Go to Shop</Button>
    </Modal>
  );
};

export default Cart;

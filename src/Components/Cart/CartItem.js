import classes from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = props => {
  const { id, img, totalPrice, quantity, name, price } = props;

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  const decreaseHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.productcart}>
      <figure className={classes.img__holder}>
        <img alt="" src={img} />
      </figure>
      <div className={classes.product__detail}>
        <span>{name}</span>
        <span>Price: {price.toFixed(2)} $</span>
        <span>Total: {totalPrice.toFixed(2)} $</span>
      </div>
      <div className={classes.number__procut}>
        <span className={classes.decrease} onClick={decreaseHandler}>
          -
        </span>
        <input type="number" min="0" placeholder={quantity} />
        <span className={classes.increase} onClick={increaseHandler}>
          +
        </span>
      </div>
    </li>
  );
};

export default CartItem;

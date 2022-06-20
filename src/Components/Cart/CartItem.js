import InputChangeNumber from '../UI/InputChangeNumber';
import classes from './CartItem.module.scss';

const CartItem = props => {
  const { id, img, totalPrice, quantity, name, price } = props;

  return (
    <li className={classes.productcart}>
      <figure className={classes.img__holder}>
        <img alt="" src={img} />
      </figure>
      <div className={classes.product__detail}>
        <span className={classes.product__name}>{name}</span>
        <span>Price: {price.toFixed(2)} $</span>
        <span>Total: {totalPrice.toFixed(2)} $</span>
      </div>
      <InputChangeNumber
        price={price}
        id={id}
        name={name}
        quantity={quantity}
      />
    </li>
  );
};

export default CartItem;

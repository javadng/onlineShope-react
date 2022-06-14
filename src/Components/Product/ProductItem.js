import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

import Button from '../UI/Button';
import classes from './ProductItem.module.scss';

const ProductItem = props => {
  const dispatch = useDispatch();

  const { name, description, price, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );

    dispatch(
      uiActions.showNotification({
        status: 'success',
        titile: '',
        message: 'Item Added to cart',
      })
    );
  };

  return (
    <div className={classes.productitem}>
      <figure className={classes.productitem__img}>
        <img src={props.img} alt="product item" />
        <div className={classes.productitem__icons}>
          <FontAwesomeIcon icon={solid('heart')} color="red" />
          <FontAwesomeIcon icon={solid('user-circle')} color="#fff" />
        </div>
      </figure>
      <span className={classes['productitem--title']}>{name}</span>
      <p className={classes['productitem--desc']}>{description}</p>
      <span className={classes.price}>${price.toFixed(2)}</span>
      <Button className={classes.addbtn} onClick={addToCartHandler}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductItem;

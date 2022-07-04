import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import './ProductItem.scss';

const ProductItem = props => {
  const dispatch = useDispatch();

  const { name, description, price, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image: props.img,
      })
    );

    dispatch(
      uiActions.showNotification({
        status: 'ADD_ITEM',
        titile: '',
        message: 'Item Added to cart',
      })
    );
  };

  return (
    <div className="productitem">
      <figure className="productitem__img">
        <img src={props.img} alt="product item" />
        <div className="productitem__icons">
          <FontAwesomeIcon icon={solid('heart')} color="red" />
          <FontAwesomeIcon icon={solid('user-circle')} color="#fff" />
        </div>
      </figure>
      <Link to={`/${id}`} className="productitem--title">
        {name} &rarr;
      </Link>
      <p className="productitem--desc">{description}</p>
      <span className="price">${price.toFixed(2)}</span>
      <Button className="addbtn" onClick={addToCartHandler}>
        <span className="btnText">Add to Cart</span>
        <FontAwesomeIcon icon={solid('shopping-cart')} />
      </Button>
    </div>
  );
};

export default ProductItem;

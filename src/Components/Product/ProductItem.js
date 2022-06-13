import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import Button from '../UI/Button';
import classes from './ProductItem.module.scss';

const ProductItem = props => {
  return (
    <div className={classes.productitem}>
      <figure className={classes.productitem__img}>
        <img src={props.img} alt="product item" />
        <div className={classes.productitem__icons}>
          <FontAwesomeIcon icon={solid('heart')} color="red" />
          <FontAwesomeIcon icon={solid('user-circle')} color='#fff' />
        </div>
      </figure>
      <span className={classes['productitem--title']}>{props.title}</span>
      <span className={classes.price}>$115</span>
      <Button className={classes.addbtn}>Add to Cart</Button>
    </div>
  );
};

export default ProductItem;

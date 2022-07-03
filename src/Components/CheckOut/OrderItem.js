import InputChangeNumber from '../UI/InputChangeNumber';
import classes from './orderItem.module.scss';

const OrderItem = props => {
  const classNames = `${classes.item} ${props.className || ''}`;

  return (
    <li className={classNames}>
      <span className={classes.name}>{props.name}</span>
      {props.number && <span className={classes.number}>x {props.number}</span>}
      <InputChangeNumber
        className={classes.changeNum}
        id={props.id}
        name={props.name}
        price={props.price}
        quantity={props.number}
      />
      <span className={classes.price}>${props.totalPrice}</span>
    </li>
  );
};

export default OrderItem;

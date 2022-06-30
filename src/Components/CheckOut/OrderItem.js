import classes from './orderItem.module.scss';

const OrderItem = props => {
  const classNames = `${classes.item} ${props.className || ''}`;
  
  return (
    <li className={classNames}>
      <span className={classes.name}>{props.name}</span>
      {props.number && <span className={classes.number}>{props.number}</span>}
      <span className={classes.price}>${props.price}</span>
    </li>
  );
};

export default OrderItem;

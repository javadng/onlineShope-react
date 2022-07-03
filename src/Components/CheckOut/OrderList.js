import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

import classes from './OrderList.module.scss';

const OrderList = props => {
  const items = useSelector(state => state.cart.items);

  return (
    <ul className={classes.list}>
      {items.map(item => (
        <OrderItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.quantity}
          price={item.totalPrice}
        />
      ))}
    </ul>
  );
};

export default OrderList;

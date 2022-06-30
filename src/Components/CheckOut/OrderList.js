import OrderItem from './OrderItem';

import classes from './OrderList.module.scss';

const OrderList = props => {
  return (
    <ul className={classes.list}>
      <OrderItem name="Shoes" number="2" price={999} />
      <OrderItem name="Shoes" price={999} />
      <OrderItem name="Shoes" price={999} />
      <OrderItem name="Shoes" number="2" price={999} />
      <OrderItem name="Shoes" number="2" price={999} />
    </ul>
  );
};

export default OrderList;

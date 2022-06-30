import BillingDetail from '../Components/CheckOut/BillingDetail';
import OrderSection from '../Components/CheckOut/OrderSection';
import Main from '../Components/Layouts/Main';

import classes from './checkout.module.scss';

const Checkout = props => {
  return (
    <Main>
      <div className={classes.orderContainer}>
        <OrderSection />
        <BillingDetail />
      </div>
    </Main>
  );
};

export default Checkout;

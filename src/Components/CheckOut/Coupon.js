import classes from './Coupon.module.scss';

const Coupon = props => {
  return (
    <div className={classes.coupon}>
      <span>
        Have a <span className={classes.coupon__Click}>coupon</span> ? Click here to
        enter your code.
      </span>
    </div>
  );
};

export default Coupon;

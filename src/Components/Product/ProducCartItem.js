import classes from './ProductCart.module.scss';

const ProductCartItem = props => {
  return (
    <li className={classes.productcart}>
      <figure className={classes.img__holder}>
        <img alt="" src={props.img} />
      </figure>
      <span className={classes.title}>{props.name}</span>
      <div className={classes.number__procut}>
        <span className={classes.decrease}>-</span>
        <input type="number" min="0" placeholder="1" />
        <span className={classes.increase}>+</span>
      </div>
    </li>
  );
};

export default ProductCartItem;

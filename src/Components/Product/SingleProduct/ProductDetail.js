import Button from '../../UI/Button';
import InputChangeNumber from '../../UI/InputChangeNumber';

import classes from './ProductDetail.module.scss';
import imageP from '../../../assets/img/photo-1.jpg';
import SingleTabs from './SingleTabs';

const ProductDetail = props => {
  const containerClasses = `${props.className} ${classes.product__container}`;

  return (
    <div className={containerClasses}>
      <div className={classes.product__image}>
        <figure className={classes.figureImg}>
          <img src={imageP} alt="" />
          <div className={classes.subimages}>
            <img src={imageP} className={classes.subimg} alt="" />
            <img src={imageP} className={classes.subimg} alt="" />
            <img src={imageP} className={classes.subimg} alt="" />
            <img src={imageP} className={classes.subimg} alt="" />
            <img src={imageP} className={classes.subimg} alt="" />
            <img src={imageP} className={classes.subimg} alt="" />
          </div>
        </figure>
      </div>
      <div className={classes.detaile}>
        <h1 className={classes.title}>product Title</h1>
        <div className={classes.views}>
          <span>04 Comments</span> |<span>04 Views</span>
        </div>
        <div className={classes.detaile}>
          <div className={classes.price}>$999.00</div>
          <p className={classes.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            alias quos dignissimos eligendi eaque, veniam eos sed praesentium
            cupiditate? Placeat totam sunt laborum iure repudiandae nisi
            molestias laboriosam harum facilis
          </p>
        </div>
        <div className={classes.addoptions}>
          <InputChangeNumber
            className={classes.changeQuantities}
            price={'price'}
            id={Math.random()}
            name={'name'}
            quantity={'quantity'}
          />
          <Button className={`${classes.product__btn} btn-animated`}>
            Add to Cart
          </Button>
        </div>
      </div>
      <SingleTabs className={classes.tabs} />
    </div>
  );
};

export default ProductDetail;

import classes from './Banner.module.scss';

const Banner = props => {
  return (
    <div className={classes.banner}>
      <>
        <span className={classes.banner__trand}>terending 2022</span>
        <h1 className={classes.banner__title}>Boutique Fashion</h1>
        <span className={classes.banner__info}>Responsive React.js WebApp</span>
      </>
    </div>
  );
};

export default Banner;

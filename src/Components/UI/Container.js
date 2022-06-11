import './Container.scss';

const Container = props => {
  const classes = props.className + ' container';
  return <div className={classes}>{props.children}</div>;
};

export default Container;

import './Button.scss';

const Button = props => {
  const classes = props.className + ' btn';
  return <button className={classes}>{props.children}</button>;
};

export default Button;

import './GridList.scss';

const GridList = props => {
  const customClassName = `${props.className} gridlist`;
  return <div className={customClassName}>{props.children}</div>;
};

export default GridList;

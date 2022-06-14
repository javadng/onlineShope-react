import classes from './Tooltip.module.scss';
import reactdom from 'react-dom';
import { Fragment } from 'react';

const tooltipElem = document.getElementById('tooltip');
const Tooltip = props => {
  return (
    <Fragment>
      {reactdom.createPortal(
        <div className={classes.tooltip}>{props.message}</div>,
        tooltipElem
      )}
    </Fragment>
  );
};

export default Tooltip;

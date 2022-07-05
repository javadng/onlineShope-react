import classes from './FilterItems.module.scss';
import useInput from '../../hooks/use-input';
import { useEffect } from 'react';

const FilteItems = props => {
  let { value: inputValue, onChangeHandler: inputOnChageHandler } = useInput();

  useEffect(() => {
    props.setValue(+inputValue);
  }, [inputValue, props]);

  return (
    <div className={classes.filter}>
      <h1 className={classes.title}>Filter</h1>
      <label htmlFor="priceRange">Filter Price :</label>
      <input
        step="5"
        id="priceRange"
        type="range"
        min="0"
        max="500"
        value={inputValue}
        onChange={inputOnChageHandler}
        className={classes.inputRange}
      />
      <div className={classes.filterPrice}>
        <span>from: $ 0</span>
        <span>to: $ {inputValue}</span>
      </div>
    </div>
  );
};

export default FilteItems;

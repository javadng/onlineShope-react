import ContainerGrid from '../../UI/ContainerGrid';
import List from '../../UI/List';
import classes from './FooterLists.module.scss';

const FooterLists = props => {
  return (
    <ContainerGrid className={classes.footerlists}>
      <List>
        <h1 className={classes.title}>Contact</h1>
        <li className={classes['List--item']}>Office: +9890000000</li>
        <li className={classes['List--item']}>Mobile: +9890000000</li>
        <li className={classes['List--item']}>Office: Iran,Tehran,405</li>
      </List>
      <List>
        <h1 className={classes.title}>Customer Services</h1>
        <li className={classes['List--item']}>
          <a href="url">Trending Products</a>
        </li>
        <li className={classes['List--item']}>
          <a href="url">Shipping & return policy</a>
        </li>
        <li className={classes['List--item']}>
          <a href="url">contact US</a>
        </li>
        <li className={classes['List--item']}>
          <a href="url">F.A.Q.s</a>
        </li>
      </List>
      <List>
        <h1 className={classes.title}>Special Offer</h1>
        <li className={classes['List--item']}>
          <a href="url">Trending Products</a>
        </li>
        <li className={classes['List--item']}>
          <a href="url">Fearured</a>
        </li>
        <li className={classes['List--item']}>
          <a href="url">Men's Collections</a>
        </li>
        <li className={classes['List--item']}>
          <a href="url">Top Products</a>
        </li>
      </List>
    </ContainerGrid>
  );
};

export default FooterLists;

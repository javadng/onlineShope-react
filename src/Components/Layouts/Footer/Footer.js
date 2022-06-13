import classes from './Footer.module.scss';
import FooterLists from './FooterLists';

const Footer = props => {
  return (
    <footer className={classes.footer}>
      <FooterLists />
    </footer>
  );
};

export default Footer;

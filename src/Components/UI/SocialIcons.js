import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Social.module.scss';

const SocialIcons = props => {
  return (
    <div className={classes.icons}>
      <FontAwesomeIcon icon={solid('share-alt')} />
      <FontAwesomeIcon className={classes.facebook} icon={brands('facebook')} />
      <FontAwesomeIcon className={classes.twitter} icon={brands('twitter')} />
      <FontAwesomeIcon
        className={classes.google}
        icon={brands('google-plus')}
      />
      <FontAwesomeIcon className={classes.linkedin} icon={brands('linkedin')} />
    </div>
  );
};

export default SocialIcons;

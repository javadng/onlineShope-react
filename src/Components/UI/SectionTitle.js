import classes from './SectionTitle.module.scss';

const SectionTitle = props => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>{props.title}</h1>
      <span className={classes.subtitle}>{props.subtitle}</span>
    </section>
  );
};

export default SectionTitle;

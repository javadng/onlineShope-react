import ContactCart from './ContactCart';
import classes from './ContactList.module.scss';

const ContactList = props => {
  return (
    <div className={classes.contactList}>
      <ContactCart
        title="help & support"
        desc="Our support team is spread across the globe to give you answers fast"
        btnText="visit support Page"
      />
      <ContactCart
        isCentered={true}
        title="help & support"
        desc="Our support team is spread across the globe to give you answers fast"
        btnText="visit support Page"
      />
      <ContactCart
        title="help & support"
        desc="Our support team is spread across the globe to give you answers fast"
        btnText="visit support Page"
      />
    </div>
  );
};

export default ContactList;

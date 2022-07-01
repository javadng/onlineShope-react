import ContactList from '../Components/contact/ContactList';
import Main from '../Components/Layouts/Main';
import SectionTitle from '../Components/UI/SectionTitle';

const ContactUs = props => {
  return (
    <Main>
      <SectionTitle
        title="contact us"
        subtitle="have any questions ? We'd love to hear from you"
      />
      <ContactList />
    </Main>
  );
};

export default ContactUs;

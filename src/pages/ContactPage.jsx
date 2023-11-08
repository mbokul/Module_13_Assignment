import ComponentOne from '../components/ComponentOne';
import ComponentTwo from '../components/ComponentTwo';
import ComponentThree from '../components/ComponentThree';
import ComponentFour from '../components/ComponentFour';

function ContactPage() {
   return (
      <div>
         <h1>Welcome to Contact Page</h1>
         <ComponentOne pageName="Contact" />
         <ComponentTwo pageName="Contact" />
         <ComponentThree pageName="Contact" />
         <ComponentFour pageName="Contact" />
      </div>
   );
}

export default ContactPage;

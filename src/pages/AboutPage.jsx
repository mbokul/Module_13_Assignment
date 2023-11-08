import ComponentOne from '../components/ComponentOne';
import ComponentTwo from '../components/ComponentTwo';
import ComponentThree from '../components/ComponentThree';
import ComponentFour from '../components/ComponentFour';

function AboutPage() {
   return (
      <div>
         <h1>Welcome to About Page</h1>
         <ComponentOne pageName="About" />
         <ComponentTwo pageName="About" />
         <ComponentThree pageName="About" />
         <ComponentFour pageName="About" />
      </div>
   );
}

export default AboutPage;

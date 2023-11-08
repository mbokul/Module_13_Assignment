import ComponentOne from '../components/ComponentOne';
import ComponentTwo from '../components/ComponentTwo';
import ComponentThree from '../components/ComponentThree';
import ComponentFour from '../components/ComponentFour';

function ServicePage() {
   return (
      <div>
         <h1>Welcome to Service page</h1>
         <ComponentOne pageName="Service" />
         <ComponentTwo pageName="Service" />
         <ComponentThree pageName="Service" />
         <ComponentFour pageName="Service" />
      </div>
   );
}

export default ServicePage;

import ComponentOne from '../components/ComponentOne';
import ComponentTwo from '../components/ComponentTwo';
import ComponentThree from '../components/ComponentThree';
import ComponentFour from '../components/ComponentFour';

function HomePage() {
   return (
      <div>
         <h1>Welcome to Homepage</h1>
         <ComponentOne pageName="Home" />
         <ComponentTwo pageName="Home" />
         <ComponentThree pageName="Home" />
         <ComponentFour pageName="Home" />
      </div>
   );
}

export default HomePage;

import ComponentOne from '../components/ComponentOne';
import ComponentTwo from '../components/ComponentTwo';
import ComponentThree from '../components/ComponentThree';
import ComponentFour from '../components/ComponentFour';

function ProjectPage() {
   return (
      <div>
         <h1>Welcome to Project Page</h1>
         <ComponentOne pageName="Project" />
         <ComponentTwo pageName="Project" />
         <ComponentThree pageName="Project" />
         <ComponentFour pageName="Project" />
      </div>
   );
}

export default ProjectPage;

import ComponentOne from '../components/ComponentOne';
import ComponentTwo from '../components/ComponentTwo';
import ComponentThree from '../components/ComponentThree';
import ComponentFour from '../components/ComponentFour';

function BlogPage() {
   return (
      <div>
         <h1>Welcome to Blog Page</h1>
         <ComponentOne pageName="Blog" />
         <ComponentTwo pageName="Blog" />
         <ComponentThree pageName="Blog" />
         <ComponentFour pageName="Blog" />
      </div>
   );
}

export default BlogPage;

import { NavLink } from 'react-router-dom';

const AppNav = () => {
   return (
      <div>
         <ul className="navbar">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/service">Service</NavLink>
            </li>
            <li>
               <NavLink to="/about">About</NavLink>
            </li>
            <li>
               <NavLink to="/project">Project</NavLink>
            </li>
            <li>
               <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>
      </div>
   );
};

export default AppNav;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppNav from './components/AppNav';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { useRef } from 'react';
import './App.css';

import randomRGB from './RandomRGB';

function App() {
   let randomRgbColor = useRef();

   const change = () => {
      randomRgbColor.current.style.backgroundColor = randomRGB();
   };

   return (
      <div ref={randomRgbColor}>
         <BrowserRouter>
            <AppNav />

            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/service" element={<ServicePage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/project" element={<ProjectPage />} />
               <Route path="/blog" element={<BlogPage />} />
               <Route path="/contact" element={<ContactPage />} />
            </Routes>
         </BrowserRouter>

         <button onClick={change}>Change Background Using (UseRef)</button>
      </div>
   );
}

export default App;

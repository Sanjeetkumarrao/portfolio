import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout    from './components/layout/Layout.jsx';
import Home       from './pages/Home/Home.jsx';
import About      from './pages/About/About.jsx';
import Projects   from './pages/Projects/Projects.jsx';
import Experience from './pages/Experience/Experience.jsx';
import Contact    from './pages/Contact/Contact.jsx';
import NotFound   from './pages/NotFound/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"           element={<Home />}       />
          <Route path="/about"      element={<About />}      />
          <Route path="/projects"   element={<Projects />}   />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact"    element={<Contact />}    />
          <Route path="*"           element={<NotFound />}   />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

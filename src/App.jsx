import './App.css'
import 'animate.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AdminLogin from './components/AdminLogin';
import AdminFileUpload from './components/adminFileUpload/AdminFileUpload';
import AdminNavbar from './components/adminFileUpload/AdminNavbar';
import AdminResourceUpload from './components/adminFileUpload/AdminResourceUpload';


import Home from './components/user/Home';
import Navbar from './components/user/Navbar';
import Footer from './components/user/Footer';
import WorkSheets from './components/user/WorkSheets';
import LandingPage from './components/user/LandingPage';


import Blog from './components/user/Blog';
import PostReading from './components/user/PostReading';
import Resources from './components/user/Resources';



const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
};


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route
        path="/fileupload/worksheets"
        element={<AdminLayout><AdminFileUpload /></AdminLayout>}
      />
      <Route
        path="/fileupload/resources"
        element={<AdminLayout><AdminResourceUpload /></AdminLayout>}
      />
    </Routes>
  );
};


const UserRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/worksheets" element={<WorkSheets />} />
      <Route path="/user/blog" element={<Blog />} />
      <Route path="/user/blog/:slug" element={<PostReading />} />
      <Route path="/user/resources" element={<Resources />} />
    </Routes> 
    <Footer />
  </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<UserRoutes />} /> {/* Define a user route */}
      </Routes>
    </Router>
  );
};

export default App;



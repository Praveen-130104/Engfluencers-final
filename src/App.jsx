import './App.css'
import 'animate.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminFileUpload from './components/AdminFileUpload/AdminFileUpload';
import AdminNavbar from './components/adminFileUpload/AdminNavbar';
import AdminResourceUpload from './components/adminFileUpload/AdminResourceUpload';


import Home from './components/user/Home';
import Navbar from './components/user/Navbar';
import Footer from './components/user/Footer';
import WorkSheets from './components/user/WorkSheets';


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
      <Route path="/worksheets" element={<WorkSheets />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<PostReading />} />
      <Route path="/resources" element={<Resources />} />
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
        <Route path="/user/*" element={<UserRoutes />} /> {/* Define a user route */}
      </Routes>
    </Router>
  );
};

export default App;



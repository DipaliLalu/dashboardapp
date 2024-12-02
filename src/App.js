import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Login from './auth/Login/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import PublicRoute from './auth/PublicRoute';
import RegistrationForm from './auth/Registration/RegistrationForm';
import CreateBlog from './pages/Create/CreateBlog';
import BlogList from './pages/BlogList/BlogList';
import EditForm from './pages/EditForm/EditForm';
import ViewPage from './pages/ViewPage/ViewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes for authenticated users */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="createblog" element={<CreateBlog />}/>
          <Route path="bloglist" element={<BlogList />}/>
          <Route path="editform" element={<EditForm />}/>
          <Route path="viewpage" element={<ViewPage />}/>
        </Route>

        {/* Routes for unauthenticated users */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationForm />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

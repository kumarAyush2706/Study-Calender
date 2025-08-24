
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import HomePage from './Pages/HomePage/Home';
import LoginSignup from './Pages/LoginSignup/Login';
import MainPage from './Pages/MainPage/MainPage';
import SignUp from './Pages/LoginSignup/SignUp';
import TeacherPage from './Pages/TeacherPages/TeacherPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
        </Routes>
        
      </Router>
    </AuthProvider>
  );
}

export default App;

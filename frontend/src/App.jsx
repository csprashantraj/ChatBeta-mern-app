import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';

function App() {
  return <div className='p-4 h-screen w-screen flex items-center justify-center'>
    <Home />
    {/* <Login /> */}
  </div>
}

export default App
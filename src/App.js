import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import WindowWork from './components/WindowWork';
import UsersLoader from './components/UsersLoader';
import StopWatch from './components/StopWatch';

function App() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to='/'>home</NavLink></li>
          <li><NavLink to='/users'>users</NavLink></li>
          <li><NavLink to='/stop-watch'>stop watch</NavLink></li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<WindowWork />}></Route>
          <Route path="/users" element={<UsersLoader />}></Route>
          <Route path="/stop-watch" element={<StopWatch />}></Route>
        </Routes>
        <footer>2024</footer>
      </BrowserRouter>
    </>
  );
}

export default App;

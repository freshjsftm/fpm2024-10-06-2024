import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import SignInPage from './pages/SignInPage';
import UsersLoaderPage from './pages/UsersLoaderPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/users" element={<UsersLoaderPage />}></Route>
            <Route path="/sign-in" element={<SignInPage />}></Route>
          </Routes>
        </main>
        <footer>2024</footer>
      </BrowserRouter>
    </>
  );
}

export default App;

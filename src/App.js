import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import SignInPage from './pages/SignInPage';
import UsersLoaderPage from './pages/UsersLoaderPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import LoaderPage from './pages/LoaderPage';
import EventsBlock from './pages/LoaderPage/EventsBlock';
import PhonesBlock from './pages/LoaderPage/PhonesBlock';

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

            <Route path="/load/" element={<LoaderPage />} >
              <Route path="events"  element={<EventsBlock />}/>
              <Route path="phones"  element={<PhonesBlock />}/>
            </Route>

            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </main>
        <footer>2024</footer>
      </BrowserRouter>
    </>
  );
}

export default App;

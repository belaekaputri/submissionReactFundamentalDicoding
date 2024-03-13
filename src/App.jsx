// eslint-disable-next-line no-unused-vars
import React,{ useState, useEffect } from 'react';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'
import Navigation from "./components/Navigation";
import AddNewPage from './pages/AddNewPage ';
import DetailNotePage from './pages/DetailNotePage';
import LoginPage from './pages/LoginPage';
import { putAccessToken, getUserLogged} from './utils/network-data'
import RegisterPage from './pages/RegisterPage';
import LocaleContext from './contexts/LocaleContext';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const navigate = useNavigate();
  const [authedUser, setAuthed] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [locale, setLocale] = useState(localStorage.getItem('lang') || 'id');

const toggleLocale = () =>{
  setLocale((prevLocale)=>{
    const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('lang', newLocale);
      return newLocale;
  });
};

const localeContextValue = React.useMemo(() => {
  return {
    locale,
    toggleLocale
  };
}, [locale]);

function onToggleTheme() {
  setTheme((prevLocale) => {
    const newTheme = prevLocale === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    return newTheme;
  });
}
useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);

const themeContextValue = React.useMemo(() => {
  return {
    theme,
    onToggleTheme
  };
}, [theme]);


function onLogout() {
  setAuthed(null);
  putAccessToken('');
  navigate('/');
}

async function onLoginSuccess({ accessToken }) {
  putAccessToken(accessToken);
  const { data } = await getUserLogged();
  setAuthed(data);
}


React.useEffect(() => {
  async function fetchData() {
    const { data } = await getUserLogged();
    if (data === null) {
      navigate('/');
    }else{
      setAuthed(data);
    }
    setInitializing(false);
  }
  fetchData();
}, []);


return (
  initializing ? null : authedUser === null ?
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <Routes>
          <Route path="/*" element={
            <LoginPage
              loginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </LocaleContext.Provider>
    </ThemeContext.Provider>

: <ThemeContext.Provider value={themeContextValue}>
<LocaleContext.Provider value={localeContextValue}>
  <>
  <header>
       <Navigation logout={onLogout} name={authedUser.name}/>
  </header>
    <main>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddNewPage/>} />
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/notes/:id" element={<DetailNotePage />} />
      </Routes>
    </main>
  </>
</LocaleContext.Provider>
</ThemeContext.Provider>
)
}

export default App;

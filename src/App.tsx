import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { AboutPageAsync } from './page/AboutPage/AboutPage.async';
import { MainPageAsync } from './page/MainPage/MainPage.async';

import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { className } from './helpers/className';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={className('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>

      <Link to="/">Main</Link>
      <Link to="about">About</Link>

      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;

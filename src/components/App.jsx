import { Routes, Route } from 'react-router-dom';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { Home } from 'pages/Home/Home';
import { MovieSearch } from 'pages/MovieSearch/MovieSearch';
import { MoviePageInfo } from 'pages/MoviePageInfo/MoviePageInfo';

export const App = () => {
  return (
    <div>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieSearch />} />
        <Route path="/movies/:movieId" element={<MoviePageInfo />}></Route>
      </Routes>
    </div>
  );
};

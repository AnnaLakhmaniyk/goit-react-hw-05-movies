import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HeaderNav } from './HeaderNav/HeaderNav';
// import Home from 'pages/Home/Home';
// import MovieSearch from 'pages/MovieSearch/MovieSearch';
// import MoviePageInfo from 'pages/MoviePageInfo/MoviePageInfo';
// import Cast from 'components/ Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const Home = lazy(() => import('pages/Home/Home'));
const MovieSearch = lazy(() => import('pages/MovieSearch/MovieSearch'));
const MoviePageInfo = lazy(() => import('pages/MoviePageInfo/MoviePageInfo'));
const Cast = lazy(() => import('components/ Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
export const App = () => {
  return (
    <div>
      <Suspense>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/movies/:movieId" element={<MoviePageInfo />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
        <ToastContainer autoClose={3000} />
      </Suspense>
    </div>
  );
};

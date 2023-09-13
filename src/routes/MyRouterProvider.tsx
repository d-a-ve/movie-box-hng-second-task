import Layout from "@components/Layout/Layout";
// import Home from "@pages/Home";
// import MoviePage from "@pages/MoviePage";
// import ErrorPage from "@pages/ErrorPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@pages/Home"));
const MoviePage = lazy(() => import("@pages/MoviePage"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="movies/:movieId" element={<MoviePage />} />
    </Route>
  )
);

const MyRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default MyRouterProvider;

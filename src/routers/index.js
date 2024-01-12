import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/p_notFound";
import MainPage from "../pages/p_main";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/" element={<MainPage />} />
    </Route>
  )
);

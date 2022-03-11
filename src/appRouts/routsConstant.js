import Auth from "../pages/auth/Auth";
import CoctailsPage from "../pages/coctailsPage/CoctailsPage";

export const routesConstatnt = [
  { path: "/", element: <Auth />, exact: true },
  { path: "/coctails", element: <CoctailsPage />, exact: true },
];

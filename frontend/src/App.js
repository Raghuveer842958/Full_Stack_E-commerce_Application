import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import SignUpAndLogin from "./components/header/SignUpAndLogin";
import Body from "./components/Body";
import Admin from "./components/admin/Admin";
import Account from "./components/account/Account";
import UserCart from "./components/header/UserCart";
import UserOdders from "./components/account/UserOdders";
import WishList from "./components/account/WishList";
import Profile from "./components/account/Profile";
import Coupens from "./components/account/Coupens";
import Notifications from "./components/account/Notifications";
import AllCategoryProduct from "./components/AllCategoryProduct";
import MainProductCart from "./components/cards/MainProductCart";
import AdminBody from "./components/admin/AdminBody";
import AdminCategoryAllProduct from "./components/cards/AdminCategoryAllProduct";
import CreateCategory from "./components/admin/CreateCategory";
import CreateProduct from "./components/admin/CreateProduct";
import AdminProductCart from "./components/cards/AdminProductCart";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <SignUpAndLogin />,
        },
        {
          path: "/account",
          element: <Account />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "odders",
              element: <UserOdders />,
            },
            {
              path: "wishList",
              element: <WishList />,
            },
            {
              path: "coupens",
              element: <Coupens />,
            },
            {
              path: "notifications",
              element: <Notifications />,
            },
            {
              path: "logout",
              element: <h1>Logout.......</h1>,
            },
          ],
        },
        {
          path: "/admin",
          element: <Admin />,
          children: [
            {
              index: true,
              element: <AdminBody />,
            },
            {
              path: "category/:id",
              element: <AdminCategoryAllProduct />,
              children: [
                {
                  path: "create-product",
                  element: <CreateProduct />,
                },
              ],
            },
            {
              path: "create-category",
              element: <CreateCategory />,
            },
          ],
        },
        {
          path: "/userCart",
          element: <AdminProductCart />,
          // element: <UserCart />,
        },
        {
          path: "/category-/:name/:id",
          element: <AllCategoryProduct />,
        },
        {
          path: "/product/:id",
          element: <MainProductCart />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;

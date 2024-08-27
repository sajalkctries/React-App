import Header from "./Header";
import Footer from "./Footer";
import IndexMain from "./IndexMain";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <IndexMain slogan={"Unlock Your Potential"} />,
        },
        { path: "/home", element: <IndexMain slogan={"Unlock Your Potential"} /> },
        { path: "/about", element: <div>This is about </div>},
        { path: "/contact", element: <div>This is Contact </div>},
      ],
      element: (
        <>
          <Header websiteName={"Squile"} />
          <Outlet />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

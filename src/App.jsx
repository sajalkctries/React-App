import Header from "./Header";
import Footer from "./Footer";
import IndexMain from "./IndexMain";
import "./App.css";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header websiteName={"Squile"} />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: <IndexMain slogan={"Unlock Your Potential"} />,
        },
        { path: "/home", element: <IndexMain slogan={"Unlock Your Potential"} /> },
        { path: "/about", element: <div>This is about </div>},
        { path: "/contact", element: <div>This is Contact </div>},
      ],
      errorElement : <p>404 Not Found
       <p> <Link to={"/"}>Go Back</Link> </p>
      </p>
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

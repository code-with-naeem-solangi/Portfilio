import Layout from "./componant/layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import Eroor from "./componant/pages/error";
import About from "./componant/pages/about";
import Index from "./componant/home page";
import Portfolio from "./componant/pages/portfilio";
import Contact from "./componant/pages/contact";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Eroor />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfiliao",
          element: <Portfolio/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
      ],
    },
  ]);
  return (
    <ConfigProvider>
      <RouterProvider router={route} />
    </ConfigProvider>
  );
}

export default App;

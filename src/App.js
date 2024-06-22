import './App.css';
import Navbar from './Components/navbar';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import store from './utils/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Level1 from './Components/level1';
import Level2 from './Components/level2';
import Level3 from './Components/level3';
function App() {
  const [theme, settheme] = useState(true)

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [theme])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar mode={[theme, settheme]} />,
      children: [
        {
          path: "/",
          element: <Level3 />,
        },
        {
          path: "/level2",
          element: <Level2 />,
        },
        {
          path: "/level1",
          element: <Level1 />,
        },
        
      ],
    },

  ]);

  return (
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
  );
}



export default App;

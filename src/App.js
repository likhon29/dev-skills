import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path: '/courses',
          loader: ()=> fetch(''),
          element: <Courses></Courses>,
        },
        {
          path: '/statistics',
          element: '',
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
        },
      ]

    },
    {
      path: '*',
      element: <h2>Not Found 404!!!</h2>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

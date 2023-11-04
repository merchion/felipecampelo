import { createBrowserRouter } from 'react-router-dom';

// Pages
import Layout from './pages/Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import PostList from './pages/PostList/PostList';
import Post from './pages/Post/Post';
import Search from './pages/Search/Search';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: 'posts',
        element: <PostList />
      },
      {
        path: 'posts/:slug',
        element: <Post />
      },
      {
        path: 'search',
        element: <Search />
      },
    ],
  },
]);

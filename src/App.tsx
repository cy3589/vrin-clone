import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';

const theme = createTheme({ typography: { fontFamily: 'Pretendard' } });

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;

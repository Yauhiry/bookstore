import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from 'ui';

import { router } from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);

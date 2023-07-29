import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { routes } from './routes/routes'
import { RouterProvider } from "react-router-dom";
import 'swiper/css';
// redux
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
)

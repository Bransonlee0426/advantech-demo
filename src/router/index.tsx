import * as React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default function RouterConfig() {
  const location = useLocation();
  const nodeRef = React.useRef(null);
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [],
    },
  ]);

  return element;
}

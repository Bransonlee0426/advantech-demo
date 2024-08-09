import * as React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CategoryContent from '../pages/ULISeriesSelectionGuide/CategoryContent';

export default function RouterConfig() {
  const location = useLocation();
  const nodeRef = React.useRef(null);
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path: 'serial-to-fiber-converter',
          element: '',
        },
        {
          path: 'serial-to-serial-converter',
          element: '',
        },
        {
          path: 'serial-repeater-isolator',
          element: '',
        },
        {
          path: 'surge-suppressor-data-splitter-tap',
          element: '',
        },
        {
          path: '/usb-to-serial-converter',
          element: <CategoryContent />,
        },
        {
          path: 'usb-hub-isolator',
          element: '',
        },
      ],
    },
  ]);

  return element;
}

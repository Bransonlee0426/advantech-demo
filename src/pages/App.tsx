// src/pages/App.tsx

import RouterConfig from '../router';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const App = () => {
  return <RouterConfig />;
};

export default App;

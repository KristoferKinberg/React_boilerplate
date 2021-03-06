import React from 'react';
import { useSelector } from 'react-redux';
import views from './views';

const App = () => {
  const page = useSelector(({ page }) => page);

  const Component = views[page];
  return <Component />;
};

export default App;

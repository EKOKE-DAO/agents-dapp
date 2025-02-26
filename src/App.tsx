import 'react-loading-skeleton/dist/skeleton.css';

import AppLayout from './js/components/AppLayout';
import AppContextProvider from './js/components/App/AppContext';
import AppError from './js/components/Status/AppError';
import AppSuccess from './js/components/Status/AppSuccess';

const App = () => (
  <AppContextProvider>
    <AppError />
    <AppSuccess />
    <AppLayout />
  </AppContextProvider>
);

export default App;

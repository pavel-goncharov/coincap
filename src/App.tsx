import {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from 'components/Header';
import AppRouter from 'router/AppRouter';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
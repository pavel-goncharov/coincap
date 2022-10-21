import {FC} from 'react';
import {IndexStyled} from 'styles';
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'styles/index';
import Header from 'components/UI/Header/Header';
import AppRouter from 'router/AppRouter';

const App: FC = () => {
  return (
    <BrowserRouter>
      <IndexStyled/>
      <Container>
        <Header/>
        <AppRouter/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
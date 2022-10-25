import {FC, useEffect} from 'react';
import {IndexStyled} from 'styles';
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'styles/index';
import Header from 'components/UI/Header/Header';
import AppRouter from 'router/AppRouter';
import {LocalStorageKeys} from 'constants/localStorage';
import {mockInitBagState} from 'constants/mock';
import {getItem, setItem} from 'utils/localStorage';
import {useActions} from 'hooks/useActions';
import {IBagState} from 'store/slices/bag.slice';

const App: FC = () => {
  const {initBagState} = useActions();

  useEffect(() => {
    const bag: IBagState = getItem(LocalStorageKeys.BAG);
    if(bag) {
      initBagState(bag);
    } else {
      initBagState(mockInitBagState);
      setItem(LocalStorageKeys.BAG, mockInitBagState);
    }
  }, []);
  
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
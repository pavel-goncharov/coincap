import {FC, useEffect} from 'react';
import {IndexStyled} from 'styles';
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'styles/index';
import Header from 'components/UI/Header/Header';
import AppRouter from 'router/AppRouter';
import {LocalStorageKeys} from 'constants/localStorage';
import {getDataBag, partInitBag} from 'constants/mock';
import {getItem, setItem} from 'utils/localStorage';
import {useActions} from 'hooks/useActions';
import {IBagState} from 'store/slices/bag.slice';
import {useGetAssetsQuery} from 'api/endPoints';
import {Loader} from 'components/UI/Loader/Loader.styled';

const App: FC = () => {
  const {data: assets, isLoading} = useGetAssetsQuery();
  const {initBagState, setAssets} = useActions();

  useEffect(() => {
    const bag: IBagState = getItem(LocalStorageKeys.BAG);
    if(!bag && assets) {
      setAssets(assets); 
      const initBag: IBagState = getDataBag(partInitBag, assets);
      initBagState(initBag);
      setItem(LocalStorageKeys.BAG, initBag);
    } else if (bag && assets) {
      setAssets(assets);
      const updatedBag: IBagState = getDataBag(bag, assets);
      initBagState(updatedBag);
      setItem(LocalStorageKeys.BAG, updatedBag);
    } 
  }, [assets]);

  if(isLoading) {
    return <Loader/>
  }
  
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
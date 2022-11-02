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
import {useGetAssetsQuery, useLazyGetAssetsQuery} from 'api/endPoints';
import {Loader} from 'components/UI/Loader/Loader.styled';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {IAsset} from 'types/api';

const App: FC = () => {
  const ids: string = useTypedSelector(state => state.bag.ids).join();
  const {data: assets, isLoading} = useGetAssetsQuery({ids});
  const [getAssetsQuery] = useLazyGetAssetsQuery();
  const {initBagState} = useActions();

  useEffect(() => {
    const bagLS: IBagState = getItem(LocalStorageKeys.BAG);
    if(!bagLS && assets) {
      initData(assets);
    } else if (bagLS) {
      updateData(bagLS);
    } 
  }, [assets]);

  function initData(assets: IAsset[]): void {
    const initBag: IBagState = getDataBag(partInitBag, assets);
    initBagState(initBag);
    setItem(LocalStorageKeys.BAG, initBag);
  }

  async function updateData(bagLS: IBagState): Promise<void> {
    const assets: IAsset[] = await getAssetsQuery({ids: bagLS.ids.join()}).unwrap();
    const updatedBag: IBagState = getDataBag(bagLS, assets);
    initBagState(updatedBag);
    setItem(LocalStorageKeys.BAG, updatedBag);
  } 

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
import {FC, useEffect, useState} from 'react';
import {IndexStyled} from '@/styles';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {httpBatchLink} from '@trpc/client';
import {trpc} from '@/api/trpc';
import {Container} from '@/styles/index';
import Header from '@/components/UI/Header/Header';
import AppRouter from '@/router/AppRouter';
import {LocalStorageKeys} from '@/utils/localStorage';
import {partInitBag} from '@/mock/bag.mock';
import {getItem, setItem} from '@/utils/localStorage';
import {useActions} from '@/hooks/useActions';
import {IBagState} from '@/store/slices/bag.slice';
// import {useGetAssetsQuery, useLazyGetAssetsQuery} from '@/api/endPoints';
import {Loader} from '@/components/UI/Loader/Loader.styled';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {IAsset} from '@/types/api';
import {getDataBag} from '@/utils/bag';

const App: FC = () => {
  const ids: string = useTypedSelector(state => state.bag.ids).join();
  // const {data: assets, isLoading} = useGetAssetsQuery({ids});
  // const [getAssetsQuery] = useLazyGetAssetsQuery();
  const {data: assets, isLoading} = trpc.assets.useQuery({ids});
  const {initBagState} = useActions();

  // const [queryClient] = useState(() => new QueryClient());
  // const [tRPCClient] = useState(() =>
  //   trpc.createClient({
  //     links: [
  //       httpBatchLink({
  //         url: 'http://localhost:5000/trpc'
  //       }),
  //     ],
  //   }),
  // );

  useEffect(() => {
    const bagLS = getItem<IBagState>(LocalStorageKeys.BAG);
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
    // const assets: IAsset[] = await getAssetsQuery({ids: bagLS.ids.join()}).unwrap();
    const {data: assets} = trpc.assets.useQuery({ids: bagLS.ids.join()});
    if(assets) {
      const updatedBag: IBagState = getDataBag(bagLS, assets);
      initBagState(updatedBag);
      setItem(LocalStorageKeys.BAG, updatedBag);
    }
  } 

  if(isLoading) {
    return <Loader/>
  }

  return (
    // <trpc.Provider client={tRPCClient} queryClient={queryClient}>
    // <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <IndexStyled/>
        <Container>
          <Header/>
          <AppRouter/>
        </Container>
      </BrowserRouter>
    // </QueryClientProvider>
  // </trpc.Provider>
  );
}

export default App;
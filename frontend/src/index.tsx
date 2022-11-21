import ReactDOM from 'react-dom/client';
import App from '@/App';
import {Provider} from 'react-redux';
import {store} from '@/store/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {httpBatchLink} from '@trpc/client';
import {trpc} from '@/api/trpc';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();
const tRPCClient = trpc.createClient({
  links: [
    httpBatchLink({url: 'http://localhost:5000/trpc'})
  ]
});
  

root.render(
  <trpc.Provider client={tRPCClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App/>
      </Provider>
    </QueryClientProvider>
  </trpc.Provider>
);
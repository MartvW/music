import HomePage from '@components/pages/homePage/HomePage';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HomePage />
  </QueryClientProvider>
);

export default App;

import ScrollButtons from '@components/features/scrollButtons/ScrollButtons';
import ContactPage from '@components/pages/contactPage/ContactPage';
import HomePage from '@components/pages/homePage/HomePage';
import InstagramPage from '@components/pages/instagramPage/InstagramPage';
import VideosPage from '@components/pages/youtubePage/YoutubePage';
import Seperator from '@components/primitives/seperator/Seperator';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HomePage />
    <Seperator />
    <InstagramPage />
    <Seperator />
    <VideosPage />
    <Seperator />
    <ContactPage />
    <ScrollButtons />
  </QueryClientProvider>
);

export default App;

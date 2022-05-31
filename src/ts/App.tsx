import ScrollButtons from '@components/features/scrollButtons/ScrollButtons';
import AboutPage from "@components/pages/aboutPage/AboutPage";
import ContactPage from '@components/pages/contactPage/ContactPage';
import HomePage from '@components/pages/homePage/HomePage';
import InstagramPage from '@components/pages/instagramPage/InstagramPage';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HomePage />
    <AboutPage />
    <InstagramPage />
    <ContactPage />
    <ScrollButtons />
  </QueryClientProvider>
);

export default App;

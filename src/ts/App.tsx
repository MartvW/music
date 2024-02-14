import ScrollButtons from '@components/features/scrollButtons/ScrollButtons';
import AboutPage from "@components/pages/aboutPage/AboutPage";
import ContactPage from '@components/pages/contactPage/ContactPage';
import HomePage from '@components/pages/homePage/HomePage';
import InstagramPage from '@components/pages/instagramPage/InstagramPage';
import YoutubePage from "@components/pages/youtubePage/YoutubePage";
import Seperator from '@components/primitives/seperator/Seperator';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HomePage />
    <Seperator/>
    <AboutPage />
    <Seperator/>
    <InstagramPage />
    <Seperator/>
    <YoutubePage />
    <Seperator/>
    <ContactPage />
    <ScrollButtons />
  </QueryClientProvider>
);

export default App;

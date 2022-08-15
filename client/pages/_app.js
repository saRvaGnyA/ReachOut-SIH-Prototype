import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <Dropdown/>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;

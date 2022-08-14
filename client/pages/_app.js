import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;

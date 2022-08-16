import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [font, setFont] = useState(true);
  const [fontSize, setFontSize] = useState(1);

  function changeFont() {
    setFont(!font);
  }
  function increaseFont() {
    if (fontSize !== 5) {
      setFontSize(fontSize + 1);
    }
    console.log(fontSize);
  }
  function decreaseFont() {
    if (fontSize !== 1) {
      setFontSize(fontSize - 1);
    }
    console.log(fontSize);
  }
  return (
    <ThemeProvider attribute="class">
      <div class={font ? 'font1' : 'font2'} id={`fontSize${fontSize}`}>
        <Header />
        <Component {...pageProps} />
        <Dropdown
          func={changeFont}
          fontDec={decreaseFont}
          fontInc={increaseFont}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

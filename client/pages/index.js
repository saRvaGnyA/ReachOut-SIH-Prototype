import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Home() {
  return <div>
    <div className="Header">
      <Header/>
    </div>
    <div className="Body">
      <Body/>
    </div>
    <div className="Footer">
      <Footer/>
    </div>
  </div>;
}

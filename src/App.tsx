import { Header } from "./components/Header";
import 'typeface-ubuntu';
import 'typeface-poppins';
import { Hero } from "./components/Hero";
import { Advantages } from "./components/Advantages";
import { Lead } from "./components/Lead";
import { Clients } from "./components/Clients";
import { Mobile } from "./components/Mobile";
import { AppDownload } from "./components/AppDownload";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

function App() {
 return (
  <>
   <Header />
   <Hero />
   <Advantages />
   <Lead />
   <Clients />
   <Mobile />
   <AppDownload />
   <Faq />
   <Footer />

  </>
 );
}

export default App;

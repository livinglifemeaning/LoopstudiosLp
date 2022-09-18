import useMediaQuery from "./useMediaQuery";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer"; 
function App() {
  const isDesktop = useMediaQuery("(min-width: 750px)")

  return (
    <main>
      <Header isDesktop={isDesktop}/>
      <Body isDesktop={isDesktop}/>
      <Footer isDesktop={isDesktop}/>
    </main>
  );
}

export default App;


import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateBid } from "./components/CreateBid/CreateBid";
import { Details } from "./components/Details/Details";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
  return (
    <>
      <Header />
      {/* <CreateBid></CreateBid> */}
      {/* <Home /> */}
      {/* <Catalogue></Catalogue> */}
      {/* <Details></Details> */}
      <CreateBid></CreateBid>
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      <Footer></Footer>
    </>
  );
}

export default App;

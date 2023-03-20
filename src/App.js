import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateBid } from "./components/CreateBid/CreateBid";
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
        <Catalogue></Catalogue>
        {/* <Login></Login> */}
        {/* <Register></Register> */}
    </>
  );
}

export default App;

import { Container } from "@mui/system";
import { Header } from "./components/Header/Header"; import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
  return (
    <>
      <Header />
        {/* <Home /> */}
        <Login></Login>
        {/* <Register></Register> */}
    </>
  );
}

export default App;

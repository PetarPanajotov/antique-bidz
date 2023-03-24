import { Routes, Route } from "react-router-dom";
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/create" element={<CreateBid />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;

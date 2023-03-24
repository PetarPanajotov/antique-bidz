import { StyledEngineProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateBid } from "./components/CreateBid/CreateBid";
import { Details } from "./components/Details/Details";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { NotFound } from "./components/NotFound/NotFound";
import { Register } from "./components/Register/Register";

function App() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalogue" element={<Catalogue />} />
                    <Route path="/catalogue/details/:id" element={<Details />} />
                    <Route path="/create" element={<CreateBid />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </>
    );
}

export default App;

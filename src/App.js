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
import { AntiqueProvider } from "./contexts/AntiqueContext";
import { AuthProvider } from "./contexts/AuthContext";
import { Edit } from "./components/Details/Edit/Edit";
import { Logout } from "./components/Logout/Logout";
import { GuestRouteGuard } from "./components/common/GuestRouteGuard";
import { UserRouteGuard } from "./components/common/UserRouteGuard";
import { OwnerRouteGuard } from "./components/common/OwnerRouteGuard";

function App() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <AuthProvider>
                    <AntiqueProvider>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/catalogue" element={<Catalogue />} />
                            <Route path="/catalogue/details/:id" element={<Details />} />
                            <Route element={<OwnerRouteGuard />}>
                                <Route path="/catalogue/details/:id/edit" element={<Edit />} />
                            </Route>
                            <Route element={<GuestRouteGuard />}>
                                <Route path="/create" element={<CreateBid />} />
                                <Route path="/logout" element={<Logout />} />
                            </Route>
                            <Route element={<UserRouteGuard />}>
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </AntiqueProvider>
                </AuthProvider>
            </StyledEngineProvider>
        </>
    );
}

export default App;

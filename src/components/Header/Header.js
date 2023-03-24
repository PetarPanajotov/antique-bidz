import { AppBar, Box, Toolbar, Typography, StyledEngineProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { ElevationScroll } from "./ElevationScroll";
import styles from "./Header.module.css"

export function Header() {
    return (
        <StyledEngineProvider injectFirst>
            <ElevationScroll>
                <AppBar className={styles['container']}>
                    <Toolbar disableGutters>
                        <Typography sx={{ textDecoration: 'underline' }}>AntiqueBidz</Typography>
                        <Box className={styles['nav-links-wrapper']}>
                            <Link to={"/home"}><Typography className={styles["nav-links"]}>Home</Typography></Link>
                            <Link to = {"/catalogue"}><Typography className={styles["nav-links"]}>Catalogue</Typography></Link>
                            <Link to = {"/create"}><Typography className={styles["nav-links"]}>Create Bid</Typography></Link>
                            <Link to = {"/login"}><Typography className={styles["nav-links"]}>Login</Typography></Link>
                            <Link to = {"/register"}><Typography className={styles["nav-links"]}>Register</Typography></Link>
                            <Link to = {"/logout"}><Typography className={styles["nav-links"]}>Logout</Typography></Link>
                            <Link to = {"/about"}><Typography className={styles["nav-links"]}>About Us</Typography></Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </StyledEngineProvider>
    );
};
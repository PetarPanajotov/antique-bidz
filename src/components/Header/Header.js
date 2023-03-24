import { AppBar, Box, Toolbar, Typography, StyledEngineProvider } from "@mui/material";
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
                            <a href="/home"><Typography className={styles["nav-links"]}>Home</Typography></a>
                            <a href="/catalog"><Typography className={styles["nav-links"]}>Catalog</Typography></a>
                            <a href="/login"><Typography className={styles["nav-links"]}>Login</Typography></a>
                            <a href="/register"><Typography className={styles["nav-links"]}>Register</Typography></a>
                            <a href="/logout"><Typography className={styles["nav-links"]}>Logout</Typography></a>
                            <a href="/about"><Typography className={styles["nav-links"]}>About Us</Typography></a>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </StyledEngineProvider>
    );
};
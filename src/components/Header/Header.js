import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ElevationScroll } from "./ElevationScroll";
import styles from "./Header.module.css"

export function Header() {
    const { user, auth } = useContext(AuthContext);
    return (
        <ElevationScroll>
            <AppBar className={styles['container']}>
                <Toolbar disableGutters>
                    <Typography variant="h5" sx={{ textDecoration: 'underline', fontFamily: 'Georgia, serif', paddingLeft: '10px' }}>AntiqueBidz</Typography>
                    <Box className={styles['nav-links-wrapper']}>
                        <Link to={"/"}><Typography className={styles["nav-links"]}>Home</Typography></Link>
                        <Link to={"/catalogue"}><Typography className={styles["nav-links"]}>Catalogue</Typography></Link>
                        {user ?
                            <Link to={"/create"}><Typography className={styles["nav-links"]}>Create Bid</Typography></Link>
                            :
                            <>
                                <Link to={"/login"}><Typography className={styles["nav-links"]}>Login</Typography></Link>
                                <Link to={"/register"}><Typography className={styles["nav-links"]}>Register</Typography></Link>
                            </>
                        }
                        {user &&
                            <>
                                <Link to={"/logout"}><Typography className={styles["nav-links"]}>Logout</Typography></Link>
                                <Typography className={styles["nav-text"]}>Welcome, {auth.email} </Typography>
                            </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
};
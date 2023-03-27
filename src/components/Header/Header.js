import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ElevationScroll } from "./ElevationScroll";
import styles from "./Header.module.css"

export function Header() {
    const { user, onLogout } = useContext(AuthContext);
    return (
        <ElevationScroll>
            <AppBar className={styles['container']}>
                <Toolbar disableGutters>
                    <Typography sx={{ textDecoration: 'underline' }}>AntiqueBidz</Typography>
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
                            <Link to={"javascript:void(0)"}><Typography className={styles["nav-links"]} onClick={onLogout}>Logout</Typography></Link>
                        }
                        <Link to={"/about"}><Typography className={styles["nav-links"]}>About Us</Typography></Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
};
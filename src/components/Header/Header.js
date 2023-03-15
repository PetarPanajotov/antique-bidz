import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { ElevationScroll } from "./ElevationScroll";

const sxStyles = {
    'header-nav': {
        backgroundColor: 'teal'
    },
    'header-tabs': {
        display: 'flex',
        marginLeft: 'auto'
    },
    'header-a': {
        color: "white",
        textDecoration: "underline",
        textTransform: "none",
        fontSize: "1rem",
        marginRight: "20px"
    }

}

export function Header() {
    return (
        <nav>
            <ElevationScroll>
                <AppBar sx={sxStyles['header-nav']}>
                    <Toolbar disableGutters>
                        <Typography sx={{ textDecoration: 'underline' }}>AntiqueBidz</Typography>
                        <Box sx={sxStyles['header-tabs']}>
                            <a href="/home"><Typography sx={sxStyles["header-a"]}>Home</Typography></a>
                            <a href="/catalog"><Typography sx={sxStyles["header-a"]}>Catalog</Typography></a>
                            <a href="/login"><Typography sx={sxStyles["header-a"]}>Login</Typography></a>
                            <a href="/register"><Typography sx={sxStyles["header-a"]}>Register</Typography></a>
                            <a href="/logout"><Typography sx={sxStyles["header-a"]}>Logout</Typography></a>
                            <a href="/about"><Typography sx={sxStyles["header-a"]}>About Us</Typography></a>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </nav>
    );
};
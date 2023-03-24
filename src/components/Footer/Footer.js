import { GitHub } from "@mui/icons-material";
import { AppBar, Box, Typography } from "@mui/material";
import styles from './Footer.module.css'

export function Footer() {
    return (
        <AppBar className={styles['container']}>
            <Box className={styles['wrapper']}>
                <GitHub />
                <Typography>Created by Petar</Typography>
            </Box>
        </AppBar>
    );
};
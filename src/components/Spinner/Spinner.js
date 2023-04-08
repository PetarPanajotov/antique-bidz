import { Box, CircularProgress } from "@mui/material"
import styles from './Spinner.module.css'

export function Spinner() {
    
    return (
        <Box className={styles['spinner-container']}>
            <CircularProgress size={100}/>
        </Box>
    );
};
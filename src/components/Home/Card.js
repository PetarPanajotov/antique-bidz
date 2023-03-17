import { Box, Button, StyledEngineProvider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from './Card.module.css'

export function Card() {
    return (
        <Grid item xs={4} >
            <Paper elevation= {3} className= {styles['card-wrapper']}>
                <img
                    src='https://images.thdstatic.com/productImages/5669f4a1-b700-4122-bc2e-881bccecd02a/svn/black-wood-yosemite-home-decor-wall-clocks-clkb2a147-64_1000.jpg'
                    alt='some'
                    className={styles['card-image']}
                ></img>
                <Box paddingTop= {1}>
                    <Typography variant="h6">Old CLock</Typography>
                </Box>
                <Box paddingTop= {1}>
                    <Typography variant="subtitle1">Category: clock</Typography>
                </Box>
                <Box paddingTop= {3} paddingBottom= {4}>
                    <Button variant="contained" className={styles['card-button']}>Details</Button>
                </Box>
            </Paper>
        </Grid>
    )
}
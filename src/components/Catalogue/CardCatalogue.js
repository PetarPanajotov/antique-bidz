import { Grid, Paper, Typography } from "@mui/material"
import styles from './CardCatalogue.module.css'

export function CardCatalogue() {
    return (
    <Grid item xs={12} md={6} lg={3} >
        <Paper sx={{ justifyContent: 'center', flexDirection: 'column', marginTop: '75px', width: '300px', textAlign: 'center', }}>
            <img
                src='https://images.thdstatic.com/productImages/5669f4a1-b700-4122-bc2e-881bccecd02a/svn/black-wood-yosemite-home-decor-wall-clocks-clkb2a147-64_1000.jpg'
                alt='some'
                className={styles['card-image']}
            ></img>
            <Typography variant="h5">Old clock - IV sanctuary</Typography>
            <Typography variant="subtitle1">Current Bid</Typography>
            <Typography variant="h5">$550</Typography>
            <Typography paddingTop={2}>3 hours left</Typography>
        </Paper>
    </Grid>
    )
}
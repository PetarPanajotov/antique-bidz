import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Card } from "./Card";
import styles from './Home.module.css'

export function Home() {
    return (
            <Container maxWidth="lg" className={styles['home-container']}>
                <Box className={styles['text-wrapper']}>
                    <Box paddingTop= {10}>
                        <Typography variant="h1">
                            Sell Your Antiques with Confidence
                        </Typography>
                    </Box>
                    <Box paddingTop= {10}>
                        <Typography variant="h4">
                            Looking to sell a valuable family heirloom or unique find? Look no further. Our expert team of antique appraisers and bidders is here to help you get the best price for your treasured item. With years of experience in the industry, we know how to navigate the bidding process and get you the highest possible return on your investment.
                        </Typography>
                    </Box>
                    <Box paddingTop= {4}>
                        <Button variant="contained" className={styles['home-button']}>
                            <Typography variant="h6">Get Started </Typography>
                        </Button>
                    </Box>
                </Box>
                <Box paddingTop={10} className={styles['card-wrapper']}>
                    <Typography variant="h3">Last Offers:</Typography>
                    <Grid container spacing= {8} paddingTop= {4} paddingBottom= {5}>
                        <Card />
                        <Card />
                        <Card />
                    </Grid>
                </Box>
            </Container>
    );
};
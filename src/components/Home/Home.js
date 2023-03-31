import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Card } from "./Card";
import styles from './Home.module.css';
import { useContext } from "react";
import { AntiqueContext } from "../../contexts/AntiqueContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export function Home() {
    const { antiqueData } = useContext(AntiqueContext);
    const { auth } = useContext(AuthContext);
    const lastThree = antiqueData.slice(0, 3);

    return (
        <Container maxWidth="lg" className={styles['home-container']}>
            <Box className={styles['text-wrapper']}>
                <Box paddingTop={10}>
                    <Typography variant="h1">
                        Sell Your Antiques with Confidence
                    </Typography>
                </Box>
                <Box paddingTop={10}>
                    <Typography variant="h4">
                        Looking to sell a valuable family heirloom or unique find? Look no further. Our expert team of antique appraisers and bidders is here to help you get the best price for your treasured item. With years of experience in the industry, we know how to navigate the bidding process and get you the highest possible return on your investment.
                    </Typography>
                </Box>
                <Box paddingTop={4}>
                    <Link to={auth.accessToken ? '/catalogue' : '/login'} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                        <Button variant="contained" className={styles['home-button']}>
                            <Typography variant="h6">Get Started </Typography>
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box paddingTop={10} className={styles['card-wrapper']}>
                <Typography variant="h3">Last Offers:</Typography>
                <Grid container spacing={8} paddingTop={4} paddingBottom={5}>
                    {lastThree.map(antique => <Card key={antique._id} antique={antique} />)}
                </Grid>
            </Box>
        </Container >
    );
};
import { Box, Typography, Container, Grid, Button, StyledEngineProvider } from "@mui/material";
import styles from './NotFound.module.css'

export function NotFound() {
    return (
        <StyledEngineProvider injectFirst>
            <Box className={styles['container']}>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            <Box className={styles['img-wrapper']}>
                                <img
                                    src='https://img.freepik.com/premium-vector/sad-emoticon-yellow-apps-websites_340607-156.jpg?w=2000'
                                    alt='not found'
                                    className={styles['img']}>

                                </img>
                            </Box>
                            <Typography variant="h1" className={styles['text']}>
                                Oooops!
                            </Typography>
                            <Typography variant="h2" className={styles['text']}>
                                404
                            </Typography>
                            <Typography variant="h6" className={styles['text']}>
                                The page you’re looking for doesn’t exist.
                            </Typography>
                            <Box className= {styles['button-wrapper']} >
                                <Button variant="contained" className={styles['text']}>Back Home</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </StyledEngineProvider>
    );
};
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Typography, StyledEngineProvider } from "@mui/material"
import { DeleteBid } from './Delete/Delete';
import styles from "./Details.module.css"


export function Details() {
    return (
        <StyledEngineProvider injectFirst>
            <Container maxwidth='xl'>
                <Grid container>
                    <Grid item xs={12} md={10} lg={8}>
                        <Box className={styles['title']}>
                            <Typography variant="h4">Item name here</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box className={styles['left-side-wrapper']}>
                            <Box>
                                <img
                                    src='https://assets.architecturaldigest.in/photos/600847f3b3d78db39997d9ab/16:9/w_2560%2Cc_limit/featured-1366x768.jpg'
                                    alt='some'
                                    className={styles['card-image']}
                                ></img>
                            </Box>
                            <Box className={styles['categories-title']}>
                                <Typography variant="h5">Categories:</Typography>
                            </Box>
                            <Box className={styles['categories-button-wrapper']}>
                                <Button variant="contained" className={styles['category-button']}>Furniture</Button>
                                <Typography variant="h5">&#62;</Typography>
                                <Button variant="contained" className={styles['subcategory-button']}>Sofa</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} className={styles['right-side-wrapper']}>
                        <Box className={styles['offer-information-wrapper']}>
                            <Box className={styles['end-time']}>
                                <Typography variant="subtitle2">End in: 13:21:10</Typography>
                            </Box>
                            <Box className={styles['price-wrapper']}>
                                <Box>
                                    <Typography variant="subtitle1">Price:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5">$525.00</Typography>
                                </Box>
                            </Box>
                            <Box className={styles['bid-button-wrapper']}>
                                <Button variant="contained">Place a bid</Button>
                                <DeleteBid />
                            </Box>
                            <Box>
                            </Box>
                        </Box>
                        <Box className={styles['description-wrapper']}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography>Description</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a iste nemo exercitationem, alias mollitia illum maiores quia, fuga impedit perspiciatis tempore nostrum blanditiis maxime officiis quo, dolorum accusantium ducimus illo error saepe similique autem. Optio in eaque velit ipsam natus facere fugit, repellendus necessitatibus quis magnam praesentium a esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a iste nemo exercitationem, alias mollitia illum maiores quia, fuga impedit perspiciatis tempore nostrum blanditiis maxime officiis quo, dolorum accusantium ducimus illo error saepe similique autem. Optio in eaque velit ipsam natus facere fugit, repellendus necessitatibus quis magnam praesentium a esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a iste nemo exercitationem, alias mollitia illum maiores quia, fuga impedit perspiciatis tempore nostrum blanditiis maxime officiis quo, dolorum accusantium ducimus illo error saepe similique autem. Optio in eaque velit ipsam natus facere fugit, repellendus necessitatibus quis magnam praesentium a esse</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography>Highest Bids</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Veri - $520</Typography>
                                    <Typography>Meri - $510</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ textAlign: 'center', paddingTop: '35px' }}>
                            <Typography variant='h4'>Other items from this seller:</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </StyledEngineProvider>
    );
};
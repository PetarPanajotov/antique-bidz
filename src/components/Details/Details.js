import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRemainingTime } from '../../hooks/useRemainingTime';
import { getOne } from '../../services/antiqueService';
import { dateConvert } from '../../utils/dateUtil';
import { DeleteBid } from './Delete/Delete';
import styles from "./Details.module.css";

export function Details() {
    const [antiqueDetails, setAntiqueDetails] = useState({});
    const {formattedTime, setRemainingTime} = useRemainingTime(dateConvert(antiqueDetails.bidDetails?.endDate));
    const params = useParams();
    
    useEffect(() => {
        getOne(params.id).then(data => {
            setRemainingTime(dateConvert(data.bidDetails.endDate))
            setAntiqueDetails(data)})
    }, [params.id]);

    return (
            <Container maxwidth='xl'>
                <Grid container>
                    <Grid item xs={12} md={10} lg={8}>
                        <Box className={styles['title']}>
                            <Typography variant="h4">{antiqueDetails.name}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box className={styles['left-side-wrapper']}>
                            <Box>
                                <img
                                    src={antiqueDetails.imgURL}
                                    alt='some'
                                    className={styles['card-image']}
                                ></img>
                            </Box>
                            <Box className={styles['categories-title']}>
                                <Typography variant="h5">Categories:</Typography>
                            </Box>
                            <Box className={styles['categories-button-wrapper']}>
                                <Button variant="contained" className={styles['category-button']}>{antiqueDetails.category}</Button>
                                <Typography variant="h5">&#62;</Typography>
                                <Button variant="contained" className={styles['subcategory-button']}>{antiqueDetails.subCategory}</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} className={styles['right-side-wrapper']}>
                        <Box className={styles['offer-information-wrapper']}>
                            <Box className={styles['end-time']}>
                                <Typography variant="subtitle2">End in: {formattedTime}</Typography>
                            </Box>
                            <Box className={styles['price-wrapper']}>
                                <Box>
                                    <Typography variant="subtitle1">Price:</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5">${antiqueDetails.bidDetails?.startBid}</Typography>
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
                                    <Typography>{antiqueDetails.description}</Typography>
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
            </Container>
    );
};
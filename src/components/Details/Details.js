import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRemainingTime } from '../../hooks/useRemainingTime';
import { getOne } from '../../services/antiqueService';
import { dateConvert } from '../../utils/dateUtil';
import { DeleteBid } from './Delete/Delete';
import styles from "./Details.module.css";
import { AuthContext } from '../../contexts/AuthContext';
import { AntiqueContext } from '../../contexts/AntiqueContext';
import { getAllBids, postCreateBid } from '../../services/bidService';
import { Spinner } from '../Spinner/Spinner';

export function Details() {
    const { auth, user } = useContext(AuthContext);
    const { onDeleteAntique, handleUpdateCurrentHighestBid, loading, setLoading } = useContext(AntiqueContext);
    const [antiqueDetails, setAntiqueDetails] = useState({});
    const [bid, setBid] = useState('');
    const { formattedTime, setRemainingTime } = useRemainingTime(dateConvert(antiqueDetails.bidDetails?.endDate));
    const params = useParams();
    const isOwner = antiqueDetails._ownerId === auth._id;
    const handleChange = (e) => {
        setBid(e.target.value);
    };

    useEffect(() => {
        setLoading(true)
        Promise.all([
            getOne(params.id),
            getAllBids(params.id)]).then(([antique, bids]) => {
                //if startBid price is changed and there are bids less than startBid
                bids = bids.filter(x => antique.bidDetails.startBid > x.bid ? false : true)
                if (bids.length > 0) {
                    antique.bidDetails.startBid = bids[0].bid
                };
                setLoading(false);
                setAntiqueDetails({ ...antique, bids })
                setRemainingTime(dateConvert(antique.bidDetails.endDate))
            })
    }, [params.id, setRemainingTime]);

    if (loading) {
        return (
            <>
                <Spinner />
            </>
        );
    };

    const onPlaceBidClick = async (e) => {
        if (!bid) {
            return
        };
        const currentHighest = Number(antiqueDetails.bidDetails.startBid) + Number(bid);
        const bidValues = await postCreateBid(antiqueDetails._id, currentHighest, auth.accessToken);
        setAntiqueDetails((state) => ({
            ...state,
            bidDetails: { ...state.bidDetails, startBid: bidValues.bid },
            bids: [{ author: { email: auth.email }, ...bidValues }, ...state.bids]
        }));
        handleUpdateCurrentHighestBid(antiqueDetails._id, currentHighest);
    };

    return (
        <Container maxwidth='xl'>
            <Grid container>
                <Grid item xs={12} md={10} lg={8}>
                    <Box className={styles['title']}>
                        <Typography variant="h4">{antiqueDetails.antiqueName}</Typography>
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
                            {!isOwner && user &&
                                <Box paddingTop={1}>
                                    <ToggleButtonGroup
                                        value={bid}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Platform"
                                    >
                                        <ToggleButton value='5'>+$5</ToggleButton>
                                        <ToggleButton value='10'>+$10</ToggleButton>
                                        <ToggleButton value='20'>+$20</ToggleButton>
                                        <ToggleButton value='50'>+$50</ToggleButton>
                                        <ToggleButton value='100'>+$100</ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
                            }
                        </Box>
                        <Box className={styles['bid-button-wrapper']}>
                            {!isOwner && user &&
                                <Button variant="contained" onClick={onPlaceBidClick}>Place a bid</Button>
                            }
                            {isOwner &&
                                <>
                                    <DeleteBid token={auth.accessToken} antiqueId={antiqueDetails._id} onDeleteAntique={onDeleteAntique} />
                                    <Link to={`/catalogue/details/${antiqueDetails._id}/edit`}>
                                        <Button variant='contained' className={styles['button-delete']}>Edit</Button>
                                    </Link>
                                </>
                            }
                        </Box>
                        <Box>
                        </Box>
                    </Box>
                    <Box className={styles['description-wrapper']}>
                        <Accordion
                            defaultExpanded={true}
                        >
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
                                expanded
                            >
                                <Typography>Highest Bids</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {antiqueDetails.bids?.length > 0 ? antiqueDetails.bids?.map(x => <Typography key={x._id}>{x.author.email} - ${x.bid}</Typography>)
                                    : <Typography variant='h4' sx={{ textAlign: 'center' }}>There are no bids</Typography>}
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
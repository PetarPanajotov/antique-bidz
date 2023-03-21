import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Typography } from "@mui/material"
import styles from "./Details.module.css"

export function Details() {
    return (
        <Container maxwidth='xl' sx={{ backgroundColor: '#FAEBD7', height: '100%' }}>
            <Grid container>
                <Grid item xs={12} md={10} lg={8}>
                    <Box sx={{ paddingTop: '123px', textAlign: 'left' }}>
                        <Typography variant="h4">Item name here</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ width: '400px', paddingTop: 2 }}>
                        <Box>
                            <img
                                src='https://images.thdstatic.com/productImages/5669f4a1-b700-4122-bc2e-881bccecd02a/svn/black-wood-yosemite-home-decor-wall-clocks-clkb2a147-64_1000.jpg'
                                alt='some'
                                className={styles['card-image']}
                            ></img>
                        </Box>
                        <Box sx={{ paddingTop: '10px' }}>
                            <Typography variant="h5">Categories:</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                            <Button variant="contained" sx={{ borderRadius: '45px', mr: '15px' }}>Furniture</Button>
                            <Typography variant="h5">&#62;</Typography>
                            <Button variant="contained" sx={{ borderRadius: '45px', ml: '15px' }}>Sofa</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}  sx= {{ paddingTop: 2}}>
                    <Box sx={{ backgroundColor: 'gray' }}>
                        <Box sx={{ textAlign: 'right', paddingRight: '10px', paddingTop: '10px' }}>
                            <Typography variant="subtitle2">End in: 13:21:10</Typography>
                        </Box>
                        <Box sx={{ paddingLeft: '10px', paddingTop: '30px' }}>
                            <Typography variant="subtitle1">Price:</Typography>
                        </Box>
                        <Box sx={{ paddingLeft: '10px' }}>
                            <Typography variant="h5">$525.00</Typography>
                        </Box>
                        <Box sx={{ padding: '10px' }}>
                            <Button variant="contained">Place a bid</Button>
                        </Box>
                    </Box>
                    <Box sx={{ paddingTop: '10px' }}>
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
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx= {{textAlign: 'center', paddingTop: '35px'}}>
                        <Typography variant='h4'>Other items from this seller:</Typography>
                    </Box>
                </Grid>
                <Grid item xs = {3}>

                </Grid>
            </Grid>
        </Container >
    );
};
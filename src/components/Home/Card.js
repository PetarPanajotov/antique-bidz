import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from './Card.module.css'
import { useRemainingTime } from "../../hooks/useRemainingTime";
import { dateConvert } from "../../utils/dateUtil";
import { Link } from "react-router-dom";

export function Card({ antique }) {
    const { formattedTime } = useRemainingTime(dateConvert(antique.bidDetails.endDate));

    return (
        <Grid item xs={12} md={6} lg={4} >
            <Paper className={styles['card-wrapper']}>
                <Link to={`/catalogue/details/${antique._id}`} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    <Box>
                        <Box>
                            <img
                                src={antique.imgURL}
                                alt=''
                                className={styles['card-image']}
                            ></img>
                        </Box>
                        <Box className={styles['card-name']}>
                            <Typography variant="h6">{antique.antiqueName}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1">Current Bid</Typography>
                            <Typography variant="h5">${antique.bidDetails.startBid}</Typography>
                            <Typography paddingTop={2}>End in: {formattedTime}</Typography>
                        </Box>
                    </Box>
                </Link>
            </Paper>
        </Grid >
    )
}
import { Grid, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { useRemainingTime } from "../../hooks/useRemainingTime";
import { dateConvert } from "../../utils/dateUtil";
import styles from './CardCatalogue.module.css';

export function CardCatalogue({ antique }) {
    const {formattedTime} = useRemainingTime(dateConvert(antique.bidDetails.endDate));

    return (
        <Grid item xs={12} md={6} lg={3} >
            <Link to={`/catalogue/details/${antique._id}`} style={{ textDecoration: "none" }}>
                <Paper className={styles['card-wrapper']}>
                    <img
                        src={antique.imgURL}
                        alt='some'
                        className={styles['card-image']}
                    ></img>
                    <Typography variant="h6">{antique.antiqueName}</Typography>
                    <Typography variant="subtitle1">Current Bid</Typography>
                    <Typography variant="h5">${antique.bidDetails.startBid}</Typography>
                    <Typography paddingTop={2}>End in: {formattedTime}</Typography>
                </Paper>
            </Link>
        </Grid>
    );
};
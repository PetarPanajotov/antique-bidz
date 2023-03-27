import { Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dateConvert } from "../../utils/dateUtil";
import styles from './CardCatalogue.module.css'

export function CardCatalogue({ antique }) {
    const [remainingTime, setRemainingTime] = useState(dateConvert(antique.bidDetails.endDate));

    useEffect(() => {
        const interval = setInterval(() => {
            let [hours, minutes, seconds] = remainingTime;
            if (seconds === 0) {
                minutes--;
                seconds = 60;
            }
            if (minutes === 0) {
                hours--;
                minutes = 59;
            }
            seconds--;
            setRemainingTime([hours, minutes, seconds]);
        }, 1000);
        return () => clearInterval(interval);
    }, [remainingTime]);

    const formattedTime = `${remainingTime[0].toString().padStart(2, "0")}:${remainingTime[1].toString().padStart(2, "0")}:${remainingTime[2].toString().padStart(2, "0")}`;

    return (
        <Grid item xs={12} md={6} lg={3} >
            <Link to={`/catalogue/details/${antique._id}`} style={{ textDecoration: "none" }}>
                <Paper className={styles['card-wrapper']}>
                    <img
                        src={antique.imgURL}
                        alt='some'
                        className={styles['card-image']}
                    ></img>
                    <Typography variant="h6">{antique.name}</Typography>
                    <Typography variant="subtitle1">Current Bid</Typography>
                    <Typography variant="h5">${antique.bidDetails.startBid}</Typography>
                    <Typography paddingTop={2}>End in: {formattedTime}</Typography>
                </Paper>
            </Link>
        </Grid>
    );
};
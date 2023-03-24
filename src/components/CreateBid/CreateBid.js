import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography, Container} from "@mui/material";
import styles from "./CreateBid.module.css"


export function CreateBid() {
    return (
            <Container maxWidth='lg' className={styles['container']}>
                <Paper elevation={23}>
                    <Box className={styles['text-wrapper']}>
                        <Typography variant="h3">Create a Bid</Typography>
                    </Box>
                    <Grid container>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box mx='auto' className={styles['image-wrapper']}>
                                <img
                                    src="http://static1.squarespace.com/static/5898e29c725e25e7132d5a5a/58aa11bc9656ca13c4524c68/58aa11e99656ca13c45253e2/1487540713345/600x400-Image-Placeholder.jpg?format=original"
                                    alt='Preview'
                                    className={styles['create-image']}>
                                </img>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField variant="outlined" label="Antique Name" className={styles['create-input']}></TextField>
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField variant="outlined" label="Image URL" className={styles['create-input']}></TextField>
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField variant="outlined" label="Category" className={styles['create-input']}></TextField>
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField variant="outlined" label="Sub Category" className={styles['create-input']}></TextField>
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField variant="outlined" label="Starting Bid Price" className={styles['create-input']}></TextField>
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField variant="outlined" multiline label="Description" className={styles['create-input']}></TextField>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Box className={styles['button-wrapper']}>
                                <Button variant="contained" className={styles['create-button']}>Create</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
    );
};

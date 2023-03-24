import { Box, Button, Grid, Modal, Typography, StyledEngineProvider } from "@mui/material";
import React from "react";
import styles from './Delete.module.css';

export function DeleteBid() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <StyledEngineProvider injectFirst>
            <Box>
                <Button variant='contained' className={styles['button-delete']} onClick={handleOpen}>Delete</Button>
                <Modal
                    open={open}
                >
                    <Box className={styles['delete-container']}>
                        <Grid container spacing={3} className={styles['delete-wrapper']}>
                            <Grid item xs={12}>
                                <Box>
                                    <Typography variant="h5">Are you sure you want to delete this item? Once deleted, all bids data will be lost!</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box>
                                    <Button variant='contained' className={`${styles['button-delete']} ${styles['button-conformation']}`}>Delete</Button>
                                    <Button variant='contained' className={styles['button-cancel']}>Cancel</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </Box>
        </StyledEngineProvider>
    );
};
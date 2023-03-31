import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import styles from './Delete.module.css';
import { deleteOne } from "../../../services/antiqueService";
import { useNavigate } from "react-router-dom";

export function DeleteBid({ token, antiqueId, onDeleteAntique }) {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    async function onDelete(e) {
        await deleteOne(antiqueId, token);
        navigate('/catalogue');
        onDeleteAntique(antiqueId);
        setOpen(false);
    };

    function onCancel(e) {
        setOpen(false)
    };

    return (
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
                                <Button variant='contained'
                                    className={`${styles['button-delete']} ${styles['button-conformation']}`}
                                    onClick={onDelete}>
                                    Delete
                                </Button>
                                <Button
                                    variant='contained'
                                    className={styles['button-cancel']}
                                    onClick={onCancel}>
                                    Cancel
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Box>
    );
};
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: '#FBE6D1',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function DeleteBid() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box>
            <Button variant = 'contained' sx = {{backgroundColor: 'red'}}onClick={handleOpen}>Delete</Button>
            <Modal
                open={open}
            >
                <Box sx={style}>
                    <Grid container spacing={3} sx={{ justifyContent: 'center', textAlign: 'center' }}>
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="h5">Are you sure you want to delete this item? Once deleted, all bids data will be lost!</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Button variant = 'contained' sx = {{marginRight: '55px', backgroundColor: 'red'}}>Delete</Button>
                                <Button variant = 'contained' sx = {{backgroundColor: 'green'}}>Cancel</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Box>
    );
};
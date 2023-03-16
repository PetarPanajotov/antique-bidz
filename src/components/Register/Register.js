import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";

export function Register() {
    return (
        <form>
            <Container>
                <Grid paddingTop={'25vh'} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    <Paper elevation={11} sx={{ backgroundColor: 'none', flexDirection: 'column', width: '400px' }}>
                        <Box paddingTop={3}>
                            <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                <Avatar sx={{ m: 1, bgcolor: 'purple' }}>
                                    <LockOutlined></LockOutlined>
                                </Avatar>
                            </Box>
                            <Typography variant="h3">Sign up</Typography>
                        </Box>
                        <Box paddingTop={5}>
                            <TextField id="filled-basic" label="Email" variant="outlined" />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField id="filled-basic" label="Password" variant="outlined" />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField id="filled-basic" label="Repeat password" variant="outlined" />
                        </Box>
                        <Box paddingTop={5}>
                            <Button variant="contained">Sign up</Button>
                        </Box>
                        <Box paddingTop={2}>
                            <a href = '/login'><Typography>Already have account? Sign in</Typography></a>
                        </Box>
                    </Paper>
                </Grid >
            </Container>
        </form>
    );
};
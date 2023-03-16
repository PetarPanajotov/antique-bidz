import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";

export function Login() {
    return (
        <form>
            <Container>
                <Grid paddingTop={'25vh'} paddingBottom={'25vh'} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    <Paper elevation={11} sx={{ backgroundColor: 'none', flexDirection: 'column', width: '400px' }}>
                        <Box paddingTop={3}>
                            <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                <Avatar sx={{ m: 1, bgcolor: 'purple' }}>
                                    <LockOutlined/>
                                </Avatar>
                            </Box>
                            <Typography variant="h3">Sign in</Typography>
                        </Box>
                        <Box paddingTop={5}>
                            <TextField id="filled-basic" label="Email" variant="outlined" />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField id="filled-basic" label="Password" variant="outlined" />
                        </Box>
                        <Box paddingTop={5}>
                            <Button variant="contained">Sign in</Button>
                        </Box>
                        <Box paddingTop={2} margin = {2}>
                            <a href = '/register'><Typography>You dont have an account? Sign up</Typography></a>
                        </Box>
                    </Paper>
                </Grid >
            </Container>
        </form>
    );
};
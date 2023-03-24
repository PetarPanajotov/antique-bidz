import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, TextField, Typography, Container } from "@mui/material";
import styles from './Login.module.css'

export function Login() {
    return (
            <Container maxWidth='xs'>
                <Box className={styles['container']}>
                    <Paper elevation={11} className={styles['form-wrapper']}>
                        <Box paddingTop={3}>
                            <Box className={styles['avatar-wrapper']}>
                                <Avatar className={styles['avatar']}>
                                    <LockOutlined />
                                </Avatar>
                            </Box>
                            <Typography variant="h3" className={styles['title-h3']}>Sign in</Typography>
                        </Box>
                        <Box paddingTop={5}>
                            <TextField className={styles['form-input']} id="filled-basic" label="Email" variant="outlined" />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField className={styles['form-input']} id="filled-basic" label="Password" variant="outlined" />
                        </Box>
                        <Box paddingTop={5}>
                            <Button className={styles['form-button']} variant="contained">Sign in</Button>
                        </Box>
                        <Box paddingTop={2} paddingBottom={2}>
                            <a href='/register'><Typography>You dont have an account? Sign up</Typography></a>
                        </Box>
                    </Paper>
                </Box>
            </Container>
    );
};
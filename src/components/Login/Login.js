import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, TextField, Typography, Container, Alert } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import styles from './Login.module.css'
import { useErrorNotification } from "../../hooks/useErrorNotification";

export function Login() {
    const { onSubmitLogin } = useContext(AuthContext);
    const { errorNotification, showNotification } = useErrorNotification('');

    const { formValues, onChange, resetFormValues } = useForm({
        email: '',
        password: ''
    });


    return (
        <form onSubmit={(e) => onSubmitLogin(e, formValues, resetFormValues, showNotification)}>
            <Container maxWidth='xs'>
                <Box className={styles['container']}>
                    <Paper elevation={11} className={styles['form-wrapper']}>
                        <Box>
                            <Box height={'50px'}>
                                {errorNotification &&
                                    <Alert severity="error">{errorNotification}</Alert>
                                }
                            </Box>
                            <Box className={styles['avatar-wrapper']} paddingTop={2}>
                                <Avatar className={styles['avatar']}>
                                    <LockOutlined />
                                </Avatar>
                            </Box>
                            <Typography variant="h3" className={styles['title-h3']}>Sign in</Typography>
                        </Box>
                        <Box paddingTop={5}>
                            <TextField
                                className={styles['form-input']}
                                label={<span className={styles['form-input-label']}>Email</span>}
                                variant="outlined"
                                name="email"
                                value={formValues.email}
                                onChange={onChange}
                            />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                type='password'
                                label={<span className={styles['form-input-label']}>Password</span>}
                                variant="outlined"
                                name="password"
                                value={formValues.password}
                                onChange={onChange}
                            />
                        </Box>
                        <Box paddingTop={5}>
                            <Button
                                className={styles['form-button']}
                                variant="contained"
                                type="submit">Sign in</Button>
                        </Box>
                        <Box paddingTop={2} paddingBottom={2}>
                            <a href='/register'><Typography>You dont have an account? Sign up</Typography></a>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </form>
    );
};
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, TextField, Typography, Container, Alert } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import styles from './Register.module.css'
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useErrorNotification } from "../../hooks/useErrorNotification";

export function Register() {
    const { onSubmitRegister } = useContext(AuthContext);
    const { errorNotification, showNotification } = useErrorNotification('')
    const { formValues, onChange, resetFormValues } = useForm({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: ''
    });

    return (
        <form onSubmit={(e) => onSubmitRegister(e, formValues, resetFormValues, showNotification)}>
            <Container maxWidth='xs' >
                <Box className={styles['container']}>
                    <Paper elevation={11} className={`${styles['form-wrapper']}`}>
                        <Box height={'50px'}>
                            {errorNotification &&
                                <Alert severity="error">{errorNotification}</Alert>
                            }
                        </Box>
                        <Box>
                            <Box className={styles['avatar-wrapper']}>
                                <Avatar className={styles['avatar']}>
                                    <LockOutlined />
                                </Avatar>
                            </Box>
                            <Typography variant="h3" className={styles['title-h3']}>Sign up</Typography>
                        </Box>
                        <Box paddingTop={5}>
                            <TextField
                                className={styles['form-input']}
                                name="email"
                                label={<span className={styles['form-input-label']}>Email</span>}
                                variant="outlined"
                                autoComplete="off"
                                value={formValues.email}
                                onChange={onChange} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="firstName"
                                label={<span className={styles['form-input-label']}>First Name</span>}
                                variant="outlined"
                                autoComplete="off"
                                value={formValues.firstName}
                                onChange={onChange} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="lastName"
                                label={<span className={styles['form-input-label']}>Last Name</span>}
                                variant="outlined"
                                autoComplete="off"
                                value={formValues.lastName}
                                onChange={onChange} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="password"
                                type="password"
                                label={<span className={styles['form-input-label']}>Password</span>}
                                variant="outlined"
                                value={formValues.password}
                                onChange={onChange} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="repeatPassword"
                                type="password"
                                label={<span className={styles['form-input-label']}>Repeat Password</span>}
                                variant="outlined"
                                value={formValues.repeatPassword}
                                onChange={onChange} />
                        </Box>
                        <Box paddingTop={5}>
                            <Button
                                className={styles['form-button']}
                                type='submit'
                                variant="contained">
                                Sign up
                            </Button>
                        </Box>
                        <Box paddingTop={2} paddingBottom={2}>
                            <a href='/login'><Typography>Already have account? Sign in</Typography></a>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </form>
    );
};
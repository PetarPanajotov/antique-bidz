import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, TextField, Typography, Container, Alert } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import styles from './Register.module.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useErrorNotification } from "../../hooks/useErrorNotification";
import { validateAuth } from "../../utils/validator";

export function Register() {
    const { onSubmitRegister } = useContext(AuthContext);
    const { errorNotification, showNotification } = useErrorNotification('')
    const [errors, setErrors] = useState({})
    const { formValues, onChange, resetFormValues } = useForm({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: ''
    });

    const onBlurErrorMessage = (e) => {
        const errorMessage = validateAuth(e.target);
        setErrors(state => ({ ...state, [e.target.name]: errorMessage }))
    };
    return (
        <form onSubmit={(e) => onSubmitRegister(e, formValues, resetFormValues, showNotification, errors)}>
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
                                required={true}
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                                onChange={onChange}
                                onBlur={onBlurErrorMessage} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="firstName"
                                label={<span className={styles['form-input-label']}>First Name</span>}
                                variant="outlined"
                                autoComplete="off"
                                value={formValues.firstName}
                                required={true}
                                error={Boolean(errors.firstName)}
                                helperText={errors.firstName}
                                onChange={onChange}
                                onBlur={onBlurErrorMessage} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="lastName"
                                label={<span className={styles['form-input-label']}>Last Name</span>}
                                variant="outlined"
                                autoComplete="off"
                                value={formValues.lastName}
                                required={true}
                                error={Boolean(errors.lastName)}
                                helperText={errors.lastName}
                                onChange={onChange}
                                onBlur={onBlurErrorMessage} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="password"
                                type="password"
                                label={<span className={styles['form-input-label']}>Password</span>}
                                variant="outlined"
                                value={formValues.password}
                                required={true}
                                error={Boolean(errors.password)}
                                helperText={errors.password}
                                onChange={onChange}
                                onBlur={onBlurErrorMessage} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="repeatPassword"
                                type="password"
                                label={<span className={styles['form-input-label']}>Repeat Password</span>}
                                variant="outlined"
                                value={formValues.repeatPassword}
                                required={true}
                                error={Boolean(errors.repeatPassword)}
                                helperText={errors.repeatPassword}
                                onChange={onChange}
                                onBlur={onBlurErrorMessage} />
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
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, TextField, Typography, Container } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import styles from './Register.module.css'
import { register } from "../../services/authService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Register() {
    const navigate = useNavigate()
    const { setAuth } = useContext(AuthContext);

    const { formValues, onChange } = useForm({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: ''
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await register({ formValues });
            setAuth(data);
            navigate('/')
        } catch (err) {
            console.log(err.message)
        };
    };

    return (
        <form onSubmit={onSubmit}>
            <Container maxWidth='xs' >
                <Box className={styles['container']}>
                    <Paper elevation={11} className={`${styles['form-wrapper']}`}>
                        <Box paddingTop={3}>
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
                                value={formValues.name}
                                onChange={onChange} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="firstName"
                                label={<span className={styles['form-input-label']}>First Name</span>}
                                variant="outlined"
                                autoComplete="off"
                                value={formValues.name}
                                onChange={onChange} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="lastName"
                                label={<span className={styles['form-input-label']}>Last Name</span>}
                                variant="outlined"
                                autoComplete="off"
                                value={formValues.name}
                                onChange={onChange} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="password"
                                type="password"
                                label={<span className={styles['form-input-label']}>Password</span>}
                                variant="outlined"
                                value={formValues.name}
                                onChange={onChange} />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField
                                className={styles['form-input']}
                                name="repeatPassword"
                                type="password"
                                label={<span className={styles['form-input-label']}>Repeat Password</span>}
                                variant="outlined"
                                value={formValues.name}
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
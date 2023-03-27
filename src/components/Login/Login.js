import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, TextField, Typography, Container } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/authService";
import styles from './Login.module.css'

export function Login() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const { formValues, onChange } = useForm({
        email: '',
        password: ''
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await login({ formValues })
        setAuth(data);
        navigate('/');
    };

    return (
        <form onSubmit={onSubmit}>
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
                            <TextField
                                className={styles['form-input']}
                                label="Email"
                                variant="outlined"
                                name="email"
                                value={formValues.email}
                                onChange={onChange}
                            />
                        </Box>
                        <Box paddingTop={2}>
                            <TextField className={styles['form-input']}
                                type='password'
                                label="Password"
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
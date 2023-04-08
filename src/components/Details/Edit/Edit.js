import { Box, Button, Grid, Paper, TextField, Typography, Container, InputLabel, Select, FormControl, MenuItem, Alert } from "@mui/material";
import styles from "./Edit.module.css"
import { useContext, useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { categoriesOptions } from "../../../utils/selectOptions";
import { editDurationOptions } from "../../../utils/selectOptions";
import { getOne } from "../../../services/antiqueService";
import { useParams } from "react-router-dom";
import { AntiqueContext } from "../../../contexts/AntiqueContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useErrorNotification } from "../../../hooks/useErrorNotification";
import { Spinner } from "../../Spinner/Spinner";

export function Edit() {
    const { onEditAntiqueSubmit, errors, onBlurErrorMessage, loading, setLoading } = useContext(AntiqueContext);
    const { auth } = useContext(AuthContext);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const categoryOptions = Object.keys(categoriesOptions);
    const { errorNotification, showNotification } = useErrorNotification('');
    const [initialDate, setInitialDate] = useState('');
    const { formValues, onChange, changeValues } = useForm({
        antiqueName: '',
        imgURL: '',
        category: '',
        subCategory: '',
        bidDetails: {
            startBid: '',
            endDate: ''
        },
        description: ''
    });

    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        getOne(id)
            .then(data => {
                setInitialDate(data.bidDetails.endDate);
                changeValues({...data, bidDetails: {...data.bidDetails, endDate: ''}});
                setSubCategoryOptions(categoriesOptions[data.category])
                setLoading(false)
            })
            .catch(err =>  console.log(err.message));
    }, [id]);

    useEffect(() => {
        setSubCategoryOptions(categoriesOptions[formValues.category]);
    }, [formValues.category]);

    if (loading) {
        return (
            <>
                <Spinner />
            </>
        );
    };


    return (
        <form onSubmit={(e) => onEditAntiqueSubmit(e, id, formValues, auth.accessToken, showNotification, initialDate)}>
            <Container maxWidth='lg' className={styles['container']}>
                <Paper elevation={23}>
                <Box height={'50px'}>
                        {errorNotification &&
                            <Alert severity="error">{errorNotification}</Alert>
                        }
                    </Box>
                    <Box className={styles['text-wrapper']}>
                        <Typography variant="h3">Edit a Bid</Typography>
                    </Box>
                    <Grid container>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box mx='auto' className={styles['image-wrapper']}>
                                <img
                                    src={formValues.imgURL}
                                    alt='Preview'
                                    className={styles['create-image']}>
                                </img>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box>
                                <FormControl>
                                <Box className={styles['input-wrapper']}>
                                    <TextField
                                        variant="outlined"
                                        label="Antique Name"
                                        name="antiqueName"
                                        value={formValues.antiqueName}
                                        required={true}
                                        error={Boolean(errors.antiqueName)}
                                        helperText={errors.antiqueName}
                                        onBlur={(e) => onBlurErrorMessage(e)}
                                        onChange={onChange}
                                        className={styles['create-input']}
                                    />
                                </Box>
                                </FormControl>
                                <Box className={styles['input-wrapper']}>
                                    <TextField
                                        variant="outlined"
                                        label="Image URL"
                                        name="imgURL"
                                        value={formValues.imgURL}
                                        required={true}
                                        error={Boolean(errors.imgURL)}
                                        helperText={errors.imgURL}
                                        onBlur={(e) => onBlurErrorMessage(e)}
                                        onChange={onChange}
                                        className={styles['create-input']}
                                    />
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <FormControl className={styles['create-input']}>
                                        <InputLabel id='category-label'>Category</InputLabel>
                                        <Select
                                            labelId="category-label"
                                            label="Category"
                                            name="category"
                                            value={formValues.category}
                                            required={true}
                                            error={Boolean(errors.category)}
                                            onBlur={(e) => onBlurErrorMessage(e)}
                                            onChange={onChange}
                                        >
                                            {categoryOptions.map(x => <MenuItem key={x} value={x}>{x}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <FormControl className={styles['create-input']}>
                                        <InputLabel id='sub-category-label'>Sub Category</InputLabel>
                                        <Select
                                            labelId="sub-category-label"
                                            label="Sub Category"
                                            name="subCategory"
                                            value={formValues.subCategory}
                                            required={true}
                                            error={Boolean(errors.subCategory)}
                                            onBlur={(e) => onBlurErrorMessage(e)}
                                            onChange={onChange}
                                        >
                                            {subCategoryOptions && subCategoryOptions.map(x => <MenuItem key={x} value={x}>{x}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField
                                        variant="outlined"
                                        label="Starting Bid Price"
                                        name="startBid"
                                        value={formValues.bidDetails.startBid}
                                        required={true}
                                        error={Boolean(errors.startBid)}
                                        helperText={errors.startBid}
                                        onBlur={(e) => onBlurErrorMessage(e)}
                                        onChange={onChange}
                                        className={styles['create-input']}
                                    />
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <FormControl className={styles['create-input']}>
                                        <InputLabel id='bid-duration-label'>Bid Duration</InputLabel>
                                        <Select
                                            labelId="bid-duration-label"
                                            label='Extend bid duration'
                                            name='endDate'
                                            value={formValues.bidDetails.endDate}
                                            required={true}
                                            error={Boolean(errors.endDate)}
                                            onBlur={(e) => onBlurErrorMessage(e)}
                                            onChange={onChange}
                                        >
                                            {editDurationOptions.map(x => <MenuItem key={x} value={x}>{x} Hours</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField
                                        variant="outlined"
                                        multiline
                                        label="Description"
                                        name="description"
                                        value={formValues.description}
                                        required={true}
                                        error={Boolean(errors.description)}
                                        helperText={errors.description}
                                        onBlur={(e) => onBlurErrorMessage(e)}
                                        onChange={onChange}
                                        className={styles['create-input']}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Box className={styles['button-wrapper']}>
                                <Button variant="contained" className={styles['create-button']} type='submit'>Edit</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </form>
    );
};
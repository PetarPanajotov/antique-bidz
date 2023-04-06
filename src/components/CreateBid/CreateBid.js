import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography, Container, InputLabel, Select, FormControl, MenuItem, Alert } from "@mui/material";
import styles from "./CreateBid.module.css";
import { categoriesOptions, durationOptions } from "../../utils/selectOptions";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { AntiqueContext } from "../../contexts/AntiqueContext";
import { useErrorNotification } from "../../hooks/useErrorNotification";

export function CreateBid() {
    const { auth } = useContext(AuthContext);
    const { onCreateAntiqueSubmit, onBlurErrorMessage, errors } = useContext(AntiqueContext);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const { errorNotification, showNotification } = useErrorNotification('');
    const { formValues, onChange } = useForm({
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

    const categoryOptions = Object.keys(categoriesOptions);

    useEffect(() => {
        setSubCategoryOptions(categoriesOptions[formValues.category]);
    }, [formValues.category]);

    return (
        <form onSubmit={(e) => onCreateAntiqueSubmit(e, formValues, auth.accessToken, showNotification)}>
            <Container maxWidth='lg' className={styles['container']}>
                <Paper elevation={23}>
                    <Box height={'50px'}>
                        {errorNotification &&
                            <Alert severity="error">{errorNotification}</Alert>
                        }
                    </Box>
                    <Box className={styles['text-wrapper']}>
                        <Typography variant="h3">Create a Bid</Typography>
                    </Box>
                    <Grid container>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box mx='auto' className={styles['image-wrapper']}>
                                <img
                                    src={formValues.imgURL || "http://static1.squarespace.com/static/5898e29c725e25e7132d5a5a/58aa11bc9656ca13c4524c68/58aa11e99656ca13c45253e2/1487540713345/600x400-Image-Placeholder.jpg?format=original"}
                                    alt='Preview'
                                    className={styles['create-image']}>
                                </img>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField
                                        variant="outlined"
                                        label="Antique Name"
                                        name="antiqueName"
                                        value={formValues.name}
                                        error={Boolean(errors.antiqueName)}
                                        required={true}
                                        helperText={errors.antiqueName}
                                        onBlur={(e) => onBlurErrorMessage(e)}
                                        onChange={onChange}
                                        className={styles['create-input']}
                                    />
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField
                                        variant="outlined"
                                        label="Image URL"
                                        name="imgURL"
                                        value={formValues.name}
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
                                            defaultValue=''
                                            value={formValues.name}
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
                                            defaultValue=''
                                            value={formValues.name}
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
                                        value={formValues.bidDetails.name}
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
                                            label='Bid Duration'
                                            name='endDate'
                                            defaultValue=''
                                            value={formValues.bidDetails.name}
                                            required={true}
                                            error={Boolean(errors.endDate)}
                                            onBlur={(e) => onBlurErrorMessage(e)}
                                            onChange={onChange}
                                        >
                                            {durationOptions.map(x => <MenuItem key={x} value={x}>{x} Hours</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className={styles['input-wrapper']}>
                                    <TextField
                                        variant="outlined"
                                        multiline
                                        label="Description"
                                        name="description"
                                        value={formValues.name}
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
                                <Button variant="contained" className={styles['create-button']} type='submit'>Create</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </form>
    );
};

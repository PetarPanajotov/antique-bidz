import { Box, Button, Grid, Paper, TextField, Typography, Container, InputLabel, Select, FormControl, MenuItem } from "@mui/material";
import styles from "./Edit.module.css"
import { useContext, useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { categoriesOptions } from "../../../utils/selectOptions";
import { durationOptions } from "../../../utils/selectOptions";
import { getOne } from "../../../services/antiqueService";
import { useParams } from "react-router-dom";
import { AntiqueContext } from "../../../contexts/AntiqueContext";
import { AuthContext } from "../../../contexts/AuthContext";

export function Edit() {
    const { onEditAntiqueSubmit } = useContext(AntiqueContext);
    const { auth } = useContext(AuthContext);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
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
        getOne(id)
            .then(data => {
                changeValues(data);
                setSubCategoryOptions(categoriesOptions[data.category])
            })
    }, [id]);
    
    const categoryOptions = Object.keys(categoriesOptions);

    useEffect(() => {
        setSubCategoryOptions(categoriesOptions[formValues.category]);
    }, [formValues.category]);

    return (
        <form onSubmit={(e) => onEditAntiqueSubmit(e, id, formValues, auth.accessToken)}>
            <Container maxWidth='lg' className={styles['container']}>
                <Paper elevation={23}>
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
                                            defaultValue={formValues.category}
                                            value={formValues.subCategory}
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
                                            value={formValues.bidDetails.bidDuration}
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
                                        value={formValues.description}
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
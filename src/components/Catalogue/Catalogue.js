import { Box, Grid, Pagination, TextField, Container } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { CardCatalogue } from "./CardCatalogue"
import ClearIcon from '@mui/icons-material/Clear';
import styles from './Catalogue.module.css'

export function Catalogue() {
    return (
            <Container maxWidth='xl' className={styles['catalogue-container']}>
                <Box className={styles['catalogue-search-wrapper']}>
                    <TextField id="filled-basic"
                        placeholder="Search by name"
                        className={styles['catalogue-search-field']}
                        InputProps={{
                            startAdornment: <SearchIcon className={styles['catalogue-search-icon']}></SearchIcon>,
                            endAdornment: <ClearIcon className={styles['catalogue-clear-icon']}></ClearIcon>
                        }} />
                </Box>
                <Grid container spacing={2}>
                    <CardCatalogue></CardCatalogue>
                    <CardCatalogue></CardCatalogue>
                    <CardCatalogue></CardCatalogue>
                    <CardCatalogue></CardCatalogue>
                    <CardCatalogue></CardCatalogue>
                    <CardCatalogue></CardCatalogue>
                </Grid>
                <Box className={styles['catalogue-pagination-wrapper']}>
                    <Pagination />
                </Box>
            </Container>
    );
};
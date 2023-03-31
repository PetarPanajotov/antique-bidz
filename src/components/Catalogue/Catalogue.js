import { Box, Grid, Pagination, TextField, Container } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { CardCatalogue } from "./CardCatalogue"
import ClearIcon from '@mui/icons-material/Clear';
import styles from './Catalogue.module.css'
import { useContext } from "react";
import { AntiqueContext } from "../../contexts/AntiqueContext";

export function Catalogue() {
    const { antiqueData, collectionCount, setQuery, setPage } = useContext(AntiqueContext);

    function handlePaginationChange(e, value) {
        setPage(value);
        return setQuery(state => ({...state, offset: (value - 1) * 8}));
    };

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
                {antiqueData.map(antique =>
                    <CardCatalogue key={antique._id} antique={antique} />)}
            </Grid>
            <Box className={styles['catalogue-pagination-wrapper']}>
                <Pagination
                    count={Math.ceil(collectionCount / 8)}
                    onChange={handlePaginationChange}
                />
            </Box>
        </Container>
    );
};
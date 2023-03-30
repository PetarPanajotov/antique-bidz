import { Box, Grid, Pagination, TextField, Container } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { CardCatalogue } from "./CardCatalogue"
import ClearIcon from '@mui/icons-material/Clear';
import styles from './Catalogue.module.css'
import { useContext, useState } from "react";
import { AntiqueContext } from "../../contexts/AntiqueContext";

export function Catalogue() {
    const { antiqueData, antiqueDataPagination , getSome} = useContext(AntiqueContext);
    const [page, setPage] = useState(1);
    const numberOfPage = Math.ceil(antiqueData.length / 8);


    function handlePaginationChange(e, value) {
        if (page < value) {
             return getSome((value - 1) * 8, ((value - 1) * 8) + 8 );
        }
        setPage(value);
        return getSome((value - 1) * 8, ((value - 1) * 8) + 8 );
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
                {antiqueDataPagination.map(antique =>
                    <CardCatalogue key={antique._id} antique={antique} />)}
            </Grid>
            <Box className={styles['catalogue-pagination-wrapper']}>
                <Pagination
                    count={numberOfPage}
                    onChange={handlePaginationChange}
                    />
            </Box>
        </Container>
    );
};
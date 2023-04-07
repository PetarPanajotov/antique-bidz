import { Box, Grid, Pagination, TextField, Container } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { CardCatalogue } from "./CardCatalogue"
import ClearIcon from '@mui/icons-material/Clear';
import styles from './Catalogue.module.css'
import { useContext, useState } from "react";
import { AntiqueContext } from "../../contexts/AntiqueContext";

export function Catalogue() {
    const { antiqueData, collectionCount, setPagination, onSearchSubmit, setIsSearchUndefined, pagination } = useContext(AntiqueContext);
    const [searchValue, setSearchValue] = useState('');

    function onChange(e) {
        setSearchValue(e.target.value);
        if (!e.target.value) {
            return setIsSearchUndefined(true);
        };
    };

    function onXClick(e) {
        e.target.value = '';
        setSearchValue('');
        setIsSearchUndefined(true);
    }

    function handlePaginationChange(e, value) {
        return setPagination(state => ({ ...state, offset: (value - 1) * 8, page: value }));
    };

    return (
        <Container maxWidth='xl' className={styles['catalogue-container']}>
            <Box className={styles['catalogue-search-wrapper']}>
                <form onSubmit={(e) => onSearchSubmit(e, searchValue)}>
                    <TextField id="filled-basic"
                        placeholder="Search by name"
                        name="searchQuery"
                        value={searchValue}
                        onChange={onChange}
                        className={styles['catalogue-search-field']}
                        InputProps={{
                            startAdornment: <SearchIcon className={styles['catalogue-search-icon']} onClick={(e) => onSearchSubmit(e)}></SearchIcon>,
                            endAdornment: searchValue && (<ClearIcon className={styles['catalogue-clear-icon']} onClick={onXClick}></ClearIcon>)
                        }} />
                </form>
            </Box>
            <Grid container spacing={2}>
                {antiqueData.map(antique =>
                    <CardCatalogue key={antique._id} antique={antique} />)}
            </Grid>
            <Box className={styles['catalogue-pagination-wrapper']}>
                <Pagination
                    count={Math.ceil(collectionCount / 8)}
                    onChange={handlePaginationChange}
                    page={pagination.page}
                />
            </Box>
        </Container>
    );
};
import { Box, Button, Grid, Pagination, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { Container } from "@mui/system"
import { CardCatalogue } from "./CardCatalogue"
import ClearIcon from '@mui/icons-material/Clear';

export function Catalogue() {
    return (
        <Container maxWidth='xl' sx={{ backgroundColor: '#FAEBD7' }}>
            <Box sx={{ textAlign: 'center' }}>
                <TextField id="filled-basic"
                    placeholder="Search by name"
                    sx={{
                        marginTop: '82px', backgroundColor: 'white', '& legend': { display: 'none' },
                        '& fieldset': { top: 0 }, width: '60%'
                    }}
                    InputProps={{
                        startAdornment: <SearchIcon sx={{ color: 'blue', marginRight: '4px' }}></SearchIcon>,
                        endAdornment: <ClearIcon></ClearIcon>
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
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px', textAlign: 'center' }}>
                <Pagination />
            </Box>
        </Container>
    )
}
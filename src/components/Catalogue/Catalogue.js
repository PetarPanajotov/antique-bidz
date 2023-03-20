import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { Container } from "@mui/system"
import { CardCatalogue } from "./CardCatalogue"
export function Catalogue() {
    return (
        <Container maxWidth='xl' sx={{ backgroundColor: '#FAEBD7' }}>
            <Box sx = {{textAlign: 'center'}}>
                <TextField id="filled-basic"
                placeholder="Search by name"
                    sx={{
                        marginTop: '82px', backgroundColor: 'white', '& legend': { display: 'none' },
                        '& fieldset': { top: 0 }, width: '60%'
                    }}
                    InputProps={{
                        startAdornment: <SearchIcon sx= {{color: 'blue', marginRight: '4px'}}></SearchIcon>,
                        endAdornment: <Button size = "small" sx={{"&:hover": {backgroundColor:'white'}}} disableRipple><Typography variant="h5" sx= {{color: 'blue'}}>X</Typography></Button>
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
        </Container>
    )
}
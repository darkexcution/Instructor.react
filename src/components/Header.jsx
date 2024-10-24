import { Typography,Box } from "@mui/material";


const Header=({title,subtitle})=>{
    return <Box>
        <Typography variant="h2" color="#546e7a" fontWeight="bold" sx={{mb: "2px"}} fontSize="30px">{title}</Typography>
        <Typography variant="h5" color="#546e7a">{subtitle}</Typography>
    </Box>
}

export default Header;
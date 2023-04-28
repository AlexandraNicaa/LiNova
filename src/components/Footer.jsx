import { Box, Typography } from "@mui/material";

export function Footer() {
    return (
        <Box sx={{
        display: "flex",
        justifyContent:"center"}}>
            <Typography sx={{
                marginTop: "auto" 
            }}>
            © LiNova 2023 | ® Conținut cu drepturi protejate
            </Typography>
        </Box>
    )
}
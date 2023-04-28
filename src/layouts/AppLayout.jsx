import { Box, Container } from "@mui/material";
import  {Header}  from "../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export default function AppLayout() {
    return (
        <Box className="layout-root">
            <Header />
            <Container 
            maxWidth="lg"
            sx={{
                flexGrow: 1,
                py: 4,
            }}>
                <Outlet/>
            </Container>
            <Footer/>
        </Box>
    );
}
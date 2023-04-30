import { Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Error404 () {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    };
    return (
        <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", my: 2 }}>
            <Typography variant="h2">404 - Page not found</Typography>
            <img
                className="error404"
                src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"/>
            <Button onClick={redirectToHome} variant="contained">Go to Home</Button>
        </Container>
    )
}

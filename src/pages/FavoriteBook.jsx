import {useAuthContext} from "../context/auth/AuthContext";
import {Box, Grid, Stack, Typography, Button} from "@mui/material";
import {useContext} from "react";
import {FavoriteContext} from "../context/favoriteBooks/FavoriteContext";
import {BookCard} from "../components/BookCard";
import DeleteIcon from '@mui/icons-material/Delete';

export default function FavoriteBook() {
    const { user } = useAuthContext();
    const {favoriteBooks, removeBookFromFavorite} = useContext(FavoriteContext);

    if (favoriteBooks.length === 0) {
        return (
            <Box>
                <Stack
                    display="flex"
                    direction="column"
                    width="100%"
                    minHeight="100vh"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h4" textAlign="center">
                        Your list is empty{" "}
                    </Typography>
                </Stack>
            </Box>
        );
    }

    return (
        <Box>
            <Stack
                display="flex"
                direction="column"
                width="100%"
                minHeight="100vh"
                alignItems="center"
                justifyContent="center"
            >
                <Grid container spacing={3} justifyContent="center">
                    {favoriteBooks.map((book) => (
                        <Grid key={book.id} item xs={12} sm={6} md={4}>
                            <BookCard book={book} handleAddToFavorites={() => {}} />
                            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeBookFromFavorite(book)}>
                                Remove 
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Box>
    );
}

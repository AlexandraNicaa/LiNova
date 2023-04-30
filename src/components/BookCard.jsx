import * as React from 'react';
import { Card, CardContent, CardMedia, Fab, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteContext } from '../context/favoriteBooks/FavoriteContext';
import { useContext } from 'react';


export function BookCard({book}) {
        
    // const navigateTo = useNavigate();
    const { addBookToFavorite } = useContext(FavoriteContext);

        return (

            <Card sx={{ maxWidth: 345 }}>
                <Link to={`/book/${book.id}`} >
                <CardMedia
                    sx={{ height: 400 }}
                    image={book.coverImageURL}
                    alt={book.title}
                    title={book.title}
                />
                <CardContent sx={{textAlign: "center", paddingBottom: "0px"}}>
                    <Typography sx={{
                        height: "4rem",
                        lineHeight: "2rem",
                        textOverflow: "elipsis",
                        overflow: "hidden",
                    }} gutterBottom variant="h5" component="div">
                        {book.title}
                    </Typography>
                    <Typography sx={{
                        height: "4rem",
                        lineHeight: "2rem",
                        textOverflow: "elipsis",
                        overflow: "hidden",
                    }}
                        variant="body2" color="text.secondary">
                        {book.author}
                    </Typography>
                </CardContent>
                </Link>
                <CardContent sx={{textAlign: "right", py:"0" }}>
                    <Fab  sx={{width: "40px", height: "40px", my: "0px"}}  onClick={() => {
                        addBookToFavorite(book);
                    }}>
                        <FavoriteIcon sx={{width: "20px", height: "20px"}} />
                    </Fab>
                </CardContent>
            </Card>

        );
}
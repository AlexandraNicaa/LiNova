import {useAuthContext} from "../context/auth/AuthContext";
import {Box, Grid, Stack, Typography} from "@mui/material";

export default function({items}) {

    const { user } = useAuthContext();

    return(
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
        )
}




// import { Box, Card, CardContent, CardMedia, Grid, Stack, Tooltip, Typography } from "@mui/material";
// import { useState } from "react";
// // import { FavoriteContext } from "../context/favoriteBooks/FavoriteContext";
// import { Link } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";

// export default function FavoriteBook() {
    
//     const [addBookToFavorite, setAddBookToFavorite] = useState([]);

//     const removeBookFromFavorite = (book) => {
//         const filtered = addBookToFavorite.filter((item) => item.id !== book.id);
//         setAddBookToFavorite(filtered);
//       };

//     const addBook = (book) => {
//       setAddBookToFavorite([...addBookToFavorite, book]);
//     };

//     return(
//         <Box>
//         <Grid container spacing={4} paddingY={5}>
//           {addBookToFavorite.length !== 0 ? (
//             addBookToFavorite.map((book) => {
//               return (
//                 <Grid>
//                     <Link to={`/book/${id}`}>
//                     <Card sx={{ maxWidth: 345}} >
//                      <CardMedia sx={{ height: 400 }}
//                         image={book.coverImageURL}
//                         title={book.title}
//                         alt={book.title}
//                       />

//                       <CardContent>
//                         <Typography></Typography>
//                         <Typography></Typography>
//                       </CardContent>
//                     </Link>

//                     <CardContent>
//                         <Fab sx={{width: "40px", height: "40px", my: "0px"}} onClick={() => {
//                         navigateTo("/favoriteBooks");
//                         handleAddToFavorites(book)
//                     }}>
//                         </Fab>
//                     </CardContent>
//                 </Card>
//                 </Grid>

//         </Box>
                    
// {/*                     
//                     <Box                    
//                       display="flex"
//                       alignItems="center"
//                       justifyContent="center"
//                     >
//                       <Tooltip title="Remove from favorite">
//                         <DeleteIcon
//                           onClick={(e) => {
//                             e.preventDefault();
//                             e.stopPropagation();
//                             removeBookFromFavorite(book);
                            
//                           }}
//                           color="secondary"
//                           sx={{ cursor: "pointer" }}
//                         />
//                       </Tooltip>
//                     </Box>
                   
//                   </Card>
//                   </Link>
//                 </Grid>
//               );
//             })
//           ) : (
//             <Stack
//               display="flex"
//               direction="column"
//               width="100%"
//               minHeight="100vh"
//               alignItems="center"
//               justifyContent="center"
//             >
//               <Typography variant="h3" textAlign="center" sx={{
//               fontFamily: 'PT Sans Narrow',
//               letterSpacing: ".1rem",
//               color: "black",
//               textDecoration: "none",}}>
//                 Your list is empty{" "}
//               </Typography>
//             </Stack> */}
//           }
//         </Grid>
     
//     );
// }

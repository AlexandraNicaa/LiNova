import {useLocalStorage} from "../../hooks/useLocalStorage.js";

export function FavoriteContextProvider({ children }) {

    const [favorite, setFavorite] = useLocalStorage("", []);

    const handleAddToFavorites = (book) => {
        setFavorite([...favorite, book]);
    };
    return (
        <FavoriteBooksContext.Provider
            value={{
                favorite,
                handleAddToFavorites,
            }}
        >
            {children}
        </FavoriteBooksContext.Provider>
    );

}

// import { FavoriteContext } from "./FavoriteContext";
// import { useLocalStorage } from "../../hooks/useLocalStorage";


// export function FavoriteContextProvider({ children }) {
//   const [favorite, setFavorite] = useLocalStorage("favMovie", []);
  

//   function addFavorite(item) {
//     const newList = [...favorite, item];
//     setFavorite(newList);
   
//   }

//   function removeFavorite(item) {
//     const newList = favorite.filter((book) => book.id !== item.id);
//     setFavorite(newList);
    
//   }

//   return (
//     <FavoriteContext.Provider
//       value={{
//         favorite,
//         addFavorite,
//         removeFavorite,
//       }}
//     >
//       {children}
//     </FavoriteContext.Provider>
//   );
// }
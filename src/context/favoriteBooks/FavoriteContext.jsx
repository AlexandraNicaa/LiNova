import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export function FavoriteContextProvider({ children }) {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("favoriteBooks")) || [];
    setFavoriteBooks(savedBooks);
  }, []);

  const addBookToFavorite = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
    localStorage.setItem("favoriteBooks", JSON.stringify([...favoriteBooks, book]));
  };

  const removeBookFromFavorite = (book) => {
    const newFavoriteBooks = favoriteBooks.filter((b) => b.id !== book.id);
    setFavoriteBooks(newFavoriteBooks);
    localStorage.setItem("favoriteBooks", JSON.stringify(newFavoriteBooks));
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteBooks, addBookToFavorite, removeBookFromFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

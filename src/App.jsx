import { CssBaseline } from "@mui/material";
import "./App.css";
import AuthContextProvider from "./context/auth/AuthContextProvider";
import FavoriteContextProvider from "./context/favoriteBooks/FavoriteContextProvider";
import Routes from "./routes";

function App() {
  return (
    <AuthContextProvider>
      <FavoriteContextProvider>
        <CssBaseline />
        <Routes />
      </FavoriteContextProvider>
  </AuthContextProvider>
  )
}

export default App;
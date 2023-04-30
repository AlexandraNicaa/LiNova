import { CssBaseline } from "@mui/material";
import "./App.css";
import AuthContextProvider from "./context/auth/AuthContextProvider";
import Routes from "./routes";
import { FavoriteContextProvider } from "./context/favoriteBooks/FavoriteContext";

function App() {
  return (
    <AuthContextProvider>
        <CssBaseline />
        <Routes />
  </AuthContextProvider>
  )
}

export default App;
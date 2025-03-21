import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import { CartProvider } from './context/CartContext';
import { MenuPage } from './pages/MenuPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336', // A nice red color for the restaurant theme
    },
    secondary: {
      main: '#ffa726', // An orange accent color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <AppBar position="static" sx={{ mb: 2 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gourmet Burger House
            </Typography>
          </Toolbar>
        </AppBar>
        <MenuPage />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

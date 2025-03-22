import React, { useState } from 'react';
import { 
    Tabs, 
    Tab, 
    Box, 
    Badge,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Button,
    Stack,
    useTheme,
    useMediaQuery,
    AppBar,
    Toolbar,
    ListItemButton,
    Modal,
    Fade,
    Container,
    Grid
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/LocalMall';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FoodCard } from '../components/FoodCard';
import { menuItems } from '../data/menuItems';
import { useCart } from '../context/CartContext';
import { Footer } from '../components/Footer';
import { MenuDrawer } from '../components/Drawer';

export const MenuPage: React.FC = () => {
    const [category, setCategory] = useState<'appetizer' | 'main' | 'dessert' | 'drink' | 'salads' | 'sides'>('main');
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { items, total, removeFromCart, updateQuantity } = useCart();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const filteredItems = menuItems.filter(item => item.category === category);

    const handleCategoryChange = (newCategory: 'appetizer' | 'main' | 'dessert' | 'drink' | 'salads' | 'sides') => {
        setCategory(newCategory);
        if (isMobile) {
            setMenuOpen(false);
        }
    };

    return (
        <Box sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <AppBar position="fixed" color="default" elevation={1}>
                <Toolbar>
                    {isMobile ? (
                        <>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    🍔 Burger Restaurant
                                </Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1 }} />
                            <Stack direction="row" spacing={1} alignItems="center">
                                <IconButton
                                    color="inherit"
                                    onClick={() => setMenuOpen(true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <IconButton 
                                    color="inherit" 
                                    onClick={() => setCartOpen(true)}
                                >
                                    <Badge badgeContent={items.length} color="secondary">
                                        <ShoppingBagIcon />
                                    </Badge>
                                </IconButton>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Typography variant="h6">
                                Burger Restaurant
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Tabs 
                                    value={category} 
                                    onChange={(_, newValue) => setCategory(newValue)} 
                                >
                                    <Tab label="Drinks" value="drink" />
                                    <Tab label="Appetizers" value="appetizer" />
                                    <Tab label="Salads" value="salads" />
                                    <Tab label="Main Course" value="main" />
                                    <Tab label="Sides" value="sides" />
                                    <Tab label="Desserts" value="dessert" />
                                </Tabs>
                            </Box>
                            <IconButton 
                                color="inherit" 
                                onClick={() => setCartOpen(true)}
                                sx={{ ml: 2 }}
                            >
                                <Badge badgeContent={items.length} color="secondary">
                                    <ShoppingBagIcon />
                                </Badge>
                            </IconButton>
                        </>
                    )}
                </Toolbar>
            </AppBar>

            <Box sx={{ mt: 8, flex: 1 }}>
                <Container sx={{ 
                    py: 4,
                    px: { xs: 4, sm: 4, md: 2 }
                }}>
                    <Grid container spacing={4}>
                        {filteredItems.map(item => (
                            <Grid item xs={12} md={6} lg={4} key={item.id}>
                                <FoodCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Footer />

            {/* Mobile Navigation Drawer */}
            <MenuDrawer 
                open={menuOpen && isMobile}
                onClose={() => setMenuOpen(false)}
                category={category}
                onCategoryChange={handleCategoryChange}
            />

           
        </Box>
    );
}; 
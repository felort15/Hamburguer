import React, { useState } from 'react';
import { 
    Tabs, 
    Tab, 
    Box, 
    Badge,
    IconButton,
    Typography,
    Stack,
    useTheme,
    useMediaQuery,
    AppBar,
    Toolbar,
    Container,
    Grid
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import { FoodCard } from '../components/FoodCard';
import { menuItems } from '../data/menuItems';
import { useCart } from '../context/CartContext';
import { Footer } from '../components/Footer';
import { MenuDrawer } from '../components/Drawer';
import { CartModal } from '../components/CartModal';
import { CartDrawer } from '../components/CartDrawer';
import { Logo } from '../components/Logo';

export const MenuPage: React.FC = () => {
    const [category, setCategory] = useState<'appetizer' | 'main' | 'dessert' | 'drink' | 'salads' | 'sides'>('main');
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { items } = useCart();
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Logo />
                                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Burger Restaurant
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
                                    data-testid="cart-button"
                                >
                                    <Badge badgeContent={items.length} color="secondary">
                                        <ShoppingBagIcon />
                                    </Badge>
                                </IconButton>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Logo />
                                <Typography variant="h6">
                                    Burger Restaurant
                                </Typography>
                            </Box>
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
                                data-testid="cart-button"
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

            {/* Cart Components */}
            <CartModal 
                open={cartOpen && isMobile}
                onClose={() => setCartOpen(false)}
                isMobile={isMobile}
            />
            <CartDrawer 
                open={cartOpen && !isMobile}
                onClose={() => setCartOpen(false)}
                isMobile={isMobile}
            />
        </Box>
    );
}; 
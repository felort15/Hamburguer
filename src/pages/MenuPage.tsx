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

export const MenuPage: React.FC = () => {
    const [category, setCategory] = useState<'appetizer' | 'main' | 'dessert' | 'drink'>('main');
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { items, total, removeFromCart, updateQuantity } = useCart();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const filteredItems = menuItems.filter(item => item.category === category);

    const handleCategoryChange = (newCategory: 'appetizer' | 'main' | 'dessert' | 'drink') => {
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
                                    <Tab label="Appetizers" value="appetizer" />
                                    <Tab label="Main Course" value="main" />
                                    <Tab label="Drinks" value="drink" />
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
            <Drawer
                anchor="left"
                open={menuOpen && isMobile}
                onClose={() => setMenuOpen(false)}
            >
                <Box sx={{ width: 250 }}>
                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h6">Menu</Typography>
                        <IconButton onClick={() => setMenuOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        <ListItemButton 
                            selected={category === 'drink'}
                            onClick={() => handleCategoryChange('drink')}
                        >
                            <ListItemText primary="Drinks" />
                        </ListItemButton>
                        <ListItemButton 
                            selected={category === 'appetizer'}
                            onClick={() => handleCategoryChange('appetizer')}
                        >
                            <ListItemText primary="Appetizers" />
                        </ListItemButton>
                        <ListItemButton 
                            selected={category === 'main'}
                            onClick={() => handleCategoryChange('main')}
                        >
                            <ListItemText primary="Main Course" />
                        </ListItemButton>
                        <ListItemButton 
                            selected={category === 'dessert'}
                            onClick={() => handleCategoryChange('dessert')}
                        >
                            <ListItemText primary="Desserts" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>

            {/* Cart Modal */}
            <Modal
                open={cartOpen && isMobile}
                onClose={() => setCartOpen(false)}
                closeAfterTransition
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Fade in={cartOpen}>
                    <Box sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        width: '100%',
                        height: '100%',
                        overflow: 'auto'
                    }}>
                        <Box sx={{ 
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}>
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                                <IconButton onClick={() => setCartOpen(false)} size="small">
                                    <ArrowBackIcon />
                                </IconButton>
                                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <ShoppingBagIcon /> Food Bag
                                </Typography>
                            </Stack>

                            <List sx={{ flex: 1, overflow: 'auto' }}>
                                {items.map(item => (
                                    <ListItem key={item.id}>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={`$${item.price.toFixed(2)} x ${item.quantity}`}
                                        />
                                        <Box>
                                            <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                -
                                            </IconButton>
                                            <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                +
                                            </IconButton>
                                            <IconButton size="small" onClick={() => removeFromCart(item.id)}>
                                                🗑️
                                            </IconButton>
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>

                            <Box sx={{ 
                                mt: 2, 
                                pt: 2,
                                borderTop: 1, 
                                borderColor: 'divider'
                            }}>
                                <Typography variant="h6">
                                    Total: ${total.toFixed(2)}
                                </Typography>
                                <Stack spacing={1} sx={{ mt: 2 }}>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        fullWidth 
                                        disabled={items.length === 0}
                                    >
                                        Order
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        onClick={() => setCartOpen(false)}
                                        startIcon={<ArrowBackIcon />}
                                    >
                                        Return to Menu
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>

            {/* Desktop Cart Drawer */}
            {!isMobile && (
                <Drawer 
                    anchor="right" 
                    open={cartOpen} 
                    onClose={() => setCartOpen(false)}
                    PaperProps={{
                        sx: {
                            width: 350,
                            height: '100%'
                        }
                    }}
                >
                    <Box sx={{ 
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                            <IconButton onClick={() => setCartOpen(false)} size="small">
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <ShoppingBagIcon /> Food Bag
                            </Typography>
                        </Stack>

                        <List sx={{ flex: 1, overflow: 'auto' }}>
                            {items.map(item => (
                                <ListItem key={item.id}>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={`$${item.price.toFixed(2)} x ${item.quantity}`}
                                    />
                                    <Box>
                                        <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            -
                                        </IconButton>
                                        <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </IconButton>
                                        <IconButton size="small" onClick={() => removeFromCart(item.id)}>
                                            🗑️
                                        </IconButton>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>

                        <Box sx={{ 
                            mt: 2, 
                            pt: 2,
                            borderTop: 1, 
                            borderColor: 'divider'
                        }}>
                            <Typography variant="h6">
                                Total: ${total.toFixed(2)}
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                sx={{ mt: 2 }}
                                disabled={items.length === 0}
                            >
                                Order
                            </Button>
                        </Box>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
}; 
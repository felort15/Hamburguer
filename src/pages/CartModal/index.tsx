import { Box, Stack, Modal, Fade, IconButton, List, ListItem, ListItemText, Typography, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingBagIcon from '@mui/icons-material/LocalMall';
import { useCart } from '../../context/CartContext';

interface CartModalProps {
    open: boolean;
    onClose: () => void;
    isMobile: boolean;
}

export const CartModal = ({ open, onClose, isMobile }: CartModalProps) => {
    const { items, total, removeFromCart, updateQuantity } = useCart();

    if (!isMobile) return null;

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Fade in={open}>
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
                            <IconButton onClick={onClose} size="small">
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
                                    onClick={onClose}
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
    );
};
import React from 'react';
import {
    Modal,
    Box,
    Typography,
    Button,
    IconButton,
    Stack,
    Fade
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItem } from '../types/MenuItem';
import { useCart } from '../context/CartContext';

interface ItemModalProps {
    item: MenuItem | null;
    open: boolean;
    onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, open, onClose }) => {
    const { addToCart } = useCart();

    if (!item) return null;

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2
            }}
        >
            <Fade in={open}>
                <Box sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    maxWidth: 600,
                    width: '100%',
                    maxHeight: '90vh',
                    overflow: 'auto',
                    position: 'relative',
                    '&:focus': {
                        outline: 'none',
                    },
                }}>
                    {/* Close button */}
                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            zIndex: 1,
                            bgcolor: 'rgba(255, 255, 255, 0.8)',
                            '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.9)'
                            }
                        }}
                        size="large"
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Image */}
                    <Box sx={{
                        width: '100%',
                        height: 300,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            {item.name}
                        </Typography>

                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            {item.description}
                        </Typography>

                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                            <Typography variant="h5" color="primary">
                                ${item.price.toFixed(2)}
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    addToCart(item);
                                    onClose();
                                }}
                            >
                                Add to Cart
                            </Button>
                        </Stack>

                        {/* Additional details section */}
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                • Category: {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                {item.category === 'main' && (
                                    <>
                                        <br />• Served with french fries
                                        <br />• Includes choice of sauce
                                    </>
                                )}
                                {item.category === 'drink' && (
                                    <>
                                        <br />• Available in regular or large size
                                        <br />• Ice included
                                    </>
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}; 
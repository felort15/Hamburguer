import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { MenuItem } from '../types/MenuItem';
import { useCart } from '../context/CartContext';
import { ItemModal } from './ItemModal';

interface FoodCardProps {
    item: MenuItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
    const { addToCart } = useCart();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Card 
                sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer',
                    borderRadius: '20px',
                    '&:hover': {
                        boxShadow: 6,
                        transform: 'scale(1.02)',
                        transition: 'all 0.2s ease-in-out'
                    }
                }}
                onClick={() => setModalOpen(true)}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                    sx={{ 
                        objectFit: 'cover',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px'
                    }}
                />
                <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    p: { xs: 4, sm: 3 }  // More padding on mobile
                }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                        {item.description}
                    </Typography>
                    <Box>
                        <Typography variant="h6" color="primary" gutterBottom>
                            ${item.price.toFixed(2)}
                        </Typography>
                        <Button 
                            variant="contained" 
                            fullWidth 
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item);
                            }}
                            sx={{ 
                                mt: 1,
                                py: 1.5,
                                borderRadius: '10px'
                            }}
                        >
                            Add to Cart
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            <ItemModal
                item={item}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}; 
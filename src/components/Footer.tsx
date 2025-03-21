import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export const Footer: React.FC = () => {
    return (
        <Box 
            component="footer" 
            sx={{ 
                bgcolor: 'background.paper',
                py: 6,
                mt: 'auto',
                borderTop: 1,
                borderColor: 'divider'
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                    gap: 4
                }}>
                    {/* Restaurant Info */}
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            🍔 Burger Restaurant
                        </Typography>
                        <Stack spacing={1}>
                            <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}
                            >
                                <LocationOnIcon fontSize="small" />
                                123 Burger Street, Food City, FC 12345
                            </Typography>
                            <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}
                            >
                                <PhoneIcon fontSize="small" />
                                (555) 123-4567
                            </Typography>
                            <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}
                            >
                                <EmailIcon fontSize="small" />
                                info@burgerrestaurant.com
                            </Typography>
                        </Stack>
                    </Box>

                    {/* Hours */}
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Opening Hours
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant="body2" color="text.secondary">
                                Monday - Friday: 11:00 AM - 10:00 PM
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Saturday: 11:00 AM - 11:00 PM
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Sunday: 12:00 PM - 9:00 PM
                            </Typography>
                        </Stack>
                    </Box>

                    {/* Social Media */}
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton color="primary" aria-label="Facebook">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="Instagram">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="Twitter">
                                <TwitterIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} Burger Restaurant. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}; 
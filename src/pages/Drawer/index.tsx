import { Box, Drawer, IconButton, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface MenuDrawerProps {
    open: boolean;
    onClose: () => void;
    category: string;
    onCategoryChange: (category: string) => void;
}

export const MenuDrawer = ({ open, onClose, category, onCategoryChange }: MenuDrawerProps) => {
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6">Menu</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    <ListItemButton 
                        selected={category === 'drink'}
                        onClick={() => onCategoryChange('drink')}
                    >
                        <ListItemText primary="Drinks" />
                    </ListItemButton>
                    <ListItemButton 
                        selected={category === 'appetizer'}
                        onClick={() => onCategoryChange('appetizer')}
                    >
                        <ListItemText primary="Appetizers" />
                    </ListItemButton>
                    <ListItemButton 
                        selected={category === 'main'}
                        onClick={() => onCategoryChange('main')}
                    >
                        <ListItemText primary="Main Course" />
                    </ListItemButton>
                    <ListItemButton 
                        selected={category === 'dessert'}
                        onClick={() => onCategoryChange('dessert')}
                    >
                        <ListItemText primary="Desserts" />
                    </ListItemButton>
                    <ListItemButton 
                        selected={category === 'salads'}
                        onClick={() => onCategoryChange('salads')}
                    >
                        <ListItemText primary="Salads" />
                    </ListItemButton>
                    <ListItemButton 
                        selected={category === 'sides'}
                        onClick={() => onCategoryChange('sides')}
                    >
                        <ListItemText primary="Sides" />
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
    );
};
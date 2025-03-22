import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material';
import { MenuPage } from './MenuPage';
import { CartProvider } from '../context/CartContext';

const theme = createTheme();

const renderWithProviders = (component: React.ReactNode) => {
    return render(
        <ThemeProvider theme={theme}>
            <CartProvider>
                {component}
            </CartProvider>
        </ThemeProvider>
    );
};

describe('MenuPage', () => {
    it('renders the menu page with correct title', () => {
        renderWithProviders(<MenuPage />);
        expect(screen.getByText('Burger Restaurant')).toBeInTheDocument();
    });

    it('displays menu items', () => {
        renderWithProviders(<MenuPage />);
        // Check if at least one menu item is rendered
        expect(screen.getByText('Classic Cheeseburger')).toBeInTheDocument();
    });

    it('changes category when tab is clicked', () => {
        renderWithProviders(<MenuPage />);
        const drinksTab = screen.getByRole('tab', { name: /drinks/i });
        fireEvent.click(drinksTab);
        expect(drinksTab).toHaveAttribute('aria-selected', 'true');
    });

    it('opens cart when cart icon is clicked', () => {
        renderWithProviders(<MenuPage />);
        const cartButton = screen.getByTestId('cart-button');
        fireEvent.click(cartButton);
        // Check if cart drawer/modal is opened
        expect(screen.getByText(/food bag/i)).toBeInTheDocument();
    });
}); 
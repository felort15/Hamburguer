export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'appetizer' | 'main' | 'dessert' | 'drink' | 'salads' | 'sides';
}

export interface CartItem extends MenuItem {
    quantity: number;
} 
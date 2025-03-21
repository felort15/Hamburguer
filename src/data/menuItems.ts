import { MenuItem } from '../types/MenuItem';

export const menuItems: MenuItem[] = [
    // Appetizers
    {
        id: 'app1',
        name: 'Loaded Fries',
        description: 'Crispy fries topped with cheese, bacon, and green onions',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500',
        category: 'appetizer'
    },
    {
        id: 'app2',
        name: 'Onion Rings',
        description: 'Golden crispy onion rings with special dipping sauce',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500',
        category: 'appetizer'
    },
    {
        id: 'app3',
        name: 'Mozzarella Sticks',
        description: 'Crispy breaded mozzarella with marinara sauce',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1531749668029-257fe5f3d34f?w=500',
        category: 'appetizer'
    },
    {
        id: 'app4',
        name: 'Chicken Wings',
        description: 'Spicy buffalo wings with blue cheese dip',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1608039858788-667850f129d3?w=500',
        category: 'appetizer'
    },
    // Main Courses
    {
        id: 'main1',
        name: 'Classic Cheeseburger',
        description: 'Angus beef patty with cheddar, lettuce, tomato, and special sauce',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
        category: 'main'
    },
    {
        id: 'main2',
        name: 'BBQ Bacon Burger',
        description: 'Smoky BBQ sauce, crispy bacon, cheddar, and onion rings',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500',
        category: 'main'
    },
    {
        id: 'main3',
        name: 'Mushroom Swiss Burger',
        description: 'Sautéed mushrooms, Swiss cheese, and garlic aioli',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500',
        category: 'main'
    },
    {
        id: 'main4',
        name: 'Spicy Jalapeño Burger',
        description: 'Pepper jack cheese, jalapeños, chipotle mayo',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500',
        category: 'main'
    },
    {
        id: 'main5',
        name: 'Veggie Burger',
        description: 'Plant-based patty with avocado, lettuce, and tomato',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500',
        category: 'main'
    },
    {
        id: 'main6',
        name: 'Double Cheese Burger',
        description: 'Two beef patties with double cheese and bacon',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500',
        category: 'main'
    },
    // Desserts
    {
        id: 'des1',
        name: 'Chocolate Shake',
        description: 'Rich chocolate milkshake topped with whipped cream',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
        category: 'dessert'
    },
    {
        id: 'des2',
        name: 'Cinnamon Apple Pie',
        description: 'Warm homemade apple pie with cinnamon, served with vanilla ice cream',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1568571780765-9276235f1e3d?w=500',
        category: 'dessert'
    },
    {
        id: 'des3',
        name: 'Brownie Sundae',
        description: 'Warm chocolate brownie topped with ice cream and hot fudge',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1564988208558-9851457e7c67?w=500',
        category: 'dessert'
    },
    {
        id: 'des4',
        name: 'New York Cheesecake',
        description: 'Classic cheesecake with berry compote',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500',
        category: 'dessert'
    },
    // Drinks
    {
        id: 'drink1',
        name: 'Classic Cola',
        description: 'Ice-cold cola served with a lemon wedge',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500',
        category: 'drink'
    },
    {
        id: 'drink2',
        name: 'Sparkling Lemonade',
        description: 'Fresh-squeezed lemonade with sparkling water',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500',
        category: 'drink'
    },
    {
        id: 'drink3',
        name: 'Iced Tea',
        description: 'Fresh-brewed iced tea with optional lemon',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500',
        category: 'drink'
    },
    {
        id: 'drink4',
        name: 'Orange Juice',
        description: 'Freshly squeezed orange juice',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500',
        category: 'drink'
    },
    {
        id: 'drink5',
        name: 'Strawberry Smoothie',
        description: 'Fresh strawberries blended with yogurt and honey',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500',
        category: 'drink'
    },
    {
        id: 'drink6',
        name: 'Mineral Water',
        description: 'Sparkling or still mineral water',
        price: 1.99,
        image: 'https://images.unsplash.com/photo-1564601835759-48d8e5daf24f?w=500',
        category: 'drink'
    }
]; 
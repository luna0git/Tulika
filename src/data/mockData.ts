export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisines: string[];
  location: string;
  offers: string;
  menu: MenuItem[];
}

export const CATEGORIES = [
  { name: "Burgers", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop" },
  { name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop" },
  { name: "North Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop" },
  { name: "Chinese", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=200&h=200&fit=crop" },
  { name: "Desserts", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=200&fit=crop" },
  { name: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop" },
  { name: "Rolls", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4de5?w=200&h=200&fit=crop" },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: "1",
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    cuisines: ["Burgers", "American"],
    location: "Koramangala",
    offers: "50% OFF up to ₹100",
    menu: [
      {
        id: "m1",
        name: "Whopper Junior",
        description: "Our signature Whopper, but smaller. Flame-grilled beef patty, topped with tomatoes, fresh lettuce, creamy mayo, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.",
        price: 149,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",
        isVeg: false,
        category: "Burgers"
      },
      {
        id: "m2",
        name: "Veggie Burger",
        description: "A delicious plant-based patty topped with fresh vegetables.",
        price: 129,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
        isVeg: true,
        category: "Burgers"
      }
    ]
  },
  {
    id: "2",
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    rating: 4.0,
    deliveryTime: "30-35 mins",
    cuisines: ["Pizza", "Italian"],
    location: "Indiranagar",
    offers: "FREE Delivery",
    menu: [
      {
        id: "m3",
        name: "Margherita Pizza",
        description: "Classic delight with 100% real mozzarella cheese.",
        price: 299,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=400&q=80",
        isVeg: true,
        category: "Pizza"
      }
    ]
  },
  {
    id: "3",
    name: "Empire Restaurant",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    cuisines: ["North Indian", "Biryani"],
    location: "HSR Layout",
    offers: "₹125 OFF above ₹499",
    menu: [
      {
        id: "m4",
        name: "Chicken Biryani",
        description: "Richly flavored aromatic rice layered with marinated chicken pieces and a delicate blend of spices.",
        price: 320,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
        isVeg: false,
        category: "Biryani"
      }
    ]
  }
];

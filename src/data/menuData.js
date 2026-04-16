import roti from "../assets/menu-roti.jpg";
import nasi from "../assets/menu-nasi.jpg";
import mee from "../assets/menu-mee-goreng.jpeg";

export const menuCategories = [
  {
    id: "roti",
    name: "Roti",
    featuredImage: roti,
    items: [
      {
        id: 1,
        name: "Vegetarian Roti Carry",
        description: "Golden roti paired with chunky broccoli, cauliflower and capsicum curry.",
        price: "$9.90",
      },
      {
        id: 2,
        name: "Roti Beef Curry",
        description: "Flaky pan-fried roti served with tender beef chunks in rich, flavourful curry",
        price: "$11.90",
      },
      {
        id: 3,
        name: "Chicken Roti Curry",
        description: "Crispy layered roti served alongside slow-cooked chicken in a warm, rich, golden curry",
        price: "$10.90",
      },
    ],
  },
  {
    id: "nasi",
    name: "Nasi",
    featuredImage: nasi,
    items: [
      {
        id: 4,
        name: "Nasi Combination",
        description: "Wok-fried rice with juicy prawns, tender chicken, peas, served with fresh tomato and cucumber.",
        price: "$16.90",
      },
      {
        id: 5,
        name: "Nasi Beef",
        description: "Wok-fried rice packed with savoury depth and spice beef.",
        price: "$15.90",
      },
      {
        id: 6,
        name: "Nasi Seafood",
        description: "Comforting seafood rice dish with rich flavour and balance.",
        price: "$16.90",
      },
    ],
  },
  {
    id: "mee",
    name: "Mee",
    featuredImage: mee,
    items: [
      {
        id: 7,
        name: "Mee Goreng",
        description: "Wok-fried noodles with bold sauce and street-food energy.",
        price: "$17.90",
      },
      {
        id: 8,
        name: "Fried Keow Tiao",
        description: "Smoky stir-fried noodles with deep savoury character.",
        price: "$17.90",
      },
      {
        id: 9,
        name: "Char Hor Fun",
        description: "Rich, saucy flat noodles packed with juicy chicken, mushroom and bok choy.",
        price: "$17.90",
      },
    ],
  },
];
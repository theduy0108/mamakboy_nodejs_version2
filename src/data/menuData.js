import roti from "../assets/menu-roti.jpg";
import nasi from "../assets/menu-char-kway-teow.jpg";
import mee from "../assets/menu-mee-goreng.jpg";

export const menuCategories = [
  {
    id: "roti",
    name: "Roti",
    featuredImage: roti,
    items: [
      {
        id: 1,
        name: "Roti Canai",
        description: "Crispy, flaky flatbread served fresh with warm curry.",
        price: "$9.90",
      },
      {
        id: 2,
        name: "Roti Boom",
        description: "A softer, sweeter roti with a richer finish.",
        price: "$11.90",
      },
      {
        id: 3,
        name: "Roti Telur",
        description: "Classic roti folded with egg for extra savoury comfort.",
        price: "$12.90",
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
        name: "Nasi Lemak",
        description: "Fragrant coconut rice, sambal, peanuts, anchovies, and egg.",
        price: "$16.90",
      },
      {
        id: 5,
        name: "Nasi Goreng",
        description: "Wok-fried rice packed with savoury depth and spice.",
        price: "$17.90",
      },
      {
        id: 6,
        name: "Nasi Ayam",
        description: "Comforting chicken rice dish with rich flavour and balance.",
        price: "$18.90",
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
        name: "Char Kway Teow",
        description: "Smoky stir-fried noodles with deep savoury character.",
        price: "$18.90",
      },
      {
        id: 9,
        name: "Mee Soup",
        description: "A warming noodle bowl with rich broth and comforting finish.",
        price: "$16.90",
      },
    ],
  },
];
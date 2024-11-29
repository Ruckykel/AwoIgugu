export const determineCategory = (product) => {
  const description = product.description.toLowerCase();
  if (description.includes('top')) return 'Tops';
  if (description.includes('pants')) return 'Pants';
  if (description.includes('dress')) return 'Dresses';
  if (description.includes('male')) return 'Men';
  if (description.includes('women')) return 'Women';
};

export const ProductData = [
  {
    id: 1,
    name: "Classic White Shirt",
    description: "Dress",
    price: 45000,
    mainImage: "/images/Sample1.png"
  },
  {
    id: 2,
    name: "Black Denim Jeans",
    description: "Women", 
    price: 65000,
    mainImage: "/images/Sample2.png"
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample3.png"
  },
  {
    id: 4,
    name: "Floral Summer Dress",
    description: "Women",
    price: 55000,
    mainImage: "/images/Sample4.png"
  },
  {
    id: 5,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample5.png"
  },
  {
    id: 6,
    name: "Floral Summer Dress",
    description: "Women",
    price: 55000,
    mainImage: "/images/Sample6.png"
  },
  // Continuing the pattern for remaining products with "Clothing" description
  {
    id: 7,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample7.png"
  },
  {
    id: 8,
    name: "Floral Summer Dress",
    description: "Women",
    price: 55000,
    mainImage: "/images/Sample8.png"
  },
  {
    id: 9,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample9.png"
  },
  {
    id: 10,
    name: "Floral Summer Dress",
    description: "Women",
    price: 55000,
    mainImage: "/images/Sample10.png"
  },
  {
    id: 11,
    name: "Floral Summer Dress",
    description: "Male",
    price: 55000,
    mainImage: "/images/Sample11.png"
  },
  {
    id: 12,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample12.png"
  },
  {
    id: 13,
    name: "Classic White Shirt",
    description: "Male",
    price: 45000,
    mainImage: "/images/Sample13.png"
  },
  {
    id: 14,
    name: "Black Denim Jeans",
    description: "Dress",
    price: 65000,
    mainImage: "/images/Sample14.png"
  },
  {
    id: 15,
    name: "Floral Summer Dress",
    description: "Male",
    price: 55000,
    mainImage: "/images/Sample15.png"
  },
  {
    id: 16,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample16.png"
  },
  {
    id: 17,
    name: "Floral Summer Dress",
    description: "Male",
    price: 55000,
    mainImage: "/images/Sample17.png"
  },
  {
    id: 18,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample18.png"
  },
  // Continuing the pattern for remaining products with "Clothing" description
  {
    id: 19,
    name: "Floral Summer Dress",
    description: "Pants",
    price: 55000,
    mainImage: "/images/Sample19.png"
  },
  {
    id: 20,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample20.png"
  },
  {
    id: 21,
    name: "Floral Summer Dress",
    description: "Pants",
    price: 55000,
    mainImage: "/images/Sample21.png"
  },
  {
    id: 22,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample22.png"
  },
  {
    id: 23,
    name: "Floral Summer Dress",
    description: "Male",
    price: 55000,
    mainImage: "/images/Sample23.png"
  },
  {
    id: 24,
    name: "Floral Summer Dress",
    description: "Pants",
    price: 55000,
    mainImage: "/images/Sample24.png"
  },
  {
    id: 25,
    name: "Classic White Shirt",
    description: "Male",
    price: 45000,
    mainImage: "/images/Sample25.png"
  },
  {
    id: 26,
    name: "Black Denim Jeans",
    description: "Top",
    price: 65000,
    mainImage: "/images/Sample26.png"
  },
  {
    id: 27,
    name: "Floral Summer Dress",
    description: "Male",
    price: 55000,
    mainImage: "/images/Sample27.png"
  },
  {
    id: 28,
    name: "Floral Summer Dress",
    description: "Top",
    price: 55000,
    mainImage: "/images/Sample28.png"
  },
  {
    id: 29,
    name: "Floral Summer Dress",
    description: "Dress",
    price: 55000,
    mainImage: "/images/Sample29.png"
  },
  {
    id: 30,
    name: "Floral Summer Dress",
    description: "Women",
    price: 55000,
    mainImage: "/images/Sample30.png"
  },
  // Continuing the pattern for remaining products with "Clothing" description
  {
    id: 31,
    name: "Floral Summer Dress",
    description: "Pants",
    price: 55000,
    mainImage: "/images/Sample31.png"
  },
  {
    id: 32,
    name: "Floral Summer Dress",
    description: "Top",
    price: 55000,
    mainImage: "/images/Sample32.png"
  },
  {
    id: 33,
    name: "Floral Summer Dress",
    description: "Women",
    price: 55000,
    mainImage: "/images/Sample33.png"
  },
  {
    id: 34,
    name: "Floral Summer Dress",
    description: "Top",
    price: 55000,
    mainImage: "/images/Sample34.png"
  },
  {
    id: 35,
    name: "Floral Summer Dress",
    description: "Pants",
    price: 55000,
    mainImage: "/images/Sample35.png"
  },
  {
    id: 36,
    name: "Floral Summer Dress",
    description: "Top",
    price: 55000,
    mainImage: "/images/Sample36.png"
  },
];

export const extendedProductData = ProductData.map(product => ({
  ...product,
  category: determineCategory(product)
}));
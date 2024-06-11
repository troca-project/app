//CREAR PRODUCTS SERVICE y PRODUCT REPOSITORY y DOMAIN DEL REPOSITORY

export const getRecentsProducts = async () => {
  return [
    {
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      description:
        "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      discountPercentage: 10.99,
      id: 15,
      images: [
        "https://cdn.dummyjson.com/product-images/15/1.jpg",
        "https://cdn.dummyjson.com/product-images/15/2.jpg",
        "https://cdn.dummyjson.com/product-images/15/3.jpg",
        "https://cdn.dummyjson.com/product-images/15/4.jpg",
        "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      ],
      price: 30,
      rating: 4.7,
      stock: 105,
      thumbnail: "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      title: "Eau De Perfume Spray",
    },
    {
      brand: "L'Oreal Paris",
      category: "skincare",
      description:
        "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      discountPercentage: 13.31,
      id: 16,
      images: [
        "https://cdn.dummyjson.com/product-images/16/1.png",
        "https://cdn.dummyjson.com/product-images/16/2.webp",
        "https://cdn.dummyjson.com/product-images/16/3.jpg",
        "https://cdn.dummyjson.com/product-images/16/4.jpg",
        "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
      ],
      price: 19,
      rating: 4.83,
      stock: 110,
      thumbnail: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
      title: "Hyaluronic Acid Serum",
    },
    {
      brand: "Hemani Tea",
      category: "skincare",
      description:
        "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      discountPercentage: 4.09,
      id: 17,
      images: [
        "https://cdn.dummyjson.com/product-images/17/1.jpg",
        "https://cdn.dummyjson.com/product-images/17/2.jpg",
        "https://cdn.dummyjson.com/product-images/17/3.jpg",
        "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
      ],
      price: 12,
      rating: 4.52,
      stock: 78,
      thumbnail: "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
      title: "Tree Oil 30ml",
    },
    {
      brand: "Dermive",
      category: "skincare",
      description:
        "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      discountPercentage: 13.1,
      id: 18,
      images: [
        "https://cdn.dummyjson.com/product-images/18/1.jpg",
        "https://cdn.dummyjson.com/product-images/18/2.jpg",
        "https://cdn.dummyjson.com/product-images/18/3.jpg",
        "https://cdn.dummyjson.com/product-images/18/4.jpg",
        "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
      ],
      price: 40,
      rating: 4.56,
      stock: 88,
      thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
      title: "Oil Free Moisturizer 100ml",
    },
    {
      brand: "ROREC White Rice",
      category: "skincare",
      description:
        "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      discountPercentage: 10.68,
      id: 19,
      images: [
        "https://cdn.dummyjson.com/product-images/19/1.jpg",
        "https://cdn.dummyjson.com/product-images/19/2.jpg",
        "https://cdn.dummyjson.com/product-images/19/3.png",
        "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
      ],
      price: 46,
      rating: 4.42,
      stock: 54,
      thumbnail: "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
      title: "Skin Beauty Serum.",
    },
    {
      brand: "Fair & Clear",
      category: "skincare",
      description:
        "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      discountPercentage: 16.99,
      id: 20,
      images: [
        "https://cdn.dummyjson.com/product-images/20/1.jpg",
        "https://cdn.dummyjson.com/product-images/20/2.jpg",
        "https://cdn.dummyjson.com/product-images/20/3.jpg",
        "https://cdn.dummyjson.com/product-images/20/4.jpg",
        "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
      ],
      price: 70,
      rating: 4.06,
      stock: 140,
      thumbnail: "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
      title: "Freckle Treatment Cream- 15gm",
    },
  ];
};

export const getProductsByCategory = async (category_id: number) => {
  //RECUPERAR LOS PRODUCTS IN AREA Y CATEGORIA GENERAL by category_id
  return [
    {
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      description:
        "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      discountPercentage: 10.99,
      id: 15,
      images: [
        "https://cdn.dummyjson.com/product-images/15/1.jpg",
        "https://cdn.dummyjson.com/product-images/15/2.jpg",
        "https://cdn.dummyjson.com/product-images/15/3.jpg",
        "https://cdn.dummyjson.com/product-images/15/4.jpg",
        "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      ],
      price: 30,
      rating: 4.7,
      stock: 105,
      thumbnail: "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      title: "Eau De Perfume Spray",
    },
    {
      brand: "L'Oreal Paris",
      category: "skincare",
      description:
        "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      discountPercentage: 13.31,
      id: 16,
      images: [
        "https://cdn.dummyjson.com/product-images/16/1.png",
        "https://cdn.dummyjson.com/product-images/16/2.webp",
        "https://cdn.dummyjson.com/product-images/16/3.jpg",
        "https://cdn.dummyjson.com/product-images/16/4.jpg",
        "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
      ],
      price: 19,
      rating: 4.83,
      stock: 110,
      thumbnail: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
      title: "Hyaluronic Acid Serum",
    },

  ];
};
